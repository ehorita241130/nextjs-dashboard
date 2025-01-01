/*堀
######################################################################
File: "fonts.ts".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/"
  "fonts.ts")
By Horita.
On (2024 Dec 31).
######################################################################
*/
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const inter = Inter({subsets: ['latin']});
//**********************************************************************
export const lusitana = Lusitana(
  {
    subsets: ['latin'], 
    weight: ['400', '700'],
  }
);
//**********************************************************************
