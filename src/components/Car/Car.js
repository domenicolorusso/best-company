import React from "react";
import { useSelector } from "react-redux";
import { currencyFormatter } from '../../utils/currencyFormatter'
const URL_img =
  "https://www.hommeet.com/wp-content/uploads/2020/06/logo-02-300x180.png";
function Car() {
  const { price } = useSelector((state) => state.install);

  return (
    <div className="Car">
      <img src={URL_img} alt="Best Company Logo" />
      <div>
        <h4>Yaris</h4>
        <h4 className="carPrice">{`Prezzo: ${currencyFormatter(price)}`}</h4>
      </div>
    </div>
  );
}

export default Car;
