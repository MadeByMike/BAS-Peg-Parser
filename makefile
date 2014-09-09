NODE_BIN=./node_modules/.bin
PEG=${NODE_BIN}/pegjs
OPTIONS=--cache --optimize speed --extra-options-file ./peg-options
COMPILE=${PEG} ${OPTIONS}

all: install build check

install:
	@echo "Installing dependencies..."
	npm install
	
build: install
	@echo "Generating Parser..."
	@${COMPILE} ./src/bas.peg ./lib/parser.js

check:
	@echo "Running test suite..."
	npm test