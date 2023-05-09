# Irish Red Ales
## Brews and Reviews

![image][def]

## Introduction

### Irish red Ales, an app that allows users to add, search and review local breweries

## Live Link
### [Irish Red Ales](https://irshredales.onrender.com/)

## API
### [Irish Red Ales](https://irshredales.onrender.com/api)

## Repo

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lvcky-gg/IrishRedAles)

## Wiki

[Wiki](https://github.com/Lvcky-gg/IrishRedAles/wiki).

## About

### Feature 1: Breweries
  * "/" will show breweries in your area if present or most popular upto ten
  * "/breweries" will show you all breweries or breweries in searched for location
  * "/breweries/:breweryId" will show you a specific Brewery. You can delete a brewery here if it is yours.
  * "/create-brewery" allows you to create a brewery
  * "/breweries/:breweryId/edit-brewery" allows editting of brewery

### Feature 2: Reviews
  * "/breweries/:breweryId" will show the reviews for each brewery. Here you can delete your reviews
  * "/breweries/:breweryId/reviews/:reviewId/edit" Allows for the editing of a review
  * "/breweries/:breweryId/reviews" Allows for the creation of a review

### Feature 3: Photos
  * "/breweries/:breweryId" will show all photos attatched to the brewery. you can add and delete photos here

### Feature 4: Maps
  * "/breweries" will show a map of all breweries or breweries searched for by location
  * "/breweries/:breweryId" will show a map of specific brewery

### Feature 5: BreweryLikes
  * "/breweries/:breweryId" Allows posting, viewing and deleting likes for a brewery

### Feature 6: ReviewLikes
  * "/breweries/:breweryId" Allows posting, viewing and deleting likes for each review

### Feature 7: Search and Geolocation
  * All pages will show a search bar that takes in a search for city/state
  * either can be used for search
  * state will autocorrect if mispelled
  * city is case insensitive
  * the home page will prompt a geolocation. This allows the initial state to be set in your location
### Feature 8: Brews
  * "/breweries/:breweryId" Allows full crud of this feature if you are the owner of the brewery
### Additional Routes: Redirect
  * If there are no items matching a search, "/breweries" will render a redirect home with a button to go to "/create-brewery"
  * If an unauthenticated user tries to do something, they will go to "/redirect-login" with options for login or signup

## Technologies Used

### Frontend
- AWS S3
- fontAwesome
- react-google-maps
- redux toolkit
- axios
- draftJs
- js-cookie
- react
- redux
- react-geocode
- geocode API
- lvcky-correct-state-spelling

### Backend
- AWS sdk
- bcrypt
- cookie-parser
- cors
- csrf
- dotenv
- express
- helmet
- jsonwebtoken
- morgan
- multer
- per-env
- pg
- s3fs
- sequelize

#### Note
- lvcky-correct-state-spelling is my own NPM package
- filter state is the function used from it to check state spelling

## Local Deployment
### ENV Example Backend
- PORT=8000
- DB_FILE=db/dev.db
- JWT_SECRET=<yourSecret>
- JWT_EXPIRES_IN=604800
- SCHEMA=schema_name
- NODE_ENV=development
- AWS_ACCESS_KEY_ID=<yourKey>
- AWS_SECRET_ACCESS_KEY=<yourKey>
### ENV Example Frontend
- NODE_ENV = 'development'
- REACT_APP_BASE_URL=http://localhost:5000
- REACT_APP_MAPS_KEY=<yourKey>
### Local deployment commands
- Have two terminals
- backend startup either:
  * cd backend
  * npm run lvcky or:
  * npm install
  * npx dotenv sequelize db:migrate
  * npx dotenv sequelize db:seed:all
  * npm start
- frontend 
  * cd frontend
  * npm install
  * npm start
## Render Deployment
### ENV example
- AWS_ACCESS_KEY_ID=<yourKey>
- AWS_SECRET_ACCESS_KEY=<yourKey>
- DATABASE_URL=<yourInstance>
- JWT_EXPIRES_IN=604800
- JWT_SECRET=<yourSecret>
- NODE_ENV=production
- REACT_APP_MAPS_KEY=<yourKey>
- SCHEMA=<schemaName>
### build Command
* npm cache clean --force && npm install && npm run render-postbuild && npm run build && npm run sequelize --prefix backend db:migrate && npm run sequelize --prefix backend db:seed:all
### Run Command
* npm start








[def]: ./irishRedAle.png