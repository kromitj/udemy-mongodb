const userValidationTest = (assert, User, userSeed) => {
	describe('Validations for User Model', () => {
		
		it('requires a name', (then) => {
			const [user, errorMessage ] = createUser(userSeed.joe.initWith.emptyName);
			assert(errorMessage === 'Name is required')
			then();
		})
		it('requires a name longer then chars', (then) => {
			const [user, errorMessage ] = createUser(userSeed.joe.initWith.shortName);
			assert(errorMessage === 'Name must be 2 or more characters long')
			then();
		})
		it('disallows invalid recoreds from being saved', (done) => {
			const [user,] = createUser(userSeed.joe.initWith.shortName)
			user.save()
				.catch((validationResult) => {
					const message = validationResult.errors.name.message;
					assert(message === 'Name must be 2 or more characters long');
					done()
				})
		})
	})

	const createUser = (userProps) => {
		const user = new User(userProps);
		const validationResult = user.validateSync();
		const errorMessage = validationResult.errors.name.message;
		return [user, errorMessage]
	}
}

module.exports = {
	userValidationTest
}