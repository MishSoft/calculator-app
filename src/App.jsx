import { useState } from "react"

function App() {
  const [ mainBackground, setMainBackground ] = useState([
    '#3a4663',
    'rgb(230, 230, 230)',
    'rgb(23, 6, 42)'
  ]) 

  const [ calcState, setCalcSate ] = useState({
    currentValue: 0,
    operator: null,
  })

  const caughValue = (e) => {
    const buttonValue = e.target.innerText

    if(Number(buttonValue) || buttonValue === "0") {
      setCalcSate((prevCalcState) => ({
        ...prevCalcState,
        currentValue: prevCalcState.currentValue * 10 + Number(buttonValue),
      }));
    } else if(buttonValue === "DEL") {
      setCalcSate((prevCalcState) => ({
        ...prevCalcState,
        currentValue: Math.floor(prevCalcState.currentValue / 10),
    
      }))
    } else if(buttonValue === "+") {
      setCalcSate((prevCalcState) => ({
        ...prevCalcState,
        operator: "+",
        previousValue: prevCalcState.currentValue,
        currentValue: prevCalcState.currentValue
      }))
    }
    else if (buttonValue === "=") {
      if (calcState.operator === "+") {
        setCalcSate((prevCalcState) => ({
          currentValue: prevCalcState.currentValue  + Number(buttonValue),
          operator: null,
          previousValue: null,
         
        }));
      }
      console.log(buttonValue)
    }

  }

  const calcNumbers = [
    {
      value: "7",
      className: "calc-btn"
    },
    
    {
      value: "8",
      className: "calc-btn"
    },
    
    {
      value: "9",
      className: "calc-btn"
    },

    {
      value: "DEL",
      className: "calc-btn del-btn"
    },
    
    {
      value: "4",
      className: "calc-btn"
    },

    {
      value: "5",
      className: "calc-btn"
    }, 

    {
      value: "6",
      className: "calc-btn"
    },

    {
      value: "+",
      className: "calc-btn"
    },
    
    {
      value: "1",
      className: "calc-btn"
    },

    {
      value: "2",
      className: "calc-btn"
    },

    {
      value: "3",
      className: "calc-btn"
    },

    {
      value: "-",
      className: "calc-btn"
    },
    
    {
      value: ".",
      className: "calc-btn"
    },
    
    {
      value: "0",
      className: "calc-btn"
    },
    
    {
      value: "/",
      className: "calc-btn"
    },

    {
      value: "*",
      className: "calc-btn"
    },

    {
      value: "reset",
      className: "calc-btn reset-btn"
    },

    {
      value: "=",
      className: "calc-btn equal-btn"
    }
  ]



  return (
    <div className='main-container' style={{ backgroundColor: mainBackground[0] }}>
      <div className="board">

        <div className="header">
          <h2>calc</h2>
          <div className="header-rightSide">
            THEME
            <div className="changeing-mode">
                <div className="numbers">
                  <h3>1</h3>
                  <h3>2</h3>
                  <h3>3</h3>
                </div>
                <div className="mode">
                  <div className="mode-circle"></div>
                </div>
            </div>
          </div>
        </div>

        <div className="result">
          <p>{calcState.currentValue.toLocaleString()}</p>
        </div>

        <div className="calc-board">
          <div className="calc-numbers-section">
              {
                calcNumbers.map(button => {
                  return (
                    <button onClick={caughValue} className={button.className} key={button.value}>{button.value}</button>
                  )
                })
              }
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
