import { IconArrowNarrowLeft } from '@tabler/icons';
interface IconProps {
  size: number;
  stroke: number;
}
export const LeftArrow = ({ size, stroke }: IconProps) => {
  return (
    <IconArrowNarrowLeft
      size={size} // set custom `width` and `height`
      stroke={stroke} // set `stroke-width`
      strokeLinejoin="miter" // override other SVG props
    />
  );
};
