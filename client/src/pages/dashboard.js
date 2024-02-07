import { Link } from 'react-router-dom';
import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import BlueButton from '../components/buttons/btn-blue';
import GreenButton from '../components/buttons/btn-green';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';

function DashboardPage() {
  return (
    <SplitLayout split={80} className='p-5 gap-5'>
      <div>
        <Link to="/template-editor"><BlueButton className='mb-4 w-56'>Manage Templates</BlueButton></Link>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-cyan-400 shadow-lg'>
          <TemplateGrid />
        </StickyScrollLayout>
      </div>
      <div>
        <Link to="/profile">
          <GreenButton className='mb-4 w-full'>Profile</GreenButton>
        </Link>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-emerald-300 shadow-sm'>
          <HistoryList />
        </StickyScrollLayout>
      </div>
    </SplitLayout>
  );
}

export default DashboardPage;