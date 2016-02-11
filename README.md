# DiabetEZY (Client)

An app that makes it easier for users who have diabetes to not only remember to test their blood sugar levels but also record them in a format which can easily be emailed to their doctor.

## Git Repos

Client: https://github.com/Weka2015-Projects/Diabetezy-client.git

Server: https://github.com/Weka2015-Projects/Diabetezy-server.git

## Waffle Boards

Client: https://waffle.io/Weka2015-Projects/Diabetezy-client

Server: https://waffle.io/Weka2015-Projects/Diabetezy-server

## Architecture

- Two Repos, one for server one for client
- Database
- Web App
- Mobile Cordova App

## Technologies

- Testing (Mocha / Chai)
- Cordova
- D3
- React
- Database (Firebase)
- Server
- Authentication (Passport)

## Features

- Alerts to remind user when to test blood sugar levels (meal times)
    + input field on alert stores blood sugar levels and time of test
- Render a graph with results
    + Week
    + Month
    + 3 Month
- Email PDF / Render PDF
- Authentication

## Stretches

## Team Roles / Interests

- Admin
    + Captain Agile (Git Master) - Michael
    + Project details / docs - Tania
    
- Front End
    + Colin (D3)
    + Everyone

- Back End
    + Everyone

## Database Schema

### Test

```
user_id:
day:
time:
blood_sugar_level:
```

### User

```
username:
email:
password:
date_of_birth:
NHI:
user_id:
```

## Deadlines

- Feature Freeze - Tuesday
- Code Freeze - Wednesday
- Presentation Prep - Thursday
- Presentations - Friday

## Things To Clarify

- Compatibility between react and cordova / ionic
- Measurement System
- Deployment ?
- App Store

## E.O.D

### Friday

- Waffle
- Infrastructure
- Wireframes
- Understanding of cordova / ionic to proceed with this
- Schema / Database set up

### Saturday
(9AM - 10PM)

- Server
- API sending data to front end
- Tests passing
- Graphs & Rendering

### Sunday

(7AM - however long you can stay)

- Tests passing
- Authentication - firebase
- Alerts
    + Setting times
    + Linking input fields to DB (Graph)
    + Cordova

### Monday

- Cordova
- Tests
- Alerts

### Tuesday

TBD