import React from "react";

const Business = ({ business }) => {
  return (
    <div className="card">
      <img src={business.image_url} alt={business.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title small">{business.name}</h5>
        <div className="card-text row">
          <div className="col-md-7">
            <p className="small">{business.location.address1}</p>
            <p className="small">{business.location.city}</p>
            <p className="small">
              {business.state} {business.location.zip_code}
            </p>
          </div>
          <div className="col-md-5">
            <h6 className="small">{business.categories[0].title.toUpperCase()}</h6>
            <h6 className="small">{business.rating} stars</h6>
            <p className="small">{business.review_count} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
