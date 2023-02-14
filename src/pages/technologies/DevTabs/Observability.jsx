import { Tabs } from "antd"
import { RightOutlined } from '@ant-design/icons'
const Kafka = (
    <div>
        <div className='md:px-5'>
            Kafka is an open source distributed event dissemination platform with
            support for high-performance data pipelines, streaming analytics, data
            integration, and more. It is widely used for mission critical applications for
            its zero message loss capabilities. Kafka is widely used by organizations in
            the insurance, banking, manufacturing, and telecom industries.
            <h1 className='text-lg font-bold md:pr-5 mt-6'>
                Features:
            </h1>
            <br />
            <ul className='md:pl-10 list-disc pl-10'>
                <li>
                    Kafka supports deriving new data streams using the data streams from
                    producers.
                </li>
                <li>The Kafka cluster can easily manage failures.</li>
                <li>Kafka uses a Distributed commit log; messages remain on disk.</li>
            </ul>
        </div>
    </div>
)
const GoogleStackdrive = (
    <div>
        <div className='md:px-5'>
            Google Stackdriver, now known as Google cloud’s operations suite, is
            effective in monitoring, observing, improving and troubleshooting the
            applications and system performances on a Google cloud environment. It
            even has a freemium version for you to try out its functions and capabilities.
            <h1 className='text-lg font-bold md:pr-5 mt-6'>
                Features:
            </h1>
            <br />
            <ul className='md:pl-10 list-disc pl-10'>
                <li>
                    It collects various performance metrics, traces and logs across your
                    Google cloud applications.
                </li>
                <li>
                    It has built-in observability metrics on scale that helps gain visibility
                    towards performance characteristics.
                </li>
                <li>
                    It provides real-time data analytics and log management characteristics.
                </li>
                <li>
                    It has got out-of- box built-in dashboard features to set up alerts,
                    performance indicators, notification rules across your existing
                    infrastructure.
                </li>
            </ul>
        </div>
        <br />
    </div>
)
const AmazonCloudwatch = (
    <div>
        <div className='md:px-5'>
            Amazon Cloudwatch is one of the prominent observability tools that
            provides monitoring and management services with actionable data insights
            for on-prem, AWS hybrid, infrastructure, application, and services. It can be
            leveraged as a single platform that accumulates various information and
            data logs on all the performance metrics.
            <h1 className='text-lg font-bold md:pr-5 mt-6'>
                Features:
            </h1>
            <br />
            <ul className='md:pl-10 list-disc pl-10'>
                <li>
                    Enables monitoring of complete stack of architecture
                </li>
                <li>
                    Container Insights helps in monitoring, alerting, and troubleshooting of
                    containerized microservices application.
                </li>
                <li>
                    Collects and summarizes lambda metrics, container metrics and logs.
                </li>
                <li>
                    Unified dashboard for viewing entire operations.
                </li>
                <li>
                    Composite and high-resolution alarms.
                </li>
            </ul>
        </div>
        <br />
    </div>
)
const Fluentd = (
    <div>
        <div className='md:px-5'>
            Fluentd is an open-source data collection tool. It is used to analyze data
            from event and application logs. It is a centralizing layer for consolidating
            different log inputs and outputs.
            <h1 className='text-lg font-bold md:pr-5 mt-6'>
                Features:
            </h1>
            <br />
            <ul className='md:pl-10 list-disc pl-10'>
                <li>
                    Flexible plugin system that allows the community to extend its
                    usability.
                </li>
                <li>
                    Fluentd is written in C and Ruby and requires very little system
                    resources.
                </li>
                <li>
                    Supports Unified Logging with JSON
                </li>
            </ul>
        </div>
        <br />
    </div>
)
const ELK = (
    <div>
        <div className='md:px-5'>
            ELK is a stack that includes three common open-source projects:
            Elasticsearch, Logstash and Kibana. ELK allows you to collect logs from your
            applications, review and analyze these logs to create visualizations for
            better monitoring and troubleshooting.
            <h1 className='text-lg font-bold md:pr-5 mt-6'>
                Features:
            </h1>
            <br />
            <ul className='md:pl-10 list-disc pl-10'>
                <li>
                    Highly scalable and resilient
                </li>
                <li>
                    Encrypted communications are supported.
                </li>
                <li>
                    Role based access control.
                </li>
                <li>
                    Support for several integrations
                </li>
            </ul>
        </div>
        <br />
    </div>
)
const Graylog = (
    <div>
        <div className='md:px-5'>
            Graylog is another centralized log aggregation tool that allows real-time
            search of large amounts of data. It uses the Elasticsearch and MongoDB
            frameworks. It also functions as a repository for capturing and storing
            machine data. Graylag has paid plans for enterprises.
            <h1 className='text-lg font-bold md:pr-5 mt-6'>
                Features:
            </h1>
            <br />
            <ul className='md:pl-10 list-disc pl-10'>
                <li>
                    Extended log collection using Sidecar.
                </li>
                <li>
                    Graphical log analysis.
                </li>
                <li>
                    Free marketplace of extensions.
                </li>
                <li>
                    Simple UI for administration.
                </li>
            </ul>
        </div>
        <br />
    </div>
)
const Loggly = (
    <div>
        <div className='md:px-5'>
            Loggly is a log data processing SaaS solution. It has log tracking tools to help
            you monitor and analyze the logs generated from your infrastructure. Since
            it is a SaaS product you can start using it without installing any additional
            hardware or software.
            <h1 className='text-lg font-bold md:pr-5 mt-6'>
                Features:
            </h1>
            <br />
            <ul className='md:pl-10 list-disc pl-10'>
                <li>
                    Proactive monitoring: View app performance, system behavior,
                    and unusual activity across the stack.
                </li>
                <li>
                    Analyze and visualize data to answer key questions, track SLA
                    compliance, and spot trends.
                </li>
                <li>
                    Integrates with Slack, GitHub, Jira, Microsoft Teams, custom
                    webhooks, and more.
                </li>
            </ul>
        </div>
        <br />
    </div>
)
const items = [
    {
        key: '1',
        label: (
            <div className='text-lg px-5'>
                Kafka
            </div>
        ),
        children: Kafka,
    },
    {
        key: '2',
        label: (
            <div className='text-lg px-5'>
                Google Stackdrive
            </div>
        ),
        children: GoogleStackdrive,
    },
    {
        key: '3',
        label: (
            <div className='text-lg px-5'>
                Amazon Cloudwatch
            </div>
        ),
        children: AmazonCloudwatch,
    },
    {
        key: '4',
        label: (
            <div className='text-lg px-5'>
                Fluentd
            </div>
        ),
        children: Fluentd,
    },
    {
        key: '5',
        label: (
            <div className='text-lg px-5'>
                ELK
            </div>
        ),
        children: ELK,
    },
    {
        key: '6',
        label: (
            <div className='text-lg px-5'>
                Graylog
            </div>
        ),
        children: Graylog,
    },
    {
        key: '7',
        label: (
            <div className='text-lg px-5'>
                Loggly
            </div>
        ),
        children: Loggly,
    },

]
const Observability = (
    <div className='w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-2xl font-bold'>Observability</h1>
        <Tabs
            defaultActiveKey="1"
            items={items}
            animated={{tabPane:true}}
            moreIcon={<RightOutlined className='text-2xl'/>}
            size='large'
            className='text-lg pt-10'
        />
    </div>
)

export default Observability