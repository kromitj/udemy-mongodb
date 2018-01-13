const userCreateTest = (assert, User, userSeed) => {
	describe('Creating Records: ', () => {
		it('User model is valid', () => {
			assert(typeof User === "function");
		})
		it("saves a User:" , (done) => {
			const newUser = new User(userSeed.joe.init);
			newUser.save()
			.then(() => {
				assert(!newUser.isNew)
				done()
			})
		})
	})	
}

module.exports = {
	userCreateTest
}