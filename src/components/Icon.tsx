import { IconArrowNarrowLeft } from '@tabler/icons';
interface IconProps {
  size: number;
  stroke: number;
  className?: string;
}
export const LeftArrow = ({ size, stroke, className }: IconProps) => {
  return (
    <IconArrowNarrowLeft
      size={size} // set custom `width` and `height`
      stroke={stroke} // set `stroke-width`
      strokeLinejoin="miter" // override other SVG props
      className={className}
    />
  );
};
