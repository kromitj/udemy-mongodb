const userAssossiationTest = (assert, User, Comment, BlogPost, userSeed) => {
	
	 describe('Checking Assossiations: ', () => {
		beforeEach((done) => {
			let joe, comment, blogPost;
			joe = new User(userSeed.joe.init);
			blog = new BlogPost(userSeed.blogPosts.init);
			comment = new Comment(userSeed.comments.init);
			joe.blogPosts.push(blog);
			comment.user = joe
			blog.comments.push(comment);


			Promise.all([joe.save(), blog.save(), comment.save()])
			.then(() => done())
		})

		it("saves a relation between user and blogPost" , (done) => {
			User.findOne({name: "joe"})
			.populate('blogPosts')
			.then((user) => {
				assert(user.blogPosts[0].title === userSeed.blogPosts.init.title)
				done()
			})
		})
		it("saves a relation between blogPost and its comments", (done) => {
			BlogPost.findOne({title: userSeed.blogPosts.init.title})
			.populate('comments')
			.then((blogPost) => {
				assert(blogPost.comments[0].content === userSeed.comments.init.content)
				done()
			})
		})
		it('saves the relation between the comment and who wrote it', (done) => {
			Comment.findOne({content: userSeed.comments.init.content})
			.populate('user')
			.then((comment) => {
				assert(comment.user.name === userSeed.joe.init.name)
				done()
			})
		})
		it('can find all assossiations of the user', (done) => {
			User.findOne({name: userSeed.joe.init.name})
			.populate({
				path: 'blogPosts',
				populate: {
					path: 'comments',
					model: 'comment',
					populate: {
						path: 'user',
						model: 'user'
					}
				}
			})
			.then((user) => {
				console.log("user: ", user.blogPosts[0].comments[0].user)
				done()
			})
		})
	})	
}

module.exports = {
	userAssossiationTest
}