
const mongoose = require('mongoose');

const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


// const activitySchema = require("./Activity");

const activitySchema = new Schema(
	{
		activityName: {
			type: String,
			required: true,
            unique: true,
            minlength: 3,
      		maxlength: 28
		},
		description: {
			type: String,
			required: true,
            unique: true,
            minlength: 10,
      		maxlength: 280
			
		},
        materials: [
            {
			type: String,
            required: true,
      		maxlength: 28
            },
        ],
        setUpTime: {
			type: Int,
			required: true,
        },
        tearDownTime: {
			type: Int,
			required: true,
		},
		
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);



const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
