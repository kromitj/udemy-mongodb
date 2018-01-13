const userDeleteTest = (assert, User, userSeed) => {
	describe('Deletes a User', () => {
		let joe;
		beforeEach((done) => {
			joe = new User(userSeed.joe);
			joe.save()
				.then(() => done())
		})
		it('model instace remove', (done) => {
			joe.remove()
				.then(() => User.findOne({ name: userSeed.joe.name }))
				.then((user) => {
					assert(user === null)
					done();
				})
		})
		it('class instace remove', (done) => {
			User.remove({ name: userSeed.joe.name })
			.then(() => User.findOne({ name: userSeed.joe.name }))
			.then((user) => {
				assert(user === null)
				done();
			})
		})
		it('class instace findAndRemove', (done) => {
			User.findOneAndRemove({name: userSeed.joe.name})
			.then(() => User.findOne({ name: userSeed.joe.name}))
			.then((user) => {
				assert(user === null)
				done()
			})
		})
		it('class instace findByIdAndRemove', (done) => {
			User.findByIdAndRemove(joe._id)
			.then(() => User.findOne({name: userSeed.name}))
			.then((user) => {
				assert(user === null)
				done()
			})
		})
	})
}

module.exports = {
	userDeleteTest
}