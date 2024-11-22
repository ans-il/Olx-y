import React, { useState, useContext } from 'react';
import { firebaseContext } from '../../store/Context';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(firebaseContext)
  const history = useHistory()

  const submitSignup = (e) => { 
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      res.user.updateProfile({displayName:username})
      .then(() => {
        firebase.firestore().collection('Users').add({
          id: res.user.uid,
          username: username,
          phone: phone
        }).then(() => {          
          history.push('/login')
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitSignup}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            placeholder='Username'            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            placeholder='Email'
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            placeholder='Mobile'
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"            
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
