const util = require("./util");
const view = require("./view");
const accesslayer = require("./access_layer");
let currentUserData = {
  name: "admin1",
  password: "pass1",
  role: "admin",
};
util.createUser(currentUserData);

let currentUser = accesslayer.accessLayer("login", {}, currentUserData);
console.log(currentUser);
while (1) {
  if (!currentUser) {
    currentUserData = view.loginData();
    currentUser = accesslayer.accessLayer("login", {}, currentUserData);
  } else {
    let action = view.actionGetter();
    if (action == 6) {
      break;
    }
    if (action === 1) {
      currentUserData = view.loginData();
      currentUser = accesslayer.accessLayer("login", {}, currentUserData);
    }
    if (action === 2) {
      let newUserData = view.createUserData();
      accesslayer.accessLayer("createUser", currentUser, newUserData);
    }
    if (action === 3) {
      let username = view.deleteUserData();
      accesslayer.accessLayer("deleteUser", currentUser, username);
    }
    if (action === 4) {
      accesslayer.accessLayer("getUserList", currentUser, {});
    }
    if (action === 5) {
      let updateData = view.updateData();
      accesslayer.accessLayer("updateUser", currentUser, updateData);
    }
  }
}
