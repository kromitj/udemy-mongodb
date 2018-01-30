const userModelCreateTest = (assert, User, seeds) => {
	const joeSeed = seeds.user.joe.init;
	
	describe('User model: CRUD functionality', () => {
		beforeEach((done) => {
			joe = new User(joeSeed)
			joe.save()
				.then((response) => {
					assert(response.username === joeSeed.username)
					done()
				})
		})

		it('CRud: creates and saves a user record into the DB', (done) => {
			User.findOne({username: joeSeed.username})
			.then((user) => {
				assert(user.email === joeSeed.email)
				done()
			})
		})
		it('crUd: Allows model instance updating, Set N Save', (done) => {
			const newEmail = seeds.user.joe.update.email
			User.findOne({username: joeSeed.username})
			.then((user) => {
				  user.set('email', newEmail)
				  user.save()
				  .then(() => {
					 	User.findOne({username: joeSeed.username})
					 	.then((user) => {
					 		assert(user.email === newEmail)
							done()
					 	})
				 })
			})
		})
		it('crUd: Allows model instance updating, #Update', (done) => {
			const newPass = seeds.user.joe.update.password;
			User.findOne({username: joeSeed.username})
			.then((user) => {
				  user.update({password: newPass})
				  .then(() => {
					 	User.findOne({username: joeSeed.username})
					 	.then((user) => {
					 		assert(user.password === newPass)
							done()
					 	})
				 })
			})
		})
		it('crUd: Use class instance to update a record, User#update', (done) => {
			const newUsername = seeds.user.joe.update.username;
			User.update({username: joeSeed.username}, {username: newUsername})
			.then(() => {
				User.findOne({username: newUsername})
					.then((user) => {
						assert(user.username === newUsername)
						done()
					})
			})
		})
		it('crUd: Use class instance to update a record, User#findOneAndUpdate', (done) => {
			const newUsername = seeds.user.joe.update.username;
			User.findOneAndUpdate({username: joeSeed.username}, {username: newUsername})
			.then(() => {
				User.findOne({username: newUsername})
					.then((user) => {
						assert(user.username === newUsername)
						done()
					})
			})
		})
		it('crUd: Use class instance to update a record, User#findByIdAndUpdate', (done) => {
			const newUsername = seeds.user.joe.update.username;
			User.findByIdAndUpdate(joe._id, {username: newUsername})
			.then(() => {
				User.findById(joe._id)
					.then((user) => {
						assert(user.username === newUsername)
						done()
					})
			})
		})
		it('cruD: Use model instace #remove', (done) => {
			User.findById(joe._id)
			.then((user) => {
				user.remove()
				.then((resp) => {
					User.findById(joe._id)
					.then((user) => {
						assert(user === null)
						done()						
					})
				})
			})
		})
		it('cruD: Use class instance #remove', (done) => {
			User.remove({username: joe.username})
			.then(() => {
				User.findById(joe._id)
				.then((user) => {
					assert(user === null)
					done()
				})
			})
		})
		it('cruD: Use class instance #findOneAndRemove', (done) => {
			User.findOneAndRemove({username: joe.username})
			.then(() => {
				User.findById(joe._id)
				.then((user) => {
					assert(user === null)
					done()
				})
			})
		})
		it('cruD: Use class instance #findByIdAndRemove', (done) => {
			User.findByIdAndRemove(joe._id)
			.then(() => {
				User.findById(joe._id)
				.then((user) => {
					assert(user === null)
					done()
				})
			})
		})
	})
}

module.exports = userModelCreateTest;