![logo](./src/assets/LookBackr.svg "lookBackr logo")

An app that brings your team's retrospective meetings online!

Check out the remotely-hosted [website](https://shrouded-stream-52535.herokuapp.com)!

## Table of contents

- [Preface](#Preface)
- [How to start](#How-to-start)
- [Technologies used for this project](#Technologies-used-for-this-project)
- [Contributors](#Contributors)

## Preface

Lookbackr is an easy-to-use app that allows development project teams to reflect together on their work once a project is completed. Users can log in, create their own room, and write and share cards about what went well in the project, what didn't, and how things might be improved in the future. Please check the [overview](./overview.md) in this repo for a more detailed introduction to this project and for extra information on the project's goals and architecture.

Changes made by the third group working on this project include sign-up and login screens on the front-end, with authorisation on the back-end; the ability to delete rooms and cards, and to log out; information about which users are in which rooms; and general cosmetic improvements. Please see the [changelog](./CHANGELOG.md) for more information.

Here's a little demo...

![gif](./demo/Lookbackr.gif)

## How to start

1. Clone the git repository into a new directory on your computer: `git clone git@github.com:Official-Codaisseur-Graduate/lookbackr-client.git`
2. Run `npm install` on your terminal to install all the dependendencies
3. Run `npm start` to get a preview of the front-end

## Still to do

- Made the app responsive! Currently it only looks good with a width above ~1000 px. It would be great to be able to use it on screens of all sizes and aspect-ratios.

- Currently, the back-end sends user-ids unencrypted to the front-end. This is a major security issue and must be fixed!!

- There are two (almost) identical files in the Retro components folder: Retro.js and Retro2.js. This is not following the DRY principle and therefore could be improved (merge them it into one file, using props to implement the minor differences between them). Likewise for files RetroContainer.js and RetroNextContainer.js

- Make changes to two buttons that appear when the user is inside a room: "2-Share your cards" and "3-Go to the next phase". Currently, you can click them to move on before any cards have been added, which rather defeats the purpose of the app. To remedy this, you could make them clickable only once the previous phase is completed (i.e. cards added), displaying an error message if the previous phase is not yet complete. Or perhaps have them only appear at all once the previous phase is complete.

- It would be nice if the create-room form automatically disappeared after a room has been created (reappearing again if "create room" is clicked of course).

- **_HAVE FUN!!!_**

## Technologies used for this project

1. React with `create-react-app`
2. `redux` and `react-redux` to set up a redux store and dispatch actions
3. `react-router` and `react-router-dom` to use routes in react and have dom elements that work with them
4. `superagent` to fetch data from the database
5. `redux-thunk` to dispatch actions for the redux store

## Contributors

- Class 27:

  - Marten Bonnema | [Github](https://github.com/Fraxcelsior)
  - Andrew Omajuwa | [Github](https://github.com/AndrewOmajuwa)
  - Brigitte Hennequin | [Github](https://github.com/QuinB6248)
  - Giulia Munari | [Github](https://github.com/Astrid88)

- Class 28:

  - Diana Dias | [Github](https://github.com/dianadiasds)
  - Meryl Geugies | [Github](https://github.com/MerylGeugies)

- Class 32:

  - Lavanya Jayapalan | [Github](https://github.com/lavanyaJay)
  - Alastair Haigh | [Github](https://github.com/ahaigh9877)
  - Cynthia Meiring | [Github](https://github.com/cynthiameiring)
