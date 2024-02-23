import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Personaldata.css";

export default function Personaldata({ formData, setFormData }) {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const Next = () => {
    if (!emailError && formData.email) {
      navigate("/option");
    } else {
      console.log("Please enter a valid email address: 'Exemple@gmail.com'");
    }
  };

  return (
    <div className="main-div-personaldata">
      <div className="progress-bar-personaldata"></div>
      <div className="content-div-persoanldata">
        <h2 className="personaldata-h2">Vos Informations Personnelles</h2>
        <div>
          <form className="personaldata-form">
            <div className="C-d">
              <label htmlFor="">Nom:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="C-d">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="C-d">
              <label htmlFor="phone">Téléphone:</label>
              <input
                className="form-control"
                type="tel"
                placeholder="+212 600 000 000"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <button className="form-control button-p" onClick={Next}>
              Suivant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
