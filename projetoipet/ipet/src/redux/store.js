
import {configureStore} from "@reduxjs/toolkit"
import reducerSlice from "./test/testReduxToolkit"

export default configureStore({
    reducer:{
        usuarioCheck : reducerSlice,
    }
})