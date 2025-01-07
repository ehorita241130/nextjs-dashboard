/*堀
######################################################################
File: "page.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/dashboard/invoices/create/"
  "page.tsx")
By Horita.
On (2025 Jan 6).
######################################################################
*/
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
export default async function Page(){
  const customers = await fetchCustomers();
  //======================================================================
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={
          [
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Create Invoice',
              href: '/dashboard/invoices/create',
              active: true,
            },
          ]
        }
      />
      <Form customers={customers} />
    </main>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
