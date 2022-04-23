import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [name,setName] = useState({value:"",errorr:""})
    const [email,setEmail] = useState({value:"",errorr:""})
    const [number,setNumber] = useState({value:"",errorr:""})

    const handNamelBlur = event =>{
        const nameInput = event.target.value;
        setName({value:nameInput,errorr:""})
    }
    const handEmaillBlur = event =>{
        const eamailInput = event.target.value;
        setName({value:eamailInput,errorr:""})
    }
    const handleNumberlBlur = event =>{
        const numberInput = event.target.value;
        setName({value:numberInput,errorr:""})
    }
    const formSubmit = event =>{
        event.target.preventDefault()
    }
    return (
        <div className='form'>
             <div>
        <h1 className="form-title">plz your information</h1>
        <form onSubmit={formSubmit} action="#">
          <div className="input-group">
            <label htmlFor="name">Enter Your name </label>
            <input onBlur={handNamelBlur} type="text" name="name" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Enter email</label>
            <input onBlur={handEmaillBlur } type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="number">Enter number</label>
            <input onBlur={handleNumberlBlur} type="number" name="number" id="" required/>
          </div>
          <div>
            <button className="form-submit">submit</button>
          </div>
        </form>
        <p className="form-text">
          Already have a account{" "}
          <Link className="form-link" to="/login">
            LogIn
          </Link>
        </p>
        <div className="form-other">
          <div className="left"></div>
          <p>or</p>
          <div className="right"></div>
        </div>
        <button className="google-sign-in">sign in with google</button>
      </div>
        </div>
    );
};

export default Shipment;