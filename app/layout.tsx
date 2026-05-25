import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";
import { Shell } from "@/components/shell/Shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://kal-motion.com"),
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s · ${site.fullName}`,
  },
  description:
    "Portfolio of Kaleu Mota, Senior Motion Designer & 3D Generalist. Direction, real-time cinematics, lookdev and compositing.",
  openGraph: {
    title: `${site.fullName} — ${site.role}`,
    description:
      "Portfolio of Kaleu Mota, Senior Motion Designer & 3D Generalist.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#070708",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ink-50 text-ink-900">
      <body className="antialiased selection:bg-white selection:text-black">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
