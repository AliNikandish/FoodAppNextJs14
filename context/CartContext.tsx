"use client"
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({});


export const CartContextProvider = ({children}:any)=>{
    
    const [myCart,setMycart]=useState([])
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [details,setDetails]=useState({})
    

    useEffect(() => {
      fetch("/api/getMe").then((res) => {
        
        
        if (res.status === 200) {
          setIsLoggedIn(true)
          return res.json()
        }
      }).then(response=>{
        
        if(response){
          setDetails(response.user)
        }
      })
    }, []);

    useEffect(()=>{
      
        fetch('/api/cart')
        .then(res=>{
          if(res.status===200){
            return res.json()
          }
        })
        .then(response=>{
          if(response){
            setMycart(response.Cart)
          }
        })
      
    },[myCart])

    return (
        <CartContext.Provider
          value={{myCart,setMycart,isLoggedIn,setIsLoggedIn,details,setDetails}}
        >
          {children}
        </CartContext.Provider>
    )
}