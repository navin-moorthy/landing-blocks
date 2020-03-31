import * as React from "react";

function SvgWire1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 120" {...props}>
      <g fill="none" fillRule="evenodd" strokeWidth={2}>
        <path
          d="M18.897 56.214C27.37 34.232 34.72 18.6 41.027 18.043 49.392 17.309 52.31 37.283 60 38.471c7.69 1.189 31.484-36.373 43.1-34.396 5.498.936 10.99 25.88 15.863 51.97"
          stroke="#ffb300"
        />
        <path
          d="M4 96.481c5.31-14.37 10.27-28.265 14.897-40.267m100.066-.17c5.422 29.018 10.08 59.454 13.14 59.852 5.81.755 6.957-54.298 14.337-53.881C153.82 62.432 156 116 156 116"
          stroke="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgWire1;
