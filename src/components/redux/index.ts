import { createStore, combineReducers } from "redux";
import { questionReducer } from "./reducers/questionReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { questionListReducer } from "./reducers/questionsListReducer";
import { travelQuestionReducer } from "./reducers/travelQuestionReducer";
import { audioQuestionReducer } from "./reducers/audioQuestionReducer";
import { visualQuestionReducer } from "./reducers/visualQuestionReducer";
import { numberQuestionsListReducer } from "./reducers/numberQuestionsListReducer";

export const rootReducers = combineReducers({
	sq: questionReducer,
	questionsList: questionListReducer,
	numberQuestionsList: numberQuestionsListReducer,
	trvQues: travelQuestionReducer,
	advQues: audioQuestionReducer,
	visQues: visualQuestionReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export default store;
