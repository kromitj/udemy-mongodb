const userReadTest = (assert, User, userSeed) => {
	const joeName = userSeed.joe.init.name;
	
	describe("Reading Users out of the userbase", () => {

		beforeEach((done) => {
			let joe, mary, jerome, arturo;
			joe = new User(userSeed.joe.init);
			mary = new User(userSeed.mary);
			jerome = new User(userSeed.jerome);
			arturo = new User(userSeed.arturo);
			Promise.all([joe.save(), mary.save(), jerome.save(), arturo.save()])
				.then(() => done())
		})

		it('finds all users with the name Joe', (done) => {
			User.find({name: joeName})
			.then((users) => {
				assert(users[0].name === joe.name);
				done()
			})
		})
		it('finds a specific user', (done) => {
			User.findOne({ name: joeName})
				.then((user) => {
					assert(user.name === joeName)
					done();
				})
		})
		it('can skip and limit', () => {
			User.find({}).skip(1).limit(2)
			.then((users) => { assert(users.length === 2) })
		})

	})
}
module.exports = {userReadTest}