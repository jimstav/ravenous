import React from "react";
import Business from "./Business";

const BusinessList = ({ businesses }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {businesses.map((value, index) => {
            return (
              <div key={index} className="col-md-4 mb-4">
                <Business business={value} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BusinessList;
