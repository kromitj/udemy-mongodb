const assert = require('assert');
const User = require('../src/user');
const seeds = require('./seeds');

const userModelTest = require('./model/user_model_test')

userModelTest(assert, User, seeds)