const userSeed = {
	joe: {
		init: { name: "joe", posts: [{title: "Blah Blah Blah"}], likes: 0},
		initWith: {
			emptyName: {name: "", posts: [{title: "Blah Blah Blah"}], likes: 0},
			shortName: {name: "Al", posts: [{title: "Blah Blah Blah"}], likes: 0},
			posts: {name: "joe", posts: [{title: "Blah Blah Blah"}], likes: 0}
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