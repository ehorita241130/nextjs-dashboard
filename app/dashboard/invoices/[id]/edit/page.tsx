/*堀
nxt-rvs-tag:4
######################################################################
File: "page.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/dashboard/invoices/[id]/edit/"
  "page.tsx")
By Horita.
On (2025 Jan 6).
######################################################################
*/
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { fetchInvoiceById } from '@/app/lib/data';//New2
import { updateInvoice } from '@/app/lib/actions';//New3
import { notFound } from 'next/navigation';//New3
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
export default async function Page(
  props: { params: Promise<{ id: string }> }//New
){
  console.log(`-- edit.Page()#1: called`);//Added
  const params = await props.params;//New
  const id = params.id;//New
  const [invoice, customers] = 
    await Promise.all(
      [
        fetchInvoiceById(id),
        fetchCustomers(),
      ]
    );//New2
  if( !invoice ){//New3
    notFound();
  }
  //======================================================================
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={
          [
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Edit Invoice',
              href: `/dashboard/invoices/${id}/edit`,
              active: true,
            },
          ]
        }
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
