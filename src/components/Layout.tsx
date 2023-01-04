import { ForwardedRef, forwardRef } from 'react';
import { NavBar } from './Navigation/Navigation';
//TODO: props interface

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  currentIndex: Set<number>;
}
const Layout = forwardRef(
  (props: LayoutProps, scrollRef: ForwardedRef<JSX.Element>) => {
    const { children, currentIndex } = props;
    return (
      <div className="flex">
        <NavBar ref={scrollRef} currentIndex={currentIndex}></NavBar>
        {children}
      </div>
    );
  }
);
export default Layout;
