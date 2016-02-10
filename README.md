# DiabetEZY

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

## Technologies

- Testing
- Cordova / iOS / ionic
- D3
- React
- Database
- Server

## Features

- Alerts to remind user when to test blood sugar levels (meal times)
    + input field on alert stores blood sugar levels and time of test
- Render a graph with results
    + Week
    + Month
    + 3 Month
- Email PDF / Render PDF
- Authentication

## Team Roles / Interests

- Admin
    + Captain Agile (Git Master) - Michael
    
- Front End
    + Colin (D3)

- Back End

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

## Things To Clarify

- Compatibility between react and cordova / ionic
- Code Freeze ?
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

- Server
- API sending data to front end
- Tests passing
- Graphs & Rendering

### Sunday

(9AM - 2PM)

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