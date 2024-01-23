"use client"

import { useState } from "react"
import Comments from "./Comments"

const ProductTabs = ({comments,description}:any) => {
    const[tab,setTab]=useState('details')
  return (
    <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <button
                  onClick={()=>setTab('details')}
                  type="button"
                    title=""
                    className={`${tab === 'details' ? 'border-b-2 border-gray-900':'border-b-2 border-transparent'} py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800`}
                  >
                    {" "}
                    توضیحات{" "}
                  </button>
  
                  <button
                  type="button"
                  onClick={()=>setTab('comments')}
                    title=""
                    className={`${tab === 'comments' ? 'border-b-2 border-gray-900' :'border-b-2 border-transparent'}  inline-flex items-center  py-4 text-sm font-medium text-gray-600  hover:border-gray-400 hover:text-gray-800`}
                  >
                    نظرات
                    <span className=" ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100 mr-1">
                      {" "}
                      {comments && comments.length}{" "}
                    </span>
                  </button>
                </nav>
              </div>

              {tab==='details' ?
              
              (
                <div className="mt-5 sm:mt-12 max-w-[350px] lg:max-w-lg break-words">
                <p className="text-3xl font-bold">مواد سازنده</p>
                <p className="mt-4">
                {description}
                </p>
              </div>
              )
              
              
              : 
              
              
              (
                 <Comments comments={comments} />

              )
              }
  
              
            </div>
  )
}

export default ProductTabs