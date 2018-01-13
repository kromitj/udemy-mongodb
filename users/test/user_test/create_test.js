const userCreateTest = (assert, User, userSeed) => {
	describe('Creating Records: ', () => {
		it('1: User model is valid', () => {
			assert(typeof User === "function");
		})
		it("2: saves a User:" , (done) => {
			const newUser = new User(userSeed.joe);
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