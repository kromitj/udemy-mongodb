const assert = require('assert')
const User = require('../src/user')
const { userSeed } = require('./user_test/test_seeds')

const { userCreateTest } = require('./user_test/create_test')
const { userReadTest } = require('./user_test/reading_test')
const { userUpdateTest } = require('./user_test/update_test')
const { userDeleteTest } = require('./user_test/delete_test')

userDeleteTest(assert, User, userSeed);
userCreateTest(assert, User, userSeed);
userReadTest(assert, User, userSeed);
userUpdateTest(assert, User, userSeed);