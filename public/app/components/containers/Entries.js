import React, {Component} from 'react'
import EntryPreview from '../../components/EntryPreview'
import APIManager from '../../utils/APIManager'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'

class Entries extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			// entries:[

			// ]
		}
	}

	componentDidMount(){
		var _this=this
//		console.log('Component Did Mount')
		APIManager.handleGet('/api/entry', null, function(err, response){
			if (err){
				alert(err)
				return
			}

			// var entries = response.results

			// _this.setState({
			// 	entries: entries
			// })

			// console.log('Entries: '+JSON.stringify(response))
			store.dispatch(actions.entriesReceived(response.results))

		})

	}

	render(){
		var entryList = this.props.entries.map(function(entry, i){
			return <EntryPreview key={entry._id} entry={entry} />
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

// export default Entries

const stateToProps = function(state){
	return {
		entries: state.entriesReducer.entriesArray
	}

}

export default connect(stateToProps)(Entries)