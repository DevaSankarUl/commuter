# commutor
Driver's Hiring

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Technology](#technology)
- [Features](#features)
- [Run&nbsp;Backend](#runbackend)
- [Run&nbsp;Client&nbsp;Side](#runclientside)


## Introduction

A  web platform to help people who needs a driver, built using React, Node js, Express js, and MongoDb.

NOTE: Please read the RUN section before opening an issue.
>Warning: Serenity is still in development, constantly being optimized and isn't still stable enough to be used in production environments
## Demo

![This is an image](/driverHiring.png)


commutor is an online platform  for people who are facing to choose a driver . Here they can book for a driver and an addittional feature like car wash slot also can book for a user.instant orderdetails can display imnm this platform like pick drpo and cancel




## Technology

The application is built with:

- React.js
- Redux
- Node.js
- MongoDB
- Express
- Tailwind
- Material UI
- Nodemailer
- Stripe


## Features

- SignUp, and log in With the JWT token
- Admin Page, Block User, approve driver
- Create, Edit, Delete Post
- Live Chat, Integrated with Socket I/O
- Book a trip 
- Payment using stripe 


## Run&nbsp;Backend

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URI : This is the MongoDB Connection Url (string).

- JWT_SECRET : This is the JWT SECRET ID (string).

- BASE_URL: This is the Base URL of Website (string).

- PORT: Specify the port Number

- Also you need to insert admin username and password in database eg:{username:"deva123",password:"admin123"}

After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using npm install

Now you can run npm start in the terminal and the application should work.


## Run&nbsp;Client&nbsp;Side

intsall node modules using npm install

Now you can run npm run dev in the terminal and the Client Side should start working.

## Copyright

Copyright 2023 © [Devasankar U L](https://github.com/DevaSankarUl)

