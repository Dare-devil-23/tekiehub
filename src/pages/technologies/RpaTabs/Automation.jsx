import React from 'react'

const Automation = (
  <div className='w-4/5 mx-auto py-10 text-lg'>
    <h1 className='text-2xl font-bold'>
      Automation Anywhere
    </h1>
    <br />
    <div className='md:px-5 text-gray-500'>
      Automation Anywhere is the world’s leader in Robotic Process Automation (RPA) and
      Artificial Intelligence (AI). With their software solution, they offer the most widely
      deployed RPA platform and community to enable business automating end-to-end
      processes by everyone in the organization.
      <br />
      Automation Anywhere combines traditional RPA with cognitive elements such as
      natural language processing and reading unstructured data. The technology knows
      three pillars: Robotic Process Automation, Cognitive Automation, and Digital Workforce
      Analytics.
      <h1 className='text-lg font-bold md:pr-5 mt-6 text-gray-900'>
        The main components which constitutes the Automation Anywhere architecture are:
      </h1>
      <br />
      <div className='md:px-5 text-gray-500'>
        <ul className='md:px-5 list-disc pl-5'>
          <li>
            <span className='font-bold mr-2 text-gray-900'>Control Room:</span>
            Web-based platform or in other words the Server that controls
            Automation Anywhere bots. Also deals with User management, source control,
            dashboard and licence management.
          </li>
          <br />
          <li>
            <span className='font-bold mr-2 text-gray-900'> Bot Creator:</span>
            Used by developers to create bots. Their dev licenses are checked
            with that configured in the control room. On authentication, the code of the
            bots they create is stored in the control room. Different developers may create
            individual tasks/bots. These bots could be merged and executed at once.
          </li>
          <br />
          <li>
            <span className='font-bold mr-2 text-gray-900'> Bot Runner: </span>
            It is the machine where you run the bot. You could have multiple
            bots running in parallel. You only need the Run License to run the bots. The
            bots report back the execution logs/pass/fail status back to the control room.
          </li>
          <br />
          <li>
            <span className='font-bold mr-2 text-gray-900'> BOT Insights: </span>
            Shows you the statistic and display graphs to analyze the
            performance of every bot in the system. You can also calculate the time you
            have saved because of the automation process.
          </li>
          <br />
          <li>
            <span className='font-bold mr-2 text-gray-900'> Bot Farm: </span>
            It is integrated with Automation Anywhere Enterprise. It allows you
            to create multiple bots. Moreover, you can also give these boats on the rental
            basis.
          </li>
          <br />
          <li>
            <span className='font-bold mr-2 text-gray-900'> Bot Store: </span>
            Bot Store is a first digital workforce marketplace. Here, you will get
            lots of pre-built bots for every type of business automation.
          </li>
        </ul>
      </div>
      <h1 className='text-lg font-bold md:pr-5 mt-6'>
        Types of Automation Anywhere Bots
      </h1>
      <br />
      <div className='md:px-5 text-gray-500'>
        <ul className='md:px-5 list-disc pl-5'>
          <li>
            <span className='font-bold mr-2 text-gray-900'>Task Bots:</span>
            Task bots are bots which automate rule-based, repetitive task, in areas like
            document administration, HR, claims management, IT services and more. This
            leads to immediate improvement in productivity, error reduction, and cost
            saving.
          </li>
          <br />
          <li>
            <span className='font-bold mr-2 text-gray-900'> Meta Bots:</span>

            Meta bots are the automation building blocks. It is designed in such a way that
            with application updates or changes you need to make minimal edits to the bot.
            Changes automatically apply to any process utilizing that bot.
          </li>
          <br />
          <li>
            <span className='font-bold mr-2 text-gray-900'> IQ BOT: </span>
            It is an advanced tool. It can learn on its own and perform a task according to it.
            IQ Bot offers automation using the highly advanced cognitive technology. It
            works on the concept to organize an unstructured data while improving its skills
            and performance.
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Automation