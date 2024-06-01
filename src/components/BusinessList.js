import React from "react";
import Business from "./Business";

const businesses = [
  { name: "dummy business 1" },
  { name: "dummy business 2" },
  { name: "dummy business 3" },
  { name: "dummy business 4" },
  { name: "dummy business 5" },
  { name: "dummy business 6" },
  { name: "dummy business 7" },
  { name: "dummy business 8" },
  { name: "dummy business 9" },
];

const BusinessList = () => {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {businesses.map((value, index) => {
          return <Business key={index} />;
        })}
      </div>
    </>
  );
};

export default BusinessList;
