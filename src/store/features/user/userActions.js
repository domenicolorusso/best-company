import {TAKE_NAME, TAKE_SURNAME, TAKE_TEL, TAKE_EMAIL, TAKE_CONFIRMEMAIL } from '../../actionTypes'

export const takeName = (text) => {
    return {
        type: TAKE_NAME,
        payload: text
    }
}
export const takeSurname = (text) => {
    return {
        type: TAKE_SURNAME,
        payload: text
    }
}
export const takeTel = (text) => {
    return {
        type: TAKE_TEL,
        payload: text
    }
}
export const takeEmail = (text) => {
    return {
        type: TAKE_EMAIL,
        payload: text
    }
}
export const takeConfirmEmail = (text) => {
    return {
        type: TAKE_CONFIRMEMAIL,
        payload: text
    }
}
