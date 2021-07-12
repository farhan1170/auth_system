class User {
  constructor(obj) {
    this.name = obj.name;
    this.role = obj.role;
    this.password = obj.password;
  }
  updateUser(obj) {
    //this.name = obj.name;
    if (obj.role) this.role = obj.role;
    if (obj.password) this.password = obj.password;
  }
}
module.exports = User;
