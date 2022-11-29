const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//make the individual types of users, activites, and resources match the type of the tables in postgres to allow graphql to work with the data queried from the tables
//userType
const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    //use this type marker to enforce values are never null for id type request
    user_id: { type: GraphQLString },
    user_name: { type: GraphQLString },
    email: { type: GraphQLString },
    googleID: { type: GraphQLString },
  }),
});
// //Activity Type
const activityType = new GraphQLObjectType({
  name: "activity",
  fields: () => ({
    pk_actvity_id: { type: GraphQLString },
    activity_name: { type: GraphQLString },
    total_hours: { type: GraphQLInt },
    logged_hours: { type: GraphQLInt },
    last_logged: { type: GraphQLString },
    goal: { type: GraphQLInt },
  }),
});
// //Resouce Type
const resourceType = new GraphQLObjectType({
  name: "resource",
  fields: () => ({
    pk_resouce_id: { type: GraphQLString },
    resource_name: { type: GraphQLString },
    url: { type: GraphQLString },
    date_added: { type: GraphQLString },
    fk_actvity_id: { type: GraphQLString },
  }),
});

module.exports = {
  userType,
  activityType,
  resourceType,
};
