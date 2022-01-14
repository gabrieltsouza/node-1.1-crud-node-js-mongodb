import { MongoClient as mongoClient } from "mongodb";

mongoClient.connect("mongodb://localhost")
        .then(conn => global.conn = conn.db("crudmongodb"))
        .catch(err => console.log(err))


function findAll(){
    return global.conn.collection("customers").find().toArray();
}


export default findAll;

//module.exports = { findAll }
