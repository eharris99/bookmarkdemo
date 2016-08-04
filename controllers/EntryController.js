var Entry = require('../models/Entry')

module.exports = {

	get: function(params, isRaw, callback){
		Entry.find(params, function(err, entries){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null){
				// if (isRaw == true){
				// 	callback(null, entries)
				// 	return
				// }

				// var summaries = []
				// for (var i=0; i<entries.length; i++){
				// 	var entry = entries[i]
				// 	summaries.push(place.summary())
				// }

				callback(null, entries)
			}
		})
	},

	getById: function(id, isRaw, callback){
		Entry.findById(id, function(err, entry){
			if (err){
				if (callback != null)
					callback({message:'Entry Not Found'}, null)

				return
			}

			if (callback != null)
				callback(null, Entry)
		})
	},

	post: function(params, callback){

		Entry.create(params, function(err, entry){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null)
				callback(null, entry)
		})
	},

	// put: function(id, params, callback){
	// 	Place.findByIdAndUpdate(id, params, {new:true}, function(err, place){
	// 		if (err){
	// 			if (callback != null)
	// 				callback(err, null)

	// 			return
	// 		}

	// 		if (callback != null)
	// 			callback(null, place.summary())
	// 	})
	// }



}