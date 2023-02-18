import Automation from './DevTabs/Automation'
import CloudNative from './DevTabs/CloudNative';
import Culture from './DevTabs/Culture';
import Observability from './DevTabs/Observability';
import Security from './DevTabs/Security';
import BasicTabs from '../../components/BasicTabs';

const items = [
  {
    key: '1',
    label: (
      <div className='text-lg px-2'>
        Automation
      </div>
    ),
    children: Automation,
  },
  {
    key: '2',
    label: (
      <div className='text-lg px-2'>
        Cloud-Native
      </div>
    ),
    children: CloudNative,
  },
  {
    key: '3',
    label: (
      <div className='text-lg px-2'>
        Culture
      </div>
    ),
    children: Culture,
  },
  {
    key: '4',
    label: (
      <div className='text-lg px-2'>
        Security
      </div>
    ),
    children: Security,
  },
  {
    key: '5',
    label: (
      <div className='text-lg px-2'>
        Observability
      </div>
    ),
    children: Observability,
  },
];

const DevOps = () => {
  return (
    <BasicTabs tabs={items} addon={false} />
  )
};
export default DevOps;