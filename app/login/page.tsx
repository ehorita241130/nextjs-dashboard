/*堀
######################################################################
File: "page.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/login/"
  "page.tsx")
By Horita.
On (2025 Jan 7).
######################################################################
*/
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
export default function LoginPage(){
  const cn1 = "flex items-center justify-center md:h-screen";
  const cn2 = "relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32";
  const cn3 = "flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36";
  const cn4 = "w-32 text-white md:w-36";
  //======================================================================
  return (
    <main className={cn1}>
      <div className={cn2}>
        <div className={cn3}>
          <div className={cn4}><AcmeLogo /></div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
