import React,{useState} from "react";
import MadlibForm from "./MadlibForm";



const Madlib=()=>{
    const [madlibs,setMadlibs]=useState([])
    const [displayStory,setDisplayStory]=useState(true)
    const addStory=(id,noun,noun2,adjective,color)=>{
        setMadlibs(s=>[...s,{id,noun,noun2,adjective,color}])
        setDisplayStory(displayStory=>!displayStory)
    }
    // restart function
    const restart =()=>{
        setMadlibs("")
        setDisplayStory(true)
    }   
    return (
        <div>
            {/* toggle to display form or story */}
            {displayStory && <MadlibForm addStory={addStory}/>}
        
      
            {!displayStory &&
            <div>

                <p>There was a {madlibs.color} {madlibs.noun2} 
                who loves a {madlibs.adjective} {madlibs.noun}</p>
                <button onClick={restart}>restart</button>
            </div>
            
            }
       
       </div>
    )

}

export default Madlib;