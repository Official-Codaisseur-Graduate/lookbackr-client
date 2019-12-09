# LookBackr project

[Demo Link](./demo/demo.mp4 "Demo Link")

Check out the deployed [website](http://lookbackrr.netlify.com) it deploys automaticly.

## Preface

Please check the overview.md in this repo for an introduction of this project and information on the goals and architecture of the project:
https://github.com/Official-Codaisseur-Graduate/lookbackr-client/blob/development/overview.md

## Table of content

- [How to start](#How-to-start)
- [Technologies used for this project](#Technologies-used-for-this-project)
- [Contributors](#Contributors)

## How to start

To start working on this project you clone this repository, whereafter after you can:

1. Run `npm install` on your terminal to install all the dependendencies
2. Run `npm start` to get a preview of the front end

## Still to do

- Our suggestion for furter improvement would be to change two bottons in the room: 2-Share your cards and 3-Go to the next phase. For example they can only be clicked once the previous phase is completed, give an "error" message if the previous phase is not completed or they only appear when the previous phase is completed.
- There are two (almost identical) files in the Retro components folder: Retro.js and Retro2.js. This is not following the DRY principle and therefore could be improved (merge it into one file)

## Technologies used for this project

1. React with `create-react-app`
2. `redux` and `react-redux` to set up a redux store and dispatch actions
3. `react-router` and `react-router-dom` to use routes in react and have dom elements that work with them
4. `superagent` to fetch data from the database
5. `redux-thunk` to dispatch actions for the redux store

## Contributors

- Class 27:

  - Marten Bonnema [Github](https://github.com/Fraxcelsior)
  - Andrew Omajuwa [Github](https://github.com/AndrewOmajuwa)
  - Brigitte Hennequin [Github](https://github.com/QuinB6248)
  - Giulia Munari [Github](https://github.com/Astrid88)

- Class 28:

  - Diana Dias [Github](https://github.com/dianadiasds)
  - Meryl Geugies [Github](https://github.com/MerylGeugies)

- Class 32:

  - Lavanya Jayapalan [Github](...)
  - Alastair Haigh [Github](...)
  - Cynthia Meiring [Github](...)
