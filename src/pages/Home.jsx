import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../features/apiSlice'
import loadingGif from "../assets/loading.gif"
import { GiH2O } from 'react-icons/gi'

const Home = () => {
  const { newsData,loading,error }=useSelector(state=>state.text)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getNews())
   
  }, [])
  


  return (
    <div>
      <Navbar />
      {loading && <img src={loadingGif} />}
      { error && <h2 className='text-main text-2xl text-center mt-5'>Oops Something went wrong</h2> }
      <div className='w-[90%] m-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
  {newsData?.map((item, key) => (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
      <img src={item?.urlToImage} loading="lazy" alt={item?.title} className="w-full h-48 rounded-t-md" />
      <div className="flex items-center mt-2 pt-3 ml-4 mr-2">            
        <div className="ml-3">
          <h3 className="text-xl text-gray-900">{item?.title}</h3>
          <span className="block text-gray-900">{item?.content}</span>
        </div>
      </div>
      <div className="pt-3 ml-4 mr-2 mb-3"></div>
    </article>
  ))}
</div>

    </div>
  );
}


export default Home


