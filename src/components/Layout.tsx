import { forwardRef } from 'react';
import { NavBar } from './Navigation/Navigation';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  currentIndex: Set<number>;
}
const Layout = forwardRef((props: LayoutProps, scrollRef: any) => {
  const { children, currentIndex } = props;
  return (
    <div>
      <NavBar
        ref={scrollRef}
        currentIndex={currentIndex}
        className="fixed top-0 left-0 right-0"
      ></NavBar>
      <div className="flex container mx-auto min-h-screen min-w-[360px] px-5">
        {children}
      </div>
    </div>
  );
});
export default Layout;
