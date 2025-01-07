/*堀
nxt-rvs-tag:2
######################################################################
File: "sidenav.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/dashboard/"
  "sidenav.tsx")
By Horita.
On (2025 Jan 7).
######################################################################
*/
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';//New1
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default function SideNav(){
  const cn1 = "flex h-full flex-col px-3 py-4 md:px-2";
  const cn2 = 
        "mb-2 flex h-20 items-end justify-start "+
        "rounded-md bg-blue-600 p-4 md:h-40";
  const cn3 = "w-32 text-white md:w-40";
  const cn4 = 
        "flex grow flex-row justify-between space-x-2 "+
        "md:flex-col md:space-x-0 md:space-y-2";
  const cn5 = 
        "hidden h-auto w-full grow rounded-md bg-gray-50 md:block";
  const cn6 = 
        "flex h-[48px] w-full grow items-center justify-center "+
        "gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium "+
        "hover:bg-sky-100 hover:text-blue-600 "+
        "md:flex-none md:justify-start md:p-2 md:px-3";
  const cn7 = "hidden md:block";
  //======================================================================
  return (
    <div className={cn1}>
      <Link className={cn2} href="/">
        <div className={cn3}><AcmeLogo /></div>
      </Link>
      <div className={cn4}>
        <NavLinks />
        <div className={cn5}></div>
        <form
          action={
            async () => {
              'use server';
              await signOut();
            }
          }    
        >
          <button className={cn6}>
            <PowerIcon className="w-6" />
            <div className={cn7}>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
