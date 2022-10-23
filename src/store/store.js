import { legacy_createStore as createStore } from "redux";

const dummyReducer = () => {
	return 11;
};

const store = createStore(dummyReducer);

export default store;
