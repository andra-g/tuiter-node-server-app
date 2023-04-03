import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'
const tuitsModel = mongoose
    .model('TuitModel', tuitsSchema);


// The Mongoose model created in the previous section provides low level
// functions such as find, create, updateOne, and deleteOne, that are
// deliberately vague since they need to be able to operate on any collection.
export default tuitsModel;

