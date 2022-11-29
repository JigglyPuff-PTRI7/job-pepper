const db = require("../db/connect.js");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const { userType, activityType, resourceType } = require("./types.js");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    //CRUD -USER
    addUser: {
      type: userType,
      args: {
        email: { type: GraphQLString },
        user_name: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentVal, args) {
        const text =
          "INSERT INTO users (email, user_name, password) VALUES ($1, $2, $3) RETURNING *";
        const values = [args.email, args.user_name, args.password];
        return db
          .query(text, values)
          .then((res) => {
            console.log("thenable!!");
            console.log("response is =>", res.rows[0]);
            return res.rows[0];
          })
          .catch((err) => err);
        //example query:
        // mutation {
        //   addUser(email: "test@gmail.com", user_name: "mutationTest", password: "lol im tired") {
        //     user_name
        //     email
        //   }
        // }
      },
    },
    //CRUD - ACTIVITY
    addActivity: {
      type: activityType,
      args: {
        activity_name: { type: GraphQLString },
        total_hours: { type: GraphQLInt },
        logged_hours: { type: GraphQLInt },
        goal: { type: GraphQLInt },
      },
      resolve(parentVal, args) {
        const text =
          "INSERT INTO Activities (activity_name, total_hours, logged_hours, last_logged, goal) VALUES ($1, $2, $3, $4) RETURNING *";
        console.log(loggedHrs);
        const values = [
          args.activity_name,
          args.total_hours,
          args.logged_hours,
          current_timestamp(),
          args.goal,
        ];
        return db
          .query(text, values)
          .then((res) => {
            console.log("thenable!!");
            console.log("response is =>", res.rows[0]);
            return res.rows[0];
          })
          .catch((err) => err);
      },
    },
    // updateActivity: {},
    // deleteActivity: {},
    // //CRUD - RESOURCES
    // addResource: {},
    // updateResource: {},
    // deleteResource: {}
  },
});

module.exports = RootMutation;
