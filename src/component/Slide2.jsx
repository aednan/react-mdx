import React, {useState} from 'react'
import "../App.css"


function Slide2 () {

   const [show_js, setJS] = useState(false);
   const [show_html, setHtml] = useState(false);
   const [show_css, setCss] = useState(false);


    return (
            <>
                <h1 className="slide_h1" onClick={() => setJS( show => true )} >   React Voraussetzungen  </h1>
                
                { show_js && <p onClick={() => setHtml( show => true )} className="slide3_p"> JavaScript </p>}
                { show_html && <p onClick={() => setCss( show => true )} className="slide3_p">  HTML </p>}
                { show_css && <p className="slide3_p"> CSS </p>}
                
            </>
        );

}

export default Slide2;