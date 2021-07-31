import React, {useState} from 'react'
import "../App.css"
import GHPage from "../../public/GHPage.png"


function Slide4 () {

    return (
            <>
          <h1 className="slide_h1" >  React Component </h1>   
          <img className="slide_img" src={GHPage} />  
            </>
        );

}

export default Slide4;