/*
!MONGODB
>MongoDB is NoSQL database which has a JSON like (BSON data) data storage.MongoDB has a flexible schema, which means that documents with different structures can be stored in the same collection.
>MongoDb structure::
:Hostname:-hostname is Database server address - like localhost or db.xy.com. In mongoDB hostname generally uses mongodb protocol to connect. So URLs are generally are of shape : mongodb://localhost:27017
:Database:- database are topmost storage level of your data - mostly each application has 1 database - however complex application might have more than 1 databases. Database is something like university database
:Collections:-There can be many collections inside a database - collection is a group of documents of similar kind - students, teachers, courses etc
:Document:-document is basic entity of storage in Mongod, it looks very similar to an object in JSON. (However it is BSON)
dbServer->db(school)->collections(student, teacher)->document(students's data and teacher's data) 
*Every document requires an _id field, which acts as a primary key or unique identifier. If an inserted document doesn’t have an _id field, MongoDB automatically generates one.

>relationships in mongodb are:
:one-to-one:- actor:"srk"
:one-to-many:- movies:["ddlj","dunki"] //here it is simple array where each index shows one value.
:many-to-many

>Ways of modeling relationship in mongodb are:
1)Embedding: we take related data and insert it into our document
:Embedded documents are an efficient and clean way to store related data, especially data that’s regularly accessed together.Data that are accessed together should be kept together, it improves query performance such as update and read, avoids application joins,
:can cause large document size(>16mb),can cause unbounded document, can make the performance slow
eg
{
id:"asdasd"
title:" dunki"
cast:[{actor:"SRK",character:"lead"},{actor:"vicky", character:"side"}]
}

2)Referencing: when we refer to documents in another collection in out document
:no duplication of data,smaller document
:disadv:: need to join multiple documents
{
id:"asdasd"
title:" dunki"
locations:[ObjectId("asdasdf"),ObjectId("grwgeq"),] 
}

>MongoDB Atlas is a developer data platform that stores your data in Atlas clusters, a global, multi-cloud database service. 
>Mongo Compass : UI Client to see mongo server (local or remote)
>Mongo Shell : Command-line based mongo client for checking mongo database.

>The MongoDB database is a core element of MongoDB Atlas.The MongoDB database is the foundation of MongoDB Atlas. The additional functionality that Atlas offers—such as full-text search, data visualization, data lake storage, and mobile device sync—are built on top of data stored in cloud-hosted MongoDB database deployments.

>Schema design pattern are guidelines that help developers plan, organise and model data.






>commands::
:show dbs:-This will list all the database in your system
:use <dbname>:-This will command will let you switch to a particular

>Database CRUD commands::
+CREATE COMMANDS
db.< collectionName >.insertOne( newDocument )
db.< collectionName >.insertMany( documentArray )

+READ COMMANDS
db.< collectionName >.find( filterObject ) - to read all docs
db.< collectionName >.findOne( filterObject ) - to read one document
db.< collectionName >.countDocuments( filterObject ) - shows total number of documents.

:filter Object : { fieldName : {operator: value}} fieldName : database fields name operator : $eq = equal , $gt= greater than, $lt : less than, $gte = greater than equal, $and and $or operator value : what value we are comparing with operator.
e.g { age : {$gt:5}}. - age is greater than value 5

:Cursor functions : These are applied to find() query::
sort( {fieldName: 1}) : 1 for ascending -1 for descending
limit( x ) : only gives x documents

+UPDATE COMMANDS
db.< collectionName >.updateOne( filterObject, updateObject, options )
db.< collectionName >.replaceOne( filterObject, updateObject ) Overwrites other fields also which are not in updateObject.
  update Objects = { $set : {field: value}}
  options : {upsert: true}
  Upsert : Update + Insert, when we want a new info to create a new obejcts if no existing object matches filter queries.

+DELETE COMMANDS
db.< collectionName >.deleteOne( filterObject )

>Projection::
:Only return selected fields while returning result documents.
:db.< collectionName >.find( filterObject, projectionObject ) e.g. {name:1, age:1, id:0} - only show name and age and don't show id


*/