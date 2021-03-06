import {useState, useEffect, useMemo} from 'react'
import Start from './Components/Start'
import Timer from './Components/Timer'
import Trivia from './Components/Trivia'
import {Hidden} from '@material-ui/core'


function App() {
  const[questionNumber, setQuestionNumber] = useState(1)
  const[stop, setStop] = useState(false)
  const[earned, setEarned] = useState(0)
  let [earning, setEarning]  = useState(0)
  const [start, setStart] = useState(false)
  
  let earnings = 0

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  
  const moneyPyramid = useMemo(()=>
    [
      {id:1,amount: '100'},
      {id:2,amount: '200'},
      {id:3,amount: '300'},
      {id:4,amount: '400'},
      {id:5,amount: '500'},
      {id:6,amount: '1000'},
      {id:7,amount: '2000'},
      {id:8,amount: '4000'},
      {id:9,amount: '8000'},
      {id:10,amount: '16000'},
      {id:11,amount: '32000'},
      {id:12,amount: '64000'},
      {id:13,amount: '250000'},
      {id:14,amount: '500000'},
      {id:15,amount: '1000000'},
    ].reverse()
  ,[])

  const restart = ()=>{
    setStop(!stop)
    setQuestionNumber(1)
    setEarned(0)
    // setEarning(earnings)
  }
  

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id === questionNumber -1).amount)
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
      {
        start ? <>
          <div className="main">
          {stop || (questionNumber > data.length)?
           <div  className="endText"> 
             {earned >= 100 &&   <lord-icon
              src="https://cdn.lordicon.com/lupuorrc.json"
              trigger="loop"
              colors="primary:#f19923,secondary:#020230"
              stroke="53"
              style={{width:'250px', height:'250px'}}>
            </lord-icon>}
          
            <h1>You Earned: ${earned} </h1>
            <div className="ending_question">
              <p>Want to play again?</p>
              <div className="btn-box">
                <button onClick={restart}>Yes</button>
                <button onClick={()=>setStart(!start)}>No</button>
              </div>
            </div>

           </div>
            :(
          <>
          <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
          </div>
          <div className="bottom">
            <Trivia
              data={data}
              setStop={setStop} 
              setQuestionNumber={setQuestionNumber}
              questionNumber={questionNumber}
              earning={earned}
              setEarned={setEarned}
              dataLength={data.length}
          
              />
          </div>
          </>
          )}
        </div>
        <Hidden  mdDown>
          <div className="money">
            <ul className="moneyList">
              {

                moneyPyramid.map((m)=>{
                  // <>
                 
                   return (
                    <li className={questionNumber === m.id? "moneyListItem active": "moneyListItem"} key={m.id}>
                      <span className="number">{m.id}</span>
                      <span className="amount">${m.amount} </span>
                    </li>
                   )
                  {/* </> */}
                  
                })
              }
              
    
            </ul>
          </div>
        </Hidden>
        </>:<>
            <Start setStart={setStart} start={start} stop={stop} setStop={setStop} setQuestionNumber={setQuestionNumber} earning={setEarned} />
        </>
      }
     
     
    </div>
  );
}

export default App;

// src\Components\Start.jsx
// C:\Users\gaick\Documents\startup\prototypes\quiz-app\src\App.jsx
