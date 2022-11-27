const db = require("../db/connect.js");
const graphql = require("graphql");
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
          "INSERT INTO users (email, user_name, password) VALUES ($1, $2, $3) RETURNING user_name";
        const values = [args.email, args.user_name, args.password];
        try {
          const { rows } = db.query(text, values);
          const newUser = rows[0];
          return newUser;
        } catch (err) {
          return next({
            log: "addUser",
            message: { err },
          });
        }
      },
    },
    //CRUD - ACTIVITY
    addActivity: {
      type: activityType,
      args: {
        activity_name: { type: GraphQLString },
        total_hours: { type: GraphQLInt },
        logged_hours: { type: GraphQLString },
        goal: { type: GraphQLInt },
      },
      resolve(parentVal, args) {
        const text =
          "INSERT INTO Activities (activity_name, total_hours, logged_hours, goal) VALUES ($1, $2, $3, $4) RETURNING activity_name";
        const values = [
          args.activity_name,
          args.total_hours,
          args.logged_hours,
          args.goal,
        ];
        try {
          const { rows } = db.query(text, values);
          const actvitity = rows[0];
          //can return the activity name?
          return activity;
        } catch (err) {
          return next({
            log: "addActivity",
            message: { err },
          });
        }
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
