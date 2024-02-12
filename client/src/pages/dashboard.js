import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';
import Tabs, { Tab } from '../layouts/tabs-layout';
import { useEffect, useState } from 'react';
import MobileMenu from '../components/menus/mobile-menu';

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
      <MobileMenu />
      {
        (windowWidth > 1279) ?
          <SplitLayout split={80} className='p-5 gap-5'>
            <div className='mt-16'>
              <StickyScrollLayout height='87dvh' className='rounded-lg bg-cyan-400 shadow-lg'>
                <TemplateGrid />
              </StickyScrollLayout>
            </div>
            <div className='mt-16'>
              <StickyScrollLayout height='87dvh' className='rounded-lg bg-emerald-300 shadow-sm'>
                <HistoryList />
              </StickyScrollLayout>
            </div>
          </SplitLayout>
        :
          <Tabs className='p-5'>
            <Tab label='Templates'>
              <StickyScrollLayout height='85dvh' className='rounded-lg bg-cyan-400 shadow-lg'>
                <TemplateGrid />
              </StickyScrollLayout>
            </Tab>
            <Tab label='Documents'>
              <StickyScrollLayout height='85dvh' className='rounded-lg bg-emerald-300 shadow-sm'>
                <HistoryList />
              </StickyScrollLayout>
            </Tab>
          </Tabs>
      }
    </>
  );
}

export default DashboardPage;