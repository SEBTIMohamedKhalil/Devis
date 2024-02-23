import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Personaldata from "./Components/personaldata";
import Option from "./Components/Option";
import Option2 from "./Components/Option2";
import Thanks from "./Components/Thanks";
import Confirm from "./Components/Confirm";
import QuestionForm from "./Components/QuestionForm";
import SelectForm from "./Components/SelectForm";
import SelectForm2 from "./Components/SelectForm2";
import SelectForm3 from "./Components/SelectForm3";
import SelectForm4 from "./Components/SelectForm4";
import Service from "./Components/Service";

function App() {
  const initialOptions = [
    {
      id: 1,
      image: "/Images/Particulier1.jpg",
      title: "Particulier",
      description: "Good ",
      subOptions: [
        {
          id: 11,
          image: "/Images/Auto-entrepreneur.jpg",
          title: "Auto-entrepreneur",
          description: "Gooooooooood 1",
        },
        {
          id: 12,
          image: "/Images/Profession-libérale.jpg",
          title: "Profession libérale",
        },
        {
          id: 13,
          image: "/Images/Offline-business.jpg",
          title: "Offline business",
        },
      ],
    },
    {
      id: 2,
      image: "/Images/pexels-tima-miroshnichenko-5439143.jpg",
      title: "Entreprise",
      subOptions: [
        {
          id: 21,
          image: "/Images/start-up.jpg",
          title: "Start-up",
        },
        {
          id: 22,
          image: "/Images/TPE-PME.jpg",
          title: "TPE-PME",
          description: "greeeeeeat 2",
        },
        {
          id: 23,
          image: "/Images/Grande_Entreprise-Multi_nationale.jpg",
          title: "Grande Entreprise/Multi-nationale",
          description: "greeeeeeat 2",
        },
      ],
    },
    {
      id: 3,
      image: "/Images/Association-NGO.jpg",
      title: "Association/NGO",
      description: "Magical",
      subOptions: [
        {
          id: 31,
          image: "/Images/Prestation.jpg",
          title: "Prestation",
          description: "Magicaaaaaaaaaal 1",
        },
        {
          id: 32,
          image: "/Images/Questions-Réponses.jpg",
          title: "Questions/Réponses",
          description: "Magicaaaaaaaaaal 2",
        },
      ],
    },
  ];

  const Services=[
    {
      id: 1,
      name_service:'Développement Web / Mobile'
    },
    {
      id: 2,
      name_service:'Design / Infographie'
    },
    {
      id: 3,
      name_service:'Marketing Digital'
    },
    {
      id: 4,
      name_service:'Audiovisuel / Montage des vidéos'
    },
    {
      id: 5,
      name_service:'Formation / Coaching'
    }
  ]

  const [options1, setOptions1] = useState(initialOptions);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [questionFormData, setQuestionFormData] = useState({});
  const [selectForm, setselectForm] = useState();
  const [service, setService] = useState();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Personaldata formData={formData} setFormData={setFormData} />
          }
        />
        <Route
          path="/option"
          element={
            <Option
              options1={options1}
              setOptions1={setOptions1}
              setSelectedOption={setSelectedOption}
            />
          }
        />
        <Route
          path="/new-options"
          element={
            <Option2
              selectedOption={selectedOption}
              setSelectedSubOption={setSelectedSubOption}
            />
          }
        />
        <Route
          path="/confirm"
          element={
            <Confirm
              formData={formData}
              questionFormData={questionFormData}
              setQuestionFormData={setQuestionFormData}
              selectedOption={selectedOption}
              selectForm={selectForm}
              selectedSubOption={selectedSubOption}
              service={service}
            />
          }
        />
        <Route
          path="/question-form"
          element={<QuestionForm setQuestionFormData={setQuestionFormData} />}
        />
        <Route
          path="/select-form1"
          element=<SelectForm setselectForm={setselectForm} />
        />
        <Route
          path="/select-form2"
          element=<SelectForm2 setselectForm={setselectForm} />
        />
        <Route
          path="/select-form3"
          element=<SelectForm3 setselectForm={setselectForm} />
        />
        <Route
          path="/select-form4"
          element=<SelectForm4 setselectForm={setselectForm} />
        />
        <Route
          path="/service"
          element=<Service Services={Services} setService={setService}  />
        />
        <Route
          path="/thanks"
          element=<Thanks/>
        />
      </Routes>
    </div>
  );
}

export default App;
