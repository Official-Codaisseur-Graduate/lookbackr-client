![logo](./src/assets/LookBackr.svg "lookBackr logo")

# Change log

This document details the most recent changes made to the lookBackr app.

## Changes made by class 32

- Authentication and Authorization:

  - Add a POST endpoint (url/users) for signup and a POST endpoint (url/login) for login.
  - Signup / Login form.
  - Improved endpoints on the server-side to be able to keep track of which user is in which room/retro.

- Delete ...

  - ... cards (add deleteCard endpoint).
  - ... delete rooms. It was already possible to delete a room, however this was previous not connected to the stream.

- Added a few buttons to improve user experience:

  - Logout button.
  - Go-back button.

- Display users:

  - Show in the Header the person who is logged-in.
  - In the lobby, display how many users are in each room.

- Others:
  - Fixed a bug: you couldn't re-enter a room which contained a card you made before.
  - Improved styling.
  - Proper error-messages: if you try to sign up again as an existing user; if your password or username are incorrect when you try to log in.
