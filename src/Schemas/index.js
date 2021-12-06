const userSchema = require("./CreateUserSchema");
const authSchema = require("./AuthSchema");
const postSchema = require("./CreatePostSchema");
const commentSchema = require("./CreateCommentSchema");

module.exports = { userSchema, authSchema, postSchema, commentSchema };
