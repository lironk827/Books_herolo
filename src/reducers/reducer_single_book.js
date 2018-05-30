import { ACTIONS } from '../consts'

export default function (state = null, action) {
    switch (action.type) {
        case ACTIONS.SELECT_BOOK :
            return action.payload
        
        case ACTIONS.NEW_BOOK :
            return action.payload
    }

    return state
}