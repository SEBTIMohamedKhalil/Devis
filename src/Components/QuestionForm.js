import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/QuestionForm.css";

export default function QuestionForm({ setQuestionFormData }) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestionFormData(formValues);
    navigate("/confirm");
  };

  const handleBack = () => {
    setFormValues({ name: "", email: "", phone: "", message: "" });
    navigate(-1);
  };

  return (
    <div className="main-div-QF">
    <div className="progress-bar-QF"></div>
      <div className="content-div-QF">
        <h2 className="QF-h2">Association Information</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="C-d">
              <label htmlFor="name">Nom Association:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={formValues.name}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
              />
            </div>
            <div className="C-d">
              <label htmlFor="email">Adresse Email d'Association:</label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </div>
            <div className="C-d">
              <label htmlFor="phone">Téléphone d'Association:</label>
              <input
                className="form-control"
                type="tel"
                placeholder="+212 600 000 000"
                id="phone"
                value={formValues.phone}
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: e.target.value })
                }
              />
            </div>
            <div className="C-d">
              <label htmlFor="message">Votre Message:</label>
              <textarea
                className="form-control"
                id="message"
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
              />
            </div>
            <div>
              <button
                className="form-control btn btn-success button-QF-1"
                type="submit"
              >
                Suivant
              </button>
            </div>
            <div>
              <button
                className="form-control btn btn-danger button-QF-2"
                onClick={handleBack}
              >
                Retour
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
