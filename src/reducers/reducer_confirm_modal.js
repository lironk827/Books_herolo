import { ACTIONS } from '../consts'

export default function (state = false, action) {
    switch (action.type) {
        case ACTIONS.SHOW_CONFIRM_MODAL : 
            return action.payload
    }

    switch (action.type) {
        case ACTIONS.HIDE_CONFIRM_MODAL  : 
            return action.payload
    }

    return state
}