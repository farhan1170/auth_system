const prompt = require("prompt-sync")();
let mx = {
  loginData: () => {
    const name = prompt("What is your name?\n");

    const password = prompt("What is your password?\n");

    return { name: name, password: password };
  },
  actionGetter: () => {
    console.log("action getter");
    let action = prompt(`Specify action \n
    1. login as different user\n 
    2. create new user\n 
    3. delete user\n
    4. get user list\n
    5. upadte user\n
    6. exit
    `);
    console.log(`you entered ${action}`);
    if (!Number(action)) {
      console.log("wrong action");
      mx.actionGetter();
    }
    action = parseInt(action);
    if (action < 1 || action > 6) {
      console.log("wrong action");
      mx.actionGetter();
    }
    return action;
  },
  createUserData: () => {
    const name = prompt("user name?\n");

    const password = prompt("user password?\n");
    const role = prompt("user role\n");
    if (!name || !password || !role) {
      return {};
    }
    return { name: name, password: password, role: role };
  },
  deleteUserData: () => {
    const name = prompt("user name?\n");

    if (!name) {
      return {};
    }
    return { name: name };
  },
  updateData: () => {
    const name = prompt("user name?\n");
    const key = prompt("key?\n");
    const value = prompt("value?\n");
    let obj = { name: name };
    obj[key] = value;
    return obj
  },
};

module.exports = mx;
