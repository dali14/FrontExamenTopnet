import React, { useEffect, useState } from 'react';
import "./frontExamen.css"
import background from "C:/Users/DELL/Desktop/Test/dash-admin/src/assets/ex.jpg";




const FrontExamen = () => {

	const [time, setTime] = useState(); 
    const url = 'http://localhost:8000/api/question/';
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {setQuestions([...res.questions].map((question) => ({ 
			id: question.id,
            questionText: question.question,
            time: question.time,
            answerOptions: question.get_reponces.map(response => ({
                answerText: response.reponce,
                isCorrect: response.nature
            }))
        }))); setTime(res.time)})
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
			console.log(questions?.map(item => item.id).join("|"))
			console.log(questions)
			var b = new Date()
			console.log(b.toISOString().slice(0,b.toISOString().length-5).split("T").join(" "))

		}
	};
  return time <= 0 ? (<div className='score-section'>Time up user {localStorage.getItem("cin")}You scored {score} out of {questions.length}</div> ) :(
	<div className="main" style={{ backgroundImage: `url(${background})` }}>
	<div className='timer'>
				{time}
			</div>
			{ <div className='question-count'>
							<span className='ques'>Question {currentQuestion + 1}</span>/{questions.length}
						</div> }
    <div className='examen'>
			
			{showScore ? (
				<div className='score-section'>
					user {localStorage.getItem("cin")} scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						
						<div className='question-text'>{questions[currentQuestion]?.questionText}</div>
					</div>
                    
					<div className='answer-section'>
						{questions[currentQuestion]?.answerOptions.map((answerOption,index) => (
							<button key={""+currentQuestion+index} className="answer-text" onClick={() => handleAnswerOptionClick(answerOption?.isCorrect)}>{answerOption?.answerText}</button>
						))}
					</div>
				</>
			)}
            
		</div>
		</div>
        
  );
}

export default FrontExamen;