# Database

A database may be needed for non static content like news articles to be displayed on the website.

Depending on the technical knowledge of the moderator of this website, there may not be a need to setup a database.

They could just simply edit the text themselves inside the javascript files, or to make it simpler, use a local json file to store each news post.


## Database Setup

Follow this guide: https://www.mongodb.com/developer/how-to/nextjs-with-mongodb/

If it is necessary to have a database, using MongoDB is a good choice. 

MongoDB is a document-oriented database that stores data JSON structure. It is a NoSQL database without relations. If you are familiar with SQL terminology, [here is a comparison with MongoDB](https://www.mongodb.com/docs/manual/reference/sql-comparison/).

To start with MongoDB, you will need a [MongoDB Atlas](https://www.mongodb.com/atlas/database) account. This way, you can make a database with a collection of documents - presumably for news on the site. 