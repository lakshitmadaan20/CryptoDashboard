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
                <p className="black-2 text-white btn">Ether: {results.wei}</p>
                <br/>
                <p className="black-2 text-white btn">Wei: {results.wei}</p>
                <br/>
                <p className="black-2 text-white btn">Finney: {results.finney}</p>
                <br/>
                <p className="black-2 text-white btn">Gether: {results.gether}</p>
                <br/>
                <p className="black-2 text-white btn">Gwei: {results.gwei}</p>
                <br/>
                <p className="black-2 text-white btn">Kether: {results.kether}</p>
                <br/>
                <p className="black-2 text-white btn">Kwei: {results.kwei}</p>
                <br/>
                <p className="black-2 text-white btn">Mether: {results.mether} </p>
                <br/>
                <p className="black-2 text-white btn">Mwei: {results.mwei}</p>
                <br/>
                <p className="black-2 text-white btn">Szabo: {results.szabo}</p>
                <br/>
                <p className="black-2 text-white btn">Tether: {results.tether}</p>
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
    <h1 className="text-center  text-white">Ethereum Unit Converter</h1>
     <hr/>
     {showForm()}
     <br/>
     {result()}
    </div>

    )
}

export default Calculator