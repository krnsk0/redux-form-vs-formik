import { createStore, combineReducers } from 'redux';
import { reducer as FormReducerV5 } from 'redux-form-v5';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  formV5: FormReducerV5,
});

export const store = createStore(rootReducer, composeWithDevTools());
