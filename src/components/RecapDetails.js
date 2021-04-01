import React, { useState } from "react";
import DetailsTable from "./DetailsTable";
import { MdExpandLess,  MdExpandMore} from "react-icons/md";
function RecapDetails() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  function handleOpenDetails() {
    setIsDetailsOpen(!isDetailsOpen);
  }
  return (
    <div className="RecapDetails">
      <button type="button" onClick={() => handleOpenDetails()}>
        DETTAGLI
        {isDetailsOpen ? <MdExpandLess style={{fontSize: '20px'}}/> : <MdExpandMore style={{fontSize: '20px'}}/>}
      </button>

      {isDetailsOpen && <DetailsTable />}
    </div>
  );
}

export default RecapDetails;
