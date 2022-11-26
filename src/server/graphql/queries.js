const db = require("../db/connect.js");
const { userType, activityType, resourceType } = require("./types.js");
const { GraphQLObjectType, GraphQLID } = require("graphql");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: 'Query',
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
            resolve(root, args) {
              //use resolver to make query to our db
              const text = '';
              const values = [];
              try {
                const {rows} = await db.query(text, [id]);
                const user = rows[0];
              } catch (err) {
                return next({
                  log: 'getUser',
                  //change the error here 
                  message: { err },
                });
              }
            },
          },
      },
      users: {
        type: new GraphQLList(userType),
        //   resolve(root, args){
        //     //returning the select all query from users
        //   }
      },
    },
  });