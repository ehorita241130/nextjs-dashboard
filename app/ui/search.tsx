/*堀
######################################################################
File: "search.tsx".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/ui/"
  "search.tsx")
By Horita.
On (2025 Jan 5).
######################################################################
*/
'use client';//Meaning a client component.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';//New
import { usePathname, useRouter } from 'next/navigation';//New3
import { useDebouncedCallback } from 'use-debounce';//New4
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
export default function Search(
  { placeholder }: { placeholder: string }
){//<1
  //======================================================================
  const searchParams = useSearchParams();//Using this in the client-side.
  const pathname = usePathname();//New3
  const { replace } = useRouter();//New3
  //======================================================================
  function handleSearch0(term: string){//<2. Mdf
    console.log(`-- Searching: ${term}`);//Mdf
    const params = new URLSearchParams(searchParams);//New
    params.set('page', '1');//New5
    if( term ){//<3. New2
      params.set('query', term);
    }//3>
    else{//<3
      params.delete('query');
    }//3>
    replace(`${pathname}?${params.toString()}`);//New3
  }//2>
  //======================================================================
  const handleSearch = useDebouncedCallback(handleSearch0, 300);//New4. 300 msec.
  //======================================================================
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className={"peer block w-full rounded-md border border-gray-200 py-[9px] "+
                   "pl-10 text-sm outline-2 placeholder:text-gray-500"}
        placeholder={placeholder}
        onChange={(evt) => {
          handleSearch(evt.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon 
        className={"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 "+
                   "text-gray-500 peer-focus:text-gray-900"}
      />
    </div>
  );
  //======================================================================
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
