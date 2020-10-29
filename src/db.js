import mongoose from 'mongoose';

export default callback => {

	// connect to MongoDB, then pass it to the callback fn:
	const mongo = mongoose.connect('mongodb://*:*@*:27017/*?authSource=*')
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log("Could not connect to MongoDB", err));
	callback(mongo); 

}
