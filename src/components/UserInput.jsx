
export default function UserInput({onChange , userInput}) {

    

	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>initial investment</label>
					<input
						type='number'
						required
						onChange={(e) =>
							onChange('initialInvestment', e.target.value)
						}
						value={userInput.initialInvestment}
					/>
				</p>
				<p>
					<label>annual investment</label>
					<input
						type='number'
						required
						onChange={(e) =>
							onChange('annualInvestment', e.target.value)
						}
						value={userInput.annualInvestment}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>expected return</label>
					<input
						type='number'
						required
						onChange={(e) =>
							onChange('expectedReturn', e.target.value)
						}
						value={userInput.expectedReturn}
					/>
				</p>
				<p>
					<label>duration</label>
                    <input
						type='number'
						required
						onChange={(e) =>
							onChange('duration', e.target.value)
						}
						value={userInput.duration}
					/>
				</p>
			</div>
		</section>
	)
}
