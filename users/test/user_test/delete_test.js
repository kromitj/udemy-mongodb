const userDeleteTest = (assert, User, userSeed) => {
	const joeName = userSeed.joe.init.name;

	describe('Deletes a User', () => {
		let joe;
		beforeEach((done) => {
			joe = new User(userSeed.joe.init);
			joe.save()
				.then(() => done())
		})
		it('model instace remove', (done) => {
			joe.remove()
				.then(() => User.findOne({ name: joeName }))
				.then((user) => {
					assert(user === null)
					done();
				})
		})
		it('class instace remove', (done) => {
			User.remove({ name: joeName })
			.then(() => User.findOne({ name: joeName }))
			.then((user) => {
				assert(user === null)
				done();
			})
		})
		it('class instace findAndRemove', (done) => {
			User.findOneAndRemove({name: joeName})
			.then(() => User.findOne({ name: joeName}))
			.then((user) => {
				assert(user === null)
				done()
			})
		})
		it('class instace findByIdAndRemove', (done) => {
			User.findByIdAndRemove(joe._id)
			.then(() => User.findOne({name: joeName}))
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