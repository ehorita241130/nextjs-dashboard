/*堀
nxt-rvs-tag:4
######################################################################
File: "page.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/dashboard/invoices/"
  "page.tsx")
By Horita.
On (2025 Jan 5).
######################################################################
*/
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';//New
import { Metadata } from 'next';//New3
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
export const metadata: Metadata = {
  title: 'Invoices',
}
//**********************************************************************
export default async function Page(//<1
  props:
  {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }
){//1><1
  //======================================================================
  const searchParams = await props.searchParams;//Using this in the server-side.
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);//New
  const cn1 = 'flex w-full items-center justify-between';//New2
  const cn2 = `${lusitana.className} text-2xl`;//New2
  const cn3 = 'mt-4 flex items-center justify-between gap-2 md:mt-8';//New2
  const cn4 = 'mt-5 flex w-full justify-center';//New2
  //======================================================================
  return (
    <div className='w-full'>
      <div className={cn1}>
        <h1 className={cn2}>Invoices</h1>
      </div>
      <div className={cn3}>
        <Search placeholder='Search invoices...' />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> 
      <div className={cn4}>
        <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );
  //======================================================================
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
