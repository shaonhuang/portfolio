import { forwardRef } from 'react';
import NavButton from './components/NavButton';
type content = {
  className?: string;
  currentIndex: Set<number>;
};
export const NavBar = forwardRef<JSX.Element, content>((props, scrollRef) => {
  return (
    <nav className={`flex flex-col z-10 text-4xl ` + props.className}>
      <NavButton
        index={0}
        size={32}
        title="Intro"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
      <NavButton
        index={1}
        size={32}
        title="Contact"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
      <NavButton
        index={2}
        size={32}
        title="Project"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
      <NavButton
        index={3}
        size={32}
        title="Timeline"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
    </nav>
  );
});
