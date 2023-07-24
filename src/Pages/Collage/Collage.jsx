import { useEffect, useState } from "react";
import SingleCollage from "./SingleCollage";

const Collage = () => {
  const [collage, setCollage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://study-portal-server.vercel.app/collage")
      .then((res) => res.json())
      .then((data) => {
        setCollage(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <div className="grid grid-cols-3 pt-28 gap-8 px-20 ">
        {collage.map((item) => (
          <SingleCollage item={item} key={item._id}></SingleCollage>
        ))}
      </div>
    </div>
  );
};

export default Collage;
