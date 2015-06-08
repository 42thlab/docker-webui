.PHONY: all re fclean clean build migrations update shell up detach

compose := docker-compose

all: detach

re: clean build migrations all

fclean: build
	$(compose) run api sequelize db:migrate:undo:all

clean:
	$(compose) kill
	$(compose) rm --force

build:
	$(compose) build

migrations: build
	$(compose) run api sequelize db:migrate

update: build
	$(compose) pull

shell: migrations
	$(compose) run --service-ports web /bin/bash

up: migrations
	$(compose) up

detach:
	$(compose) up -d api
