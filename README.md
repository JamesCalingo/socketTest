# socketTest
This is mainly just me trying to learn how to create a chatroom with Socket.io, but I just realized that it's also a digital way to play the Game of Things without using a bunch of paper!

# The Game of Things and how it works
The Game of Things is a party game where one player gets a prompt which is usually "Things..." and then something like "...that you shouldn't say when meeting a politician". The other players then write down answers to the prompt anonymously, and then they are given to the one player. Everyone then has to guess who wrote what.

Because chats in the app can be kept anonymous, it's possible to run this game as an app on its own as opposed to just using a messenger app, since most common messaging systems:

* have usernames displayed
* require 1 to 1 messaging to keep things anonymous, which can cause chaos

# How to use this app
This app is currently deployed on Heroku at

https://sockettest-jc.herokuapp.com/

but if you want it locally, you can clone the repo and then run
```
node server.js
```
in Terminal or GitBash. Just be aware that if you do this, you can only run "chats" through the browsers on your machine - you will not be able to communicate between different devices (i.e. a laptop and a smartphone).

# The future for this app
I believe there is a way for there to be a "master" user so that the answers aren't broadcast to all of the players, and also to have the "master" user broadcast the responses to all. Also, in the future, there is a way to "store" messages because currently, messages are lost when the user refreshes/if a user joins the room after messages are sent, they have no way of seeing previous messages.
