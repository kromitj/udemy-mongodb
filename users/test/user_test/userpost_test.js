const userPostTest = (assert, User, userSeed) => {
	const joeObj = userSeed.joe.init;
	const joeName = joeObj.name;

	describe('Subdocuments', () => {
		
		it('can create a subdocument', (done) => {
			const joe = new User(joeObj)
			joe.save()
				.then(() => {
					User.findOne({name: joeName})
					.then((user) => {
						assert(user.posts[0].title === joeObj.posts[0].title)
						done()
					})
				})
		})
		it('creates a new post', (done) => {
			const joe = new User(joeObj)
			const newPost = userSeed.joe.add.post
			joe.save()
			.then(() => {
				User.findOne({name: joeName})
				.then((joe) => {
					joe.posts.push(newPost)
					joe.save()
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
		})
		it('delets a post', (done) => {
			const joe = new User(joeObj)
			const postId = joe.posts[0]._id;
			joe.save(() => {
				User.findOne({name: joeName}, (err, user) => {
					const postId = user.posts[0]._id
					user.posts.remove({_id: postId})
					user.save(() => {
						User.findOne({name: joeName}, (err, user) => {
							console.log(user)
							assert(user.posts.length === 0)
							done();
						})
					})
				})
			})
		})
		it('deletes a post', (done) => {
			const joe = new User(joeObj)
			const postId = joe.posts[0]._id;
			joe.save()
			.then(() => {
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
		})
	})
}

module.exports = {userPostTest};

