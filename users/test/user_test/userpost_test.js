const userPostTest = (assert, User, userSeed) => {
	const joeObj = userSeed.joe.init;
	const joeName = joeObj.name;

	describe('Subdocuments', () => {
		beforeEach((done) => {
			createJoe(done)
		})
		it('can create a subdocument', (done) => {
			User.findOne({name: joeName})
			.then((user) => {
				assert(user.posts[0].title === joeObj.posts[0].title)
				done()
			})
		})
		it('creates a new post', (done) => {
			const newPost = userSeed.joe.add.post
			User.findOne({name: joeName})
			.then((user) => {
				user.posts.push(newPost)
				user.save()
				.then(() => {
					User.findOne({name: joeName})
						.then((user) => {
							assert(user.posts.length === 2 )
							assert(user.posts[1].title === newPost.title)
						})
						done();						
				})
			})
		})
		it('deletes a post', (done) => {
			const postId = joe.posts[0]._id;
			User.findOne({name: joeName})
			.then((user) => {
				const postId = user.posts[0]._id
				user.posts.remove({_id: postId})
				user.save()
				.then(() => {
					User.findOne({name: joeName})
					.then((user) => {
						assert(user.posts.length === 0)
						done();
					})
				})
			})	
		})

		it('post count returns the number of posts', (done) => {
			User.findOne({name: joeName})
			.then((user) => {
				assert(user.postCount === 1)
				done()
			})
		})

		const createJoe = (done) => {
			joe = new User(userSeed.joe.init);
			joe.save()
				.then(() => done())
		}
	})
}

module.exports = {userPostTest};

