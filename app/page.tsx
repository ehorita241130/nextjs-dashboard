/*堀
######################################################################
File: "page.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/"
  "page.tsx")
By Horita.
On (2024 Dec 31).
######################################################################
*/
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';//New
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default function Page(){
  return (
    <main>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-26'>
        <AcmeLogo />
      </div>
      <div>
      {/*<div className='mt-4 flex grow flex-col gap-4 md:flex-row'>*/}
        <div className={'flex flex-col justify-center gap-6 rounded-lg '+
                        'bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'}>
          <p 
            className={`${lusitana.className} `+
                       'text-xl text-gray-800 md:test-3xl md:loading-normal'}>
              <strong>Welcome to Acme：</strong> <br/>
              This is the example for the{' '}
              <a href='https://nextjs.org/learn/' className='text-blue-500'>
                Next.js Learn Course
              </a>, 
              brought to you by Vercel.
          </p>
          <Link
            href='/login'
            className={'flex items-center gap-5 self-start rounded-lg '+
               'bg-blue-500 px-6 py-3 text-sm font-medium '+
               'text-white transition-colors hover:bg-blue-400 md:text-base'}
          >
            <span>Log in：→</span> 
            {/*<ArrowRightIcon className='w-6 md:w-5' />*/}
          </Link>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
          {/* Add Hero Images Here */}
          <Image
            src='/hero-desktop.png'
            width={500}
            height={380}
            className='hidden md:block'
            alt='Screeshots of the dashboard project showing desktop version'
          />
          <Image
            src='/hero-mobile.png'
            width={250}
            height={310}
            className='block md:block'
            alt='Screeshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
