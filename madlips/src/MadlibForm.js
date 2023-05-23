import React,{useState} from "react";
import "./MadlibForm.css"

const MadlibForm=({addStory})=>{
    const INITIAL_STATE={
        noun:"",
        noun2:"",
        color:"",
        adjective:""
    }
    const [formData,setFormData]=useState(INITIAL_STATE)
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(formData=>({
            ...formData,[name]:value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addStory(formData.noun,
            formData.noun2,
            formData.color,
            formData.adjective)
        setFormData(INITIAL_STATE)

    }

    return (
        <div className="div">       
        <form className="Mablib-Form" onSubmit={handleSubmit}>
            <input type="text" value={formData.noun} name="noun" placeholder="noun" onChange={handleChange}/>
            <input type="text" value={formData.noun2}name="noun2"placeholder="noune 2"onChange={handleChange}/>
            <input type="text" value={formData.adjective}name="adjective"placeholder="adjective"onChange={handleChange}/>
            <input type="text" value={formData.color} name="color"placeholder="color"onChange={handleChange}/>
            <button>Get Story</button>
        </form>
        </div>
    )
}
export default MadlibForm;