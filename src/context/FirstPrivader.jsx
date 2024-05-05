import React, { createContext, useContext, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const firstContext=createContext()// 1. aşama contexi oluşturma

export const useFirstContext=()=>{// 3. aşama contexi kullanmak için contom hook oluşturma
    return useContext(firstContext)
}

// GİRİŞ BİLGİSİ İLE GÖSTERİLEN SAYFALAR DEĞİŞECEĞİNDEN İNFO BİLGİSİNİ CONTEXT YAPISINDA TANIMLAYIP İHTİYAÇ  OLAN YERDE COSTOM HOOK İLE KULLANACAĞIM


const FirstPrivader = (props) => {
    const [loog,setLoog]=useState(JSON.parse(sessionStorage.getItem("loog")) || false )// başta false doğru girince kullanıcı adını true olacak şekilde ayarladım ama hata aldım come da değiştirriken kalıcı olsun pencere kapanana kadar diye session store atadım
    const navigate=useNavigate()
    const come=()=>{
        setLoog(!loog)
        navigate("/home")
    }
    useEffect(()=>{
        sessionStorage.setItem("user",JSON.stringify(loog))
      },[loog])
  return (
    <firstContext.Provider value={{come}}>{props.children}</firstContext.Provider>//2. aşama sarmalama
  )
}

export default FirstPrivader