import type { SVGProps } from "react";

const Fashion = (props: SVGProps<SVGSVGElement>) => (
  <svg key={1} viewBox="0 0 36 36" fill="none" className="size-10" {...props}>
    <rect
      x={8}
      y={6}
      width={20}
      height={24}
      rx={1}
      stroke="#f94d03"
      strokeWidth={1.2}
    />
    <path d="M13 6 C13 3 23 3 23 6" stroke="#f94d03" />
    <line
      x1={13}
      y1={16}
      x2={23}
      y2={16}
      stroke="#f94d03"
      strokeOpacity={0.4}
    />
    <line
      x1={13}
      y1={20}
      x2={20}
      y2={20}
      stroke="#f94d03"
      strokeOpacity={0.4}
    />
  </svg>
);
export default Fashion;
