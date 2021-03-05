# intercept-request

It is build with ***nodejs*** and ***express***.
Intercept some request with mocked response, otherwise it proxy pass to a fixed endpoint. <br />
It has been developed in order to create a web server that mock response, used during development of frontend applications. <br />
Furthermore, it returns as response the ***session*** header used into request.

## Structure of the project
These are the files that compose the project:
```
.
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── .env.dist
└── src
    ├── response
    |   └── apiEntities.js
    |   └── apiError.js
    |   └── apiSuccess.js
    ├── utils
    |   └── sessionHeader.js
    ├── mockMiddleware.js
    └── index.js
```
## Dependencies

Tested with: ***node*** >= 12

## Environment variables

The project is composed by the following environment variables, stored into .env, and written with .env notation:

- *PROXY_PASS*: It contains the endpoint of the proxy_pass, redirecting to it all the request not intercept. (Example: *https://example.com*)

## Response Template

The project contains three different examples of mocked response, stored into *response* folder.
All of them required, as args,the request and the response provided by an express router.

- *apiSuccess.js*: It is used to return a generic successful response (status code 200). It requires ***data*** as further param in order to generate:
 ```
  {
    success: true,
    result: data
  }
```

- *apiError.js*: It is used to return an error response (status code 400). It requires ***errors*** as further param in order to generate:
 ```
  {
    success: false,
    result: errors
  }
```

- *apiEntities.js*: It is used to return an entity response (status code 200).<br />
    It is used normally when request return a list of entity <br />  
    It requires ***data*** and ***count*** as further param in order to generate:
 ```
  {
    success: true,
    count: count
    entities: data
  }
```

## Usage

In order to use this repository for your own project you have to:
- Fork this repository. 
- Install all the dependencies:

 ```
  npm install
```

- Copy *.env.dist* and rename into *.env*, replacing https://example.com with your custom endpoint.

- Edit the *mockMiddleware.js* files under *src* directory. <br />
  All the endpoint must be written according to [routing syntax of expressjs](https://expressjs.com/en/guide/routing.html). <br />
  Currently it contains an example of how to mock the endpoint ***GET /customEndpoint*** with the response:
 ```
  {
    success: true,
    result: { 
        test: true
    }
  }
```

- Start the webserver locally with:`npm run start`. It provides a hot reloading thanks to ***nodemon***.

