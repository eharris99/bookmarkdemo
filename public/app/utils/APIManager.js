import superagent from 'superagent'

export default {

	handleGet: function(endpoint, params, completion){
		superagent
		.get(endpoint)
		.query(params)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (completion == null)
				return

			if (err){ 
				completion(err, null)
				return
			}

			if (res.body.confirmation == 'success')
	    		completion(null, res.body)
			else 
	    		completion({message:res.body.message}, null)
		})

		// fetch(endpoint, {
		//     method: 'GET',
		//     headers: {
		//         'Accept': 'application/json',
		//         'Content-Type': 'application/json'
		//     },
		// })
		// .then(response => response.json())
		// .then(function(json){
	 //    	if (completion != null){
	 //    		if (json.confirmation == 'success')
		//     		completion(null, json)
	 //    		else
		//     		completion({message: json.message}, null)
	 //    	}
		// })
		// .catch(function(err){
	 //    	if (completion != null)
	 //    		completion(err, null)

		// })
	},

	// using superagent here because for some reason, cookies don't get installed using fetch (wtf)
	handlePost: function(endpoint, body, completion){
		superagent
		.post(endpoint)
		.send(body)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (completion == null)
				return

			if (err){ 
				completion(err, null)
				return
			}
			
			if (res.body.confirmation == 'success')
	    		completion(null, res.body)
			else 
	    		completion({message:res.body.message}, null)
		})
	}


}