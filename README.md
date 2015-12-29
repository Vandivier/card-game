# Card Game
[![Build Status](https://travis-ci.org/theaccordance/card-dealer.svg?branch=master)] (https://travis-ci.org/theaccordance/card-dealer) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

It's a card game based on a standard 52 card deck, but it's not poker.

## Installation
Install for node.js using npm:

``` bash
$ npm install
```

Serve the app:

``` bash
$ npm start
```

Then visit http://localhost:3000/

## Documentation
This will eventually be a card game. Right now it is pretty much an ng hello world with express on the back end and no db.

I'm not supporting Chrome right now because it has an issue loading es6-shim. I recommend you use Firefox.

You could call it an EAN stack ;)

## Feature Requests
Have a suggestion for this npm module?  Submit an issue.

## Todo
1. Implement draw card service
1. Implement basic game logic
1. Game rules document
1. Better UI, ideally with Canvas
1. Multiplayer! (V1)
1. Seperate 3 modules: card-game framework (this repo), specific card game rules, swappable cards module for custom decks (you could have the same rules with or without face cards, for example.)