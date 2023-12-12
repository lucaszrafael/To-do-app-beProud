User = () => {
    return Meteor.user()
}
Users = () => {
    return Meteor.users.find().fetch()
}

