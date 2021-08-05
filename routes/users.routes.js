const router = require("express").Router();
let users = []
let alert = {active :false, message : ""};
router

  .get("/", (req, res) => {
    res.render("users", {users, alert});
  })
  .post('/add', (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    
    if(validation(name, email, password)){
      if(findUser(email)){
        let newUser = {name: name, email: email, password: password}
        users.push(newUser);
      }

    }
    res.redirect('/users');
    
  })
  
  function findUser(email){
    if(users.find((user) => user.email == email )) {
      alert.message ="Le membre existe deja";
      alert.active = true;
      return false;}
    alert.active = false;  
    alert.message = '';  
    return true;
  }
  function validation(name, email, password){
    if (name == '' || email == '' || password == '') {
      alert.active = true;
      alert.message = 'Tous les champs sont obligatoires'
      return false;
    }
    alert.message = '';
    alert.active = false;
    return true;
  }



module.exports = router;