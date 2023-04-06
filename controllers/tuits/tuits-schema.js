import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    retuits: Number,
    replies: Number,
    handle: String,
    userName: String,
    time: String,
    image: String,
}, {collection: 'tuits'});
export default schema;

