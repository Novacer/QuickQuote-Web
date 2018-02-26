# QuickQuote-Web

QuickQuote but now as a MEAN web app! Website Link: https://qquote.herokuapp.com/

* [Basic Overview](https://github.com/Novacer/QuickQuote-Web/blob/master/README.md#basic-overview)
* [Technical Overview](https://github.com/Novacer/QuickQuote-Web/blob/master/README.md#technical-overview)
* [REST API Documentation](https://github.com/Novacer/QuickQuote-Web/blob/master/README.md#rest-api)

## Technologies used in this project:
* NodeJS
  * Express.js
  * Mongoose
  * CORS
  * JSON Web Tokens
  * Body Parser
  * Passport.js
  * Passport JWT Login Strategy
  * Bcrypt.js
* Angular
  * Angular CLI
* MongoDB
* Bootstrap
* REST API

## Summary

QuickQuote was developed with the intention of guiding insurance brokers in finding the best deals for their clients who are looking for home insurance. To find the cheapest price, insurance brokers often have to compare the quotes of many insurance policies. This can be a very time consuming process as there are many pages of forms that brokers have to fill out in order to get all those prices.

QuickQuote solves this issue by condensing all of those pages into a single form that takes less than two minutes to complete. Only the most relevant information is used to generate a comparison quote between BC's four most popular insurance companies: Family, Gore Mutual, Intact, and Wawanesa. Critical information is instantly displayed to the insurance broker, like which insurance company is the most suitable for the client, the discounts for which the client qualifies for, and if the client matches the insurance company's target market.

Go try it out!



## Basic Overview

### Step 1
To use this website you will need to create an account. Navigate to the registration page on the navbar. Fill out the registration form. You will need to remember your user name and password to login in the future.

### Step 2
After login you will be directed to your profile page, where you can view your account, saved quotes and clients. If it's your first time you won't have any quotes or clients, so click on the "*Get A Quote*" option on the navbar to be directed to the quote page. Fill out the form as you would with any other insurance company's portal. You can leave some comments if you like. Click "*Quote it!*" when you are done. 

### Step 3
Once you've successfully completed the quote form you will be redirected to a special page where you can view the results of your quote. You can click on the links under each company to be redirected to the company's portal. If you want to save this quote to your dashboard, click on "*Save Quote*". If you want to get another quote, click on "*Get Another Quote*".

### Step 4
When you have quotes saved to your account, you can always review them by going to your dashboard. Here you can see a list of all your past quotes and you can delete them once you're done. Your dashboard also gives you some crucial information, like how many quotes you have, the number of clients you have, and a list of all the client's names. 



## Technical Overview

### Bcyrpt.js and the JWT login strategy
For the registration and authentication I am using bcyrpt.js to encrypt the user's password before saving it to MongoDB. Login is comprised of sending a body containing the username and password, and I am using bcrypt's provided function `bcrypt.compare(plaintext, hash, callback)` to check if the user's inputted password matches the encyrpted password stored on MongoDB. If true, return a JSON Web Token that is valid for one hour. This token is saved in localStorage and is used to check if the user has valid authentification everytime they access a protected route. A boolean function that checks if the user is logged in using the token also dynamically updates the navbar so that different options are displayed once users are logged in. When the user logouts, the token is deleted from the localStorage.

### REST API
For this project I have made my own REST API to communicate with MongoDB for user registration, login, saving and deleting quotes.
Here is the documentation for the API.


### POST - "/register"
Register user in MongoDB. Encrypt password before saving in the database.

--------
```JSON
parameters: {
  "email": "string",
  "name": "string",
  "username": "string",
  "password": "string"
}

response: {
  "success": "boolean",
  "msg": "string"
}
```

### POST - "/check"
Check if username already exists in the database.

--------
```JSON
parameters: {
  "username": "string",
}

response: {
  "success": "boolean",
  "msg": "string"
}
```

### GET - "/profile"
Returns the user profile after validating that the user is logged in.
(Requires "Authorization", "Bearer *token*" pair in header)

--------
```JSON
response: {
  "user": Object
}
```

### POST - "/quote"
Changes the user with username's list of quotes by overwriting it with the list of quotes provided in the body.
(Requires "Authorization", "Bearer *token*" pair in header)

--------
```JSON
parameters: {
  "username": "string",
  "quotes": "Array"
}

response: {
  "success": "boolean",
  "user": "Object"
}
```

### POST - "/authenticate"
Checks to see if user credentials exists in the database. Return the user and a token if true, else a message if false.

--------
```JSON
parameters: {
  "username": "string",
  "password": "string"
}

response: {
  "success": "boolean",
  "token": "string",
  "user": "Object",
  "msg": "string"
}
```
