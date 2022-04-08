import React, { useEffect, useState } from 'react';
import "./frontExamen.css"
import background from "C:/Users/DELL/Desktop/Test/dash-admin/src/assets/ex.jpg";




const FrontExamen = () => {

	const [dataSent, setDataSent] = useState(false)
	const [time, setTime] = useState(100);
	const [totalTime, setTotalTime] = useState(0);
    const url = 'http://localhost:8000/api/question/';
	const home = 'http://localhost:3000/';
    const [questions, setQuestions] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	

	const sendData = () => {
		console.log(dataSent)
		if (dataSent) {
			return;
		}
		fetch("http://localhost:8000/api/examen", {
				method: 'post',
				headers: { 
				 "Content-Type": "application/json",
				 'Access-Control-Allow-Origin': '*',
				 
				  },
				body: JSON.stringify({
				  cin: cin,
				  note: score,
				  duree: totalTime,
				  date: date,
				  question: questions?.map(item => item.id).join("|"),
				})})
      				.then(res => {
       				 console.log(res);
       				 
     			 }
				  );
				  setDataSent(true)
	}

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
        }))); setTime(res.time); setTotalTime(res.time)}); 
    }, [])

	useEffect(() => {
		setInterval(() => {
			setTime(time => time -1);
		}, 1000)
	},[])

	useEffect(() => {
		if(!dataSent && time < 0 ) {
			sendData();
		}
	},[time])
	
	var b = new Date()
			const [cin, setCin] = useState(localStorage.getItem("cin"));
			// const [note , setNote] =useState(score);
			// const [duree, setDuree] = useState(time);
			const [date, setDate] = useState(b.toISOString().slice(0,b.toISOString().length-5).split("T").join(" "));
			const [question, setQuestion] = useState();

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect=="Vrai") {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			console.log(date)
			console.log(questions?.map(item => item.id).join("|"))
			console.log(time)
			console.log(score)
			console.log(cin)
			var b = new Date()
		}
			
	};
  return time <= 0 ? (<div className='score-section'>Time up user {localStorage.getItem("cin")}You scored {score} out of {questions.length} <a href={home}>Go Home</a> </div> ) :(
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
					Stagaire : {localStorage.getItem("cin")} <br></br>Scored  : {score} out of {questions.length}{sendData(true)}
					<br></br>
					<a href={home}>Go Home</a>
					
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