import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { username: "" },
};

const loginSlice = createSlice({
  name: "login", //aciton in typei
  initialState, // hem key hem value aynı olduğundan tek yazdık
  reducers: {
    // buradaki keylerimizin valuesu action creating fonksiyonlarımız keylerin valueları bir fonk olacak! callback de olur exp yöntemi ile de
    setUser: (state, action) => {
      // bu fonk kullanmak için aşağıda export ettik
      state.user = action.payload;
    },
    clearUser: function (state, user) {
      state.user={username:""}
    },
  },
});

export const { setUser, clearUser } = loginSlice.actions;

export default loginSlice.reducer;
// bu reduser sisteminde aslında ortaya çıkan login/setUser gibi login/claruser gibi fonk ortaya çıkıyor toollkit bunu yapıyor. 