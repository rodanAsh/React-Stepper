import './App.css'
import Stepper from './components/Stepper/Stepper'

function App() {
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>
    },
    {
      label: "Account Info",
      content: <div>Account Info Content</div>
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>
    },
    {
      label: "Review",
      content: <div>Review Content</div> 
    }
  ]

  return (
    <div className='app'>
      <Stepper steps={steps} />
    </div>
  )
}

export default App
