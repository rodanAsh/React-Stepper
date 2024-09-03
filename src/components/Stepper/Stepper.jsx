import React, { useState } from 'react'
import './Stepper.css'

const Stepper = ({steps}) => {
const [currentStep,setCurrentStep] = useState(0)

const handleContinue = () => {
  if(currentStep < steps.length - 1) {
    setCurrentStep(prev => prev + 1)
  }
  console.log(currentStep)
}

const handleBack = () => {
  if(currentStep > 0){
    setCurrentStep(prev => prev - 1)
  }
  console.log(currentStep)
}
  return (
    <div className='stepper'>
      <div>
      {
        steps.map(({label,content},index) => {
          return (
            <div key={index} className="stepper-container">
              <div className={`step-number ${index <= currentStep ? "active" : ""}`}>
                  {index + 1}
                  {index < steps.length - 1 && <div className={`step-line ${index < currentStep ? "active" : ""}`}></div>}  
              </div>
              <div className='step-label'>{label}</div>
            </div>
          )})
      }
      </div>
      

      <div className="step-content">
        {steps[currentStep].content}
      </div>

      <div className="step-btn">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  )
}

export default Stepper