import './App.css';
import React, { useState } from 'react';

function Result({ total, op }) {
  return (
    <div className='result'>
      <p className='text-calcu'>Calcu {op}</p>
      <h1 className='total'>{total}</h1>
    </div>
  );
}
//
function InputNumber({ userInput }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // validation
  const handleNum1Change = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setNum1(value);
      userInput(value, num2);
    }
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setNum2(value);
      userInput(num1, value);
    }
  };

  return (
    <div className='inputNum'>
      <div className='txtGroup'>
        <input
          type="text"
          className='txtField'
          placeholder="0"
          value={num1}
          onChange={
            handleNum1Change
          }
        ></input>
      </div>
      <div className='txtGroup'>

        <input
          type="text"
          className='txtField'
          placeholder="0"
          value={num2}
          onChange={
            handleNum2Change
          }
        ></input>
      </div>
    </div>
  );
}

function Operation({ userOp }) {
  const handleOperationChange = (op) => {
    userOp(op);
  };

  return (
    <div className='operation'>
      <div className='firstGroup'>
        <button className="btnOp" onClick={() => handleOperationChange('+')}>+</button>
        <button className="btnOp" onClick={() => handleOperationChange('-')}>-</button>
      </div>
      <div className='secGroup'>
        <button className="btnOp" onClick={() => handleOperationChange('*')}>x</button>
        <button className="btnOp" onClick={() => handleOperationChange('/')}>/</button>
      </div>
    </div>
  );
}


function Calcu() {
  const [total, setTotal] = useState();
  const [operation, setOperation] = useState();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const getTotal = (num1, num2, op) => {
    let result = 0;
    if (op === '+') {
      result = parseInt(num1) + parseInt(num2);
      setOperation(": Addition")
    } else if (op === '-') {
      result = parseInt(num1) - parseInt(num2);
      setOperation(": Subtraction")
    } else if (op === '*') {
      result = parseInt(num1) * parseInt(num2);
      setOperation(": Multiplication")
    } else if (op === '/') {
      result = parseInt(num1) / parseInt(num2);
      setOperation(": Division")

    }

    setTotal(result);
  };


  return (
    <div className='calcu'>
      <Result total={total} op={operation} />
      <InputNumber userInput={(num1, num2) => { setNum1(num1); setNum2(num2); }} />
      <Operation userOp={(op) => getTotal(num1, num2, op)} />
    </div>
  );
}

export default function App() {
  return <Calcu />;
}
