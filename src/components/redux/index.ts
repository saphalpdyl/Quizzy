import { createStore, combineReducers } from "redux";
import { questionReducer } from "./reducers/questionReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { questionListReducer } from "./reducers/questionsListReducer";

export const rootReducers = combineReducers({
	sq: questionReducer,
	questionsList: questionListReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export default store;
