/*堀
nxt-rvs-tag:4
######################################################################
File: "buttons.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/invoices/"
  "buttons.tsx")
By Horita.
On (2025 Jan 6).
######################################################################
*/
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';//New
import { deleteInvoice1 } from '@/app/lib/actions';//New3
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function CreateInvoice(){
  const cn1 = "flex h-10 items-center rounded-lg "+
        "bg-blue-600 px-4 text-sm font-medium "+
        "text-white transition-colors hover:bg-blue-500 "+
        "focus-visible:outline focus-visible:outline-2 "+
        "focus-visible:outline-offset-2 focus-visible:outline-blue-600";
  //======================================================================
  return (
    <Link
      href="/dashboard/invoices/create"
      className={cn1}
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
//**********************************************************************
export function UpdateInvoice({ id }: { id: string }){
  const cn1 = "rounded-md border p-2 hover:bg-gray-100";//New2
  //======================================================================
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className={cn1}
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
//**********************************************************************
//**********************************************************************
export function DeleteInvoice({ id }: { id: string }){
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);//New
  const cn1 = "rounded-md border p-2 hover:bg-gray-100";//New2
  //======================================================================
  return (
    <form action={deleteInvoiceWithId}>
      <button type="submit" className={cn1}>
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
//**********************************************************************
export function DeleteInvoice1({ id }: { id: string }){//New3
  const cn1 = "rounded-md border p-2 hover:bg-gray-100";//New2
  //======================================================================
  return (
    <form action={deleteInvoice1}>
      <input type='hidden' name='id' value={id} />
      <button type="submit" className={cn1}>
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
