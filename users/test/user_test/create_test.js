const userCreateTest = (assert, User, userSeed) => {
	describe('Creating Records: ', () => {
		
		beforeEach((done) => {
			joe = new User(userSeed.joe.init)
			joe.save()
				.then(() => done())
		})

		it('User model is valid', () => {
			assert(typeof User === "function");
		})
		it("saves a User:" , (done) => {			
				assert(!joe.isNew)
				done()
		})
		
	})	
}

module.exports = {
	userCreateTest
}