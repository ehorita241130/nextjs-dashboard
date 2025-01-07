/*堀
######################################################################
File: "cards.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/dashboard/"
  "cards.tsx")
By Horita.
On (2025 Jan 3).
######################################################################
*/
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
//**********************************************************************
import {
  fetchCardData
}
from '@/app/lib/data';//New5
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};
//**********************************************************************
export default async function CardWrapper(){
  let cardData = await fetchCardData();//New5
  let totalPaidInvoices = cardData.totalPaidInvoices;//New5
  let totalPendingInvoices = cardData.totalPendingInvoices;//New5
  let numberOfInvoices =cardData.numberOfInvoices;
  let numberOfCustomers = cardData.numberOfCustomers;
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
//**********************************************************************
export function Card(
  {
    title,
    value,
    type,
  }: 
  {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
  }
){
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
