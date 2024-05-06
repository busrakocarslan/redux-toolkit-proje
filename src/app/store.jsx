import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import apiReducer from "../features/apiSlice";

export const store=configureStore({
    reducer:{
        login:loginReducer,
        text:apiReducer
     },
    //  devTools:process.env.NODE_ENV !=="!production",
     //? eger gelistirme asamasi production ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
})
// aslında oluşturduğumuz adlar apislice ve loginslice idi. ancak best prac de reduser kullanmak gerekli olduğundan ve exprot defaultla yolladığımızdan direk isminşi değiştirerek yazım.  redux daki gibi combinereduser kullanmadık doğrudan birrada yazdık. 

//devtools'u kapatma:aşamaya göre bunu kapatmak mümkün kapatmak gerekir zaten 
// process.env=> uygulamanın node ortamındaki safhasını öğrenemebildiğimiz kod 
// NODE_ENV === "development"