import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={64} height={64} fill="none" viewBox="0 0 80 80" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M70 40a29.883 29.883 0 0 1-7.293 19.607 30.182 30.182 0 0 1-4.413 4.172A29.87 29.87 0 0 1 40 70c-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30ZM40 65a24.912 24.912 0 0 0 17.06-6.726C54.378 51.477 47.752 46.667 40 46.667c-7.75 0-14.378 4.81-17.06 11.607A24.912 24.912 0 0 0 40 65Zm8.775-21.627A23.42 23.42 0 0 1 60.64 54.109 24.884 24.884 0 0 0 65 40c0-13.807-11.193-25-25-25S15 26.193 15 40a24.885 24.885 0 0 0 4.36 14.11 23.42 23.42 0 0 1 11.866-10.737 13.302 13.302 0 0 1-4.56-10.04C26.667 25.97 32.637 20 40 20s13.333 5.97 13.333 13.333c0 4.004-1.764 7.596-4.558 10.04Zm-.442-10.04a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
