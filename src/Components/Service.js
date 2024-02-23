import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Service.css';

export default function Option({ Services, setService }) {
    const navigate = useNavigate();

    const handleOptionSelection = (Service) => {
        setService(Service);
        navigate('/confirm');
    };
    const handleBack = () => {
        setService();
        navigate(-1)
     };

    return (
        <div className="service-container">
        <div className="progress-bar-service"></div>
            <h2 className='service-h2'>Par Quel Service Etes-Vous Intéressé?</h2>
            <div className='service-items'>
            {Services.map(Service => (
                <div key={Service.id} onClick={() => handleOptionSelection(Service)} className="option1-item">
                    <h3 className="service-title">{Service.name_service}</h3>
                    {/* <p className="option1-description">{option.description}</p> */}
                </div>
            ))}</div>
            <button className='service-button' onClick={handleBack}>Back</button>
        </div>
    );
}
