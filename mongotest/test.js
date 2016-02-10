// INSERT DATA TO TESTING COLLECTION

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/mongotest', function(err, db) {
//     console.log('Connected to MongoDB!');

//     var collection = db.collection('testing');

//     collection.insert({'title': 'Snowcrash'}, function(err, docs) {
// 	    // on successful insertion, log to the screen the new
// 	    // collection's details:
// 	    console.log(docs.length + ' record inserted.');
// 	    console.log(docs[0].title + ' – ' + docs[0]._id);

// 	    // finally close the connection:
// 	    db.close();
//     });

// });

// RETRIEVE DATA FROM TESTING COLLECTION

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mongotest', function(err, db) {
    console.log('Connected to MongoDB!');

    var collection = db.collection('testing');
    collection.insert({
        'title': 'Snowcrash'
    }, function(err, docs) {
        console.log(collection.length + ' record inserted.');
        console.log(collection[0]._id + ' - ' + collection[0].title);

        collection.findOne({
            title: 'Snowcrash'
        }, function(err, doc) {
            console.log(doc._id + ' - ' + doc.title);
            db.close();
        });
    });
});