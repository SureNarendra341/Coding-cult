import React, { useState } from 'react';
import '../styles/Contact.css';

const EditableInfo = () => {
  const [editing, setEditing] = useState(false);
  const [info, setInfo] = useState({
    location: 'Manhattan, New York, NY, United States',
    phone: '+91-999-7777-000',
    hours: 'Mon-Fri - 08:00-19:00'
  });

  const [tempInfo, setTempInfo] = useState({ ...info });

  const handleChange = (e) => {
    setTempInfo({ ...tempInfo, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    setInfo(tempInfo);
    setEditing(false);
  };

  return (
    <div className="info-section">
      <div className="edit-btn-wrapper">
        <button className="edit-btn" onClick={() => setEditing(true)}>Edit</button>
      </div>

      <div className="info-item">
        {editing ? (
          <input name="location" value={tempInfo.location} onChange={handleChange} />
        ) : (
          <p>{info.location}</p>
        )}
      </div>
      <div className="info-item">
        {editing ? (
          <input name="phone" value={tempInfo.phone} onChange={handleChange} />
        ) : (
          <p>📱 {info.phone}</p>
        )}
      </div>
      <div className="info-item">
        {editing ? (
          <input name="hours" value={tempInfo.hours} onChange={handleChange} />
        ) : (
          <p>⏰ {info.hours}</p>
        )}
      </div>
      {editing && <button onClick={saveChanges} className="save-btn">Save</button>}
    </div>
  );
};

export default EditableInfo;