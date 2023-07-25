import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg height="24" width="24" viewBox="0 0 80 80" fill="none" {...props}>
    <Path
      fill={props.fill || '#235BEB'}
      d="M48.333 36.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Z"
    />
    <Path
      fill={props.fill || '#235BEB'}
      fillRule="evenodd"
      d="M70 56.667V23.333a6.667 6.667 0 0 0-6.667-6.666H16.667A6.667 6.667 0 0 0 10 23.333v33.334a6.667 6.667 0 0 0 6.667 6.666h46.666A6.667 6.667 0 0 0 70 56.667Zm-6.667-35H16.667c-.92 0-1.667.746-1.667 1.666v33.334c0 .92.746 1.666 1.667 1.666h46.666c.92 0 1.667-.746 1.667-1.666V50H46.667c-5.523 0-10-4.477-10-10s4.477-10 10-10H65v-6.667c0-.92-.746-1.666-1.667-1.666ZM46.667 35H65v10H46.667a5 5 0 1 1 0-10Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
