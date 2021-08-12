import React, {useState} from 'react'
import convert from 'ether-converter'
import { data } from 'browserslist';


const Calculator = () => {

    const [values, setValues] = useState({
        amount:"",
        from:"",
        loading: false,
        results:""
    });
    const {amount, from, results} = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
        console.log(values)
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, loading: true });
        const data = convert(amount, from)
        setValues({ ...values, results:data, amount:"", from:"", loading: false});
        console.log(results)
    }

    const result = () => {
        return (
            <>
                <p>ether: {results.ether}</p>
                <p>wei: {results.wei}</p>
                <p>finney: {results.finney}</p>
                <p>gether: {results.gether}</p>
                <p>gwei: {results.gwei}</p>
                <p>kether: {results.kether}</p>
                <p>kwei: {results.kwei}</p> 
                <p>mether: {results.mether} </p>
                <p>mwei: {results.mwei}</p>
                <p>szabo: {results.szabo}</p>
                <p>tether: {results.tether}</p>
            </>
        )
    }

    const showForm = () => {
      return <>
    <form onSubmit={clickSubmit}>
    <div className="form-group">
      <label>Enter Value:</label>
      <input type="Number" className="form-control" placeholder="Enter Value you want to convert" value={amount} onChange={handleChange('amount')}/>
     </div>
    <br/>
    <div>
        <label>Unit:</label>
        <select value={from} onChange={handleChange('from')} className="form-control">
            <option>Select the unit eg. Wei, Ether, etc.</option>
            <option>ether</option>
            <option>wei</option>
            <option>finney</option>
            <option>gether</option>
            <option>gwei</option>
            <option>kether</option>
            <option>kwei</option>
            <option>mether</option>
            <option>mwei</option>
            <option>Szabo</option>
            <option>tether</option>
        </select>
    </div>
    <br/>
    <div>
        <button className="btn btn-success">Convert</button>
    </div>
    </form>
      </>
    }

    return (
    <div class="container mt-4">
    <h1 className="text-center">Ethereum unit converter</h1>
     <hr/>
     {showForm()}
     <br/>
     {result()}
    </div>

    )
}

export default Calculator