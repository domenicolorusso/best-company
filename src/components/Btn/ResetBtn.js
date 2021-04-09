import React from "react";
import SingleBtn from "./SingleBtn";

function ResetBtn(props) {
  return (
    <div>
      <SingleBtn
        buttonType={"reset"}
        btnClass={props.btnClass}
        btnNames={props.btnNames}
        isOff={props.isOff}
      />
    </div>
  );
}

export default ResetBtn;
