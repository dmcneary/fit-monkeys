import mongoose from "mongoose";
const Schema = mongoose.Schema;
mongoose.promise = Promise;


const activitySchema = new Schema({
    userId: { type: String, unique: false, required: true },
    actTitle: { type: String, unique: false, required: true },
    actDesc: { type: String, unique: false, required: true },
    actDate: { type: Date, unique: false, required: true },
	distance: { type: Number, unique: false, required: true },
    durationMins: { type: Number, unique: false, required: true },
    durationSecs: { type: Number, unique: false, required: true },
    sportType: { type: String, unique: false, required: true },
});

const Activity = mongoose.model('user', activitySchema);
module.exports = Activity;