import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import PrimaryButton from '../buttons/btn-primary';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <SplitLayout split={20} className='p-5 gap-5'>
      <div>
        <Link to="/template-editor"><PrimaryButton className='mb-4 w-full'>Manage Templates</PrimaryButton></Link>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-cyan-500 shadow-sm'>
          <HistoryList />
        </StickyScrollLayout>
      </div>
      <div>
        <Link to="/profile"><PrimaryButton className='mb-4 w-28 float-end'>Profile</PrimaryButton></Link>
        <StickyScrollLayout height='85dvh' className='mt-20 rounded-lg bg-cyan-500 shadow-lg'>
          <TemplateGrid />
        </StickyScrollLayout>
      </div>
    </SplitLayout>
  );
}

export default DashboardPage;