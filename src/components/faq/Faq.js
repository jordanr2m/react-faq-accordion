import React from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md';
/* You must import react icons into your project in order to use it */
import Question from './Question';
import {questions} from "./data";
// Import questions from data.js

/* We can style the react icon inline as shown below */
const Faq = () => {
  return (
    <section className='faq-sec'>
      <div className='contianer faq'>
        <div className="title --center-all">
            <MdOutlineLibraryBooks size={30} color="orangered"/>
            <h2 className='--mb2'>FAQs</h2>
            <p className='--text-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div>
        <div className='questions'>
            {/* Map over questions and return a Question component for each. Uses implied return statement */}
            {questions.map((question) => (
                // Pass 2 props in (question & answer)
                <Question title={question.title} answer={question.answer}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
