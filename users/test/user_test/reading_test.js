const userReadTest = (assert, User, userSeed) => {
	describe("Reading Users out of the userbase", () => {

		beforeEach((done) => {
			joe = new User(userSeed.joe)
			joe.save()
				.then(() => done())
		})
		it('finds all users with the name Joe', (done) => {
			User.find(userSeed.joe).then((users) => {
				assert(users[0]._id.toString() == joe._id.toString())
				done()
			})
		})
		it('finds a specific user', (done) => {
			User.findOne({ _id: joe._id})
				.then((user) => {
					assert(user.name === userSeed.joe.name)
					done();
				})
		})

	})
}
module.exports = {userReadTest}