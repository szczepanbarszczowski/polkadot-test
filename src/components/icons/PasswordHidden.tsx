import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.448 11.949c-.357.579-.842 1.245-1.43 1.886l1.073 1.074a14.157 14.157 0 001.668-2.186c.28-.454.322-1.01.094-1.49C18.856 9.126 16.333 6 12 6c-.895 0-1.712.133-2.455.363l1.243 1.243A6.838 6.838 0 0112 7.5c3.473 0 5.584 2.505 6.464 4.364a.05.05 0 01.004.026.13.13 0 01-.02.059zM4.147 11.233c.34-.718.856-1.553 1.56-2.343l1.074 1.073c-.547.63-.96 1.3-1.245 1.9a.05.05 0 00-.004.027c0 .013.005.034.02.059.582.944 1.504 2.118 2.659 3.04C9.367 15.91 10.65 16.5 12 16.5c.397 0 .788-.05 1.172-.146l1.196 1.196c-.741.283-1.533.45-2.368.45-3.636 0-6.462-3.17-7.759-5.277a1.558 1.558 0 01-.094-1.49z"
        fill={props.fill || '#fff'}
      />
      <Path
        d="M11.813 14.995c-1.564-.093-2.811-1.334-2.874-2.874l2.873 2.873zM12.188 9.006l2.872 2.872c-.062-1.539-1.31-2.78-2.873-2.872zM7.28 6.22a.75.75 0 00-1.06 1.06l10.5 10.5a.75.75 0 101.06-1.06L7.28 6.22z"
        fill={props.fill || '#fff'}
      />
    </Svg>
  );
}

export default SvgComponent;
