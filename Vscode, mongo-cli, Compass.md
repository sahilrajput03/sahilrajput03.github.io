

```js
db.help() //This will give you a list of commands as shown in the following screenshot. 

```

***

##  There are several ways to connect to your MongoDB instance 

 https://docs.mongodb.com/guides/server/drivers/ 

***

## Connecting to localdatabase running via **mongodb compass**

use 

```js
for local database running via mongo:
MONGODB_URI=mongodb://localhost/admin
#				   ^^cluster(location), and 'admin' is the name of the database.

for hosted online:
MONGODB_URI=mongodb+srv://admin:pass@cluster0-gmgwu.mongodb.net/note-app?retryWrites=true&w=majority
#				   ^^cluster url, and 'note-app' is the name of the database.
#		For connecting via mongo(shell), mongo "mongodb+srv://m220student:m220password@<YOUR_CLUSTER_URI>" , same like above.
#		The above uri is generated for the SCRAM authentication (default authentication provided by mongodb i.e., with the help of username and password.)

tip: knowing the cluster address(which includes secret username,password [like above]), we can connect to any database(it gets created automatically when you try to connect.)
MONGODB_URI=mongodb+srv://admin:pass@cluster0-gmgwu.mongodb.net/blogs-database?retryWrites=true&w=majority

So, the above ['connection string'] uri would be pointing to the database 'blogs-database' within the same cluster as earlier. But being able to access the cluster he/she will be able to access other dbs on the cluster. For e.g., To switch to database 'test', below command can be used.
'use test'
```

***

MongoDB:

```
COMPONENTS

mongod - The database server.
mongos - Sharding router.
mongo  - The database shell (uses interactive javascript).
  
  ***
  
## LEARN MONGODB - https://university.mongodb.com/

## CLOUD HOSTED MONGODB - https://www.mongodb.com/cloud/atlas

### Github -  https://github.com/mongodb/mongo {usefulresourse: true, lol:false}

## Community Support and talks - https://community.mongodb.com/ 

### DBA: Database Administrator


```

***

## Atlas has a hierarchical structure:

- **Organizations**: The name of the organization will be set using your account *company* name. Feel free to use whatever name you'd like.
- **Projects**: Under *Organizations* you can have several *Projects*. A project is logical group shared by different Atlas users. You can invite friends and colleagues to access a given project. For this course our project will be named **M220**.
- **Clusters**: A cluster is a MongoDB deployment. You can define several different types of clusters (Replica Sets, Shard Clusters) deployed in different Cloud Providers (AWS, Azure, GCP) and with a given Cluster Tier. For this course we will be using an **M0 Free Tier** cluster named **mflix**.

***

## View Whitelist Entries

In the **Security** section of the left navigation, click **Network Access**. The **IP Whitelist** tab displays.

***

### CRUD Operations: Create, Read, Update, and Delete operations 

***

Cluster Name: **mflix**

- username: **m220student**
- password: **m220password**

***

## srv - 

 **Service record** (**SRV record**) is a specification of data in the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) defining the location, i.e., the hostname and port number, of servers for specified services. 

***

## In order to do testing with mongodb you need to install mongodb in npm project:

```bash
npm i mongodb --save-dev #('not for production use')
```

***

While on the nodemon you can restart easily, i.e., when the server has brocken , you may type **rs** and press **Enter** key to restart the server.

And also debugging you can always set marker i.e., tyep something like 

```bash
****hererby brocken already****
and press Enter key to let it print to the console.
```

***

# #mongodb #moongoose

```js
# below method in making moongoose schema is optional, you may comment/remove it. But it helps in making good api, by modelling the api's data to our concerns and needs.
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
```

***

```js
module.exports = mongoose.model('Note', noteSchema)
	//						^^ this name represent the collection name, the related collection would be - notes (as mongodb makes it plural)
    # The first argument is the singular name of the collection your model is for. ** Mongoose automatically looks for the plural, lowercased version of your model name. ** Thus, for the example above, the model Tank is for the tanks collection in the database.
    // https://mongoosejs.com/docs/models.html#compiling << ALL ABOUT THIS NAMING TRANSLATION IS MENTIONED HERE.
```

***

