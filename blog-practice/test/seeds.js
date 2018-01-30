const seeds = {
	user: {
		joe: {
			init: {
				username: "joe",
				password: "password123",
				email: "joe@gmail.com"
			},
			update: {
				username: "updatedUsername",
				email: "UpdatedJoe@gmail.com",
				password: "updatedPassword123"
			}
		}
	}
}

module.exports = seeds;