import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./Component/Services/Reducer/TodosReducer";

const store = createStore(todosReducer , applyMiddleware(thunk));
export default store;