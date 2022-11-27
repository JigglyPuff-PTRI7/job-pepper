const db = require("../db/connect.js");
const { userType, activityType, resourceType } = require("./types.js");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: GraphQLString },
      },
      //resolver - fetches data for a single field
      //resolver args:
      //root - eval result of previous resolver call
      //args - serves as the params for the query
      //context - obj passed through resolver chain (think, res.locals w/ express middleware)
      resolve(parentVal, args) {
        //use resolver to make query to our db
        const text = "SELECT * FROM users WHERE id=$1";
        const values = [args.id];
        try {
          const { rows } = db.query(text, values);
          const user = rows[0];
          return user;
        } catch (err) {
          return next({
            log: "getUser",
            message: { err },
          });
        }
      },
    },
    //grab all of the individual user's activites using their unqique id
    activities: {
      type: new GraphQLList(activityType),
      //this will have to be the userID sub
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentVal, args) {
        //returning the select all query from activities
        const text =
          "SELECT a.pk_activity_id, a.activity_name, a.total_hours, a.logged_hours, a.goal, u.user_name AS user FROM activities a LEFT JOIN user_activities ua ON a.pk_activity_id = ua.activity_id LEFT JOIN users u ON u.user_id = ua.user_id WHERE ua.user_id=$1";
        const values = [args.id];
        try {
          const { rows } = db.query(text, values);
          return rows;
        } catch (err) {
          return next({
            log: "getUser",
            message: { err },
          });
        }
      },
    },
  },
});
