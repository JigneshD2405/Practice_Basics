

export default function UserInput({ initialForm, onChange }) {


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>INITIAL INVESTMENT :</label>
                <input type="number" value={initialForm.initialInvestment} required onChange={(event) => onChange("initialInvestment", event.target.value)} />
            </p>
            <p>
                <label>ANNUAL INVESTMENT :</label>
                <input type="number" value={initialForm.annualInvestment} required onChange={(event) => onChange("annualInvestment", event.target.value)} />

            </p>
        </div>
        <div className="input-group">
            <p>
                <label>EXPECTED RETURN :</label>
                <input type="number" value={initialForm.expectedReturn} required onChange={(event) => onChange("expectedReturn", event.target.value)} />
            </p>
            <p>
                <label>DURATION :</label>
                <input type="number" value={initialForm.duration} required onChange={(event) => onChange("duration", event.target.value)} />
            </p>
        </div>
    </section>
}