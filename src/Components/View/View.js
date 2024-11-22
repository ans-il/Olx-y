import React,{useEffect, useContext, useState} from 'react';

import './View.css';
import { postContext } from '../../store/PostContext';
import { firebaseContext } from '../../store/Context';


function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} =  useContext(postContext)
  const {firebase} = useContext(firebaseContext)
  useEffect(() => {
    const {userId} = postDetails
    firebase.firestore().collection('Users').where('id','==',userId).get()
    .then((res) => res.forEach(doc => setUserDetails(doc.data())))
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.category}</span>
          <p>{postDetails.name}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>1234567890</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
