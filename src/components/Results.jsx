import { calculateInvestmentResults , formatter} from "../util/investment"

export default function Results({ input }) {
    
    const resultData = calculateInvestmentResults(input)

    console.log('resultData', resultData);

    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    
	return (
		<>
			<table id='result'>
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
                <tbody>{resultData.map((yearData) => {
                    let totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year - initialInvestment;
                    let investedCapital = yearData.valueEndOfYear - totalInterest;
                    return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(investedCapital)}</td>
						</tr>
					)
                })}</tbody>
			</table>
		</>
	)
}
