import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsCollage = () => {
  const detailCollage = useLoaderData();

  const {
    college_name,
    college_rating,
    admission_date,
    research_count,
    _id,
    college_image,
  } = detailCollage;
  return (
    <div className="">
      <img
        src={college_image}
        className="w-full mx-auto object-cover h-80"
        alt=""
      />
      <div className="lg:mx-20 mt-10">
        <h3 className="text-4xl font-bold">{college_name}</h3>
        <p className="text-base font-medium pt-5">Rating: {college_rating}</p>
        <p className="text-base font-medium pt-5">
          Admission date: {admission_date}
        </p>
        <p className="text-base font-medium pt-5">
          Research count: {research_count}
        </p>
        <button className="justify-end mt-5 btn btn-primary">Apply now</button>
      </div>
    </div>
  );
};

export default DetailsCollage;
