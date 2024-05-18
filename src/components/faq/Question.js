import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Question.css";

/* We need to use props to access each question's info. Passed down from FAQ component, which calls the Question component from it */
const Question = ({title, answer}) => {
    // set showAnswer to false by default
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        /* Toggle showAnswer state by setting it to its opposite */
        setShowAnswer(!showAnswer) 
    }

  return (
    <div className='container question --card'>
        <div className='question-title --flex-between'>
            <h4 className='--text-p --fw-bold'>{title}</h4>
            <button className='question-icon' onClick={handleClick}>
                {/* If showAnswer is true, a minus icon is shown. Otherwise, a plus icon is shown */}
                {showAnswer ? (
                    <AiOutlineMinus color="red" />
                ) : (
                    <AiOutlinePlus color="#1f93ff" />
                )}
            </button>
        </div>
        <div className='question-answer'>
            {/* Saying if showAnswer is true, then show p with answer text */}
            {showAnswer && <p className='--text-sm --py'>{answer}</p>}
        </div>
    </div>
  )
}

export default Question
