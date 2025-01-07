/*堀
nxt-rvs-tag:4
######################################################################
File: "login-form.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/"
  "login-form.tsx")
By Horita.
On (2025 Jan 7).
######################################################################
*/
'use client';//New3
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { useActionState } from 'react';//New2
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
//
import { authenticate } from '@/app/lib/actions';//New2
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default function LoginForm(){
  const [errorMessage, formAction, isPending] = 
  useActionState(
    authenticate,
    undefined,
  );//New2
  const cn1 = "flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8";//New1
  const cn2 = `${lusitana.className} mb-3 text-2xl`;//New1
  const cn3 = "mb-3 mt-5 block text-xs font-medium text-gray-900";//New1
  const cn4 = "peer block w-full rounded-md border border-gray-200 "+
        "py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";
  const cn5 = "pointer-events-none absolute left-3 top-1/2 "+
        "h-[18px] w-[18px] -translate-y-1/2 text-gray-500 "+
        "peer-focus:text-gray-900";
  const cn6 = "mb-3 mt-5 block text-xs font-medium text-gray-900";//New1
  const cn7 = "peer block w-full rounded-md border "+
        "border-gray-200 py-[9px] pl-10 text-sm outline-2 "+
        "placeholder:text-gray-500";
  const cn8 = "pointer-events-none absolute left-3 top-1/2 "+
        "h-[18px] w-[18px] -translate-y-1/2 "+
        "text-gray-500 peer-focus:text-gray-900";
  const cn9 = "ml-auto h-5 w-5 text-gray-50";
  const cn10 = "flex h-8 items-end space-x-1";
  //======================================================================
  return (
    <form action={formAction} className="space-y-3">
      <div className={cn1}>
        <h1 className={cn2}>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label className={cn3}htmlFor="email">Email</label>
            <div className="relative">
              <input className={cn4} id="email" type="email" name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className={cn5} />
            </div>
          </div>
          <div className="mt-4">
            <label className={cn6} htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input className={cn7} id="password" type="password" name="password"
                placeholder="Enter password"
                required minLength={6}
              />
              <KeyIcon className={cn8} />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className={cn9} />
        </Button>
        <div className={cn10}>
          {/* Add form errors here */}
          {
            errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )
          }   
        </div>
      </div>
    </form>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
