const userMiddlewareTest = (assert, User, BlogPost, userSeed) => {
	describe('User deleting records: ', () => {	
		
		beforeEach((done) => {
			let joe, blogPost;
			joe = new User(userSeed.joe.init);
			blog = new BlogPost(userSeed.blogPosts.init);
			joe.blogPosts.push(blog);
			Promise.all([joe.save(), blog.save()])
			.then(() => done())
		})

		it("User: removes dangling blogposts", (done) => {
			joe.remove()
				.then(() => {
					BlogPost.count()
						.then((count) => {
							done()
						})
				})
		})
	})	
}

module.exports = {
	userMiddlewareTest
}