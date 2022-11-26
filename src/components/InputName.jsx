import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';

const InputName = () => {

  const [ userName, setUserName ] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startName = () => {
    dispatch(changeName(userName));
    navigate("/pokemon")
  }

  return (
  <div className="fondo" id='principal'> 
    <div className='input-name'>
      <h1>Hi Trainer!</h1>
      <p>Give me your name to start</p>
      <input 
       className='input' 
       type="text" 
       onChange={e => setUserName(e.target.value)} value={userName} 
      />
      <button className='buttonInput' onClick={startName}>◀</button>
    </div>
  </div>
  );
};

export default InputName;