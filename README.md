M -> MONGODB(database)
E -> EXPRESS(backend)
R -> REACT.JS(front-end)
N -> NODE.JS(backend)

## Front-end(client-side)               ## Back-end(server-side)             ## Database
    >> React App                          >> Express.js + Node.js            >>MongoDB

Backend:

   # npm init -y
   # npm i express
   # npm i dotenv
   # npm i mongoose

## API endpoints

    GET :- /workouts         --> get all the workouts
    POST:- /workouts         --> post a workout 
    GET :- /workouts/:id     --> get a workout by id
    DELETE:- /workouts/:id   --> delete a workout by id
    PATCH:- /workouts/:id    --> edit a workout 

Frontend:

# npx create-react-app frontend
# npm i react-router-dom