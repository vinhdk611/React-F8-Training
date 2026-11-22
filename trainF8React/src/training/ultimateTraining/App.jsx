import { useMemo } from "react"
import { useStore, action, Type } from "."
import "./App.css"

function App() {
    const [state, dispatch] = useStore()
    const { person, people, showTotal } = state
    const { fullName, iq, symptom, procedure, salary } = person

    const total = useMemo(() => {
        const result = people.reduce((sum, item) => {
            return sum + Number(item.salary || 0)
        }, 0)
        return result
    }, [people])

    const handleChange = (e) => {
        const newPerson = {
            ...person,
            [e.target.name]: e.target.value
        }
        dispatch(action(Type.INPUT, newPerson))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(action(Type.ADD, person))

        const resetPerson = {
            fullName: '',
            iq: '',
            symptom: '',
            procedure: '',
            salary: ''
        }

        dispatch(action(Type.INPUT, resetPerson))
    }

    return (
        <div className="ut-container">
            <form className="ut-form" onSubmit={handleSubmit}>
                <input
                    className="ut-input"
                    name="fullName"
                    onChange={handleChange}
                    value={fullName}
                    placeholder="Enter fullName"
                />
                <input
                    className="ut-input"
                    name="iq"
                    onChange={handleChange}
                    type="number"
                    value={iq}
                    placeholder="Enter iq"
                />
                <input
                    className="ut-input"
                    name="symptom"
                    onChange={handleChange}
                    value={symptom}
                    placeholder="Enter symptom"
                />
                <input
                    className="ut-input"
                    name="procedure"
                    onChange={handleChange}
                    value={procedure}
                    placeholder="Enter procedure"
                />
                <input
                    className="ut-input"
                    name="salary"
                    onChange={handleChange}
                    value={salary}
                    type="number"
                    placeholder="Enter salary"
                />
                <button className="ut-btn" type="submit">Add</button>
            </form>

            <div className="ut-table-wrap">
                <table className="ut-table">
                    <thead>
                        <tr>
                            <th>Full name</th>
                            <th>IQ</th>
                            <th>Symptom</th>
                            <th>Procedure</th>
                            <th>Salary</th>
                            <th>Delete Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((item, index) => (
                            <tr key={index}>
                                <td>{item.fullName}</td>
                                <td>{item.iq}</td>
                                <td>{item.symptom}</td>
                                <td>{item.procedure}</td>
                                <td>{item.salary}</td>
                                <td
                                    className="ut-delete-cell"
                                    onClick={() => dispatch(action(Type.DELETE, index))}
                                >
                                    Mit ko thong minh
                                </td>
                            </tr>
                        ))}

                        {showTotal ? (
                            <tr className="ut-total-row">
                                <td>
                                    <button
                                        className="ut-btn ut-btn--secondary"
                                        type="button"
                                        onClick={() => dispatch(action(Type.SHOW_TOTAL, false))}
                                    >
                                        Hide Total
                                    </button>
                                </td>
                                <td className="ut-total-value" colSpan={5}>{total}</td>
                            </tr>
                        ) : (
                            <tr className="ut-total-row">
                                <td colSpan={6}>
                                    <button
                                        className="ut-btn ut-btn--secondary"
                                        type="button"
                                        onClick={() => dispatch(action(Type.SHOW_TOTAL, true))}
                                    >
                                        Show Total
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App