import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  newsData:[],
  loading:false,
  error:false

}
export const getNews=createAsyncThunk(
  "getNews",//action type
async()=>{
  const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  const {data}=await axios(url)
  console.log(data.articles);
  return data.articles // return yapmazsan payload gelmiyor
}//api istek func
)// 2.aşama bu

const apiSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false
        state.newsData = payload
      })
      .addCase(getNews.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export const {} = apiSlice.actions

export default apiSlice.reducer

//1. aşama önce thunk import et middleware için aysnc tunck=> tunk üzerinden ayncs func yazmamıza yarıyor. 
//2.aşama da cerateasyctunk fonk oluşturyorsun parametleri bir string alıyor ve sonra payloadcerate func alıyor.
//3.aşama ilgili yerde kullanmak için fonc export ediyoruz. 
//4.aşama sergileyeceğimiz sayfada oluşturduğumzu fonk useEffeck içinde yazıyoruz. 
// api isteklerinde 3 aşama vardır pending fullfilled ve rejected aşamaları promisin temel yapısı. stateleri güncellemesi için hazır bir sytax yapısı var bizim buarada onu kullanmamaız gerek o da 5. aşama 
//! bu saydığım 3 durumu kontrol etmek için extrareducer yapısını kullanmak gerekiyor. createaycsktunck kullandığında bunu kullanacaksın.
//bu sytaxı dökumandan olumalıusın 
//extrareducer bir key karşıdı da bir fonk 
// parametre olmak zournda best prac de builder deniyor. builder ile addcaseler yazıyoruz. 
// bu sytaxı ezberlemene gerek yok dökümandan alıyorsun