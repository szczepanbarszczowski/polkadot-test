import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M19.211 2.067 3.7 5.945c-2.062.515-2.319 3.341-.384 4.22l4.779 2.173c.98.445 2.04.606 3.07.496a5.904 5.904 0 0 0 .497 3.071l2.172 4.78c.88 1.934 3.706 1.677 4.221-.385l3.878-15.511c.41-1.644-1.078-3.133-2.722-2.722Zm-10.289 8.45a3.91 3.91 0 0 0 4.06-.506l2.289-1.831c.364-.292.84.185.55.55l-1.832 2.288a3.88 3.88 0 0 0-.631 1.135 3.91 3.91 0 0 0 .125 2.925l2.172 4.779c.096.21.404.182.46-.042l3.878-15.511a.244.244 0 0 0-.297-.296L4.186 7.885a.244.244 0 0 0-.043.46l4.78 2.172Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
