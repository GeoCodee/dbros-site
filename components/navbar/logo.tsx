import Image from "next/image";
import Link from "next/link";

export const AcmeLogo = () => (
  <svg
    className=""
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DbrosLogo = () => (
  //Link to home page (/index.tsx)
  <Link href="/">
    <Image
      src="/dbrosLogo.png"
      alt="DBros Logo"
      width={160}
      height={60}
      style={{
        width: "70%",
        height: "70%",
        maxWidth: "100%",
      }}
    />
  </Link>
);
