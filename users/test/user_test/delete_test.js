const userDeleteTest = (assert, User, userSeed) => {
	const joeName = userSeed.joe.init.name;

	describe('Deletes a User', () => {
		
		beforeEach((done) => {
			joe = new User(userSeed.joe.init);
			joe.save()
				.then(() => done())
		})

		it('model instace remove', (done) => {
			assertDeletion(joe.remove(), joeName, done)
		})
		it('class instace remove', (done) => {
			assertDeletion(User.remove({ name: joeName }), joeName, done)
		})
		it('class instace findAndRemove', (done) => {
			assertDeletion(User.findOneAndRemove({name: joeName}), joeName, done)
		})
		it('class instace findByIdAndRemove', (done) => {
			assertDeletion(User.findByIdAndRemove(joe._id), joeName, done)			
		})

		const assertDeletion = (operation, userName, done) => {
			operation
				.then(() => User.findOne({name: userName}))
				.then((user) => {
					assert(user === null)
					done()
				})
		}
	})
}

module.exports = {
	userDeleteTest
}