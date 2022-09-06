import "./Puppy.css"
const Puppy = ({breed}) => {
    
  return (
    <div className="container" >
        {breed?<div></div>:<p>Search for Breed</p>}
    </div>
  )
}

export default Puppy