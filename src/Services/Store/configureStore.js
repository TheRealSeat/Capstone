import { createStore,applyMiddleware } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../Slices/rootReducer";
import thunk from 'redux-thunk';

export default function configureStore(){
   const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
   

   return store;
}
