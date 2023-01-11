import { forwardRef } from 'react';
import Footer from './Footer';

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
      <div className="flex justify-center mx-auto p-5">{children}</div>
      <Footer />
    </div>
  );
});
export default Layout;
