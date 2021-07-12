const util = require("./util");
let mx = {
  accessLayer: (functionName, userObj, option) => {
    let data
    console.log(functionName, userObj, option);
    if (functionName == "login") {
      data = util[functionName](option);
    }
    if (userObj.role === "admin") {
      data = util[functionName](option);
    }
    if (userObj.role === "user") {
      if (functionName != "login" || functionName != "getUserList") {
        console.log(`You are not authorized`);
      } else {
        data = util[functionName](option);
      }
    }
    return data
  },
};
module.exports = mx;
