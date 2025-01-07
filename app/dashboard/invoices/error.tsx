/*堀
######################################################################
File: "error.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/dashboard/invoices/"
  "error.tsx")
By Horita.
On (2025 Jan 6).
######################################################################
*/
'use client';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
import { useEffect } from 'react';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  
export default function Error(
  {
    error,
    reset,
  }: 
  {
    error: Error & { digest?: string };
    reset: () => void;
  }
){
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error] );
  //======================================================================
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className={"mt-4 rounded-md bg-blue-500 px-4 py-2 "+
                   "text-sm text-white transition-colors hover:bg-blue-400"}
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
  //======================================================================
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
