ccsconst assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

const { userSeed } = require('./user_test/test_seeds');

const { userCreateTest } = require('./user_test/create_test');
const { userReadTest } = require('./user_test/reading_test');
const { userUpdateTest } = require('./user_test/update_test');
const { userDeleteTest } = require('./user_test/delete_test');
const { userValidationTest} = require('./user_test/validation_test');
const {userPostTest} = require('./user_test/userpost_test');
const {userAssossiationTest} = require('./user_test/assossiation_test');
const {userMiddlewareTest} = require('./user_test/middleware_test');

userDeleteTest(assert, User, userSeed);
userCreateTest(assert, User, userSeed);
userReadTest(assert, User, userSeed);
userValidationTest(assert, User, userSeed);
userPostTest(assert, User, userSeed);
userUpdateTest(assert, User, userSeed);
userAssossiationTest(assert, User, Comment, BlogPost, userSeed)
userMiddlewareTest(assert, User, BlogPost, userSeed)