const {gql} = require('apollo-server')

module.exports = gql`
type User {
    name:String
    surname: String,
    age: Int,
    hobbies: [String]
}

input UserInput {
    name:String
    surname: String,
    age: Int,
}

input UserUpdate {
    name:String
    surname: String,
    age: Int,
    hobbies: [String]
}

type Query {
    user(ID: ID!): User!
    getUsers(amount:Int):[User]
}

type Mutation {
    createUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
    editUser(ID: ID!,userInput: UserUpdate): Boolean
}
`