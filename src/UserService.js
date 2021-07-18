class UserService {
    login(username, password) {
        console.log('entered UserService login method');
        console.log('username:' + username + ', password:' + password);
        return true;
    }
}

module.exports = new UserService();
