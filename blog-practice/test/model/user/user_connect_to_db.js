const userConnectToDB = (assert, User, seeds) => {
	describe('User model: connects to mongo properly', () => {
		
		beforeEach((done) => {
			joe = new User(seeds.user.joe.init)
			joe.save()
				.then(() => done())
		})
		it('User model is a valid model', (done) => {
			assert(typeof User === "function");
			done();
		})
	})
}

module.exports = userConnectToDB;