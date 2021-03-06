![logo](./src/assets/LookBackr.svg "lookBackr logo")

# Preface

This readme contains a global overview of the lookBackr project, describing the goals of the project and relations between the front- and back-ends.

The repo (and readme) for the front-end can be found [here](https://github.com/Official-Codaisseur-Graduate/lookbackr-client).

The repo (and readme) for the back-end can be found [here](https://github.com/Official-Codaisseur-Graduate/lookbackr-server).

The deployed app (running client) can be found [here](https://shrouded-stream-52535.herokuapp.com).

## Table of contents

- [Goals for this project](#Goals-for-this-project)
- [Technologies used](#Technologies-used)
- [Architecture](#Architecture)
- [Our git workflow](#Our-git-workflow)

# Goals for this project

The main goal of this project is to facilitate Codaisseur students in organizing so-called "retrospective meetings". These meetings are held after finishing a group project and they mirror an industry standard. It's a way for a group to reflect on their project and working practices with a view to keep doing what works well and make changes where necessary.

In the first round, students write down whatever made them 'mad', 'sad', or 'glad'. In the "analogue" version of this exercise, they do this generally by writing on post-its. A student can write as many of these as they want, as there might be several things that made them mad, sad or glad. Importantly, they write them down in private. Afterwards, once everyone is done writing, all of the post-its are revealed. The students then talk over each of them, so everyone gets the change to write and express freely.

The second round follows the same format. Whilst the first round was about individual feelings and experiences, the second round is more focused on the process, and the future. Students write down what, for their next project, they will 'stop', 'start', and 'keep' doing.

This app automates these retrospective meetings and makes them digital! Students can create a user, log in, then create a room for their team, or join an existing one. Each room facilitates the meeting for a single group. Inside the room all users can use a form to add a card. They initially see only their own cards before sharing them. Then, after all users have shared, everyone's cards will be visible and the group can discuss them face-to-face. When users press 'next', the second round (start, stop, keep) begins in the same manner.

In order to achieve this, the new streaming technology from EventSource was used. Similar to a chat app using web sockets, the stream provides all users with up-to-date data sent as server-side events.

# Technologies used

(For further details, please refer to the front- and back-end documentation)

The front-end was built using the following technologies:

- React
- Redux
- Redux-Thunk
- React-Router-DOM
- Superagent for API requests

The back-end used:

- SSE EventSource for streaming
- Postgress database
- CORS, for allowing communication between front- and back-ends
- Body-parser, for parsing JSON format
- Express, for route handling
- Sequelize, as ORM
- Json-sse, for setting up streaming endpoints to use with EventSource in the front-end

# Architecture

This app uses a basic React-Redux front-end with a Postgress/Express/Sequelize back-end complemented by streaming technology.
For detailed explanations on the schema and endpoints, please refer to the back-end readme.

The front-end's basic file-structure is:

```
/src
   /actions
   /components
   /reducers
   App.js
   Store.js
   constants.js
```

\*Please note:
The terms 'room' and 'retro' are used interchangeably. These represent the instances where a group can hold a retrospective meeting. The RetroContainer component is used for the 'mad, sad, glad' part of the meeting. RetroNextContainer is used for 'start, stop, keep'.

The architecture of the app largely revolves around the use of streaming through the new EventSource class (a very recent JavaScript addition). When you make a new instance of EventSource, you have to specify a URL. This instance will 'listen' for server side events on the specified URL. In this app, the instance is defined in App.js as 'source', and it takes the baseurl/stream as argument. The baseUrl is defined in constants.js, where you can easily comment in a link to your back-end, or a local url (:5000).

The EventSource has an 'onmessage' property. Here it is assigned the action creator 'fetchLobby'. So when a server-side event is received, it will call this action.
As for the action, it takes the payload and dispatches it to the 'lobby.js' reducer. It receives, from the stream in the back-end, ALL of the data in the database (more on this later, in the back-end explanation of the stream). It receives this data in JSON format. It is de-serialized before being dispatched, so the data can be easily used with array methods.

Then, in lobby.js, the state is defined by the entire payload (totalData). The data will be an array of objects (which in turn represent rooms/retrospectives). The room objects contain, through relational mapping, an array of users and cards. Both cards and users are an array of objects. The following example shows the structure:

```
[
    {
        id:1,
        name: 'room1',
        description: 'text',
        done: false,
        users: [
                {id: 1, username:'string', done: false, retroId: 1},
                {id: 3, username:'string', done: false, retroId: 1},
                {etc.}
            ],
        cards: [
                {id:1, type: 'glad', text:'I am glad about...', retroId: 1, userId: 1},
                {id:4, type: 'mad', text:'I am mad about...', retroId: 1, userId: 3},
                {etc.}
            ]
    },
    {
        id:2,
        name: 'room2',
        description: 'text',
        done: false,
        users: [
                {id: 2, username:'string', done: false, retroId: 2},
                {id: 4, username:'string', done: false, retroId: 2},
                {etc.}
            ],
        cards: [
                {id:2, type: 'glad', text:'I am glad about...', retroId: 2, userId: 4},
                {id:3, type: 'sad', text:'I am sad about...', retroId: 2, userId: 2},
                {etc.}
            ]
    },
    {etc}

]
```

The back-end contains the logic of the stream. The app currently sends ALL data of the database into the stream. The main stream endpoint finds all rooms and includes users and cards and then 'injects' them into the stream. It uses the json-sse module to make this manageable.

The basic flow uses the Sse class. Since only one stream is used for everything, the server contains one instance of Sse, called 'stream', and it's defined in 'index.js'. The different router endpoints that utilize or update the stream begin with a query. Somewhere down the line, after updating etc., the total data will be queried. That result is converted to JSON format. The updateInit method of the Sse class is called to update the init property of 'stream'. In the Sse class, the init property contains the clients and the data to stream. This also means that every time the GET stream is called (for instance when a user joins, etc.) the clients will receive the most recent data, since the init is always updated.

Apart from sending information to the stream after a PUT or POST request, the server also sends back the created or updated entity.

**For example:**
When a user enters a room (with id 22), a put request is made to '/enter-room/22'. The request contains the user's id as an argument. It finds the user by Pk, updates it's retroId to the room id (specified in the params). Then it updates the init and adds all information to the stream. Afterwards, the server sends the updated entity back to the client, like:

```
{
   id:12, username:'Henk', done:'false', retroId: 22
}
```

ALL endpoints, except for creating a user, use streaming endpoints. Since there is only one instance of Sse that contains everything (stream), there's a problem when trying to import several routers. In making a stream in each router, each stream would be a separate instance of the Sse class. In order to avoid this, routers are defined in factory functions. These are then imported in index.js, where they 'create' a new router to use with the single stream.

## Dataflow

The client starts an app. The Redux state has 'user' set as undefined. So the user will be prompted to create a user. This call an action creator that makes a standard POST request: a user is created on the back-end and sent back as an object in the response.body:

```
{
    id:12, username:'Henk', done:'false', retroId: null
}
```

Then, upon entering the lobby, the fetchLobby action fetches the stream, and sends an array of data as specified above. The current user is NOT visible yet, since they have not entered a room. It's only visible in the Redux state, as of now.
A user can add a room, which would be a POST request to the stream. The stream would be updated afterwards. The newly created room is immediately displayed.
If a user would enter a room, the updateUser action is called, as described above, and return a newly updated user:

```
{
    id:12, username:'Henk', done:'false', retroId: 22
}
```

Here, a user can add a card. This calls the 'addCardInState' action. It supplies the Id of the current room AND the current user and sends a POST request with form data. Type === 'glad', 'sad', or 'mad' for the first round. The 'text' property contains the typed text'.
In the back-end, it creates a card with the type and text specified. It's retroId will be taken from params, its userId is also taken from the request body. The stream.init is updated and sent. The single card is sent back as response.body, ready to be used in the Redux state.

When a user presses submit, another PUT request is made, similar to entering a room. This also needs a room id and user id. The server takes these to find the user and room. It then updates the user's 'done' property to true. It then checks if everyone is 'done: true'. If so, the room's (by id) 'done' property is also updated to true. It then sends ALL data, yet again, in the stream by updating init. If room.done is true, all of the cards from that round will become visible (the render method changes base on room.done).

# Our git workflow

Both the front- and back-ends use the same workflow. The default branch is a development branch. Each collaborator works on a different feature, branching off from development. These are named following the `feat/branch-name` convention.

After a feature is done, it's merged into development. Whenever the development branch is working correctly and needs to be deployed, it's merged into master. The master branch is then pulled and pushed to Heroku.
