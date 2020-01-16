const {getPostsForUser, getUserById} = require('./api')

function showPostsForCurrentUser(userId, callback) {
    getPostsForUser(userId, posts => {
        const postTemplates = posts.map(post => {
            return `
            <div class="post">
                ${post.title}
                ${post.body}
                ${post.createdBy}
            </div>`
        })
        callback(postTemplates)
    })
}

function showUserProfile(userId, callback) {
    getUserById(userId, user => {
        const profile = `
        <div>
            ${user.name}
        </div>`
        callback(profile)
    })
}

module.exports = {
    showPostsForCurrentUser,
    showUserProfile
}