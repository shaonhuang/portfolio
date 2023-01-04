import { forwardRef } from 'react';
import { LeftArrow } from '../../../components/Icon';

//TODO: add props types
const NavButton = forwardRef((props: any, scrollRef: any) => {
  const isCurrent = props.index === Math.min(...props.currentIndex);
  const onScroll = () => {
    scrollRef.current[props.index].scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="flex items-center space-x-1">
      <button onClick={onScroll}>
        <p className="handwriting">{props.title}</p>
      </button>
      <LeftArrow size={15} stroke={2} />
    </div>
  );
});
export default NavButton;
