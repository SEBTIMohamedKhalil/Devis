import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Css/SelectForm.css'

export default function SelectForm({setselectForm}) {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setselectForm(selectedValue)
    navigate("/service");
  };

  const handleBack = () => {
    setselectForm();
    navigate(-1)
  };

  return (
    <div className="select-form-coantainer">
    <div className="progress-bar-select-form"></div>
     <div className='content-div-select-form'>
      <h2 className="select-form-h1">Votre Secteur d'activité?</h2>
      <div className="C-d">
      <form onSubmit={handleSubmit}>
        <select className="form-control select-option" value={selectedValue} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="value1">value1</option>
          <option value="value2">value2</option>
          <option value="value3">value3</option>
        </select>
        <button className="form-control btn btn-success button1" type="submit">Suivant</button>
        <button className="form-control btn btn-danger button2" onClick={handleBack}>Retour</button>
      </form>
      </div>
      </div>
    </div>
  );
}
