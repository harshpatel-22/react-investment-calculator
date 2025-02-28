import { useState } from 'react'
import Header from './components/Header'
import Results from './components/Results'
import UserInput from './components/UserInput'

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	})


    const isValidInput = userInput.duration >= 1

	function handleChange(inputIndentifier, newValue) {
	
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIndentifier]: +newValue,
			}
		})
	}
	return (
		<>
			<Header />
            <UserInput onChange={handleChange} userInput={userInput} />
            {!isValidInput && (<p className='center'>Duration must be greater than zero</p>)}
			{isValidInput && <Results input={userInput} />}
		</>
	)
}

export default App
