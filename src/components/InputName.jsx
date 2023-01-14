import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import "../components/inputName.css"

const InputName = () => {

  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startName = () => {
    dispatch(changeName(userName));
    navigate("/pokemon")
  }

  return (
    <div className="fondo" id='principal'>
      <div className='img'></div>
      <div className='input-name'>
        <h1 className='name-input'>!Hi Trainer¡</h1>
        <p>Give me your name to start</p>
      </div>
      <div > 
        <input
          className='input'
          type="text"
          onChange={e => setUserName(e.target.value)} value={userName}
        />
        <button className='buttonInput' onClick={startName}>Start</button>
      </div>
      <div className="linea-red"></div>
      <div className="linea-black"></div>
    </div>
  );
};

export default InputName;