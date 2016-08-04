var mongoose = require('mongoose')

var EntrySchema = new mongoose.Schema({

	title:{type:String, trim:true, default:''},
	url:{type:String, trim:true, default:''},
	timestamp:{type:Date, default:Date.now}


})

module.exports = mongoose.model('EntrySchema', EntrySchema)