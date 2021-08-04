const User = require("./database/models/user.model")
const Post = require("./database/models/post.model")

exports.clearDatabase = callback => {

   User.deleteMany({})
   .then ( ()=>{
       Post.deleteMany({})
         .then(() => {
           if (callback) callback();
         })
         .catch((err) => console.error(err));
   } )
   .catch(err => console.error(err))
}

exports.createUser = callback => {
     const newUser = new User({
       name: "Marco Guilmette",
       email: "mg@caramail.com",
       password: "password123",
     });

    newUser.save()
    .then( user =>{
            console.log('Un utilisateur a ete creer', user);
            if (callback) callback(user);
    })
    .catch(err => console.error(err))
}