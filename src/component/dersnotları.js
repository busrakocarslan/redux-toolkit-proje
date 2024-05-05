//redux tolkitte redux a göre biraz  farklılık var öncelikle configurestore ile başlıyoruz böylece devtoool etkin hale geliyor. 
// bırada configurestore içiresinde obje şeklinde birden fazla reduser verebiliyoruz. combine yapmaya gerek kalmıyor kendi yapıyor
// provider kısmında farklılık yok
// type reduser ve acition i bir arada yapıyoruz bunun adı da Slice

//diğer önemli farklılık slice kavramı createSlice ile oluşturuyoruz. içerisindeki name= actiondaki type , reduser içerisinde obje olarak action creater fonk yazıyorsun. ekstra bir switch case yazmaya gerek olmuyor. 
// yayınladığımız reducerleri destruc şeklinde exportluyoruz.Eg export const { increment, decrement, incrementByAmount } = counterSlice.actions
// en alttaki export ise eg. export default counterSlice.reducer store için orada importluyoruz. 
//api isteklerinde middleware kullanmamız gerekiyor.redux içinde adı tunhk olan bir default middleware var veye 3part kütüphane saga var. 