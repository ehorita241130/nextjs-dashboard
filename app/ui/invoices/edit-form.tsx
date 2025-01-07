/*堀
nxt-rvs-tag:4
######################################################################
File: "edit-form.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/invoices/"
  "edit-form.tsx")
By Horita.
On (2025 Jan 6).
######################################################################
*/
'use client';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInvoice } from '@/app/lib/actions';//New
import { updateInvoice1 } from '@/app/lib/actions';//New3
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function EditInvoiceForm(
  {
    invoice,
    customers,
  }: 
  {
    invoice: InvoiceForm;
    customers: CustomerField[];
  }
){
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);//Recovered
  //======================================================================
  const cn1 = "rounded-md bg-gray-50 p-4 md:p-6";
  const cn2 = "mb-2 block text-sm font-medium";
  const cn3 = "peer block w-full cursor-pointer "+
        "rounded-md border border-gray-200 "+
        "py-2 pl-10 text-sm outline-2 placeholder:text-gray-500";
  const cn4 = "pointer-events-none absolute "+
        "left-3 top-1/2 h-[18px] w-[18px] "+
        "-translate-y-1/2 text-gray-500";
  const cn5 = "mb-2 block text-sm font-medium";
  const cn6 = "relative mt-2 rounded-md";
  const cn7 = "peer block w-full rounded-md border "+
        "border-gray-200 py-2 pl-10 text-sm "+
        "outline-2 placeholder:text-gray-500";
  const cn8 = "pointer-events-none absolute left-3 "+
        "top-1/2 h-[18px] w-[18px] -translate-y-1/2 "+
        "text-gray-500 peer-focus:text-gray-900";
  const cn9 = "rounded-md border border-gray-200 bg-white px-[14px] py-3";
  const cn10 = "h-4 w-4 cursor-pointer "+
        "border-gray-300 bg-gray-100 text-gray-600 focus:ring-2";
  const cn11 = "ml-2 flex cursor-pointer items-center gap-1.5 "+
        "rounded-full bg-gray-100 px-3 py-1.5 "+
        "text-xs font-medium text-gray-600";
  const cn12 = "h-4 w-4 cursor-pointer border-gray-300 "+
        "bg-gray-100 text-gray-600 focus:ring-2";
  const cn13 = "ml-2 flex cursor-pointer items-center "+
        "gap-1.5 rounded-full bg-green-500 "+
        "px-3 py-1.5 text-xs font-medium text-white";
  const cn14 = "mt-6 flex justify-end gap-4";
  const cn15 = "flex h-10 items-center rounded-lg "+
        "bg-gray-100 px-4 text-sm font-medium "+
        "text-gray-600 transition-colors hover:bg-gray-200";
  //======================================================================
  return (
    <form action={updateInvoiceWithId}>
      <div className={cn1}>
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className={cn2}>
            Choose customer
          </label>
          <div className="relative">
            <select id="customer" name="customerId" className={cn3}
              defaultValue={invoice.customer_id}
            >
              <option value="" disabled>Select a customer</option>
              {
                customers.map((customer) => 
                  (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  )
                )
              }
            </select>
            <UserCircleIcon className={cn4} />
          </div>
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className={cn5}>
            Choose an amount
          </label>
          <div className={cn6}>
            <div className="relative">
              <input id="amount" name="amount" type="number" 
                step="0.01" defaultValue={invoice.amount}
                placeholder="Enter USD amount" className={cn7}
              />
              <CurrencyDollarIcon className={cn8} />
            </div>
          </div>
        </div>
        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className={cn9}>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input id="pending" name="status" type="radio" value="pending"
                  defaultChecked={invoice.status === 'pending'}
                  className={cn10}
                />
                <label htmlFor="pending" className={cn11} >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input id="paid" name="status" type="radio" value="paid"
                  defaultChecked={invoice.status === 'paid'}
                  className={cn12}
                />
                <label htmlFor="paid" className={cn13}>
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className={cn14}>
        <Link href="/dashboard/invoices" className={cn15}>
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
//**********************************************************************
export default function EditInvoiceForm1(
  {
    invoice,
    customers,
  }: 
  {
    invoice: InvoiceForm;
    customers: CustomerField[];
  }
){
  //const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);//Recovered
  const id = invoice.id;//New3
  //======================================================================
  const cn1 = "rounded-md bg-gray-50 p-4 md:p-6";
  const cn2 = "mb-2 block text-sm font-medium";
  const cn3 = "peer block w-full cursor-pointer "+
        "rounded-md border border-gray-200 "+
        "py-2 pl-10 text-sm outline-2 placeholder:text-gray-500";
  const cn4 = "pointer-events-none absolute "+
        "left-3 top-1/2 h-[18px] w-[18px] "+
        "-translate-y-1/2 text-gray-500";
  const cn5 = "mb-2 block text-sm font-medium";
  const cn6 = "relative mt-2 rounded-md";
  const cn7 = "peer block w-full rounded-md border "+
        "border-gray-200 py-2 pl-10 text-sm "+
        "outline-2 placeholder:text-gray-500";
  const cn8 = "pointer-events-none absolute left-3 "+
        "top-1/2 h-[18px] w-[18px] -translate-y-1/2 "+
        "text-gray-500 peer-focus:text-gray-900";
  const cn9 = "rounded-md border border-gray-200 bg-white px-[14px] py-3";
  const cn10 = "h-4 w-4 cursor-pointer "+
        "border-gray-300 bg-gray-100 text-gray-600 focus:ring-2";
  const cn11 = "ml-2 flex cursor-pointer items-center gap-1.5 "+
        "rounded-full bg-gray-100 px-3 py-1.5 "+
        "text-xs font-medium text-gray-600";
  const cn12 = "h-4 w-4 cursor-pointer border-gray-300 "+
        "bg-gray-100 text-gray-600 focus:ring-2";
  const cn13 = "ml-2 flex cursor-pointer items-center "+
        "gap-1.5 rounded-full bg-green-500 "+
        "px-3 py-1.5 text-xs font-medium text-white";
  const cn14 = "mt-6 flex justify-end gap-4";
  const cn15 = "flex h-10 items-center rounded-lg "+
        "bg-gray-100 px-4 text-sm font-medium "+
        "text-gray-600 transition-colors hover:bg-gray-200";
  //======================================================================
  return (
    <form action={updateInvoice1}>
      <input type='hidden' name='id' value={id} />
      <div className={cn1}>
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className={cn2}>
            Choose customer
          </label>
          <div className="relative">
            <select id="customer" name="customerId" className={cn3}
              defaultValue={invoice.customer_id}
            >
              <option value="" disabled>Select a customer</option>
              {
                customers.map((customer) => 
                  (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  )
                )
              }
            </select>
            <UserCircleIcon className={cn4} />
          </div>
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className={cn5}>
            Choose an amount
          </label>
          <div className={cn6}>
            <div className="relative">
              <input id="amount" name="amount" type="number" 
                step="0.01" defaultValue={invoice.amount}
                placeholder="Enter USD amount" className={cn7}
              />
              <CurrencyDollarIcon className={cn8} />
            </div>
          </div>
        </div>
        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className={cn9}>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input id="pending" name="status" type="radio" value="pending"
                  defaultChecked={invoice.status === 'pending'}
                  className={cn10}
                />
                <label htmlFor="pending" className={cn11} >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input id="paid" name="status" type="radio" value="paid"
                  defaultChecked={invoice.status === 'paid'}
                  className={cn12}
                />
                <label htmlFor="paid" className={cn13}>
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className={cn14}>
        <Link href="/dashboard/invoices" className={cn15}>
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
//**********************************************************************
