import { forwardRef } from 'react';
import NavButton from './components/NavButton';
type content = {
  currentIndex: Set<number>;
};
export const NavBar = forwardRef<JSX.Element, content>((props, scrollRef) => {
  return (
    <div>
      <NavButton
        index={0}
        title="Intro"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
      <NavButton
        index={1}
        title="Contact"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
      <NavButton
        index={2}
        title="Project"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
      <NavButton
        index={3}
        title="Timeline"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      />
    </div>
  );
});
