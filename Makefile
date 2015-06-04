.PHONY: all re clean build migrations shell up detach

compose := docker-compose

all: detach

re: clean build migrations all

clean:
	$(compose) kill
	$(compose) rm --force

build:
	$(compose) build

migrations: build
	$(compose) run api sequelize db:migrate

shell: migrations
	$(compose) run --service-ports web /bin/bash

up: migrations
	$(compose) up

detach:
	$(compose) up -d api
