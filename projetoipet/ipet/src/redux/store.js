
import {configureStore} from "@reduxjs/toolkit"
import reducerPrimary from "./slice"

export default configureStore({
    reducer:{
        usercheck : reducerPrimary,
    }
})
