import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoSlice from "./todoSlice";

const sagaMiddleWare = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];


export default configureStore({
    reducer: {
        todo: todoSlice
    }
})


sagaMiddleWare.run(rootSaga);