const userConnectToDB = require('./user/user_connect_to_db');
const userModelCreateTest = require('./user/user_model_create_test');

const userModelTest = (assert, User, seeds) => {
	userConnectToDB(assert, User, seeds);
	userModelCreateTest(assert, User, seeds);
}
module.exports = userModelTest;