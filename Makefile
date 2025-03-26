NODE_ENV = development
DOCKER_COMPOSE = docker-compose -f docker-compose.yml

.PHONY: all
all: install run

.PHONY: install
install:
	npm install

.PHONY: run
run:
	npm run dev

.PHONY: test
test:
	npm run test

.PHONY: build
build:
	npm run build

.PHONY: clean
clean:
	rm -rf dist

.PHONY: up
up:
	$(DOCKER_COMPOSE) up -d

.PHONY: down
down:
	$(DOCKER_COMPOSE) down
