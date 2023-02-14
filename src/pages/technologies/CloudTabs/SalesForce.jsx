import { Tabs } from 'antd';
import { RightOutlined } from '@ant-design/icons'
const SalesCloud = (
    <div className='py-5'>
        <p className='md:px-5'>
            The Salesforce Sales Cloud is an application designed to help organizations sell smarter and
            faster by centralizing customer information, logging interactions, allowing collaboration across
            teams, and automating various tasks. It puts all your customer and prospect information in one
            place and makes sales teams more productive.
        </p>
        <br />
        <div className='md:px-5'>
            <p className='font-bold'>As a business leader, you can:</p>
            <br />
            <ul className='md:px-10 list-disc pl-5'>
                <li>
                    Easily get insight into your business, so you know where to focus your efforts and make
                    decisions based on market changes.
                </li>
                <br />
                <li>
                    Visualize and redistribute your customers’ territories, shifting your sales coverage to
                    changing market demands.
                </li>
                <br />
                <li>
                    Quickly update end-to-end operations of a company’s Sales department to adapt to
                    change.
                </li>
            </ul>
        </div>
        <br />
        <div className='md:px-5'>
            <p className='font-bold'>As a sales rep, you can:</p>
            <br />
            <ul className='md:px-10 list-disc pl-5'>
                <li>
                    Manage deals from a single workspace.
                </li>
                <br />
                <li>
                    Maintain Customer Contacts, Triggering Emails, Reports, and Dashboard features.
                </li>
                <br />
                <li>
                    Track every customer interaction from a customer 360 data, powered by AI.
                </li>
            </ul>
        </div>
    </div>
)
const ServiceCloud = (
    <div className='py-5'>
        <p className='md:px-5'>
            Salesforce Service Cloud is among the most significant Salesforce Clouds and provides all the
            necessary functionalities that boost customer engagement. Its intelligent workflow automates
            business processes, facilitates customer interactions across channels, obtains real-time
            customer information, and uses Artificial Intelligence to increase sales and revenue.
        </p>
    </div>
)
const MarketingCloud = (
    <div className='py-5'>
        <p className='md:px-5'>
            The Salesforce Marketing Cloud connects companies with every customer interaction and
            experience across different channels. It is easy to control messaging flows, react to customer
            actions, and discover useful insights to grow your business.
        </p>
    </div>
)
const CommerceCloud = (
    <div className='py-5'>
        <p className='md:px-5'>
            The name says it all – Salesforce Commerce Cloud is a cloud-based eCommerce platform from
            the commerce cloud market where we can create eCommerce websites, manage, and sell
            products. It provides businesses with a complete infrastructure and tools to set up an
            eCommerce store effortlessly.
        </p>
        <br />
        <div className='md:px-5'>
            <p className='font-bold'>Commerce Cloud major takeaways:</p>
            <br />
            <ul className='md:px-10 list-disc pl-5'>
                <li>
                    Quick online sales with the world’s most trusted commerce platform.
                </li>
                <br />
                <li>
                    Access to hundreds of out-of-the-box features, drag-and-drop tools, and commerce
                    portals alongside Salesforce CMS.
                </li>
                <br />
                <li>
                    Ability to use Einstein intelligence to increase average order value and shopper
                    engagement.
                </li>
                <br />
                <li>
                    Self-service capabilities, like curb-side pickup and chat, are available.
                </li>
                <br />
                <li>
                    Everything is connected to Customer 360 data, so you can quickly build an integrated
                    B2B commerce channel.
                </li>
                <br />
                <li>
                    Buyer Managers have the control to set up account-based rules such as contract pricing,
                    custom catalogs, and approval workflows.
                </li>
            </ul>
        </div>
        <br />
    </div>
)
const Experience = (
    <div className='py-5'>
        <p className='md:px-5'>
            The Salesforce Experience Cloud platform is integrated with Salesforce and enables businesses
            to engage with customers, partners, and employees. It consists of online portals or websites
            hosted by Salesforce named Experience Sites – exquisitely branded digital experiences that are
            easy to create and maintain.
        </p>
        <br />
        <p className='md:px-5'>
            Experience Cloud ensures that the data displayed on the site is already recorded in your unique
            Salesforce CRM platform. The data shared and displayed is more than safe as the admins decide
            what to give access to and with whom. Sharing different data with different audiences enables
            the creation of multiple sites and experiences and customizing exactly what each user accesses.
        </p>
    </div>
)
const Analytics = (
    <div className='py-5'>
        <p className='md:px-5'>
            Analytics Cloud is a robust cloud-based analytical solution that accelerates exploring and
            analyzing huge volumes of data. The Salesforce Analytics Cloud is powered by Einstein Analytics
            and Tableau tools.
        </p>
        <br />
        <p className='md:px-5'>
            Analytics Cloud users can identify trends, improve efficiency and comprehend the logic behind
            the data. The solution bolsters Customer Relationship Management (CRM) by providing self-
            service analytics applications that offer deep insights into the collected data and trends.
        </p>
    </div>
)
const Benifits = (
    <div className='py-5'>
        <ul className='md:px-10 list-disc pl-5'>
            <li>
                Cost Savings
            </li>
            <br />
            <li>
                Security
            </li>
            <br />
            <li>
                Flexibility
            </li>
            <br />
            <li>
                Mobility
            </li>
            <br />
            <li>
                Insight
            </li>
            <br />
            <li>
                Increased Collaboration
            </li>
            <br />
            <li>
                Quality Control
            </li>
            <br />
            <li>
                Disaster Recovery
            </li>
            <br />
            <li>
                Loss Prevention
            </li>
            <br />
            <li>
                Competitive Edge
            </li>
            <br />
            <li>
                Sustainability
            </li>
            <br />
            <li>
                Automatic Software Updates
            </li>
        </ul>
        <br />
    </div>
)
const items = [
    {
        key: '1',
        label: (
            <div className='text-lg px-5'>
                Sales Cloud
            </div>
        ),
        children: SalesCloud,
    },
    {
        key: '2',
        label: (
            <div className='text-lg px-5'>
                Service Cloud
            </div>
        ),
        children: ServiceCloud,
    },
    {
        key: '3',
        label: (
            <div className='text-lg px-5'>
                Marketing Cloud
            </div>
        ),
        children: MarketingCloud,
    },
    {
        key: '4',
        label: (
            <div className='text-lg px-5'>
                Commerce Cloud
            </div>
        ),
        children: CommerceCloud,
    },
    {
        key: '5',
        label: (
            <div className='text-lg px-5'>
                Experience Cloud
            </div>
        ),
        children: Experience,
    },
    {
        key: '6',
        label: (
            <div className='text-lg px-5'>
                Analytics Cloud
            </div>
        ),
        children: Analytics,
    },
    {
        key: '7',
        label: (
            <div className='text-lg px-5'>
                Benefits of Salesforce Clouds
            </div>
        ),
        children: Benifits,
    },
];

const SalesForce = (
    <div className='w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-2xl font-bold mb-5'>
            Salesforce Cloud
        </h1>
        <p>
            Salesforce is a collection of tools and services designed to serve different functions. The
            platform enables companies to build process automation into their business and create
            seamless workflows.
        </p>
        <br />
        <p>
            Learn more about the different types of Salesforce Clouds and how these platforms manage
            your company’s sales, marketing, and customer relationship.
        </p>
        <Tabs
            defaultActiveKey="1"
            items={items}
            animated={{ tabPane: true }}
            moreIcon={<RightOutlined className='text-2xl' />}
            size='large'
            className='text-lg pt-10'
        />
    </div>
)

export default SalesForce