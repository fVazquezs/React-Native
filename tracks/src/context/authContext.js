import createDataContext from "./createDataContext"
import trackerApi from "../api/trackerApi"
import { AsyncStorage } from "react-native"
import { navigate } from "../navigationRef"

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { token: action.payload, errorMessage: '' }
        case 'singout':
            return { token: null, errorMessage: '' }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }

}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (e) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with signin' })
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('loginFlow')
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (e) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with signup' })
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signin,
        signout,
        signup,
        clearErrorMessage,
        tryLocalSignin
    },
    { token: null, errorMessage: '' }
)