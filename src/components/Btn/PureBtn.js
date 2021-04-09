import React from "react";
import SingleBtn from "./SingleBtn";

function PureBtn(props) {
  return (
    <div>
      <SingleBtn
        buttonType={"button"}
        btnClass={props.btnClass}
        btnNames={props.btnNames}
        isOff={props.isOff}
      />
    </div>
  );
}

export default PureBtn;
