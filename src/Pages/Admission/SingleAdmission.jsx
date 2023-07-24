import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SingleAdmission = ({ item }) => {
  const { user } = useContext(AuthContext);
  const {
    college_name,
    college_rating,
    admission_date,
    research_count,
    _id,
    college_image,
  } = item;
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderItem = {
        itemId: _id,
        college_name,
        college_rating,
        admission_date,
        research_count,
        _id,
        college_image,
        email: user.email,
      };
      fetch("https://study-portal-server.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  };
  return (
    <div className="w-full ">
      {/* row 1 */}

      <td>
        <div className="flex items-center space-x-3 w-full">
          <div className="avatar">
            <div className=" w-48 h-16">
              <img src={college_image} alt=" Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{college_name}</div>
            <div className="text-sm opacity-50"> rating: {college_rating}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
      </td>
      <td>Admission date: {admission_date}</td>
      <td>Research Cout: {research_count}</td>
      <th>
        <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-ghost btn-xs font-bold text-yellow-500"
        >
          Apply Now
        </button>
      </th>
    </div>
  );
};

export default SingleAdmission;
