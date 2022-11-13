
import {configureStore} from "@reduxjs/toolkit"
import inCheckUser from "./slice"

export default configureStore({
    reducer:{
        usercheck : inCheckUser
    }
})
