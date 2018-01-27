const mongoose = require('mongoose');
const database = 'mongodb://localhost/users_test';
mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect(database, {
		 useMongoClient: true
	});
	mongoose.connection
		.once('open', () => {
			console.log(`---- Connected to mongo at: ${database} -------`)
			console.log(Date())
			done()
		})
		.on('error', (error) => console.error("Eror: ", error))	
})

beforeEach((done) => {
	const { users, comments, blogposts } = mongoose.connection.collections
	users.drop(() => {
		comments.drop(() => {
			blogposts.drop(() => {
				done()
			})
		})
	})
})