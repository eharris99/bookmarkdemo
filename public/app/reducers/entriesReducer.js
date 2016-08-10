import constants from '../constants/constants'

var initialState = {
	entries: {},
	entriesArray: []
}

export default function(state = initialState, action){
	switch (action.type) {

		case constants.ENTRIES_RECEIVED:
			console.log('ENTRIES_RECEIVED: '+JSON.stringify(action.entries))
			var newState = Object.assign({}, state)
			newState['entriesArray'] = action.entries
			
			return newState

		default:
			return state
	}

}