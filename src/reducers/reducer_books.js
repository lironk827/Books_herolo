import { ACTIONS } from '../consts'

export default function (state = null, action) {
    switch (action.type) {
        case ACTIONS.LOAD_BOOKS : 
            return action.payload

        case ACTIONS.ADD_BOOK: 
            return [ action.payload, ...state  ]

        case ACTIONS.EDIT_BOOK: 
            return action.payload
        
        case ACTIONS.DELETE_BOOK:
            return action.payload
    }

    return state
}