const User = require('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin() {
    try {
        let user = await User.findOne({ email: 'naushad@gmail.com' });
        if (user) {
            console.log("user updated...");
        } else {
            user = new User();
            user.firstName = 'Nausad';
            user.lastName = 'Imam';
            user.email = 'naushad@gmail.com';
            let encryptredPassword = bcrypt.hashSync('1234', 10);
            user.password = encryptredPassword;
            user.userType = 'Admin';
            await user.save();
            console.log('user saved successfully...');
        }

    } catch (err) {
        console.log(err);
    }
}

module.exports = makeAdmin;