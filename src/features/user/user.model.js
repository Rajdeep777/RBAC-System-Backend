class UserModel {
  constructor(username, email, password, role, id) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this._id = id;
  }
}
export default UserModel;
