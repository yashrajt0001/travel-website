import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antarabodh– Best Travel Agency in Mumbai for Customized India Tours, Honeymoon Packages & Senior Citizen Trips",
  description:
    "Travel with intention. Antarabodh offers personalized journeys that balance adventure, reflection, and real connection with the world around you.",
  keywords:
    "travel, luxury retreats, yoga retreats, meditation, spa resorts, mindfulness",
  icons: {
    icon: "/images/logo.png", // Add favicon here
  },
  alternates: {
    canonical: "https://www.antarabodh.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />{" "} 
        {/* Add fallback for older browsers */}
        <link rel="canonical" href="https://www.antarabodh.com/" />
        <meta
          name="google-site-verification"
          content="HpVw1zueYiLcZpr3DQKFd6xe8JB01AG9G4hPxxaDqMY"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CWPC2KJBW9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CWPC2KJBW9');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "antarabodh",
              image: "",
              "@id": "",
              url: "https://www.antarabodh.com/",
              telephone: "+91 6361 420 321",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "S. no. 81/1/1, Road no. b2, Dighi, Pune, Maharashtra 411015",
                addressLocality: "Pune",
                postalCode: "411015",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.5837922,
                longitude: 73.8876963,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.instagram.com/antarabodh/?igsh=bWxiajVpcHljdGts&utm_source=qr#",
                "https://www.facebook.com/people/Antarabodh/61575123371169/?mibextid=wwXIfr&rdid=KEhlHJtRrOfMybR1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bmj9GuZGh%2F%3Fmibextid%3DwwXIfr",
              ],
            }),
          }}
        />
        {/* ✅ Tawk.to Live Chat Script */}
        <Script id="tawkto" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/68419232f046fc190b82eaf6/1it02664l';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
