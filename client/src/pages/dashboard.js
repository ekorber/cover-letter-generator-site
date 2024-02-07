import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import GreenButton from '../components/buttons/btn-green';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';

function DashboardPage() {
  return (
    <SplitLayout split={80} className='p-5 gap-5'>
      <div className='mt-20'>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-cyan-400 shadow-lg'>
          <TemplateGrid />
        </StickyScrollLayout>
      </div>
      <div>
        <GreenButton to='/profile' className='mb-4 w-full'>Profile</GreenButton>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-emerald-300 shadow-sm'>
          <HistoryList />
        </StickyScrollLayout>
      </div>
    </SplitLayout>
  );
}

export default DashboardPage;