import React, {useState} from 'react'
import "../App.css"
import Reacticon from "../../public/React-icon.svg"


function Slide1 () {

   const [show, setShow] = useState(false);

    return (
            <>
                <img height="200" width="200" src={Reacticon} /> 
                <h1 className="slide_h1" onClick={() => setShow( show => true )} > React </h1>  
                { show && <p> Was ist React ? </p>}
            </>
        );

}

export default Slide1;