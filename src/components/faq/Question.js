import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Question.css";

/* We need to use props to access the question info */
const Question = ({title, answer}) => {
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
            {/* If showAnswer is true, a plus icon is shown. Otherwise, a minus icon is shown */}
            {showAnswer ? (
                <AiOutlineMinus color="red" />
            ) : (
                <AiOutlinePlus color="#1f93ff" />
            )}
        </button>
      </div>
      <div className='question-answer'>
            {showAnswer && <p className='--text-sm --py'>{answer}</p>}
      </div>
    </div>
  )
}

export default Question
