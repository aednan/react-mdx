import React from 'react'
import "../App.css"
import reactRVDOM from "../../public/ReactRVDOM.mp4"


function SlideVDOM () {

    return (
            <>
         <h1 className="slide_h1"  > React Virtual DOM </h1> 
         <video src={reactRVDOM} width="1080" height="600" controls>
          Your browser does not support the video tag.
        </video>       
            </>
        );

}

export default SlideVDOM;