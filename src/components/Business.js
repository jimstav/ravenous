import React from "react";

const Business = ({ business }) => {
  return (
    <div className="card">
      <img src={business.imageSrc} alt={business.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title small">{business.name}</h5>
        <div className="card-text row">
          <div className="col-md-7">
            <p className="small">{business.address}</p>
            <p className="small">{business.city}</p>
            <p className="small">
              {business.state} {business.zipCode}
            </p>
          </div>
          <div className="col-md-5">
            <h6 className="small">{business.category.toUpperCase()}</h6>
            <h6 className="small">{business.rating} stars</h6>
            <p className="small">{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
