import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#3D8DFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.118 12.467a.987.987 0 0 1 0-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 0 1 0 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533v0Z"
    />
    <Path
      stroke="#3D8DFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.046 9.804a3 3 0 1 1-4.24 4.241 3 3 0 0 1 4.24-4.24"
    />
  </Svg>
);
export default SvgComponent;
