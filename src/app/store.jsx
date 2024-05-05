import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import apiReducer from "../features/apiSlice";

export const store=configureStore({
    reducer:{
        login:loginReducer,
        text:apiReducer
     },
})
// aslında oluşturduğumuz adlar apislice ve loginslice idi. ancak best prac de reduser kullanmak gerekli olduğundan ve exprot defaultla yolladığımızdan direk isminşi değiştirerek yazım.  redux daki gibi combinereduser kullanmadık doğrudan birrada yazdık. 