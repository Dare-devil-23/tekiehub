import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"


const RenderInnerPercent = ({ percent }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count < percent) {
                setCount(count + 1);
            }
        }, 10);

        return () => clearInterval(intervalId);
    }, [count, percent]);

    return (
        <tspan>
            {count}%
        </tspan>
    )
}

const SkillCircle = ({ skill, Icon }) => {
    const ref = useRef(null)
    const inView = useInView(ref)
    return (
        <div className='text-center'>
            <div ref={ref}>
                <CircularProgressbar
                    value={inView ? skill.percent : 0}
                    text={inView ? <RenderInnerPercent percent={skill.percent} /> : 0}
                    className='w-40 h-40 mx-auto'
                    styles={buildStyles({
                        pathTransitionDuration: 2,
                    })}
                />
            </div>
            <div className='text-lg text-center mt-5 text-white flex justify-center items-center'>
                <span className='mx-2'>
                    <Icon className='text-2xl w-5' />
                </span>
                {skill.title}
            </div>
            <p className='w-full my-5 text-gray-400 text-sm'>{skill.description}</p>
        </div>
    )
}

export default SkillCircle