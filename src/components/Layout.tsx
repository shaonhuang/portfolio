import { forwardRef } from 'react';
import Footer from './Footer';
import { NavBar } from './Navigation/Navigation';
import nightMode from './Theme';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  currentIndex: Set<number>;
}
nightMode();
const Layout = forwardRef((props: LayoutProps, scrollRef: any) => {
  const { children, currentIndex } = props;
  return (
    <div className="container min-h-screen mx-auto my-6">
      <NavBar
        ref={scrollRef}
        currentIndex={currentIndex}
        className="landscape:hidden fixed top-6 left-2 right-0 max-sm:hidden max-md:hidden"
      ></NavBar>
      <NavBar
        ref={scrollRef}
        currentIndex={currentIndex}
        className="portrait:hidden fixed top-6 sm:left-2 lg:left-6 right-0 max-sm:hidden max-md:hidden"
      ></NavBar>
      <div className="flex justify-center mx-auto p-5">{children}</div>
      <Footer />
    </div>
  );
});
export default Layout;
