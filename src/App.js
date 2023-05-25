import { useState } from 'react';
import './App.css';

function App() {
  const arrNum = [
    [7, 8, 9, 'DEL'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    ['.', 0, '/', 'x']
  ]
  const maths = ['+', '-', '/', 'x']
  const [secondNum, setSecondNum] = useState(0)
  const [mathSym, setMathSym] = useState('')
  const [result, setResult] = useState('')

  console.log(typeof result, result)
  console.log(typeof secondNum, secondNum)

  function check(num) {
    if (maths.includes(num)) {
      console.log(true)
      setMathSym(num)
      setSecondNum(result)
      setResult('')
    } else if (num === 'DEL') {
      setResult(result.slice(0,-1))
    } else {
      console.log(false)
      if (result.length < 9) {
        setResult((prevNum) => prevNum = prevNum + num)
      }
      
    }
  }

  function checkSymbol(sym) {
    switch (sym) {
      case '+':
        setResult(String(+result + +secondNum))
        break;
      case '-':
        setResult(String((+secondNum - +result)))
        break;
      case '/':
        setResult(String((+secondNum / +result).toFixed(2)))
        break;
      case 'x':
        setResult(String(+secondNum * +result))
        break;
      default:
        break;
    }
  }

  function total() {
    checkSymbol(mathSym)
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className="display">
          <p>{result}</p>
        </div>
        <div className='buttons'>
          {arrNum.map(row => (
            <div className='row'>
              {row.map(num => (
              <p onClick={(e) => check(e.target.textContent)} style={{background: num === 'DEL' && 'rgb(190,3,3)', boxShadow:num === 'DEL' && 'none' }}>{num}</p>
            ))}
            </div>
          ))}
          <div className='row'>
            <p style={{width:'192px', background:'rgb(190,3,3)',  boxShadow: 'none'}} onClick={() => setResult('')}>RESET</p>
            <p style={{ width: '192px', background:'rgb(88,201,1)', fontSize:'60px', boxShadow: 'none' }} onClick={() => total()}>=</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
