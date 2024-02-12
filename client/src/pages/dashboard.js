import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import GreenButton from '../components/buttons/btn-green';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';
import Tabs, { Tab } from '../layouts/tabs-layout';
import { useEffect, useState } from 'react';

function DashboardPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {
        (windowWidth > 1279) ?
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
        :
          <Tabs className='p-5'>
            <Tab label='Templates'>
              <StickyScrollLayout height='82dvh' className='rounded-lg bg-cyan-400 shadow-lg'>
                <TemplateGrid />
              </StickyScrollLayout>
            </Tab>
            <Tab label='Documents'>
              <StickyScrollLayout height='82dvh' className='rounded-lg bg-emerald-300 shadow-sm'>
                <HistoryList />
              </StickyScrollLayout>
            </Tab>
          </Tabs>
      }
    </>
  );
}

export default DashboardPage;