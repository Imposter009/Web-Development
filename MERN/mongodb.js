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
>Mongo Compass : UI Client to see mongo server (local or remote).MongoDB Compass is a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment. it allows us to query data,compose aggregation pipeline and analyse data.
>Mongo Shell : Command-line based mongo client for checking mongo database.Mongodb shell uses node repell enviroment
>A database cluster is a collection of databases that is managed by a single instance of a running database server
*MongoDB Atlas and MongoDB Compass are two tools provided by MongoDB. MongoDB Atlas is a cloud-based, managed database service. It simplifies database hosting and maintenance. MongoDB Compass is a graphical tool for managing MongoDB databases, enabling easy data exploration and querying.

>The MongoDB database is a core element of MongoDB Atlas.The MongoDB database is the foundation of MongoDB Atlas. The additional functionality that Atlas offers—such as full-text search, data visualization, data lake storage, and mobile device sync—are built on top of data stored in cloud-hosted MongoDB database deployments.

>Schema design pattern are guidelines that help developers plan, organise and model data.

>MONGODB CONNECTION STRINGS:"mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@cluster0.example.mongodb.net/?retryWrites=true&w=majority"egample:: "mongodb+srv://MDBUser:university01@@mdb-training-cluster.swnn5.mongodb.net?retryWrites=true&w=majority"
:mongodb+srv://
is the required prefix that identifies this as a standard connection string
:MDBUser:university01@
are the credentials that the client attempts to authenticate with. If no credientials are given, MongoDB will attempt to authenticate with the admin user
:@mdb-training-cluster.swnn5.mongodb.net
is where our database instance is running. You can specify a host name, IP address, or UNIX domain socket. MongoDB's default port number is 27017
:?retryWrites=true&w=majority 
is where we can specify connection options. Each option is separated by a ?, followed by the <name>=<value> pair option. Options are optional, thus the name.

> you can connect to Atlas by using:
:The MongoDB Shell
:MongoDB Compass
:Applications

>commands::
:show dbs:-This will list all the database in your system
:use <dbname>:-This will command will let you switch to a particular

?>Database CRUD commands::
+CREATE COMMANDS
db.< collectionName >.insertOne( newDocument )
db.< collectionName >.insertMany( documentArray )

