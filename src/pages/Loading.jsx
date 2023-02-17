import React, { useEffect, useState } from 'react'
import "../styles/loadingScreen.css"
import { motion } from 'framer-motion'
function Loading() {
  const [text, setText] = useState('loading')

  useEffect(() => {
    const timer = setTimeout(() => {
      setText('connected')
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100
        let random1 = `${Math.random() * 150}px`
        let random2 = `${Math.random() * 150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) }`)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])

  return (
    <div className='flex h-screen w-screen justify-center items-center bg-[#092e4d] relative overflow-hidden'>
      <div className="loader">
        <div className="loader_back">
          <div className="loader_blur"></div>
          <div className="loader_back-item"></div>
          <div className="loader_back-item"></div>
        </div>
        <div className="loader_front">
          <div className="loader_front-item">
          </div>
        </div>
        <h1 className="text-white text-sm font-bold uppercase relative inline-block">
          <span id="before-te1" className="absolute top-0 left-0.5 w-full h-full bg-transparent"
            style={{ textShadow: "-2px 0 #49FC00", clipPath: "rect(24px, 550px, 90px, 0)" }}
            aria-hidden="true"
          >
            {text === 'loading' && text}
          </span>
            {text === 'loading' && text}
          <span id="after-te1" className="absolute top-0 -left-0.5 w-full h-full bg-transparent"
            style={{ textShadow: "-2px 0 spin(#49FC00, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }}
            aria-hidden="true"
          >
            {text === 'loading' && text}
          </span>
          <>
          {
            text === 'connected' && text ?
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {text}
              </motion.span>:''
          }
          </>
          
        </h1>
      </div>
    </div>
  )
}

export default Loading