/*堀
######################################################################
File: "auth.config.ts".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/"
  "auth.config.ts")
By Horita.
On (2025 Jan 7).
######################################################################
*/
import type { NextAuthConfig } from 'next-auth';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }){
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if( isOnDashboard ){
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } 
      else if( isLoggedIn ){
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
