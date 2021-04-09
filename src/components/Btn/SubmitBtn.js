import React from "react";
import SingleBtn from "./SingleBtn";

function SubmitBtn(props) {
  return (
    <div>
      <SingleBtn
        buttonType={"submit"}
        btnClass={props.btnClass}
        btnNames={props.btnNames}
        isOff={props.isOff}
      />
    </div>
  );
}

export default SubmitBtn;
