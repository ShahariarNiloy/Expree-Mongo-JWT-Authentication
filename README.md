# Express-Mongo-JWT-Authentication ( Smoothie App )

This is a learning project followed along from [The Net Ninja's](https://www.youtube.com/c/TheNetNinja) Youtube Playlist [Node.js Auth Tutorial (JWT)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp)

## Installation

### Requirements

> Install Nodejs on your local machine,

```bash
node version >=14.x.x
```

To start this project, first clone this repository then run this command on your terminal, make sure your terminal is in the same project directory,

```bash
npm install
```

This command will install all the necessary packages, that are required to run this project.

## Configuration

As this project use Mongodb, that is why you need to do some mongodb configuration on your local machine.

> 1.  Go to your browser and browse Mongodb Atlas Dashboard, and go to the first link saying, "MongoDB Dashboard".

> 2.  Sign Up fro Atlas.

> 3.  Login to your account.

> 4.  "Build a Cluster" and then "Create new Cluster" better go for the free plan. Setup your cluster by giving proper information of yours.

> 5.  Under your created cluster, go to the "collection" tab, and create your database by clicking "Add My Own Data".

> 6.  Create your database by giving database name and collection name.

> 7.  Now you have to give your database access to an user. So that on sidebar of the page , select "Database Access" and then create an user.

> 8.  Now go back to your "Clusters" section and under your cluster click in the "connect" button to get your connection string.

> 9.  Choose "Connect your application" and copy the code example string from there.

Then go to the " app.js " file, which you'll find in the project directory. Then replace,

```node
const dbURI = <your_db_connection_string>
```

Make Sure you are giving proper connection_string, where you have to give your user name and password in the connection_string of the user you just created, who can access the database.

## Run The Project

After all that, all you need just open the terminal and start the project. But it's better running the app all the time while you're developing. For that install package, named "nodemon"

```bash
npm i -g nodemon
```

This command will install nodemon globally.

Then start the app by following command

```bash
nodemon app
```

### Thank You

---
