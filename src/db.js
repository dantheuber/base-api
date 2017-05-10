import mongoose from 'mongoose';
import config from '../config/';
export default callback => {
	mongoose.connect(config.mongoose.db, callback);
}
