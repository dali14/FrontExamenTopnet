import React, { useEffect, useState } from 'react';
import "./frontExamen.css"

import withAdmin from '../../withAdmin';



const FrontExamen = () => {

	const [time, setTime] = useState(50);
    //const id = Math.floor(Math.random()*limit);
    const url = 'http://localhost:8000/api/question/';
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setQuestions([...res.questions].map((question) => ({
            questionText: question.question,
            time: question.time,
            answerOptions: question.get_reponces.map(response => ({
                answerText: response.reponce,
                isCorrect: response.nature
            }))
        }))))
    }, [])

	useEffect(() => {
		setInterval(() => {setTime(time => time -1)}, 1000)
	},[])
    
    
    
    

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return time <= 0 ? (<div>Time up</div>) :(
	<div className="main">
	<div className='timer'>
				{time}
			</div>
    <div className='examen'>
			
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						{/* <div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div> */}
						<div className='question-text'>{questions[currentQuestion]?.questionText}</div>
					</div>
                    
					<div className='answer-section'>
						{questions[currentQuestion]?.answerOptions.map((answerOption,index) => (
							<button key={index} className="answer-text" onClick={() => handleAnswerOptionClick(answerOption?.isCorrect)}>{answerOption?.answerText}</button>
						))}
					</div>
				</>
			)}
            
		</div>
		</div>
        
  );
}

export default FrontExamen;