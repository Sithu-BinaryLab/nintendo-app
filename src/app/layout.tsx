import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Nintendo - Official Site: Consoles, Games, News, and More</title>
        <meta
          name="title"
          content="Nintendo - Official Site: Consoles, Games, News, and More"
        />
        <meta
          name="description"
          content="Visit the official Nintendo site to shop for Nintendo Switch™ systems and video games, read the latest news, find fun gear and gifts with a Nintendo twist, and much more."
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nintendo.com/us/" />
        <meta
          property="og:title"
          content="Nintendo - Official Site: Consoles, Games, News, and More"
        />
        <meta
          property="og:description"
          content="Visit the official Nintendo site to shop for Nintendo Switch™ systems and video games, read the latest news, find fun gear and gifts with a Nintendo twist, and much more."
        />
        <meta
          property="og:image"
          content="https://assets.nintendo.com/image/upload/v1643742733/ncom/global/social-share.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nintendo.com/us/" />
        <meta
          property="twitter:title"
          content="Nintendo - Official Site: Consoles, Games, News, and More"
        />
        <meta
          property="twitter:description"
          content="Visit the official Nintendo site to shop for Nintendo Switch™ systems and video games, read the latest news, find fun gear and gifts with a Nintendo twist, and much more."
        />
        <meta
          property="twitter:image"
          content="https://assets.nintendo.com/image/upload/v1643742733/ncom/global/social-share.jpg"
        />
      </head>
      <body className={`${beVietnam.className}  `}>
        <div className="lg:max-w-[92rem] lg:mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
