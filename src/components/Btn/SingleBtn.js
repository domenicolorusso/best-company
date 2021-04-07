import React from "react";

function SingleBtn(props) {
  const { isOff } = props;
  return (
    <div className="SingleBtn">
      <button type="button" className={props.class} disabled={isOff}>
        {props.btnNames}
      </button>
    </div>
  );
}

export default SingleBtn;
