const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;


const activitySchema = new Schema({
	belongsTo: { type: String, unique: true, required: true },
	distance: { type: Number, unique: false, required: true },
	duration: { type: String, unique: false, required: true },
    sportType: { type: String, unique: false, required: true },
    date: { type: Date, unique: false, default: Date.now, required: true },
    description: { type: String, unique: false, required: true }
});

const Activity = mongoose.model('user', activitySchema);
module.exports = Activity;