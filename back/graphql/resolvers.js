const User = require('../models/User')

module.exports = {
    Query: {
        async user(_, {ID}) {
            return User.findById(ID);
        },
        async getUsers(_, {amount}) {
            return User.find().limit(amount)
        }
    },
    Mutation: {
        async createUser(_, {userInput: {name, surname, age}}) {
            const createdUser = new User({
                name, surname, age, hobbies: []
            })
            const result = await createdUser.save()
            return {
                id: result.id,
                ...result._doc
            }
        },

        async deleteUser(_, {ID}) {
            const wasDeleted = (await User.deleteOne({_id: ID})).deletedCount
            return wasDeleted
        },

        async editUser(_, {ID, userInput: {name, surname, age, hobbies}}) {
            try {
                const wasEdited = (await User.updateOne({_id: ID}, {name, surname, age, hobbies})).modifiedCount;
                return wasEdited
            } catch (e) {
                return false
            }
        }
    }
}