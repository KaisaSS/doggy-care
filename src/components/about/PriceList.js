import React from "react";

const PriceList = () => {
  return (
    <div className="price-container about-container">
      <div className="title">
        <h1>Pricelist</h1>
      </div>
      <h2>Walk</h2>
      <div className="pricelist-sizes">
        <h3>All sizes</h3>
        <p>30 minutes £10</p>
        <p>60 minutes £15</p>
      </div>
      <h2>Daycare and Boarding</h2>
      <div className="pricelist">
        <div className="pricelist-sizes">
          <i class="fas fa-dog fa-3x"></i>
          <h3 className="dog-size">Small (0-7 kg)</h3>
          <p>Daycare £18 per day</p>
          <p>Boarding £23 per night</p>
        </div>
        <div className="pricelist-sizes">
          <i class="fas fa-dog fa-4x"></i>
          <h3 className="dog-size">Medium (7-18 kg)</h3>
          <p>Daycare £20 per day</p>
          <p>Boarding £25 per night</p>
        </div>
        <div className="pricelist-sizes">
          <i class="fas fa-dog fa-5x"></i>
          <h3 className="dog-size">Large (18-45 kg)</h3>
          <p>Daycare £22 per day</p>
          <p>Boarding £27 per night</p>
        </div>
        <div className="pricelist-sizes">
          <i class="fas fa-dog fa-6x"></i>
          <h3 className="dog-size">Extra Large (45+ kg)</h3>
          <p>Daycare £24 per day</p>
          <p>Boarding £29 per night</p>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
