import { useState } from "react"

const Section=({title,description,isVisible,setIsVisible})=>{
return(
  <div className="border border-black p-2 m-2" >
    <h1>{title}</h1>
    {isVisible?(<button onClick={()=>setIsVisible(false)}>Hide</button>):(<button onClick={()=>setIsVisible(true)}>Show</button>)}
    
    
    {isVisible && <h3>{description}</h3>}
  </div>
)
}

const Instamart = () => {
  const[visibleSection,setIsVisibleSection]=useState("about")
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
     <Section 
     title={"About Instamart"}
     description={"this is the about section of instamart"}
     isVisible={visibleSection=="about"}
     setIsVisible={()=>setIsVisibleSection("about")} />

     <Section 
     title={"Team Instamart"}
     description={"this is the team section of instamart"}
     isVisible={visibleSection=="team"}
     setIsVisible={()=>setIsVisibleSection("team")}/>

     <Section 
     title={"Carrer Instamart"}
     description={"this is the carrer section of instamart" }
     isVisible={visibleSection=="carrer"}
     setIsVisible={()=>setIsVisibleSection("carrer")}/>
    </div>
  )
}

export default Instamart
