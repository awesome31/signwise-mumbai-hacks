import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Briefcase(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        d="M13.5 3.5H11V3a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 005 3v.5H2.5a1 1 0 00-1 1v8a1 1 0 001 1h11a1 1 0 001-1v-8a1 1 0 00-1-1zM6 3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v.5H6V3zm7.5 1.5v2.6a11.504 11.504 0 01-11 0v-2.6h11zm0 8h-11V8.227a12.512 12.512 0 0011 0V12.5zM6.5 7a.5.5 0 01.5-.5h2a.5.5 0 110 1H7a.5.5 0 01-.5-.5z"
        fill="#000"
      />
    </Svg>
  );
}

export default Briefcase;
