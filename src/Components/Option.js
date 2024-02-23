import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Option.css';

export default function Option({ options1, setSelectedOption }) {
    const navigate = useNavigate();

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
        navigate('/new-options');
    };
    const handleBack = () => {
        navigate('/')
     };

    return (
        <div className="option1-container">
        <div className="progress-bar-option1"></div>
            <h2 className='option1-h2'>Options</h2>
            <div className='options1-items'>
            {options1.map(option => (
                <div key={option.id} onClick={() => handleOptionSelection(option)} className="option1-item">
                    <img className="option1-img" src={option.image} alt="" />
                    <h3 className="option1-title">{option.title}</h3>
                </div>
            ))}</div>
            <button className='option1-button' onClick={handleBack}>Retour</button>
        </div>
    );
}
