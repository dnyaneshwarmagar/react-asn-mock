import "./Search.css";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
const Search = ({setBreed}) => {
    const navigate = useNavigate();
  const [val, setVal] = useState("");
  console.log(val)
  const openImage = (val) => {
  
    setBreed(val);
    navigate("/puppy");
  };
  return (
    <div className="container">
        
      <h1>Search Breed of Dog</h1>
      <div>
        <input onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=>openImage(val)}>Search</button>
      </div>
      {}
    </div>
  );
};

export default Search;
