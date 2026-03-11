import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeloAdz | The Future of 3D OOH Advertising",
  description:
    "Experience the next dimension of advertising with HeloAdz. 3D curved anamorphic billboards that captivate and convert.",
  icons: {
    icon: "/images/heloadzlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        {/* Theme switching commented out – fixed to bright/light theme only */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light-mode');
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#F8FAFC] dark:bg-[#020205] text-slate-800 dark:text-slate-100 font-sans antialiased overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
