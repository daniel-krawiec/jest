class UserList {
  constructor(users = []) {
    this.users = users;
  }

  get allUsers() {
    return this.users;
  }

  get totalUsers() {
    return this.users.length;
  }

  add(user) {
    if (!user.email) throw new Error("no email");

    user.id = this.allUsers.length + 1;
    this.users = [...this.allUsers, user];

    return user;
  }

  random() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (this.totalUsers > 0) {
						const randomNumber = Math.floor(Math.random() * this.totalUsers);
						resolve(this.allUsers[randomNumber]);
          } else {
            reject("No users");
          }
      }, 100);
    });
  }
}

module.exports = UserList;