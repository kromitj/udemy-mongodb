const userSeed = {
	joe: {
		init: { name: "joe", posts: [{title: "Blah Blah Blah"}], likes: 0},
		initWith: {
			emptyName: {name: "", posts: [{title: "Blah Blah Blah"}], likes: 0},
			shortName: {name: "Al", posts: [{title: "Blah Blah Blah"}], likes: 0},
		},
		updateProps: {
			name: "alex"
		},
		add: {
			post: {title: "Yoooooooooooooooooooooo"}
		}
	},
	blogPosts: {
		init: {title: "Superman Seen again", content: "When will he stop trying to fix other peoples shit"}
	},
	comments: {
		init: {content: "I seen him!!!!!!"}
	}
}

module.exports = {
	userSeed
}