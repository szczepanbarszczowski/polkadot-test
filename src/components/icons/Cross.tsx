import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 80 80" {...props}>
    <Path
      fill="#fff"
      d="M18.399 18.438a2.478 2.478 0 0 0 .001 3.491L36.353 40 18.4 58.07a2.478 2.478 0 1 0 3.515 3.493L40 43.356l18.084 18.207A2.478 2.478 0 1 0 61.6 58.07L43.647 40 61.6 21.93a2.477 2.477 0 1 0-3.516-3.493L40 36.644 21.915 18.437a2.478 2.478 0 0 0-3.516.001Z"
    />
  </Svg>
);
export default SvgComponent;
