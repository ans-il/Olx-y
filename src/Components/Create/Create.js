import React, { Fragment, useState, useContext } from 'react';
import { firebaseContext, authContext } from '../../store/Context';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { postContext } from '../../store/PostContext';

const Create = () => {
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState(null)
  const {firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)  
  const history = useHistory()
  const submit = (e) => {
    e.preventDefault()      
          firebase.firestore().collection('Products').add({
            createdAt : new Date().toDateString(),
            userId : user.uid,
            name,
            category,
            price,
            
          }).then(() => history.push('/'))
        }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}/>
            <br />
          
          <br />
          <img alt="Posts" width="100px" height="100px" src={image ? URL.createObjectURL(image) : ''}></img>
          
            <br />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={submit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
