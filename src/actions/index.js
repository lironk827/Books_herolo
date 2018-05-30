import { ACTIONS } from '../consts'

export function loadBooks(books) {
    return {
        type: ACTIONS.LOAD_BOOKS,
        payload: books
    }
}

export function selectBook(book) {
    return {
        type: ACTIONS.SELECT_BOOK,
        payload: book
    }
}

export function newBook(id) {
    return {
        type: ACTIONS.NEW_BOOK,
        payload: {id, title: '', author: '', date: ''}
    }
}

export function addBook (book) {
    return {
        type: ACTIONS.ADD_BOOK,
        payload: book
    }
}

export function editBook (books) {
    return {
        type: ACTIONS.EDIT_BOOK,
        payload: books
    }
}

export function deleteBook (books) {
    return {
        type: ACTIONS.DELETE_BOOK,
        payload: books
    }
}

export function showBookModal(mode) {
    return {
        type: ACTIONS.SHOW_BOOK_MODAL,
        payload: {showBookModal: true, mode}
    }
}

export function hideBookModal() {
    return {
        type: ACTIONS.HIDE_BOOK_MODAL,
        payload: {showBookModal: false}
    }
}

export function showConfirmModal() {
    return {
        type: ACTIONS.SHOW_CONFIRM_MODAL,
        payload: true
    }
}

export function hideConfirmModal() {
    return {
        type: ACTIONS.HIDE_CONFIRM_MODAL,
        payload: false
    }
}