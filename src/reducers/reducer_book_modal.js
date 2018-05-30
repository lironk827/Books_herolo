import { ACTIONS } from '../consts'

export default function (state = false, action) {
    switch (action.type) {
        case ACTIONS.SHOW_BOOK_MODAL :
            return action.payload
    }

    switch (action.type) {
        case ACTIONS.HIDE_BOOK_MODAL : 
            return action.payload
    }

    return state
}