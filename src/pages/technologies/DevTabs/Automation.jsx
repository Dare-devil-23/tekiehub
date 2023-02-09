import { Tabs } from 'antd';

const Docker = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Docker</h1>
        <p className='md:px-5'>
            Docker a Linux-based open-source platform. Docker is a suite of DevOps
            automation tools that creates containerized environments for apps, making
            them more portable, secure, and reducing conflicts while testing. Docker
            enables DevOps to build and run applications quickly and efficiently. Apps
            within Docker are OS- and platform-independent. Through the Docker Engine,
            the containers can be accessed and then execute applications within a remote
            environment. Organizations looking to reduce infrastructure costs look to
            Docker.
        </p>
    </div>
)
const Kubernetes = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Kubernetes</h1>
        <p className='md:px-5'>
            K8s is a container orchestration and automation platform, and it’s widely
            popular amongst DevOps teams. It manages containers at a large scale and
            works well with Docker. Kubernetes automates the management of hundreds of
            containers and can be used to deploy containerized apps to a cluster rather than
            individual machines by automating the distribution and scheduling across a
            cluster.
        </p>
    </div>
)
const Raygun = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Raygun</h1>
        <p className='md:px-5'>
            Raygun is an APM (application performance monitoring) tool, and it’s top of the
            class, providing excellent monitoring and crash reporting. Raygun helps DevOps
            to identify performance issues by linking back to the problematic line of the
            function, API call, or source code.
        </p>
    </div>
)
const Splunk = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Splunk</h1>
        <p className='md:px-5'>
            Splunk allows you to search, analyze, and visualize machine-generated data or
            logs in real time, and to analyze the machine state and identify hardware failure
            points. By pushing the machine data to Splunk, the tool processes all available
            data for you, then extracts relevant data, helping you identify specific causes
            and locations of problems.
        </p>
    </div>
)
const Git = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Git</h1>
        <p className='md:px-5'>
            Git is one of the most widely used among DevOps tools in the software industry
            world, including by global giants such as Facebook, Amazon, and Microsoft and
            is particularly popular amongst remote teams and contributors. Through its
            distributed SCM (source code management) model, developers can track the
            progress of dev work and maintain different versions of the source code. It uses
            host repositories, such as GitHub, where contributors push their work.
        </p>
    </div>
)
const Ansible = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Ansible</h1>
        <p className='md:px-5'>
            Ansible is an agentless configuration management tool that is easy to deploy
            and offers continuous delivery. It automates many repetitive tasks, such as
            cloud provisioning, application deployment, and intra-service orchestration. Use
            Ansible to connect nodes and push modules to them from a centralized place. It
            will then execute the modules and automatically remove them when the action
            is complete.
        </p>
    </div>
)
const Jenkins = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Jenkins</h1>
        <p className='md:px-5'>
            Jenkins is an open-source continuous integration server automates the build
            cycle of a software project and is highly customizable. It allows developers to
            automatically commit code to the repository, run test cases, and fetch reports
            through its pipeline feature. It will also provide instant feedback and issue
            warnings if a sprint is pointing to a broken build. Virtually every one of your
            Devops tools can be integrated with Jenkins through its ecosystem of more than
            one thousand plugins, and all tasks within the software development lifecycle
            can be also automated.
        </p>
    </div>
)
const Bamboo = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>Bamboo</h1>
        <p className='md:px-5'>
            Bamboo is a CI offering created by Atlassian – makers of Confluence and Jira.
            Bamboo touts “integrations that matter” and has a Small Teams package whose
            proceeds are donated to charity. Like Jenkins, Bamboo has prebuilt
            functionalities, meaning you’ll need to manage fewer plugins. The interface is
            highly intuitive and saves a lot of time compared to its open source.
            counterparts.
        </p>
    </div>
)
const BitBucket = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>BitBucket</h1>
        <p className='md:px-5'>
            Bitbucket is another repository like GitHub. Bitbucket comes at a lower cost and
            offers developers an opportunity to collaborate throughout the development
            lifecycle. Bitbucket integrates with project management tools such as Trello and
            Jira and has inbuilt CI/CD functionality.
        </p>
    </div>
)
const GitHub = (
    <div className='py-5'>
        <h1 className='text-xl font-bold mb-5'>GitHub</h1>
        <p className='md:px-5'>
            Since 2000, GitHub has been one of the top DevOps automation tools for
            collaboration amongst developers. Not only can developers make rapid
            iterations to existing code (with notifications sent instantaneously to team
            members), but immediate rollbacks can be made in the case of any error or
            fallout encountered.
        </p>
    </div>
)
const items = [
    {
        key: '1',
        label: (
            <div className='text-lg px-5'>
                Docker
            </div>
        ),
        children: Docker,
    },
    {
        key: '2',
        label: (
            <div className='text-lg px-5'>
                Kubernetes
            </div>
        ),
        children: Kubernetes,
    },
    {
        key: '3',
        label: (
            <div className='text-lg px-5'>
                Raygun
            </div>
        ),
        children: Raygun,
    },
    {
        key: '4',
        label: (
            <div className='text-lg px-5'>
                Splunk
            </div>
        ),
        children: Splunk,
    },
    {
        key: '5',
        label: (
            <div className='text-lg px-5'>
                Git
            </div>
        ),
        children: Git,
    },
    {
        key: '6',
        label: (
            <div className='text-lg px-5'>
                Ansible
            </div>
        ),
        children: Ansible,
    },
    {
        key: '7',
        label: (
            <div className='text-lg px-5'>
                Jenkins
            </div>
        ),
        children: Jenkins,
    },
    {
        key: '8',
        label: (
            <div className='text-lg px-5'>
                Bamboo
            </div>
        ),
        children: Bamboo,
    },
    {
        key: '9',
        label: (
            <div className='text-lg px-5'>
                BitBucket
            </div>
        ),
        children: BitBucket,
    },
    {
        key: '10',
        label: (
            <div className='text-lg px-5'>
                GitHub
            </div>
        ),
        children: GitHub,
    },
];

const Automation = (
    <div className='w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-2xl font-bold mb-5'>
            Automation
        </h1>
        <p>
            DevOps Tools are applications that help automate software development processes
            while simultaneously targeting lifecycle, deployment and monitoring systems and
            more.
        </p>
        <br />
        <p>
            We put together a DevOps tools list of the best automation tools used to manage
            and deploy environments.
        </p>
        <Tabs
            defaultActiveKey="1"
            items={items}
            size='large'
            className='text-lg pt-10'
        />
    </div>
)

export default Automation