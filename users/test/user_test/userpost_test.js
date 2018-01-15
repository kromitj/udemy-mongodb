const userPostTest = (assert, User, userSeed) => {
	const joeObj = userSeed.joe.initWith.posts;
	const joeName = joeObj.name;

	describe('Subdocuments', () => {
		it('can create a subdocument', (done) => {
			const joe = new User(userSeed.joe.initWith.posts)
			joe.save()
				.then(() => {
					User.findOne({name: joeName})
					.then((user) => {
						assert(user.posts[0].title === joeObj.posts[0].title)
						done()
					})
				})
		})
	})
}

module.exports = {userPostTest};