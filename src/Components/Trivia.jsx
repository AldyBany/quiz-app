import React, {useState, useEffect} from 'react'
import useSound from 'use-sound'
import play from '../Assets/src_sounds_play.mp3'
import correct from '../Assets/src_sounds_correct.mp3'
import wrong from '../Assets/src_sounds_wrong.mp3'
import {Hidden} from '@material-ui/core'



const Trivia = ({data, setStop, questionNumber,setQuestionNumber,earning,setEarned}) => {
    const[question, setQuestion] = useState(null)
    const[selectedAnswer, setSelectedAnswer] = useState(null)
    const[classname, setClassname] = useState("answer")

    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(()=>{
        letsPlay()
    },[letsPlay])

    useEffect(() => {
       setQuestion(data[questionNumber -1])
    }, [data, questionNumber])

    const delay =(duration, callback)=>{
        setTimeout(()=>{
            callback()
        }, duration)
    }

    const handleClick = (a)=>{
        setSelectedAnswer(a)
        setClassname("answer active")
        delay(3000, ()=>{ setClassname(a.correct? "answer correct":" answer wrong")})
        delay(6000, ()=>{ 
            if(a.correct){
                correctAnswer()
                delay(1000,()=>{
                    setQuestionNumber((prev)=> prev + 1)
                    setSelectedAnswer(null)
                })
               
            }else{
                if(questionNumber === 1){
                    setEarned(0)
                }
                

                wrongAnswer()
                delay(1000,()=>{
                    setStop(true)
                })
                
            }
        })
        
    }
    return ( 
        <div className="trivia">
            <Hidden mdUp>
                <div className="moneyList_mobile"><span className="earning">${earning}</span> {questionNumber}/3 <span></span></div>
            </Hidden>
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a)=>(
                    <div className={selectedAnswer === a?classname: "answer"} key={a.text} onClick={()=>handleClick(a)}>{a.text}</div>
                ))}
                
            </div>
        </div>
    )
}

export default Trivia
