import { ComponentPropsWithoutRef } from "react";

export const NextJSLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const { size = 256, ...rest } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...rest}
    >
      <defs>
        <linearGradient
          x1="55.633%"
          y1="56.385%"
          x2="83.228%"
          y2="96.08%"
          id="nextjsGradient"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <circle id="path-1" cx="128" cy="128" r="128" />
      </defs>
      <g>
        <mask id="mask-2" fill="#fff">
          <use xlinkHref="#path-1" />
        </mask>
        <g mask="url(#mask-2)">
          <circle fill="#000" cx="128" cy="128" r="128" />
          <path
            d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
            fill="url(#nextjsGradient)"
          />
          <path fill="url(#nextjsGradient)" d="M163.556 76.8h17.067v102.4h-17.067z" />
        </g>
      </g>
    </svg>
  );
};
