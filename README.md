# Card Game
[//]: # (Commenting this build status thing since it's not really mine but I want to remember how to do it [![Build Status](https://travis-ci.org/theaccordance/card-dealer.svg?branch=master)] (https://travis-ci.org/theaccordance/card-dealer))
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

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
This will eventually be a card game. Right now you can draw a random card but it doesn't really do anything with it.

I'm not supporting Chrome right now because it has an issue loading es6-shim. I recommend you use Firefox.

You could call it an EAN stack ;)

## Feature Requests
Have a suggestion for this npm module?  Submit an issue.

## Todo...vaguely in order
1. Implement draw card service
1. Use a custom deck, not just a standard poker deck
1. Implement sockets.io
1. Implement basic game logic (first game will be war...higher card wins)
1. Implement persistant deck (you draw and now it's not in the deck)
1. Implement discard pile logic and function to reshuffle discard pile into deck
1. Implement optional logic such that all players use one deck or each player uses a seperate deck (even 2 decks of different cards, like a TCG)
1. Maybe some sort of optional modular and extenable turn framework (but I should allow for simultaneous turns too, maybe a custom mode variable)
1. Game rules document
1. Better UI, ideally with Canvas
1. Multiplayer! (V1)
1. Seperate 3 modules: card-game framework (this repo), specific card game rules, swappable cards module for custom decks (you could have the same rules with or without face cards, for example.)
