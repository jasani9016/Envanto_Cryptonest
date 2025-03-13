import "../styles/index.css"

const isDev = process.env.NODE_ENV === 'development'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="Crypto Theme" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:600%2C700%2C500%7CRoboto:400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
