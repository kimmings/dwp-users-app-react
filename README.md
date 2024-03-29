# DWP 

- [x] Create an API and front end to query `https://bpdts-test-app.herokuapp.com` 
- [x] Display all users living within London.
- [x] Display all users living within a 50 mile radius of Greater London.

## Requirements

This application runs on Heroku and while it is possible to run the application without installing the Heroku CLI it is recommended you do so (https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

## Commands

- install dependencies - `npm install`
- builing and starting local server - `heroku local web`
- running react app standalone - `npm start`
- unit tests - `npm run test`
- cypress testing - ensure you're running the app locally and then run `npm run e2e`


## Remote App Location

https://guarded-sierra-30890.herokuapp.com


## Approach

- Create React App bootstrapping with a basic custom api proxy using express https://create-react-app.dev/docs/getting-started/
- Component styles from React Bootstrap https://react-bootstrap.github.io/
- Testing using Jest/Enzyme/Nock
- I took the centre of London to be 51.5074° N, 0.1278° W and took the average radius of Greater London to be 45 miles, though this is not entirely accurate due to London not being remotely circular. From this, I added a further 50 mile radius.

## Notes 

- There were/are some strange results returned fron the api. Mainly that users positions in long/lat are not necessarily accurate... all the users returned from the `/city` endpoint for `London` do not have lat/long points that are within the London area. This means some unexpected behaviour when filtering users that are withing a 50 mile radius of the Greater London area. It means there all less users in a wider area.


