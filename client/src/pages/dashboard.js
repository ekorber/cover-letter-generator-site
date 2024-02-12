import SplitLayout from '../layouts/split-layout';
import StickyScrollLayout from '../layouts/sticky-scroll-content';
import HistoryList from '../components/history-list';
import TemplateGrid from '../components/template-grid';
import Tabs, { Tab } from '../layouts/tabs-layout';
import { useEffect, useState } from 'react';
import MobileMenu from '../components/menus/mobile-menu';

function DashboardPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getAdjustedWindowHeight(adjustmentSize) {
    return (window.innerHeight - adjustmentSize) + 'px'
  }

  return (
    <>
      <MobileMenu />
      {
        (windowWidth > 1279) ?
          <div>
            <p className='text-2xl px-9 pt-6 pb-5 font-bold'>COVER LETTERS</p>
            <SplitLayout split={80} className='px-5 pb-5 gap-5'>
              <StickyScrollLayout height={() => getAdjustedWindowHeight(100)} className='rounded-lg bg-cyan-400 shadow-lg'>
                <TemplateGrid/>
              </StickyScrollLayout>
              <StickyScrollLayout height={() => getAdjustedWindowHeight(100)} className='rounded-lg bg-emerald-300 shadow-sm'>
                <HistoryList />
              </StickyScrollLayout>
            </SplitLayout>
          </div>
        :
          <Tabs className='p-5'>
            <Tab label='Templates'>
              <StickyScrollLayout height={() => getAdjustedWindowHeight(120)} className='rounded-lg bg-cyan-400 shadow-lg'>
                <TemplateGrid />
              </StickyScrollLayout>
            </Tab>
            <Tab label='Documents'>
              <StickyScrollLayout height={() => getAdjustedWindowHeight(120)} className='rounded-lg bg-emerald-300 shadow-sm'>
                <HistoryList />
              </StickyScrollLayout>
            </Tab>
          </Tabs>
      }
    </>
  );
}

export default DashboardPage;