+READ COMMANDS
db.< collectionName >.find( filterObject , projection) - to read all docs
db.< collectionName >.findOne( filterObject, projection ) - to read one document
db.< collectionName >.countDocuments( filterObject  ) - shows total number of documents.

 :filter Object : { fieldName : {operator: value}}; fieldName : database fields name, operator : $eq = equal , $gt= greater than, $lt = less than, $gte = greater than equal,$in:[value1, value2] = will give all the data that matches with any of the values  $and and $or operator, value : what value we are comparing with operator.
 e.g { age : {$gt:5}}. - age is greater than value 5
 e.g { city : {$in:[lko,delhi]}}.- will give all the documents in which city matches with either lko or delhi 
 :When given equality with an _id field, the find() command will return the specified document that matches the _id. Here's an example:
 db.zips.find({ _id: ObjectId("5c8eccc1caa187d17ca6ed16") })
 :Use the $elemMatch operator to find all documents that contain the specified subdocument.use to find a subdocument that matches specific criteria in an array. eg
   { items: { $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } }})
 :logical and/or:
 db.routes.find({
   $and: [
     { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
     { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
   ]
 })
 >Cursor functions : These are applied to find() query::
 :cursor.sort({fieldName: 1}) to return query results in a specified order. Use 1 for ascending order, and -1 for descending order.
 :cursor.limit() to return query results in a specified order. 

 >Projection::
 :Only return selected fields while returning result documents.
 :db.< collectionName >.find( filterObject, projectionObject ) e.g. {name:1, age:1, id:0} - only show name and age and don't show id. We can either include or exclude fields in the results, but not both. However, the _id field is the exception to this rule

 >db.collection.countDocuments() to count the number of documents that match a query. countDocuments() takes two parameters: a query document and an options document.

+UPDATE COMMANDS
db.< collectionName >.updateOne( filterObject, updateObject, options )
db.< collectionName >.replaceOne( filterObject, updateObject ) Overwrites other fields also which are not in updateObject.
   update Objects = { $set : {field: value}}
   options : {upsert: true}
  :The $set operator replaces the value of a field with the specified value. 
  :Upsert : Update + Insert, The upsert option creates a new document if no documents match the filtered criteria
  :The $push operator adds a new value to the already existing array field in the document .
  :the $each modifier to add multiple elements to the array.eg::
   $push: {
      diet: { $each: ["newts", "opossum", "skunks", "squirrels"] },
    }
   :The findAndModify() method is used to find and replace a single document in MongoDB. It accepts a filter document, a replacement      document, and an optional options object.  findAndModify= updateOne + findOne. eg::
     db.podcasts.findAndModify({
      query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
      update: { $inc: { subscribers: 1 } },
      new: true,
      })


+DELETE COMMANDS
db.< collectionName >.deleteMany( filterObject , optons)
db.< collectionName >.deleteOne( filterObject, options )
   
:
{
  >You need only one `MongoClient` instance per Atlas cluster for your application. Having more than one `MongoClient` instance for a single Atlas cluster in your application will increase costs and negatively impact the performance of your database.
  >BSON-encoded documents are converted automatically by the driver. This means that you can use the data immediately in your application as normal JSON and access properties by using dot notation. The driver handles the conversion from BSON to JSON for you.
  
  ?>NodeJs Drive::
  {
    // inserting data in db using node driver
    const dbname = "bank"
    const collection_name = "accounts"
 
    const accountsCollection = client.db(dbname).collection(collection_name)

    const sampleAccounts = [
   {
    account_id: "MDB011235813",
    account_holder: "Ada Lovelace",
    account_type: "checking",
    balance: 60218,
   },
   {
    account_id: "MDB829000001",
    account_holder: "Muhammad ibn Musa al-Khwarizmi",
    account_type: "savings",
    balance: 267914296,
   },
   ]
  
   const main = async () => {
   try {
    await connectToDatabase()
   let result = await accountsCollection.insertMany(sampleAccounts)
   console.log(`Inserted ${result.insertedCount} documents`)
   console.log(result)
   } catch (err) {
   console.error(`Error inserting documents: ${err}`)
   } finally {
    await client.close()
   }
 }
 main()
  }


 {
    // querying in db usint node driver
    const documentsToFind = { balance: { $gt: 4700 } }
    const documentToFindID = { _id: ObjectId("62a3638521a9ad028fdf77a3") }
    const main = async () => {
   try {
     await connectToDatabase()
     // find() method is used here to find all the documents that match the filter
     let result = accountsCollection.find(documentsToFind)
     let docCount = accountsCollection.countDocuments(documentsToFind)
     await result.forEach((doc) => console.log(doc))
     console.log(`Found ${await docCount} documents`)
     
     // find() method is used here to find one single document that match the filter i.e the objectID
     let result = await accountsCollection.findOne(documentToFindID)
     console.log(`Found one document`)
     console.log(result)
   } catch (err) {
     console.error(`Error finding documents: ${err}`)
   } finally {
     await client.close()
   }
  }
 
  ?>Transaction:: 
 {
  Step1: Create variables used in the transaction.
// Collections
const accounts = client.db("bank").collection("accounts")
const transfers = client.db("bank").collection("transfers")

// Account information
let account_id_sender = "MDB574189300"
let account_id_receiver = "MDB343652528"
let transaction_amount = 100

Step2: Start a new session.
const session = client.startSession()

Step3: Begin a transaction with the WithTransaction() method on the session.
const transactionResults = await session.withTransaction(async () => {
  // Operations will go here
})

Step4: Update the balance field of the sender’s account by decrementing the transaction_amount from the balance field.
const senderUpdate = await accounts.updateOne(
  { account_id: account_id_sender },
  { $inc: { balance: -transaction_amount } },
  { session }
)

Step5: Update the balance field of the receiver’s account by incrementing the transaction_amount to the balance field.
const receiverUpdate = await accounts.updateOne(
  { account_id: account_id_receiver },
  { $inc: { balance: transaction_amount } },
  { session }
)

Step6: Create a transfer document and insert it into the transfers collection.
const transfer = {
  transfer_id: "TR21872187",
  amount: 100,
  from_account: account_id_sender,
  to_account: account_id_receiver,
}

const insertTransferResults = await transfers.insertOne(transfer, { session })

Step7:Update the transfers_complete array of the sender’s account by adding the transfer_id to the array.
const updateSenderTransferResults = await accounts.updateOne(
  { account_id: account_id_sender },
  { $push: { transfers_complete: transfer.transfer_id } },
  { session }
)

Step8: Update the transfers_complete array of the receiver’s account by adding the transfer_id to the array.
const updateReceiverTransferResults = await accounts.updateOne(
  { account_id: account_id_receiver },
  { $push: { transfers_complete: transfer.transfer_id } },
  { session }
)

Step9: Log a message regarding the success or failure of the transaction.
if (transactionResults) {
  console.log("Transaction completed successfully.")
} else {
  console.log("Transaction failed.")
}

Step10: Catch any errors and close the session.
} catch (err) {
  console.error(`Transaction aborted: ${err}`)
  process.exit(1)
} finally {
  await session.endSession()
  await client.close()
}
 } 

{const main = async () => {
  try {
    const transactionResults = await session.withTransaction(async () => {
      // Step 1: Update the account sender balance
      const updateSenderResults = await accounts.updateOne(
        { account_id: account_id_sender },
        { $inc: { balance: -transaction_amount } },
        { session }
      );
      console.log(
        `${updateSenderResults.matchedCount} document(s) matched the filter, updated ${updateSenderResults.modifiedCount} document(s) for the sender account.`
      );

      // Step 2: Update the account receiver balance
      const updateReceiverResults = await accounts.updateOne(
        { account_id: account_id_receiver },
        { $inc: { balance: transaction_amount } },
        { session }
      );
      console.log(
        `${updateReceiverResults.matchedCount} document(s) matched the filter, updated ${updateReceiverResults.modifiedCount} document(s) for the receiver account.`
      );

      // Step 3: Insert the transfer document
      const transfer = {
        transfer_id: "TR21872187",
        amount: 100,
        from_account: account_id_sender,
        to_account: account_id_receiver,
      };

      const insertTransferResults = await transfers.insertOne(transfer, {
        session,
      });
      console.log(
        `Successfully inserted ${insertTransferResults.insertedId} into the transfers collection`
      );

      // Step 4: Update the transfers_complete field for the sender account
      const updateSenderTransferResults = await accounts.updateOne(
        { account_id: account_id_sender },
        { $push: { transfers_complete: transfer.transfer_id } },
        { session }
      );
      console.log(
        `${updateSenderTransferResults.matchedCount} document(s) matched in the transfers collection, updated ${updateSenderTransferResults.modifiedCount} document(s) for the sender account.`
      );
      // Step 5: Update the transfers_complete field for the receiver account
      const updateReceiverTransferResults = await accounts.updateOne(
        { account_id: account_id_receiver },
        { $push: { transfers_complete: transfer.transfer_id } },
        { session }
      );
      console.log(
        `${updateReceiverTransferResults.matchedCount} document(s) matched in the transfers collection, updated ${updateReceiverTransferResults.modifiedCount} document(s) for the receiver account.`
      );
    });

    console.log("Committing transaction ...");
    // If the callback for withTransaction returns successfully without throwing an error, the transaction will be committed
    if (transactionResults) {
      console.log("The transaction was successfully created.");
    } else {
      console.log("The transaction was intentionally aborted.");
    }
  } catch (err) {
    console.error(`Transaction aborted: ${err}`);
    process.exit(1);
  } finally {
    await session.endSession();
    await client.close();
  }
};}

}


{
?>Aggregation
: Collection and summary of data.Aggregation operations process data records and return computed results. When working with data in MongoDB, you may have to quickly run complex operations that involve multiple stages to gather metrics for your project. Generating reports and displaying useful metadata are just two major use cases where MongoDB aggregation operations can be incredibly useful, powerful, and flexible.
:>Stage: One of the built-in methods that can be completed on the data, but does not permanently alter it.
 :$match:filter for data that matches criteris
 :$sort:puts the document in certain order
 :$group:group document based on certain criteria.returns one document for every unique group key.eg
 {
  $group:
    {
      _id: <expression>, // Group key
      <field>: { <accumulator> : <expression> }
    }
 }
:>Aggregation pipeline: A series of stages completed on the data in order
eg::
db.collection.aggregate([
    {
        $stage1: {
            { expression1 },
            { expression2 }...
        },
        $stage2: {
            { expression1 }...
        }
    }
])
:in mongodb we can filter,sort ,grouped and transformed. output of one stage is input for other stage.
}

{
  const { MongoClient } = require("mongodb")
  const client = new MongoClient(uri)
  const client = new MongoClient(uri)
const dbname = "bank";
const collection_name = "accounts";
const accountsCollection = client.db(dbname).collection(collection_name);.const pipeline = [
  // Stage 1: match the accounts with a balance less than $1,000
  { $match: { balance: { $lt: 1000 } } },
  // Stage 2: Calculate average balance and total balance
  {
    $group: {
      _id: "$account_type",
      total_balance: { $sum: "$balance" },
      avg_balance: { $avg: "$balance" },
    },
  },
]
const main = async () => {
  try {
    await client.connect()
    console.log(`Connected to the database 🌍. \nFull connection string: ${safeURI}`)
    let result = await accountsCollection.aggregate(pipeline)
    for await (const doc of result) {
      console.log(doc)
    }
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`)
  } finally {
    await client.close()
  }
}

?indexes
:they are special data structure that store small portion of data in an ordered form that are easy to traverse and search efficiently. they point to the document identity and allow you to look up access and update data faster. they are use to imporve query performance, reduce disk O/I, reduce resoure requirement, they support equality matches and range- based query operations and return sorted results.
:types of indexes::
+Single field: they are on one field only
+Compund field: they references to multiple fields within a collection's documents.A compound index can also be a multikey index if one of the fields is an array.
:Multikey index: A multikey index is an index on an array field. Each element in the array gets an index key, which supports efficient querying against array fields. Both single field and compound indexes can have an array field, so there are both multikey single field indexes and multikey compound indexes.


:Use createIndex() to create a new index in a collection. Within the parentheses of createIndex(), include an object that contains the field and sort order.
db.customers.createIndex({
  birthdate: 1
})

:Use getIndexes() to see all the indexes created in a collection.
db.customers.getIndexes()

:Use explain() in a collection when running a query to see the Execution plan. This plan provides the details of the execution stages (IXSCAN , COLLSCAN, FETCH, SORT, etc.).
-The IXSCAN stage indicates the query is using an index and what index is being selected.
-The COLLSCAN stage indicates a collection scan is perform, not using any indexes.
-The FETCH stage indicates documents are being read from the collection.
-The SORT stage indicates documents are being sorted in memory.


:Within the parentheses of createIndex(), include an object that contains two or more fields and their sort order.

db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})


:The order of the fields matters when creating the index and the sort order. It is recommended to list the fields in the following order: Equality, Sort, and Range.

Equality: field/s that matches on a single field value in a query
Sort: field/s that orders the results by in a query
Range: field/s that the query filter in a range of valid values
The following query includes an equality match on the active field, a sort on birthday (descending) and name (ascending), and a range query on birthday too.

db.customers.find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
    active:true
    }).sort({
      birthdate:-1, 
      name:1
      })

:dropIndex() to delete an existing index from a collection. Within the parentheses of dropIndex(), include an object representing the index key or provide the index name as a string.
Delete index by name:
db.customers.dropIndex(
  'active_1_birthdate_-1_name_1'
)
Delete index by key:
db.customers.dropIndex({
  active:1,
  birthdate:-1, 
  name:1
})

:dropIndexes() to delete all the indexes from a collection, with the exception of the default index on _id.
db.customers.dropIndexes()

:hideIndexes:
}
*/