import { createStore, combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  form: FormReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
