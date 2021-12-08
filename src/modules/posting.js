import { createAction, handleActions } from "redux-actions";

// action

const POST = "user/POST";

// action creater

const addPost = createAction(POST, ())

// initialState

const initialState = {
    list : [],
}

// reducer
