const userSeed = {
	joe: {
		init: { name: "joe", postCount: 0, posts: [{title: "Blah Blah Blah"}]},
		initWith: {
			emptyName: {name: "", postCount: 0},
			shortName: {name: "Al", postCount: 0},
			posts: {name: "joe", postCount: 0, posts: [{title: "Blah Blah Blah"}]}
		},
		updateProps: {
			name: "alex"
		},
		add: {
			post: {title: "Yoooooooooooooooooooooo"}
		}
	}
}

module.exports = {
	userSeed
}