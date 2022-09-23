import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Welcome from "./Welcome"
import { useNavigate } from "react-router-dom";
import Timer from "./Timer"
import Navbar from "./Navbar"

const CardSoal = ({questions}) => {
  const { id } = useParams()
  const [ question, setQuestion ] = useState({})
  const [ loading, isLoading] = useState(false)
  const [ answer, setAnswer ] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if(questions.length !== 0){
      isLoading(false)
      questions.forEach((item, index) => {
        let idx = index + 1;
        if(idx.toString() === id && item.incorrect_answers !== null){
          setQuestion(item)
          setAnswer([item.correct_answer, ...item.incorrect_answers])
        }
      })
    } else {
      isLoading(true)
    }
    console.log(questions)
  }, [questions, id])

  const navigateOther = (item) => {
    if(id === 5){
      saveToStorage(item)
    }
      if(id < 5){
        saveToStorage(item)
        navigate(`/dashboard/kuis/${parseInt(id) + 1}`)
      } else {
        saveToStorage(item)
        navigate('/dashboard/hasil')
    }
  }

  const saveToStorage = (item) => {
    let newArray = [];
    let oldArray = localStorage.getItem('items')
    checkAnswer(item);

    if(localStorage.getItem('items')){
      newArray.push([oldArray, item])
      localStorage.setItem('items', newArray)
    } else{
      localStorage.setItem('items', [item]);
    }
  }

  const checkAnswer = (item) => {
    let nilai = localStorage.getItem('score')
    let benar = localStorage.getItem('benar')
    let salah = localStorage.getItem('salah')

    if(localStorage.getItem('score')){
      nilai = parseInt(localStorage.getItem('score'))
    }

    if(item === question.correct_answer){
      nilai += 10;
      benar += 1;
      localStorage.setItem('score', nilai)
      localStorage.setItem('benar', benar)
    }else{
      salah += 1;
      localStorage.setItem('salah', salah)
    }
  }


    return (
      <div>
        {<Navbar />}
        <div className="flex justify-center translate-y-[215px] bg-violet-400 w-fit m-auto px-5 rounded-xl text-white font-bold text-2xl">
            {<Timer />}
        </div>
        <div className="flex justify-center items-center min-h-screen text-lg">
          <div className="flex justify-center shadow-2xl rounded-2xl w-[80%] p-10 bg-violet-400 font-Nunito">
              {loading ? 
              <h1 className="flex animate-bounce animation text-white p-20">Loading...</h1> : 
              <div className="text-white">
                <div className="flex justify-between">
                  <h3 className="mb-10">Category : {question.category}</h3>
                  <h3>Difficulty : {question.difficulty}</h3>
                </div>
                <h1 className="mb-10 font-bold text-2xl " dangerouslySetInnerHTML={{__html: question.question}}></h1>
                {answer.map((jawaban) => {
                  return(
                    <button key={jawaban}  className="my-3 mr-20 bg-violet-500 px-8 py-5 rounded-xl hover:bg-violet-300" onClick={() =>{navigateOther(jawaban)}}>{jawaban}</button>
                    ) 
                })}
              </div>}
          </div>
        </div>
      </div>
    );
}

export default CardSoal;