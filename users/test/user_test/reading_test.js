const userReadTest = (assert, User, userSeed) => {
	const joeName = userSeed.joe.init.name;
	
	describe("Reading Users out of the userbase", () => {

		beforeEach((done) => {
			joe = new User(userSeed.joe.init)
			joe.save()
				.then(() => done())
		})
		it('finds all users with the name Joe', (done) => {
			User.find({name: joeName}).then((users) => {
				assert(users[0]._id.toString() == joe._id.toString())
				done()
			})
		})
		it('finds a specific user', (done) => {
			User.findOne({ _id: joe._id})
				.then((user) => {
					assert(user.name === joeName)
					done();
				})
		})

	})
}
module.exports = {userReadTest}