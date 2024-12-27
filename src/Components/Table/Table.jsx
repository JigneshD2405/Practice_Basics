import { calculateInvestmentResults, formatter } from "../../util/investment"

export default function Table({ initialData }) {

    let calculatedData = calculateInvestmentResults(initialData)
    let initialInvesment =
        calculatedData[0].valueEndOfYear - calculatedData[0].interest - calculatedData[0].annualInvestment
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total interest</th>
                <th>Invest Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                calculatedData.map(rowData => {
                    let totalInterest = rowData.valueEndOfYear - rowData.annualInvestment * rowData.year - initialInvesment
                    let totalInvestment = rowData.valueEndOfYear - totalInterest
                    return (<tr key={rowData.year}>
                        <td>{rowData.year}</td>
                        <td>{formatter.format(rowData.valueEndOfYear)}</td>
                        <td>{formatter.format(rowData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvestment)}</td>
                    </tr>)
                })
            }
        </tbody>
    </table>
}