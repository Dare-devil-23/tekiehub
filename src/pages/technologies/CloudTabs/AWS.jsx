import BasicTabs from "../../../components/BasicTabs"

const AWSServices = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            AWS offers hundreds of services. Some of these include Virtual Private Cloud, EC2, AWS Data
            Transfer, Simple Storage Service, DynamoDB, Elastic Compute Cloud, AWS Key Management
            Service, Amazon CloudWatch, Simple Notification Service, Relational Database Service, Route
            53, Simple Queue Service, CloudTrail, and Simple Email Service.
        </p>
    </div>
)
const AWSSecurity = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            Cloud security is the highest priority for AWS. As a customer, you will benefit from a data center
            and network architecture built to meet the requirements of the most security-sensitive
            organizations.
        </p>
        <br />
        <p className='md:px-5 text-gray-500'>
            AWS security offers services such as infrastructure security, DDoS mitigation, data encryption,
            inventory and configuration, monitoring and logging, identity and access control, and
            penetration testing.
        </p>
    </div>
)
const Compliances = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            AWS provides 40+ compliance certifications for the global, US, and other countries.
        </p>
    </div>
)
const AWSglobalavailability = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            AWS offers the largest global footprint in the market. No other cloud provider offers as many
            regions or Availability Zones (AZs). This includes 78 AZs within 25 geographic regions around the
            world. Furthermore, AWS has announced plans for 9 more AZs and three more regions in Cape
            Town, Jakarta, and Milan.
        </p>
    </div>
)
const AWSCertifications = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            AWS certifications are divided into four major categories – Foundational, Associate,
            Professional, and Specialty.
        </p>
    </div>
)
const items = [
    {
        key: '1',
        label: (
            <div className='text-md'>
                AWS Services
            </div>
        ),
        children: AWSServices,
    },
    {
        key: '2',
        label: (
            <div className='text-md'>
                AWS Security
            </div>
        ),
        children: AWSSecurity,
    },
    {
        key: '3',
        label: (
            <div className='text-md'>
                Compliances
            </div>
        ),
        children: Compliances,
    },
    {
        key: '4',
        label: (
            <div className='text-md'>
                AWS global availability
            </div>
        ),
        children: AWSglobalavailability,
    },
    {
        key: '5',
        label: (
            <div className='text-md'>
                AWS Certifications
            </div>
        ),
        children: AWSCertifications,
    },
];

const AWS = (
    <div className='md:w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-2xl font-bold mb-5'>
            Amazon Web Services (AWS)
        </h1>
        <p className='text-gray-500'>
            Amazon Web Services (AWS) is an Amazon company that was launched in the year 2002. AWS is
            the most popular cloud service provider in the world.
        </p>
        <br />
        <p className='text-gray-500'>
            Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud
            platform, offering over 165 fully featured services from data centers globally. This service is used
            by millions of customers.
        </p>
        <br />
        <p className='text-gray-500'>
            AWS’s revenue in the year 2018 was $25.6 billion with a profit of $7.2 billion. The revenue is
            expected to grow to $33 billion in 2019.
        </p>
        <br />
        <BasicTabs tabs={items} />
    </div>
)

export default AWS