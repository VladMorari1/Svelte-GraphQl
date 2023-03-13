const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config();

const MONGODB_DATA_LOG = process.env.DATABASE

console.log('MONGODB_DATA_LOG', MONGODB_DATA_LOG)

//Apollo Server

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB_DATA_LOG, {useNewUrlParser: true}).then(() => {
    console.log('MongoDb connect successful!')
    return server.listen({port: 5000})
}).then((res)=>{
    console.log(`Server is running on ${res.url}`)
})