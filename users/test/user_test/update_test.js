const userUpdateTest = (assert, User, userSeed) => {
	const joeName = userSeed.joe.init.name;
	const joesNewName = userSeed.joe.updateProps.name;

	describe("Updating Users in the collection", () => {

		beforeEach((done) => {
			joe = new User(userSeed.joe.init)
			joe.save()
			.then(() => done())
		});

		it('instance type using set n save', (done) => {
			joe.set('name', joesNewName)
			assertName(joe.save(), joesNewName, done) 
						
		});
		it('A model instance can update', (done) => {
			assertName(joe.update({ name: joesNewName}), joesNewName, done)
			
		});
		it('A model class can update', (done) => {
			assertName(User.update({ name: joeName}, { name: joesNewName}), joesNewName, done)

		});
		it('A model class can update one record', (done) => {
			assertName(
				User.findOneAndUpdate({name: joeName}, { name: joesNewName}),
				joesNewName, done
			)
		});
		it('A model class can find a record with an id and update', (done) => {
			assertName(
				User.findByIdAndUpdate(joe._id, {name: joesNewName }),
				joesNewName, done
				)
		})

		xit('Finds all User records that match query and increments their postCount by one', (done) => {
			User.update({name: joeName}, { $inc: { likes: 1}})
				.then(() => User.findOne({name: joeName}))
				.then((user) => { 
					assert(user.likes === 1)
				})
				done()
		})


		const assertName = (operation, name, done) => {
			operation
				.then(() => {
					User.findOne({ _id: joe._id})
					.then((user) => {
						assert(user.name === name)
						done()
					})
				})			
		}

	})
}

module.exports = { userUpdateTest}