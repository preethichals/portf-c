import "../globals.css";

export const metadata = {
  title: "Preethi- My Portfolio",
  description: "With great passion, I have been building Front-end designs for over 3-years",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
