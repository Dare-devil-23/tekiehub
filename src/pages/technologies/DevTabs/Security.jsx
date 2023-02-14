import { Tabs } from "antd"
import { RightOutlined } from '@ant-design/icons'

const SCA = (
    <div>
        <p className='md:px-5'>
            Given the fact that open-source software makes up over 90% of the
            codebase of modern applications, SCA has become an indispensable
            DevSecOps tool.
        </p>
        <br />
        <p className='md:px-5'>
            Software composition analysis (SCA) tools scan applications to detect and
            address issues (security vulnerabilities, problematic OSS licenses, and
            quality issues) in open-source code. SCA solutions also offer reporting
            functionality, including the ability to generate a software bill of materials.
            If SCA does identify a vulnerability, it provides a host of information
            (including severity score, inclusion path, and remediation guidance) to help
            users properly address the issue.
        </p>
        <br />
        <p className='md:px-5'>
            For the open-source license compliance use case, SCA inventories the
            different licenses involved in your code, flagging any components with
            licenses that violate an organization’s compliance policies.
        </p>
        <br />
        <p className='md:px-5'>
            Finally, modern SCA tools also help teams implement the key DevSecOps
            principle of delivering quality software. SCA offers code quality and
            provenance checks, helping users identify and upgrade outdated and/or
            poorly maintained software components.
        </p>
    </div>
)

const SAST = (
    <div>
        <p className='md:px-5'>
            SAST refers to a set of tools that scan codes (source code, binary code, byte
            code) in a non-running (read: static) state. SAST flags weaknesses in the
            code it scans, effectively surfacing common issues like CWE-79 (cross-site
            scripting), buffer overflow errors, SQL Injection, and more.
            Much like SCA, SAST flags vulnerabilities and offers remediation guidance.
            Both tools analyze source code/binaries as opposed to running
            applications. And, both SCA and SAST are frequently used during the
            “build” stage of the software development lifecycle, in line with the “shift-
            left” principle of conducting security testing as early as possible in the SDLC.
        </p>
        <br />
        <p className='md:px-5'>
            There are several significant differences between SCA and SAST, however.
            While SCA identifies vulnerabilities in open-source code, SAST detects
            vulnerabilities in proprietary code. And, as you might expect, open-source
            license compliance is not a SAST use case. DevSecOps teams often use SCA
            and SAST in a complementary manner.
        </p>
       
    </div>
)
const DAST = (
    <div>
        <p className='md:px-5'>
            In contrast to SAST and SCA, DAST (Dynamic Application Security Testing)
            tests for vulnerabilities in a running application. As such, it’s used later in
            the software development lifecycle.
        </p>
        <br />

        <p className='md:px-5'>
            DAST does not require access to source code. Instead, DAST tools detect
            vulnerabilities in a running application by (safely) injecting malicious inputs
            to identify potential security vulnerabilities within the application. A DAST
            tool will make HTTP requests and uncover issues like SQL injections, OS
            injections, and cross-site scripting errors. It also finds bugs that are
            important to application security contexts, like security headers, cookie
            safety, content security policies, and X-Frame-Options.
        </p>
        <br />
        <p className='md:px-5'>
            There’s no language dependency with DAST tools because they test the
            running app, however you compile it. DAST also considers the context of
            how the application works: It tests the running application with bad inputs
            to see how the application behaves. Security teams often use DAST tools as
            part of their application security suites along with SAST, SCA, and more.
        </p>
    </div>
)
const ATT = (
    <div>
        <p className='md:px-5'>
            The days of large, dedicated QA teams are a thing of the past for
            organizations with successful DevSecOps implementations. As the U.S.
            government’s DevSecOps Fundamentals Guidebook puts it: ”Testing is
            about automation, and testers will need to become coders of that
            automation.”
            Although some manual testing work will still be required — it’s not possible
            to automate every part of every test — the majority can be automated. For
            example:
        </p>
        <br />
        <div className='md:px-5'>
            <ul className='md:px-5 list-disc pl-5'>
                <li>
                    <span className='font-bold mr-2'>Unit tests:</span>
                    Unit tests analyze individual units of code to make sure
                    they perform as expected. Unit testing tools tend to be language
                    specific.
                </li>
                <br />
                <li>
                    <span className='font-bold mr-2'>Integration tests:</span>
                    Integration tests are performed after unit tests
                    and deal with the interaction between units of code. Again, many
                    of these tests are language specific.
                </li>
                <br />
                <li>
                    <span className='font-bold mr-2'> System tests: </span>
                    System tests are performed after integration tests
                    and analyze the entire application. System testing tools analyze
                    areas like usability, reliability, scalability, and more.
                </li>
            </ul>
        </div>
        <br />
        <p className='md:px-5'>
            Performance testing, regression testing, and acceptance testing are also
            among the areas that can be automated.
        </p>
    </div>
)
const IST = (
    <div>
        <p className='md:px-5'>
            The final tool we'll discuss is one that most teams are likely already familiar
            with: issue tracking software. Issue tracking systems support several key
            DevSecOps phases and activities.
        </p>
        <br />
        <p className='md:px-5'>
            Key characteristics of issue tracking tools include:
        </p>
        <br />
        <div className='md:px-5'>
            <ul className='md:px-5 list-disc pl-5'>
                <li>
                    <span className='font-bold mr-2'>Automation:</span>
                    Improves engineering efficiency by automating
                    processes like closing issues, notifying customers, assigning issues,
                    and more
                </li>
                <br />
                <li>
                    <span className='font-bold mr-2'>Issue resolution tracking and history:</span>
                    Provides visibility and
                    structure to enable efficient bug management. Also creates a
                    record of activities related to issue resolution.
                </li>
                <br />
                <li>
                    <span className='font-bold mr-2'> Change management:</span>
                    Equips stakeholders with visibility into new
                    feature development. Offers interactive workflows and roadmaps
                    to support planning and development.
                </li>
                <br />
                <li>
                    <span className='font-bold mr-2'>Prioritization management:</span>
                    Enables teams to easily (i.e. drag and
                    drop) prioritize different fixes and activities so that they
                    continuously address the most important items
                </li>
                <br />
                <li>
                    <span className='font-bold mr-2'>Automated reporting capabilities:</span>
                    Offers a consolidated view of
                    created vs. resolved issues, resolution velocity, development
                    velocity, and other important metrics.
                </li>
            </ul>
        </div>
    </div>
)
const items = [
    {
        key: '1',
        label: (
            <div className='text-lg px-5'>
                SCA
            </div>
        ),
        children: SCA,
    },
    {
        key: '2',
        label: (
            <div className='text-lg px-5'>
                SAST
            </div>
        ),
        children: SAST,
    },
    {
        key: '3',
        label: (
            <div className='text-lg px-5'>
                DAST
            </div>
        ),
        children: DAST,
    },
    {
        key: '4',
        label: (
            <div className='text-lg px-5'>
                ATT
            </div>
        ),
        children: ATT,
    },
    {
        key: '5',
        label: (
            <div className='text-lg px-5'>
                IST
            </div>
        ),
        children: IST,
    },
]
const Security = (
    <div className='w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-2xl font-bold'>Security</h1>
        <Tabs
            defaultActiveKey="1"
            items={items}
            size='large'
            animated={{tabPane:true}}
            moreIcon={<RightOutlined className='text-2xl'/>}
            className='text-lg pt-10'
        />
    </div>
)
export default Security