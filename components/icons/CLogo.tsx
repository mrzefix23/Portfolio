import { ComponentPropsWithoutRef } from "react";

export const CLogo = (
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
      <g>
        <path
          d="M252.3 0H3.7C1.7 0 0 1.7 0 3.7v248.6c0 2 1.7 3.7 3.7 3.7h248.6c2 0 3.7-1.7 3.7-3.7V3.7c0-2-1.7-3.7-3.7-3.7z"
          fill="#00599C"
        />
        <path
          d="M128 23.2c57.9 0 104.8 46.9 104.8 104.8S185.9 232.8 128 232.8 23.2 185.9 23.2 128 70.1 23.2 128 23.2m0-14.3C60.7 8.9 8.9 60.7 8.9 128s51.8 119.1 119.1 119.1 119.1-51.8 119.1-119.1S195.3 8.9 128 8.9z"
          fill="#FFF"
        />
        <path
          d="M181.3 86.9c-9.5-12.1-24.1-19.9-40.5-19.9-28.4 0-51.4 23-51.4 51.4 0 16.4 7.8 31 19.9 40.5l13.9-17.7c-7.7-6-12.6-15.3-12.6-25.7 0-18 14.6-32.6 32.6-32.6 10.4 0 19.7 4.9 25.7 12.6l12.4-8.6z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
};
