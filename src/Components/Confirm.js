import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Confirm.css";

export default function Confirm({
  formData,
  selectForm,
  questionFormData,
  service,
  selectedOption,
  selectedSubOption,
  setQuestionFormData,
}) {
  const navigate = useNavigate();

  const handleConfirme = () => {
    navigate("/thanks");
  };
  const handleBack = () => {
    setQuestionFormData("");
    navigate(-1);
  };
  const handleReset = () => {
    setQuestionFormData("");
    navigate("/");
  };

  if (!selectedOption || !selectedSubOption) {
    return (
      <div className="confirm-container">
        <div className="confirm-content">
          <p>
            Une erreur s'est produite lors de lz sélection de l'une des options.
            Veuillez sélectionner à nouveau
          </p>
          <button className="confirm-button" onClick={handleReset}>
            réinitialiser
          </button>
        </div>
      </div>
    );
  }

  let content = null;

  if (
    (selectedOption.title === "Particulier" &&
      (selectedSubOption.title === "Auto-entrepreneur" ||
        selectedSubOption.title === "Profession libérale" ||
        selectedSubOption.title === "Offline business")) ||
    (selectedOption.title === "Entreprise" &&
      selectedSubOption.title === "Start-up")
  ) {
    content = (
      <div className="confirm-content">
        <div className="progress-bar-confirm"></div>
        <h2>Les Options Que Vous Avez Choisies</h2>
        <h3>Les information Personnels:</h3>
        <p>Nom: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Téléphone: {formData.phone}</p>
        <h3>Informations Sélectionnées:</h3>
        <p>Option Sélectionnée 1:</p>
        <div className="selected-option">
          <p className="option-title">{selectedOption.title}</p>
        </div>
        <p>Option Sélectionnée 2:</p>
        <div className="selected-sub-option">
          <p className="sub-option-title">{selectedSubOption.title}</p>
        </div>
        <h3>Votre Secteur d'activité:</h3>
        <p>{selectForm}</p>
        <h3>Service Que Vous Etes Intéressé</h3>
        <p>{service.name_service}</p>
        <button className="confirm-button" onClick={handleBack}>
          Back
        </button>
        <button className="confirm-button" onClick={handleConfirme}>
          Confirme
        </button>
      </div>
    );
  } else if (
    (selectedOption.title === "Entreprise" &&
      (selectedSubOption.title === "Grande Entreprise/Multi-nationale" ||
        selectedSubOption.title === "TPE-PME")) ||
    (selectedOption.title === "Association/NGO" &&
      selectedSubOption.title === "Prestation")
  ) {
    content = (
      <div className="confirm-content">
        <div className="progress-bar-confirm"></div>
        <h2>Les Options Que Vous Avez Choisies</h2>
        <h3>Les information Personnels:</h3>
        <p>Nom: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Téléphone: {formData.phone}</p>
        <h3>Informations Sélectionnées:</h3>
        <p>Option Sélectionnée 1:</p>
        <div className="selected-option">
          <p className="option-title">{selectedOption.title}</p>
        </div>
        <p>Option Sélectionnée 2:</p>
        <div className="selected-sub-option">
          <p className="sub-option-title">{selectedSubOption.title}</p>
        </div>
        <h3>Service Que Vous Etes Intéressé</h3>
        <p>{service.name_service}</p>
        <button className="confirm-button" onClick={handleBack}>
          Back
        </button>
        <button className="confirm-button" onClick={handleConfirme}>
          Confirme
        </button>
      </div>
    );
  } else if (
    selectedOption.title === "Association/NGO" &&
    selectedSubOption.title === "Questions/Réponses"
  ) {
    content = (
      <div className="confirm-content">
        <div className="progress-bar-confirm"></div>
        <h2>Les Options Que Vous Avez Choisies</h2>
        <h3>Les information Personnels:</h3>
        <p>Nom: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Téléphone: {formData.phone}</p>
        <h3>Informations Sélectionnées:</h3>
        <p>Option Sélectionnée 1:</p>
        <div className="selected-option">
          <p className="option-title">{selectedOption.title}</p>
        </div>
        <p>Option Sélectionnée 2:</p>
        <div className="selected-sub-option">
          <p className="sub-option-title">{selectedSubOption.title}</p>
        </div>
        <h3>Question sur l'Association :</h3>
        <p>Nom Association: {questionFormData.name}</p>
        <p>Adresse Email d'Association: {questionFormData.email}</p>
        <p>Téléphone d'Association: {questionFormData.phone}</p>
        <p>Votre Message: {questionFormData.message}</p>
        <button className="confirm-button" onClick={handleBack}>
          Retour
        </button>
        <button className="confirm-button" onClick={handleConfirme}>
          Confirme
        </button>
      </div>
    );
  } else {
    content = (
      <div className="confirm-content">
        <div className="progress-bar-confirm"></div>
        <h2>Les Options Que Vous Avez Choisies</h2>
        <h3>Les information Personnels:</h3>
        <p>Nom: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Téléphone: {formData.phone}</p>
        <h3>Informations Sélectionnées:</h3>
        <p>Option Sélectionnée 1:</p>
        <div className="selected-option">
          <p className="option-title">{selectedOption.title}</p>
        </div>
        <p>Option Sélectionnée 2:</p>
        <div className="selected-sub-option">
          <p className="sub-option-title">{selectedSubOption.title}</p>
        </div>
        <button className="confirm-button" onClick={handleBack}>
          Retour
        </button>
        <button className="confirm-button" onClick={handleConfirme}>
          Confirme
        </button>
      </div>
    );
  }

  return <div className="confirm-container">{content}</div>;
}
