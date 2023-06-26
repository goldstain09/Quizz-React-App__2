import React, { useEffect, useState } from 'react'
import './style.css'
import QuizHard from './QuizHard'
import QuizNormal from './QuizNormal'
import QuizEasy from './QuizEasy'

export default function MainPage() {


  const [checkEasy, setCheckEasy] = useState(false)
  const [checkNormal, setCheckNormal] = useState(false)
  const [checkHard, setCheckHard] = useState(false)


  useEffect(() => {
    if (checkEasy || checkHard || checkNormal) {
      let btn = document.getElementsByClassName('quizbtn');

      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = 'none'
      }
    }
  },
    [checkEasy, checkHard, checkNormal]
  )


  return (
    <>
      <div className='container-fluid bg p-5'>
        <div className='container bg_cntnr '>
          <h2 align='center' >QUIZZE</h2>
          <h5 align='center'>(Easy, Normal & Hard level)</h5>
          <h6 className='text-center'>Note:
            *You've to "submit" answer one by one, otherwise it will not remains check whenever you click on next quiz..<br />
            *If you submit once a quiz, you'll not able to fill it again..
          </h6>

          {
            checkEasy && <QuizEasy />
          }
          {
            checkNormal && <QuizNormal />
          }
          {
            checkHard && <QuizHard />
          }



          <div className='text-center py-4'>
            <button
              onClick={() => {
                setCheckEasy(true)
              }}
              className='btn btn-outline-primary mx-2 quizbtn'
            >
              Start with Easy
            </button>
            {/* ------------------------------- */}
            <button
              onClick={() => {
                setCheckNormal(true)
              }}
              className='btn btn-outline-success mx-2 quizbtn'
            >
              Start with Normal
            </button>
            {/* ------------------------------- */}
            <button
              onClick={() => {
                setCheckHard(true)
              }}
              className='btn btn-outline-danger  mx-2 quizbtn'
            >
              Start with Hard
            </button>
          </div>

        </div>
      </div>


    </>
  )
}
