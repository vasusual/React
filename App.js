import {useState} from 'react';

const App = () => {
    const [message, setMessage] = useState('');
    const [v1, setV1] = useState("0");
    const [v2, setV2] = useState("0");
    const [valuesValid, setValuesValid] = useState(true);

    const plus = () => {
        const nV1 = parseInt(v1)
        const nV2 = parseInt(v2)
        setMessage(v1 + " + " + v2 + " = " + (nV1 + nV2))
    }

    const minus = () => {
        const nV1 = parseInt(v1)
        const nV2 = parseInt(v2)
        setMessage(v1 + " - " + v2 + " = " + (nV1 - nV2))
    }
    const multiply = () => {
        const nV1 = parseInt(v1)
        const nV2 = parseInt(v2)
        setMessage(v1 + " * " + v2 + " = " + (nV1 * nV2))
    }
    const divide = () => {
        const nV1 = parseInt(v1)
        const nV2 = parseInt(v2)
        setMessage(v1 + " / " + v2 + " = " + (nV1 / nV2))
    }


        const checkValues = () => {
            if (NaN == parseInt(v1) || NaN == parseInt(v2)) {
                setValuesValid(false)
            } else {
                setValuesValid(true)
            }


        }


        const handleChange1 = event => {
            setV1(event.target.value);
            console.log("35", valuesValid);
            checkValues()

            console.log("38", valuesValid);
        };
        const handleChange2 = event => {
            setV2(event.target.value);
            checkValues()

            console.log('value is:', event.target.value);
        };

        return (
            <div>
                <input
                    onChange={handleChange1}
                    value={v1}
                />
                <input
                    onChange={handleChange2}
                    value={v2}
                />
                <button
                    disabled={!valuesValid}
                    onClick={plus}>+
                </button>
                <button onClick={minus}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>

                <h2>Result: {message}</h2>
            </div>
        );
    };

export default App;