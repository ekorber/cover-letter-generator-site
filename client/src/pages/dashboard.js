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
          <div>
            <p className='text-2xl px-9 pt-6 pb-5 font-bold'>COVER LETTERS</p>
            <SplitLayout split={80} className='px-5 pb-5 gap-5'>
              <div className=''>
                <StickyScrollLayout height='87dvh' className='rounded-lg bg-cyan-400 shadow-lg'>
                  <TemplateGrid />
                </StickyScrollLayout>
              </div>
              <div className=''>
                <StickyScrollLayout height='87dvh' className='rounded-lg bg-emerald-300 shadow-sm'>
                  <HistoryList />
                </StickyScrollLayout>
              </div>
            </SplitLayout>
          </div>
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