import "./globals.css";

export const metadata = {
  title: "Task Manager App",
  description: "A Nextjs app to manage tasks"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
