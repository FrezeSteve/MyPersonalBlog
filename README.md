# My Personal Blog
Personal Blog made with both React and Flask

***requirements***
* Python 3.*
* Node 
* postgresql db (optional)
## SETUP

1. Git clone the project
2. In the react folder in the terminal run `npm install` to install the 
node modules
3. Run `npm start` to serve your react app on a local server
4. In the flask folder in the terminal run `pip3 install -r requirements.txt` to install python
 modules
 5. Change the necessary configurations in the .env file
 6. Run `flask db init` and also
 `flask db migrate -m "Initial migration."` to migrate models into
 db
 7. Run `flask run --host 0.0.0.0` to start the flask server
 8. Copy the url on the terminal for the react app and paste on the 
 browser
## FLASK
#### Introduction
According to flask [docs](https://www.palletsprojects.com/p/flask/):
Flask is a lightweight WSGI web application framework. Its easy to use
and also learn.

I will be using both
flask and [Flask-RESTful](https://flask-restful.readthedocs.io/en/latest/) in this project.
There are so many advantages of using both. Just google around and
am sure you will find pleanty of articles to explain.
#### About
The modules I have incorporated into the flask application include:
* Authentication system-***with encryption***
* Article/Post application-*main application*

Cloudinary serves my images.It was easy to setup and use it with my
flask application.
## React
#### Introduction
***Facebook*** has good documentation on how to start using [react](https://reactjs.org/https://reactjs.org/).
This react app was built from scratch using [parcel](https://parceljs.org/).

#### About
I used both [reactstrap](https://reactstrap.github.io/) and [bootstrap4](https://getbootstrap.com/) to style the components.
I also incorporated [redux](https://redux.js.org/) as my:
> Predictable State Container

Play with the code and have fun.


