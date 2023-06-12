import React from 'react'

const Shimmer = () => {
  return (
    <div>
       <div className="Restaurant-List">
        {Array(10).fill("").map((e,index)=><div key={index} className="shimmer"></div>)}
       </div>
      
    </div>
  )
}

export default Shimmer
