import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Option2.css";

export default function Option2({ selectedOption, setSelectedSubOption }) {
  const navigate = useNavigate();

  const handleSubOptionSelection = (subOption) => {
    setSelectedSubOption(subOption);
    if (subOption.title === "Auto-entrepreneur") {
      navigate("/select-form1");
    }
    else if(subOption.title === "Profession libérale"){
      navigate("/select-form2");
    }
    else if(subOption.title === "Offline business"){
      navigate("/select-form3");
    }
    else if(subOption.title === "Start-up"){
      navigate("/select-form4");
    }
    else if(subOption.title === "TPE-PME"){
      navigate("/service");
    }
    else if(subOption.title === "Grande Entreprise/Multi-nationale"){
      navigate("/service");
    }
    else if(subOption.title === "Prestation"){
      navigate("/service");
    }
    else if (subOption.title === "Questions/Réponses") {
      navigate("/question-form");
    } 
    else {
      navigate("/confirm");
    }
  };

  const handleBack = () => {
    navigate('/option')
  };

  if (!selectedOption) {
    navigate(-1)
  }

  const handleReset = () => {
    navigate('/');
  };

  if (!selectedOption) {
    return(
      <div className="confirm-container">
      <div className="confirm-content"> 
      <p>Une erreur s'est produite lors de lz sélection de l'une des options. Veuillez sélectionner à nouveau</p>      
        <button className="option2-button" onClick={handleReset}>
          réinitialiser
        </button>
      </div>
      </div>)
  }

  return (
    <div className="option2-container">
    <div className="progress-bar-option2"></div>
      <h2 className="option2-h2">Option 2</h2>
      <div className="options2-items">
        {selectedOption.subOptions.map((subOption) => (
          <div
            key={subOption.id}
            onClick={() => handleSubOptionSelection(subOption)}
            className="option2-item"
          >
            <img className="option2-img" src={subOption.image} alt="" />
            <p className="option2-title">{subOption.title}</p>
          </div>
        ))}
      </div>
      <button className="option2-button" onClick={handleBack}>
      Retour
      </button>
    </div>
  );
}
