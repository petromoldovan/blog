import axios from 'axios'

import constants from '../constants'


export const fetchStuff = url => dispatch => {
	axios.get("http://localhost:3000/posts")
		.then(res => {
			dispatch({
				type: constants.API_FETCH_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type: constants.API_FETCH_FAIL,
				payload: err
			})
		})
}
