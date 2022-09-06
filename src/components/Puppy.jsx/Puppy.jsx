import { useEffect, useState } from "react"
import "./Puppy.css"
const Puppy = ({breed}) => {
    console.log('breed:', breed)
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        getData(breed)
    },[breed])
    const getData= async(breed)=>{
        console.log('type:', typeof breed)
        let res = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        res=await res.json();
        setData(res.message)
    }
    console.log('data:', data)

  return (
    <div className="container" >
        {breed?<div className="imgCont">{data?.map((el)=><div ><img src={el} alt="img" /></div>)}</div>:<p>Search for Breed</p>}
    </div>
  )
}

export default Puppy