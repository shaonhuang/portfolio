import { forwardRef } from 'react';
import { LeftArrow } from '../../../components/Icon';

//TODO: add props types
type content = {
  title: string;
  index: number;
  size: number;
  currentIndex: Set<number>;
};
const NavButton = forwardRef<any, content>((props, scrollRef: any) => {
  const isCurrent = props.index === Math.min(...props.currentIndex);
  const onScroll = () => {
    scrollRef?.current[props.index].scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="flex items-center space-x-1 my-2">
      <button onClick={onScroll}>
        <p
          className={
            'handwriting ' + (isCurrent ? 'opacity-100' : 'opacity-30')
          }
        >
          {props.title}
        </p>
      </button>
      <LeftArrow
        size={props.size}
        stroke={2}
        className={!isCurrent ? 'invisible' : ''}
      />
    </div>
  );
});
export default NavButton;
