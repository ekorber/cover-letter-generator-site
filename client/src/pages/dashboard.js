import { Link } from 'react-router-dom';
import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import PrimaryButton from '../components/buttons/btn-primary';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';
import { green500, green700 } from '../colors';

function DashboardPage() {
  return (
    <SplitLayout split={80} className='p-5 gap-5'>
      <div>
        <Link to="/template-editor"><PrimaryButton className='mb-4 w-56'>Manage Templates</PrimaryButton></Link>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-cyan-400 shadow-lg'>
          <TemplateGrid />
        </StickyScrollLayout>
      </div>
      <div>
        <Link to="/profile"><PrimaryButton fromColor={green500} toColor={green700} className='mb-4 w-full'>Profile</PrimaryButton></Link>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-emerald-300 shadow-sm'>
          <HistoryList />
        </StickyScrollLayout>
      </div>
    </SplitLayout>
  );
}

export default DashboardPage;