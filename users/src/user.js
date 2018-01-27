const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = require('./post');

const userSchema = new Schema({
	name: {
		type: String,
		validate: {
			validator: (name) => name.length > 2,
			message: "Name must be 2 or more characters long"
		}, 
		required: [true, "Name is required"]
	},
	posts: [PostSchema],
	likes: Number,
	blogPosts: [{
		type: Schema.Types.ObjectId,
		ref: 'blogpost'
	}]
});

userSchema.virtual('postCount').get(function() {
	return this.posts.length;
})

const User = mongoose.model('user', userSchema);

module.exports = User;