```js
#Populating a document from another collection, inside a document.
const notes = await Note2.find({}).populate("user", { username: 1, name: 1 });
// In statement above Note2.find({}) will find the complete set of documents from the databse (live connected), and with the help of the schema it will format the output on the screen accordingly as schema is modified to do so.

// Next,  .populate('user',{username:1, name:1})
// In the subsequent method i.e., populate will actually populate the property in the documents of the original collection; only if the matching property is 
```

***

# Deleting Mongodb Cluster

You can delete with the cli interface also [Link](https://docs.atlas.mongodb.com/reference/api/clusters-delete-one/).

Click **Terminate** in the cluster options.

***

# Import example data

To import the example data, please use your favorite tool to connect to your MongoDB instance. In my case, I am using VS Code with the Docker extension.

```bash
mongorestore --drop --gzip --db sample_mflix --uri "mongodb://localhost/" mflix/data/data/sample_mflix/
----------------------------------------------
# For reference for future chups, below line in .env file refers to the database to switch during the tests, as the variable is used via, process.env.MFLIX_NS
MFLIX_NS=sample_mflix
```

Above method is caught from [here](https://github.com/TheRobBrennan/mongo-course-M220JS-feb-2019/tree/master/chapter-1). <<<<

***

# Import and Export Data in Compass:

 http://docs.mongodb.com/compass/master/import-export/  to import json or csv files.

***

#### If you are experiencing errors in the testing, 80% chances are the connection issues(although mobile network hotspot works efficiently i.e., 90% of the time). The simple solution to connection issues is to use locally running db in the **MongoDB Compass**. 

#### Next, if you are facing issues it could be one of the following:

1.wrong database name (MFLIX_NS=sample_mflix in case of mongodb university, mflix app)
2.wrong collection name(may be inside coding). Although testing would be much simpler when you are running database locally.

***

## Know about indexes in mongodb:

 https://docs.mongodb.com/manual/indexes/ 

***

## Compress your output database:

```bash
mongodump --gzip --db=test
```

***

# Using monogdump

Everything at once:  https://docs.mongodb.com/manual/reference/program/mongodump/ 

```bash
#export one collection:
mongodump --uri="mongodb+srv://m220student:m220password@mflix-qtv8w.mongodb.net/sample_analytics" --ssl --collection customers -o airbnb_sample_db
//Instead of --collection * -c also works pretty well.

#export one db:
mongodump --uri="mongodb+srv://m220student:m220password@mflix-qtv8w.mongodb.net/sample_airbnb" --ssl -o airbnb_sample_db

#export one db but except 1 collections(customers in this case):
mongodump --uri="mongodb+srv://m220student:m220password@mflix-qtv8w.mongodb.net/sample_analytics" --ssl --excludeCollection customers -o analytics_sample_db

#export one db but except 2 collections(customers and transactions in this case):
mongodump --uri="mongodb+srv://m220student:m220password@mflix-qtv8w.mongodb.net/sample_analytics" --ssl --excludeCollection customers --excludeCollection transactions -o analytics_sample_db

#export all dbs:
mongodump --uri="mongodb+srv://m220student:m220password@mflix-qtv8w.mongodb.net/" --ssl -o alldbs

# output databases would be inside respective folders i.e., airbnb_sample_db and alldbs.
# Better you don't put -o <folder-name>; so all the downloaded db's would be in the dump folder by default.
### Note:
-o <folder> : this is optional, if you don\'t specify it will create folder dump and paste the dbs(which are defined) in it.
# Its better not to specify the output folder, it is actually unnecessary name management for better optional backups for future use.
```

```
IMPORTANT

The following command-line options cannot be used in conjunction with --uri option:

--host
--port
--db
--username
--password (if the URI connection string also includes the password)
--authenticationDatabase
--authenticationMechanism
Instead, specify these options as part of your --uri connection string.
```

***

# Using mongorestore

Everything at once: https://docs.mongodb.com/manual/reference/program/mongorestore/ 

```bash
#Restore whole database:
mongorestore --drop --db desired_database_name --uri "mongodb://localhost/" source_folder_of_a_db

#Restore single collection:
mongorestore --drop --db desired_database_name -c desired_collection_name --uri "mongodb://localhost/" <file.bson>
```

Another less helpful link:  https://medium.com/dev-blogs/backup-and-restore-mongo-databases-e28db642cfd8 

***

 	