import {createStore, createLogger} from "vuex";

let debug;
export default createStore({
    modules: {

    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});