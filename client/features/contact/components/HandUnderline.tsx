import { useId, type SVGProps } from 'react'

export default function HandUnderline(props: SVGProps<SVGSVGElement>) {
  const maskId = `hand-underline-mask-${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg
      viewBox="0 0 160 14"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      {...props}
    >
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="160"
          height="14"
        >
          <path
            className="ink-stroke"
            d="M3.00 7.24 L8.50 7.40 L14.00 7.54 L19.50 7.65 L25.00 7.73 L30.50 7.77 L36.00 7.77 L41.50 7.74 L47.00 7.69 L52.50 7.62 L58.00 7.56 L63.50 7.50 L69.00 7.47 L74.50 7.46 L80.00 7.46 L85.50 7.49 L91.00 7.53 L96.50 7.57 L102.00 7.59 L107.50 7.60 L113.00 7.58 L118.50 7.52 L124.00 7.44 L129.50 7.32 L135.00 7.19 L140.50 7.06 L146.00 6.93 L151.50 6.82 L157.00 6.74"
            fill="none"
            stroke="#fff"
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1}
          />
        </mask>
      </defs>
      <path
        d="M2.98 7.79 L8.48 8.06 L13.98 8.31 L19.48 8.55 L24.99 8.76 L30.5 8.92 L36 9.05 L41.51 9.14 L47.02 9.19 L52.52 9.23 L58.02 9.25 L63.51 9.26 L69.01 9.28 L74.5 9.29 L79.99 9.31 L85.49 9.33 L90.99 9.34 L96.49 9.33 L102 9.28 L107.5 9.2 L113.01 9.08 L118.52 8.92 L124.02 8.71 L129.53 8.47 L135.02 8.22 L140.52 7.96 L146.02 7.71 L151.51 7.48 L157.01 7.29 L156.99 6.2 L151.49 6.16 L145.98 6.15 L140.48 6.16 L134.98 6.17 L129.47 6.17 L123.98 6.16 L118.48 6.13 L112.99 6.07 L107.5 6 L102 5.91 L96.51 5.81 L91.01 5.72 L85.51 5.65 L80.01 5.61 L74.5 5.62 L68.99 5.66 L63.49 5.75 L57.98 5.87 L52.48 6.02 L46.98 6.19 L41.49 6.35 L36 6.5 L30.5 6.62 L25.01 6.71 L19.52 6.75 L14.02 6.76 L8.52 6.74 L3.02 6.69 Z"
        fill="currentColor"
        opacity={0.88}
        mask={`url(#${maskId})`}
      />
    </svg>
  )
}
