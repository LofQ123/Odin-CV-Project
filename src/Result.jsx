import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import getTemplate from './templateManager';
import { templates } from './templateManager';

Result.propTypes = {
  data: PropTypes.object,
  setTemplate: PropTypes.func
}

export default function Result({template, setTemplate, data}) {
  const containerRef = useRef(null);
  const [scaleFactor, setScaleFactor] = useState(null);

  const size = {
    2: "8px",
    4: "12px",
    8: "32px",
    10: "40px",
    12: "48px",
    14: "56px",
    16: "64px",
    18: "72px",
    20: "80px",
    22: "88px",
    24: "96px",
    26: "104px",
    28: "112x",
    30: "120px",
    32: "128px",
    48: "192px",
    64: "256px",
  }

  /* const getScaleFactor = (containerWidth) => {

  } */

  //For setting a4 page's size
  const sizePage = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const targetPercentage = 0.8;
      const desiredWidth = containerWidth * targetPercentage;
      const scaleFactor = desiredWidth / 2481;
      
      setScaleFactor(scaleFactor)
    }
  }

  useEffect(() => {  
    sizePage(); //First render
    window.addEventListener("resize", sizePage) //After resizing
    return () => {
      window.removeEventListener("resize", sizePage)
    }
  }, [])
    
  return (
    <>
      <div id="result" ref={containerRef}>
        <TemplateControls template={template} setTemplate={setTemplate} />
        <div id="resultInnerContainer">
          <div className="resultPage" style={{transform: `scale(${scaleFactor})`}}>
            {getTemplate(template, {size, data})}
          </div>
        </div>
      </div>
    </>
  );
}

Result.propTypes = {
  template: PropTypes.number,
};

function TemplateControls({template, setTemplate}) {
  const numberOfTemplates = Object.keys(templates).length;

  function nextTemplate() {
    if (template + 1 <= numberOfTemplates) {
      const newTemplate = template + 1;
      setTemplate(newTemplate)
    } else setTemplate(1)
  }

  function previousTemplate() {
    if (template - 1 >= 1) {
      const newTemplate = template - 1;
      setTemplate(newTemplate)
    } else {
      const newTemplate = numberOfTemplates;
      setTemplate(newTemplate)
    }
  }

  return (
    <>
      <div className='templateControls_container'>
        <button className='templateControls_button' onClick={previousTemplate}>&lt;</button>
        <p>{`Template ${template}/${numberOfTemplates}`}</p>
        <button className='templateControls_button' onClick={nextTemplate}>&gt;</button>
      </div>
    </>
  )
}

