import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyCollage = () => {
  const [myCollage, setMyCollage] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://study-portal-server.vercel.app/collage/myCollage/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Error fetching classes");
        }
        const data = await response.json();
        setMyCollage(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
        // Handle error, e.g., show an error message
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);
  return (
    <div className="w-full">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            {myCollage.length}
            <th>#</th>
            <th>Name</th>
            <th>Course Describtions</th>
          </tr>
        </thead>
        <tbody>
          {myCollage.map((collage) => (
            <tr>
              <td>
                <div className="w-20 h-16">
                  <img src={collage.image} />
                </div>
              </td>
              <td>{collage.courseName}</td>
              <td>{collage.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCollage;
