import React from 'react'
import "./Component1.css"
import {useState ,useEffect} from 'react'
import 'animate.css';


export default function Component1() {
    const[currentid,setCurrentid]=useState(0)
    const[flag,setFlag]=useState(0)
    const[answercount,setAnswercount]=useState(0)
    const[second , setSecond]=useState(30)
 

    const questions = [
        {
            questionText:"What is the Capital Of India?",
            answerOptions:[
                {answerText:"New Delhi" , isCorrect:true},
                {answerText:"Lucknow" , isCorrect:false},
                {answerText:"Patna" , isCorrect:false},
                {answerText:"Mumbai" , isCorrect:false}

            ]
        },
        {
            questionText:"What is the Capital Of Maharashtra?",
            answerOptions:[
                {answerText:"Kolkata" , isCorrect:false},
                {answerText:"Lucknow" , isCorrect:false},
                {answerText:"Patna" , isCorrect:false},
                {answerText:"Mumbai" , isCorrect:true}

            ]
        },
        {
            questionText:"What is the Capital Of Uttar Pradesh?",
            answerOptions:[
                {answerText:"Noida" , isCorrect:false},
                {answerText:"Lucknow" , isCorrect:true},
                {answerText:"Patna" , isCorrect:false},
                {answerText:"Mumbai" , isCorrect:false}

            ]
        },
        {
            questionText:"What is the Capital Of Gujarat?",
            answerOptions:[
                {answerText:"Gandhi Nagar" , isCorrect:false},
                {answerText:"Lucknow" , isCorrect:false},
                {answerText:"Patna" , isCorrect:false},
                {answerText:"Ahmedabad" , isCorrect:true}

            ]
        }
    ]
    const questions1 = [
        {
            questionText:"2 + 2 ?",
            answerOptions:[
                {answerText:"0" , isCorrect:false},
                {answerText:"1" , isCorrect:false},
                {answerText:"4" , isCorrect:true},
                {answerText:"3" , isCorrect:false}

            ]
        },
        {
            questionText:"2 * 2 ?",
            answerOptions:[
                {answerText:"6" , isCorrect:false},
                {answerText:"8" , isCorrect:false},
                {answerText:"4" , isCorrect:true},
                {answerText:"2" , isCorrect:false}

            ]
        },
        {
            questionText:"2 - 2 ?",
            answerOptions:[
                {answerText:"3" , isCorrect:false},
                {answerText:"2" , isCorrect:false},
                {answerText:"1" , isCorrect:false},
                {answerText:"0" , isCorrect:true}

            ]
        },
        {
            questionText:"2/0 ?",
            answerOptions:[
                {answerText:"0" , isCorrect:false},
                {answerText:"2" , isCorrect:false},
                {answerText:"1" , isCorrect:false},
                {answerText:"Infinity" , isCorrect:true}

            ]
        }
    ]

    useEffect(()=>{
        const interval = setInterval(() => {
            setSecond(prev=>prev - 1)
           
          }, 1000);
          return () => clearInterval(interval);

    },[currentid])


    useEffect(()=>{
        if(second===0){
            var x = currentid + 1;
            if(x < questions.length){
                setCurrentid(x)
                setSecond(30)

            }
            if(x ===4){
                setFlag(3)
            }
          }
    },[second])

    const handler1=(d)=>{
        if(d===true){
            var z = answercount;
            setAnswercount(z  + 1)
        }
        var x = currentid  + 1;
        if(x < questions1.length){
            setCurrentid(x)
            setSecond(30)
        }
        if(x ===4){
            setFlag(3)
        }  
    }
    const dropdown_fun=(event)=>{
        if(event.target.value==="Math"){
            setFlag(2)
            setAnswercount(0)
            setCurrentid(0)
            setSecond(30)
        }
        if(event.target.value==="G.K."){
            setFlag(1)
            setAnswercount(0)
            setCurrentid(0)
            setSecond(30)

        }
        if(event.target.value==="Choose"){
            setFlag(0)
        }
    }
   
  return (
    <div id="component1_main_div_id">
        <div id="navbar_div_id"><p id="app_name_p">Quiz App</p></div>
        <div id="dropdown_div_id"> Choose the Category : 
            <select id="select" onChange={dropdown_fun} >
                <option value="Choose">Choose</option>
                <option value="Math">Math</option>
                <option value="G.K.">G.K.</option>
            </select>
        </div>
        <div id="innermain_div_id">
        {flag===3?<>
                     <div id="main_current_questions_div">
                        You Scored {answercount} out of {questions.length}
                        {answercount===4?<img src="https://media.giphy.com/media/6brH8dM3zeMyA/giphy.gif" alt="" className="gif_class"/>:""}
                        {answercount===3?<img src="https://media.giphy.com/media/28eeWTLf7mqKBsGzbW/giphy.gif" alt="" className="gif_class"/>:""}
                        {answercount===0?<img src="https://media.giphy.com/media/3o6EhYD3bYE5iHiHlu/giphy.gif" alt="" className="gif_class"/>:""}
                        {answercount===2?<img src="https://media.giphy.com/media/xT9IgJ0tACGpoZVDl6/giphy.gif" alt="" className="gif_class"/>:""}
                        {answercount===1?<img src="https://media.giphy.com/media/xT9IgJ0tACGpoZVDl6/giphy.gif" alt="" className="gif_class"/>:""}
                     </div>
           </>:""}
           {flag===1?<>
                     <div id="main_current_questions_div" className=" animate__animated animate__backInLeft">
                        <div id="question_div_id">
                            <p id="question_main_heading">Question {currentid + 1}/<span id="question_length">{questions.length}</span></p>
                            <p id="question_p_id">{questions[currentid].questionText}</p>
                            <p className="second_p animate__animated animate__pulse animate__infinite	infinite">{second}</p>
                        </div>
                        <div id="answeroptions_div_id">
                            {questions[currentid].answerOptions.map((d)=>{
                                return(
                                    <p id="answer_options_p_id"><button id="answer_options_button_id" onClick={()=>handler1(d.isCorrect)}>{d.answerText}</button></p>
                                )
                            })}
                        </div>
                     </div>
           </>:""}
           {flag===2?<>
                     <div id="main_current_questions_div" className=" animate__animated animate__backInLeft ">
                        <div id="question_div_id">
                            <p id="question_main_heading">Question {currentid + 1}/4</p>
                            <p id="question_p_id">{questions1[currentid].questionText}</p>
                            <p className="second_p animate__animated animate__pulse animate__infinite	infinite">{second}</p>

                        </div>
                        <div id="answeroptions_div_id">
                            {questions1[currentid].answerOptions.map((d)=>{
                                return(
                                    <p id="answer_options_p_id"><button id="answer_options_button_id" onClick={()=>handler1(d.isCorrect)}>{d.answerText}</button></p>
                                )
                            })}
                        </div>
                     </div>
           </>:""}
        </div>
       
        
    </div>
  )
}
