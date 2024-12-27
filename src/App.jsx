import UserInput from "./Components/UserInput/UserInput"
import Table from "./Components/Table/Table"
import { useState } from "react"


let INITIAL_FORM = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [initialForm, setInitialForm] = useState(INITIAL_FORM)
  const validInput = initialForm.duration >= 1 || initialForm.initialInvestment >= 0
  function handleChange(inputIndex, value) {
    setInitialForm(prevValue => {
      return {
        ...prevValue,
        [inputIndex]: Number(value)
      }
    })
  }

  return (
    <>
      <UserInput initialForm={initialForm} onChange={handleChange} />
      {!validInput && <p className="center">Please enter valid input</p>}
      {validInput && <Table initialData={initialForm} />}
    </>
  )
}

export default App
