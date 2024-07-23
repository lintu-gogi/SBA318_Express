#Objectives
*Create a server application with Node and Express.
*Create a RESTful API using Express.
*Create Express middleware.
*Use Express middleware.
*Use a template engine to render views with Express.
*Interact with a self-made API through HTML forms.
#Technologies Used
*Node .js
*Express
*Restful API
*Pug for Views
#Project Description
    Created a To Do List for multiple users.
    ## Features
    This application first display all the Todo List.
    New Todos can be added to the list through the client manipulation.
    Client interaction is possible through the use of views and templates.
    If the item is already existing in the list it cannot be added again.
    An empty list also cannot be added.
    Routes are created for manipulating user data in ./data/users.js file.
    GET all the users can done by http://localhost:3001/users 
    GET the user by id can done by http://localhost:3001/users/:id
    GET the user by Name can done by http://localhost:3001/users/Name/?name=Anu. This search is done by using query params.
    DELETE the user by id can be done by http://localhost:3001/users/de/:id
    UPDATE the user by id can be done by http://localhost:3001/users/pa/:id
    ##Technical Details
    Used Express and Node .js to create REST API's.
    Used the template engine Pug for view and client interaction.
    
