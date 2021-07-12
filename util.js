let db = require("./db");
let User = require("./user");
let mx = {
  login: (obj) => {
    //find user in db
    console.log("++++++++++++", db.users);
    if (!obj.name || !obj.password) {
      console.log("user name password did not match1");
    }
    let name = obj.name;
    let password = obj.password;
    if (!db.users[name]) {
      console.log("No user with this name found");
      return;
    }
    let userObj = db.users[name];
    if (userObj.password != password) {
      console.log("uswer name password did not match2");
      return;
    } else {
      return userObj;
    }
  },
  getUserList: () => {
    Object.keys(db.users).map((key) => {
      let item = db.users[key];
      console.log(`${item.name}\t${item.role}`);
    });
  },
  updateUser: (userObj) => {
    if (!userObj.name) {
      console.log("please send name");
    }
    if (!db.users[userObj.name]) {
      console.log("No user found");
    }
    let user = db.users[userObj.name];
    console.log('---------->',user)
    delete userObj.name;
    if (!userObj.password && !userObj.role) {
      console.log("Nothing to update");
    }
    user.updateUser(userObj);
    db.users[user.name] = user;
  },
  createUser: (obj) => {
    if (!obj.name || !obj.password || !obj.role) {
      console.log("please send name password and role");
      return;
    }
    if (["admin", "user"].indexOf(obj.role) < 0) {
      console.log("please send correct role");
      return;
    }
    if (db.users[obj.name]) {
      console.log("User already exists");
      return;
    }
    let userObj = new User(obj);
    db.users[obj.name] = userObj;
  },
  deleteUser: (userObj) => {
    if (!db.users[userObj.name]) {
      console.log("No such user exists");
      return;
    }

    delete db.users[userObj.name];
  },
};
module.exports = mx;
