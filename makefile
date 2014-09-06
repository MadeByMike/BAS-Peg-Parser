all: install build test

install:
	@echo "Installing dependencies..."
	npm install
	
build: install
	@echo "Generating Parser..."
	pegjs --cache --optimize speed ./src/bas.peg ./lib/parser.js

test:
	@echo "Running test suite..."
	npm test