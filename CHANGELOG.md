# Change log

This document provides the changes made on the LookBackr app

## Changes made by class 32

- Authentication and Authorization:

  - Add a POST endpoint (url/users) for signup and a POST endpoint (url/login) for login
  - Signup / Login form
  - Improve endpoints on the serverside to be able to keep track which user is in which room/retro

- Delete ...

  - ... cards (add deleteCard endpoint)
  - ... delete rooms. It was already possible to delete a room, however it was not connected to the stream yet.

- Add a few buttons to improve user experience:

  - Logout button
  - Go-back button

- Display users:

  - Show in the Header the person who is logged-in
  - In the lobby, display how many users are in each room

- Others:
  - Fix a bug: you couldn't re-enter a room, which had a card you made before.
  - Improved styling
  - Proper error-messages: if you want to sign up with an excisting user, if password or username is incorrect when you try to login.
