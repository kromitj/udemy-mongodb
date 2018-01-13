const userUpdateTest = (assert, User, userSeed) => {
	const joeName = userSeed.joe.init.name;
	const joesNewName = userSeed.joe.props.name[0]
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
			done()
		});



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