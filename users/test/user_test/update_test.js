const userUpdateTest = (assert, User, userSeed) => {
	describe("Updating Users in the collection", () => {
		beforeEach((done) => {
			joe = new User(userSeed.joe)
			joe.save()
			.then(() => done())
		})
		it('updates a model instance', (done) => {
			joe.set('name',  userSeed.joeToAlex.name)
			joe.save()
				.then(() => {
					User.findOne({ _id: joe._id})
					.then((user) => {
						assert(user.name === userSeed.joeToAlex.name)
						done()
					})
				})			
		})
	})
}

module.exports = { userUpdateTest}