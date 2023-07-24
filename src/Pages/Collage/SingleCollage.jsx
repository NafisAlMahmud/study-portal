import { Link } from "react-router-dom";

const SingleCollage = ({ item }) => {
  const {
    college_name,
    college_rating,
    admission_date,
    research_count,
    _id,
    college_image,
  } = item;
  return (
    <div className="mx-auto card w-96 bg-base-100 shadow-sm rounded-none border-x-2 border-y-4">
      <figure>
        <img src={college_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <p className="font-semibold">Ratings: {college_rating}</p>
        <p>{admission_date}</p>
        <div className="card-actions justify-end">
          <Link to={`/detailCollage/${_id}`}>
            <button className="btn btn-outline">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCollage;
