import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = ({ setBreed }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let breeds = Object.keys(res.message);
        setData(breeds);
      });
    console.log("data:", data);
  };
  const openImage = (el) => {
    setBreed(el);
    navigate("/puppy");
  };
  return (
    <div className="container">
      <div className="cards">
        {data?.map((el) => (
          <div>
            <p>{el}</p>
            <button onClick={(el) => openImage(el)}>Open Image</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
