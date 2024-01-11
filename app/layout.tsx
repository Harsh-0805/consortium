import "./globals.css";

import { Montserrat } from "next/font/google";
import Providers from "./providers";
import type { Metadata } from "next";
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consortium E-CELL VNIT",
  description:
    "E-Cell VNIT empowers entrepreneurs and social startups with mentorship, workshops, and events. Join our community and turn your ideas into successful startups",
  applicationName: "Consortium E-CELL VNIT",
  authors: [
    {
      name: "E-CELL VNIT Team",
      url: "https://ecellvnit.org",
    },
  ],
  keywords: ["E-Cell", "VNIT", "Consortium", "Management", "Startup"],
  creator: "E-CELL VNIT Team",
  publisher: "E-CELL VNIT",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://consortium.ecellvnit.org",
  },
  openGraph: {
    title: "Consortium E-CELL VNIT",
    description:
      "Join E-Cell VNIT's community of entrepreneurs and empower your journey with mentorship, workshops, competitions, and events",
    url: "https://consortium.ecellvnit.org",
    siteName: "Consortium E-CELL VNIT",
    type: "website",
    emails: [
      "corporateaffairs@ecellvnit.co.in",
      "publicrelations@ecellvnit.ac.in",
    ],
    countryName: "India",
  },
  twitter: {
    title: "Consortium E-CELL VNIT",
    description:
      "Join E-Cell VNIT's community of entrepreneurs and empower your journey with mentorship, workshops, competitions, and events",
    site: "https://consortium.ecellvnit.org",
    siteId: "Consortium E-CELL VNIT",
    images: "/assets/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    other: {
      url: "/favicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <div className="flex flex-col-reverse md:flex-none">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
