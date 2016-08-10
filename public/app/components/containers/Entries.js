import React, {Component} from 'react'
import EntryPreview from '../../components/EntryPreview'
import APIManager from '../../utils/APIManager'

class Entries extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			entries: [
				{id:0, title:'Google', url:'http://www.google.com'},
				{id:1, title:'ESPN', url:'http://www.espn.com'},
				{id:2, title:'Deadspin', url:'http://www.deadspin.com'},
				{id:3, title:'Reddit', url:'http://www.reddit.com'}
			]
		}
	}

	componentDidMount(){
//		console.log('Component Did Mount')
		APIManager.handleGet('/api/entry', null, function(err, response){
			if (err){
				alert(err)
				return
			}

			console.log('Entries: '+JSON.stringify(response))

		})

	}

	render(){
		var entryList = this.state.entries.map(function(entry, i){
			return <EntryPreview key={entry.id} entry={entry} />
		})
		// var entryArray = this.props.entries[this.props.params.phone]
		// var entryList = null
		// if (entryArray != null){
		// 	entryList = entryArray.map(function(entry, i){
		// 		return <EntryPreview key={entry._id} entry={entry} />
		// 	})
		// }


		return (
			<div>
				
				<h2>Entries</h2>

				{entryList}

			</div>
		)
	}

}

export default Entries