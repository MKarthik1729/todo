const {MongoClient} = require('mongodb')

// const client = new MongoClient()

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = 'mongodb+srv://karthik:12345677@cluster0.qttfhba.mongodb.net/?retryWrites=true&w=majority';
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        // await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } 
    return client
}

var client = main().catch(console.error);

module.exports = client