const { users, posts } = require('./data.js')

function getUserById(id, callback) {
    setTimeout(() => {
        const user = users.find(user => user.id === id)
        callback(user)
    }, 150)
}

function getPostsForUser(userId, callback) {
    setTimeout(() => {
        const _posts = posts.filter(post => post.createdBy === userId)
        callback(_posts)
    })
}

module.exports = {
    getUserById,
    getPostsForUser
}