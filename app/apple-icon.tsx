import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen icon for iOS (which doesn't use SVG favicons). Same mark as app/icon.svg.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 75% 25%, rgba(92,188,255,0.3), #07090c 65%)",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 32 32">
          <defs>
            <linearGradient id="arc" x1="6" y1="26" x2="26" y2="6" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#5cbcff" />
              <stop offset="1" stopColor="#d4efff" />
            </linearGradient>
          </defs>
          <path d="M16 7A9 9 0 1 0 25 16" fill="none" stroke="url(#arc)" strokeWidth="3.6" strokeLinecap="round" />
          <path d="M23 5.4Q23.3 8.7 26.6 9Q23.3 9.3 23 12.6Q22.7 9.3 19.4 9Q22.7 8.7 23 5.4Z" fill="#d4efff" />
        </svg>
      </div>
    ),
    size,
  );
}
