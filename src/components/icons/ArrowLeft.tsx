import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14 8-4 4 4 4"
    />
  </Svg>
);
export default ArrowLeft;
