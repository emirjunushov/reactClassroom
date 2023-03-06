import React, { useState } from "react";
import "./Section.css";
const Section = (props) => {
  // name
  const [contactName, setContactName] = useState("");
  const contactInputName = (e) => {
    setContactName(e.target.value);
  };
  // surname
  const [contactSurname, setContactSurname] = useState("");
  const contactInputSurname = (e) => {
    setContactSurname(e.target.value);
  };
  // age
  const [contactAge, setContactAge] = useState("");
  const contactInputAge = (e) => {
    setContactAge(e.target.value);
  };
  const CotactAdd = () => {
    if (!contactName || !contactSurname || !contactAge) {
      alert("input is empty");
      return;
    }
    const newContact = {
      name: contactName,
      surname: contactSurname,
      age: contactAge,
      id: Date.now(),
    };
    props.handleTask(newContact);

    setContactName("");
    setContactSurname("");
    setContactAge("");
  };
  return (
    <div className="container-section">
      <div>
        <div>
          <input
            placeholder="NAME"
            value={contactName}
            className="section-input"
            onChange={contactInputName}
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="SURNAME"
            value={contactSurname}
            className="section-input"
            onChange={contactInputSurname}
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="AGE"
            value={contactAge}
            className="section-input"
            onChange={contactInputAge}
            type="text"
          />
        </div>
        <div>
          <button className="section-btn" onClick={CotactAdd}>
            add contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
