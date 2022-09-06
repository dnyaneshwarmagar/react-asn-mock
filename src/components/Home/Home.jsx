
import { useEffect, useState } from "react"
import "./Home.css"
const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getData()
    },[])

    const getData= async()=>{
        let res = fetch("https://dog.ceo/api/breeds/list/all").then((res)=>res.json()).then(res=> {console.log(res)
        let breeds = Object.keys(res.message)
        setData(breeds)
       
    })
    console.log('data:', data)
    }
  return (
    <div className="container">
    
      <div className="cards">
        {data?.map(el=><div><p>{el}</p>
        <button>Open Image</button>
        </div>)}
      </div>
   
      
    </div>
  )
}

export default Home