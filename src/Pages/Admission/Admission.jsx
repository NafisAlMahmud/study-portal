import { useEffect, useState } from "react";
import SingleAdmission from "./SingleAdmission";

const Admission = () => {
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
    <div className="w-full mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              {collage.map((item) => (
                <SingleAdmission item={item} key={item._id}></SingleAdmission>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
