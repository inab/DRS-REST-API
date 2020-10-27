import mongoose from 'mongoose';

export default callback => {
	const mongo = mongoose.connect('mongodb://username:pwd@host:27017/db?authSource=admin')
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log("Could not connect to MongoDB", err));
	callback(mongo); 
}
