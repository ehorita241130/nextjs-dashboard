/*堀
nxt-rvs-tag:6
######################################################################
File: "create-form.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/invoices/"
  "create-form.tsx")
By Horita.
On (2025 Jan 6).
######################################################################
*/
'use client';//New2. Client component.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice, State } from '@/app/lib/actions';//New5
import { useActionState } from 'react';//New2
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default function Form(//<1
  { customers }: { customers: CustomerField[] }
){//1><1
  const initialState: State = { message: null, errors: {} };//New2
  const [state, formAction] = useActionState(createInvoice, initialState);//New2
  const cn1 = "rounded-md bg-gray-50 p-4 md:p-6";//New4
  const cn2 = "mb-2 block text-sm font-medium";//New4
  const cn3 = "peer block w-full cursor-pointer rounded-md border "+
        "border-gray-200 py-2 pl-10 text-sm outline-2 "+
        "placeholder:text-gray-500";//New4
  const cn4 = "pointer-events-none absolute "+
        "left-3 top-1/2 h-[18px] "+
        "w-[18px] -translate-y-1/2 text-gray-500";//New4
  const cn5 = "mt-2 text-sm text-red-500";
  const cn6 = "mb-2 block text-sm font-medium";
  const cn7 = "peer block w-full rounded-md border "+
        "border-gray-200 py-2 pl-10 text-sm outline-2 "+
        "placeholder:text-gray-500";
  const cn8 = "pointer-events-none absolute left-3 "+
        "top-1/2 h-[18px] w-[18px] -translate-y-1/2 "+
        "text-gray-500 peer-focus:text-gray-900";
  const cn8B = "mb-2 block text-sm font-medium";
  const cn9 = "rounded-md border border-gray-200 bg-white px-[14px] py-3";
  const cn10 = "h-4 w-4 cursor-pointer border-gray-300 "+
        "bg-gray-100 text-gray-600 focus:ring-2";
  const cn11 = "ml-2 flex cursor-pointer items-center "+
        "gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 "+
        "text-xs font-medium text-gray-600";
  const cn12 = "h-4 w-4 cursor-pointer border-gray-300 "+
        "bg-gray-100 text-gray-600 focus:ring-2";
  const cn13 = "ml-2 flex cursor-pointer items-center "+
        "gap-1.5 rounded-full bg-green-500 "+
        "px-3 py-1.5 text-xs font-medium text-white";
  const cn14 = "flex h-10 items-center rounded-lg bg-gray-100 "+
        "px-4 text-sm font-medium text-gray-600 "+
        "transition-colors hover:bg-gray-200";
  //======================================================================
  return (
    <form action={formAction}>{/*New2*/}
      <div className={cn1}>
        <div className="mb-4">{/* Customer Name */}
          <label htmlFor="customer" className={cn2}>Choose customer</label>
          <div className="relative">
            <select id="customer" name="customerId" className={cn3}
              defaultValue="" aria-describedby="curtomer-error"
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
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {
              state.errors?.customerId &&
                state.errors.customerId.map(
                  (error: string) => (
                    <p className={cn5} key={error}>{error}</p>
                  )
                )
            }
          </div>
        </div>
        <div className="mb-4">{/* Invoice Amount */}
          <label htmlFor="amount" className={cn6}>Choose an amount</label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input id="amount" name="amount" type="number" step="0.01"
                placeholder="Enter USD amount" className={cn7}
              />
              <CurrencyDollarIcon className={cn8} />
            </div>
          </div>
        </div>
        <fieldset>{/* Invoice Status */}
          <legend className={cn8B}>Set the invoice status</legend>
          <div className={cn9}>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input id="pending" name="status" type="radio"
                  value="pending" className={cn10}
                />
                <label htmlFor="pending" className={cn11} >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input id="paid" name="status" type="radio" value="paid" 
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
      <div className="mt-6 flex justify-end gap-4">
        <Link href="/dashboard/invoices" className={cn14} >Cancel</Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
