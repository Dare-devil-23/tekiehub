import React from 'react'
import team from '../asserts/OurValues/team.png'
import dedication from '../asserts/OurValues/time-management.png'
import innovation from '../asserts/OurValues/innovative-thinking.png'
const OurValues = () => {
    return (
        <div className='bg-slate-100'>
            <div className='text-3xl text-center p-10'>
                <h1 className='relative group w-fit mx-auto'>
                    Our Values
                    <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] animate-pulse transition-all group-hover:w-full"></span>
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 md:mx-20 pb-20'>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mt-10 mb-5" src={team} alt="Team Work" />
                        <h5 className="mb-5 text-xl font-medium text-blue-800">
                            Team Work
                        </h5>
                        <span className="text-lg md:text-sm 2xl:text-lg text-zinc-900 w-3/4">
                            We believe in building partnerships.
                            We foster a collegial environment
                            where individual perspectives are respected.
                        </span>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mt-10 mb-5" src={dedication} alt="Team Work" />
                        <h5 className="mb-5 text-xl font-medium text-blue-800">
                            Dedication
                        </h5>
                        <span className="text-lg md:text-sm 2xl:text-lg text-zinc-900 w-3/4">
                            We are driven to customer needs with
                            determination and perseverance. We embrace tough
                            challenges and succeed in solving our customer problems.
                        </span>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mt-10 mb-5" src={innovation} alt="Team Work" />
                        <h5 className="mb-5 text-xl font-medium text-blue-800">
                            Innovative Thinking
                        </h5>
                        <span className="text-lg md:text-sm 2xl:text-lg text-zinc-900 w-3/4">
                            We bring robust skills and forward
                            looking perspectives to solve customer
                            challenges. We use proven knowledge to make
                            recommendations and provide expert guidance to our customers.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValues