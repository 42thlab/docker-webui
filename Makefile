.PHONY: all re fclean clean build migrations update shell up detach

compose := docker-compose

all: detach

re: clean build migrations all

fclean:
	$(compose) run api sequelize db:migrate:undo:all

clean:
	$(compose) kill
	$(compose) rm --force

build:
	$(compose) build

migrations:
	$(compose) run api sequelize db:migrate

update:
	$(compose) pull

shell: migrations build
	$(compose) run --service-ports web /bin/bash

up: migrations
	$(compose) up

detach:
	$(compose) up -d api
