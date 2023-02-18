import BasicTabs from '../../../components/BasicTabs';
const AIC = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            What makes Azure the most attractive and intelligent is its exclusive offering of Microsoft’s
            previous products and services in the cloud. Azure’s cloud supremacy revolves around its
            intelligence. Azure provides the most advanced and maximum number of intelligent products
            and services.
        </p>
        <br />
        <p className='md:px-5 text-gray-500'>
            Microsoft’s Windows operating system Windows and database SQL Server are now available in
            the cloud via Windows Virtual Desktop.
        </p>
        <br />
        <p className='md:px-5 text-gray-500'>
            Microsoft’s mixed reality technology (products for HoloLens) is also available in the Azure cloud.
            Microsoft’s TFS and VSTS are now available in azure via Azure DevOps.
        </p>
        <br />
        <p className='md:px-5 text-gray-500'>
            Microsoft’s popular Office suite, enterprise products such as Sharepoint, and Power BI are now
            available in the cloud as Office 365 and PowerXXX tools. Furthermore, some of the most popular
            and advanced developer tools and compilers are available in Azure via various UI, workflows,
            and interfaces.
        </p>
        <br />
        <p className='md:px-5 text-gray-500'>
            Microsoft is a leader in AI + Machine Learning and Microsoft Cognitive Services is one of the
            company’s most advanced offerings.
        </p>
    </div>
)
const AzureSecurity = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            Azure offers the most advanced security products and services. The following table lists Azure
            security.
        </p>
    </div>
)
const Compliances = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            Azure offers 90 compliance certifications for global, US government, region-specific, and
            industry specific.
        </p>
    </div>
)
const AzureStack = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            Azure Stack is a service of Azure that allows enterprises to run apps in an on-premises
            environment and perform Azure services in your datacenter. Azure Stack syncs with global Azure
            and upgrades when new services and updates are available on Azure.
        </p>
    </div>
)
const Global = (

    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            Azure offers more data centers around the world than any other cloud provider.
        </p>
    </div>
)
const AzureCertifications = (
    <div className='py-5'>
        <p className='font-bold'>
            Here is a list of Microsoft Azure certifications.
        </p>
        <br />
        <ul className='md:px-10 list-disc text-gray-500'>
            <li>AZ-103: Microsoft Azure Administrator</li><br />
            <li>AZ-203: Developing Solutions for Microsoft Azure</li><br />
            <li>AZ-300: Microsoft Azure Architect Technologies</li><br />
            <li>AZ-301: Microsoft Azure Architect Design</li><br />
            <li>AZ-400: Microsoft Azure DevOps Solutions</li><br />
            <li>AZ-500: Microsoft Azure Security Technologies</li><br />
            <li>AZ-900: Microsoft Azure Fundamentals</li><br />
            <li>70-487: Developing Microsoft Azure and Web Services</li><br />
            <li>70-537: Configuring and Operating a Hybrid Cloud with Microsoft Azure Stack</li><br />
        </ul>
    </div>
)

const Government = (
    <div className='py-5'>
        <p className='md:px-5 text-gray-500'>
            Azure for Government is an exclusive cloud designed for US government agencies including
            federal, state, and local.

        </p>
        <br />
        <p className='md:px-5 text-gray-500'>
            Azure Government offers government exclusivity. Only US federal, state, local, and tribal
            governments and their partners have access to this dedicated instance with operations
            controlled by screened US citizens.
        </p>
        <br />
        <p className='md:px-5 text-gray-500'>

            Azure Government offers the broadest and most compliance certifications. It runs on six
            government-only datacenter regions, all granted an Impacted Level 5 Provisional Authorization.
        </p>

    </div>
)

const items = [
    {
        key: '1',
        label: (
            <div className='text-md'>
                Azure, the Intelligent Cloud
            </div>
        ),
        children: AIC,
    },
    {
        key: '2',
        label: (
            <div className='text-md'>
                Azure Security
            </div>
        ),
        children: AzureSecurity,
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
                Azure Stack
            </div>
        ),
        children: AzureStack,
    },

    {
        key: '5',
        label: (
            <div className='text-md'>
                Azure for Government
            </div>
        ),
        children: Government,
    },
    {
        key: '6',
        label: (
            <div className='text-md'>
                Azure global availability
            </div>
        ),
        children: Global,
    },
    {
        key: '7',
        label: (
            <div className='text-md'>
                Azure Certifications
            </div>
        ),
        children: AzureCertifications,
    },
];

const Azure = (
    <div className='md:w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-2xl font-bold mb-5'>
            Microsoft Azure
        </h1>
        <p className='text-gray-500'>
            Azure offers hundreds of services within various categories including AI + Machine Learning,
            Analytics, Blockchain, Compute, Containers, Databases, Developer Tools, DevOps, Identity,
            Integration, Internet of Things, Management, Media, Microsoft Azure Stack, Migration, Mixed
            Reality, Mobile, Networking, Security, Storage, Web, and Windows Virtual Desktop.
        </p>
        <br />
        <BasicTabs tabs={items} />
    </div>
)

export default Azure