/*堀
######################################################################
File: "layout.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/"
  "layout.tsx")
By Horita.
On (2024 Dec 31).
######################################################################
*/
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
//**********************************************************************
export default function RootLayout(
  {children,}: {children: React.ReactNode;}
){
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/*<body>{children}</body>*/}
    </html>
  );
}
//**********************************************************************
