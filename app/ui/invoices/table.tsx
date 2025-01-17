/*堀
nxt-rvs-tag:2
######################################################################
File: "table.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/invoices/"
  "table.tsx")
By Horita.
On (2025 Jan 5).
######################################################################
*/
//A server-component.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import Image from 'next/image';
import { UpdateInvoice } from '@/app/ui/invoices/buttons';
//import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { DeleteInvoice1 } from '@/app/ui/invoices/buttons';//New1
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default async function InvoicesTable(//<1
  {
    query,
    currentPage,
  }: 
  {
    query: string;
    currentPage: number;
  }
){//1><1
  const invoices = await fetchFilteredInvoices(query, currentPage);
  const cn5 = 'mb-2 w-full rounded-md bg-white p-4';
  const cn20 = 'w-full border-b py-3 text-sm last-of-type:border-none '+
        '[&:first-child>td:first-child]:rounded-tl-lg '+
        '[&:first-child>td:last-child]:rounded-tr-lg '+
        '[&:last-child>td:first-child]:rounded-bl-lg '+
        '[&:last-child>td:last-child]:rounded-br-lg';
  //======================================================================
  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <div className='md:hidden'>
            {
              invoices?.map((invoice) => 
                (
                  <div key={invoice.id} className={cn5}>
                    <div className='flex items-center justify-between border-b pb-4'>
                      <div>
                        <div className='mb-2 flex items-center'>
                          <Image src={invoice.image_url1}
                            className='mr-2 rounded-full'
                            width={28} height={28}
                            alt={`${invoice.name}'s profile picture`}
                          />
                          <p>{invoice.name}</p>
                        </div>
                        <p className='text-sm text-gray-500'>{invoice.email}</p>
                      </div>
                      <InvoiceStatus status={invoice.status} />
                    </div>
                    <div className='flex w-full items-center justify-between pt-4'>
                      <div>
                        <p className='text-xl font-medium'>
                          {formatCurrency(invoice.amount)}
                        </p>
                        <p>{formatDateToLocal(invoice.date)}</p>
                      </div>
                      <div className='flex justify-end gap-2'>
                        <UpdateInvoice id={invoice.id} />
                        <DeleteInvoice1 id={invoice.id} />
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </div>
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Customer
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Email
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Amount
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Date
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Status
                </th>
                <th scope='col' className='relative py-3 pl-6 pr-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {
                invoices?.map((invoice) => 
                  (
                    <tr key={invoice.id} className={cn20}>
                      <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                        <div className='flex items-center gap-3'>
                          <Image src={invoice.image_url}
                            className='rounded-full'
                            width={28} height={28}
                            alt={`${invoice.name}'s profile picture`}
                          />
                          <p>{invoice.name}</p>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-3 py-3'>
                        {invoice.email}
                      </td>
                      <td className='whitespace-nowrap px-3 py-3'>
                        {formatCurrency(invoice.amount)}
                      </td>
                      <td className='whitespace-nowrap px-3 py-3'>
                        {formatDateToLocal(invoice.date)}
                      </td>
                      <td className='whitespace-nowrap px-3 py-3'>
                        <InvoiceStatus status={invoice.status} />
                      </td>
                      <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                        <div className='flex justify-end gap-3'>
                          <UpdateInvoice id={invoice.id} />
                          <DeleteInvoice1 id={invoice.id} />
                        </div>
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  //======================================================================
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
