# COBI App

An Angular app to run as a COBI module (Bosch eBike motors) sending data to Bucket.

Available on GitHub Pages: [https://datacentricdesign.github.io/cobi-app](https://datacentricdesign.github.io/cobi-app)

Requirements: NodeJS

## Get Started

Fork and clone this repository on your machine, and open the folder in an IDE such as VS Code. In the IDE, open a Terminal Window and type in:

```sh
npm install
npm start
```

Go to [http://localhost:4200/cobi-app](http://localhost:4200/cobi-app) to see the app in action.

## What's in it?

This repo contains an Angular skeleton for a Bucket Web application.

- Top structure: generic app component / routes / module / service (include service for the settings and token for the oauth2 'code' flow)

- **landing-page component**: Public part of the web app (including landing page with login button)
- **myapp module**: Private part of the web app (including Dashboard as a logged-in home page)
    - Bucket service to access Bucket resources
- **shared module**: the auth guard to ensure private pages remain private, and some UI components provided with the template

- Theme by Creative Tim: Paper Dashboard Angular - v2.1.0 ([https://www.creative-tim.com/product/paper-dashboard-angular](Theme Page))

## Updates!

Last tested with cobi,js v0.59.0

1. Better (?) UI
   1. Created a grid to make the ui more friendly - DONE
   2. Visual Indication for the button press - DONE
2. More paramenters
   1. Bike Bell - 
      * ~~Working on the similator, not tested on the bike~~
      * ~~Not able to push data to bucket~~
      * cancelled as the current bike donesn't support logging this data
   2. GPS Telemetry -
      * Working on the similator, not tested on the bike
      * ~~Not able to push data to bucket~~
      * working
   3. Ambient Light State -
      * ~~Not Sure what the system returns~~
      * Commented out for now
3. Emotional state
   1. A emoji style grid to evalute liking/disliking(x axis) and intensity(y axis)
      * Preliminary Stages  



## Requesting your client app

Once you have played around and taken your mark, you must request a client app by email at lab@datacentricdesign.org. (You will not be able to deploy your app with the example client). Your request should include the following information:

- App Name
- App description
- App URI
- App logo URI
- Owner name (or person or organisation) and email address
- Link to Privacy Policy
- Link to Terms of Services

We will send back to you a setting to update src/config.json. You might also search and replace 'myapp' with a more fitting name for your web application.

## Deployment

### GitHub Pages

```sh
npm run build:gh
npm run ngh
```

### Nginx / Docker

- Install Docker and Docker compose on your server
- Clone your app repository on your server
- Create a .env file in the root folder (on the server) and adapt the example.env file to your need

Once your setting is ready, run the docker-compose command:

```
docker-compose up
```

Note that this setting does not include any SSL support. We expect you to deploy this service behind a reverse proxy dealing with SSL (among other things) for all your server applications.
