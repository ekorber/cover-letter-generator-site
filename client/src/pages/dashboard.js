import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import PrimaryButton from '../buttons/btn-primary';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';

function DashboardPage() {
  return (
    <SplitLayout split={20} className='p-5 gap-5'>
      <div>
        <PrimaryButton className='mb-4 w-full'>Manage Templates</PrimaryButton>
        <StickyScrollLayout height='85dvh' className='rounded-lg bg-cyan-500 shadow-sm'>
          <HistoryList />
        </StickyScrollLayout>
      </div>
      <div>
        <PrimaryButton className='mb-4 w-28 float-end'>Profile</PrimaryButton>
        <StickyScrollLayout height='85dvh' className='mt-20 rounded-lg bg-cyan-500 shadow-lg'>
          <TemplateGrid />
        </StickyScrollLayout>
      </div>
    </SplitLayout>
  );
}

export default DashboardPage;