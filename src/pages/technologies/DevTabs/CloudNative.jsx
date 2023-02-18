import BasicTabs from "../../../components/BasicTabs";

const CNCF = (
    <div>
        <br />
        <p className='md:mx-10 text-gray-500'>
            The CNCF was formed in 2015 in response to the abundance of organizations
            and services adopting cloud native systems. A project created by the Linux
            Foundation, the CNCF is an open-source software foundation that promotes the
            adoption of cloud native technologies. CNCF has more than 400 members,
            including public cloud providers, enterprise software companies, and
            technology startups. Microsoft, Oracle, VMware, Intel is some of the Platinum
            members of CNCF.
        </p>
        <br />
        <p className='md:mx-10 text-gray-500'>
            The CNCF exists to ensure that cloud native technology is accessible, available,
            and reliable. It fosters a community that’s dedicated to projects such as
            Kubernetes, Prometheus, and CoreDNS, while supporting organizations that
            build sustainable environments that orchestrate containers within a
            microservice architecture.
        </p>
        <br />
        <p className='md:mx-10 text-gray-500'>
            An organization’s journey to cloud native can be daunting, but in the end, it can
            be a worthwhile one. This journey is about more than just re-architecting
            applications—it’s about changing your company’s structure and culture, and
            ultimately moving your company forward. Using the CNCF Trail Map, enterprises
            can adopt cloud native technologies incrementally. As expected, progression
            along the “trail” requires adoption of more-complex software to deliver
            microservices, serverless functions, event-based streams, and other types of
            cloud native apps.
        </p>
    </div>
)

const Benifits = (
    <div>
        <p className='md:mx-10 text-gray-500'>
            Cloud native applications—or native cloud applications (NCAs)—are
            programs designed for a cloud computing architecture. They have many
            benefits.
        </p>
        <br />
        <ul className='md:mx-16 list-disc pl-5 text-gray-500'>
            <li>
                <span className='font-bold mr-2 text-gray-900'>Independence:</span>
                Their architecture makes it possible to build
                cloud native applications independently of each other. This
                means you also can manage and deploy them individually.
            </li>
            <br />
            <li>
                <span className='font-bold mr-2 text-gray-900'>Resiliency:</span>
                A well-designed cloud native application is able to
                survive and stay online even in the event of an infrastructure outage.
            </li>
            <br />
            <li>
                <span className='font-bold mr-2 text-gray-900'>Standards-based:</span>
                For interoperability and workload portability,
                cloud native services are often based on open source and
                standards-based technology. This helps reduce vendor lock-in
                and results in increased portability.
            </li>
            <br />
            <li>
                <span className='font-bold mr-2 text-gray-900'>Automation:</span>
                Cloud native applications use DevOps automations
                features and enable continuous delivery and deployment of
                software changes that get released on a regular basis.
                Additionally, developers can use methodologies like blue-green
                and canary deployments to make improvements to the apps
                without any disruption to the user experience.
            </li>
            <br />
            <li>
                <span className='font-bold mr-2 text-gray-900'>No downtime:</span>
                Thanks to container orchestrators such as
                Kubernetes, you can deploy a software update with essentially
                zero downtime.
            </li>
        </ul>
    </div>
)
const items = [
    {
        key: '1',
        label: (
            <div className='text-md'>
                CNCF
            </div>
        ),
        children: CNCF,
    },
    {
        key: '2',
        label: (
            <div className='text-md'>
                Benifits
            </div>
        ),
        children: Benifits,
    },
];

const CloudNative = (
    <div className='w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-2xl font-bold'>
            Cloud Native
        </h1>
        <br />
        <p className='text-gray-500'>
            The term cloud native refers to the concept of building and running applications
            to take advantage of the distributed computing offered by the cloud delivery
            model. Cloud native apps are designed and built to exploit the scale, elasticity,
            resiliency, and flexibility the cloud provides.
        </p>
        <br />
        <p className='text-gray-500'>
            As defined by the Cloud Native Computing Foundation (CNCF), Cloud native
            technologies empower organizations to build and run scalable applications in
            public, private, and hybrid clouds. Features such as containers, service meshes,
            microservices, immutable infrastructure, and declarative application
            programming interfaces (APIs) best illustrate this approach.
        </p>
        <br />
        <p className='text-gray-500'>
            These features enable loosely coupled systems that are resilient, manageable,
            and observable. They allow engineers to make high-impact changes frequently
            and with minimal effort.
        </p>

       <br />
        <BasicTabs tabs={items}/>
    </div>
)

export default CloudNative