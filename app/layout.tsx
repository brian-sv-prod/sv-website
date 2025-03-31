import { GoogleAnalytics } from '@next/third-parties/google'
import { WebVitals } from '@/components/web-vitals'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WebVitals />
        {children}
      </body>
      <GoogleAnalytics gaId="G-YYJ5WRH5XE" />
    </html>
  )
}