import React, {Component} from 'react'

class Entries extends Component {

	render(){
		var entryArray = this.props.entries[this.props.params.phone]
		var entryList = null
		if (entryArray != null){
			entryList = entryArray.map(function(entry, i){
				return <EntryPreview key={entry._id} entry={entry} />
			})
		}


		return (
			<div>
				<Header />
				<h2>Entries</h2>

				{entryList}

			</div>
		)
	}

}

export default Entries