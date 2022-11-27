const { Pool } = require("pg"); //using pool is important for frequent queries
require("dotenv").config();
const PG_URL = process.env.PG_URL;
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URL,
});

console.log("url is =>", process.env.PG_URL);
// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    const results = pool.query(text, params, callback);
    // console.log("results from query are =>", results);
    return results;
  },
};
