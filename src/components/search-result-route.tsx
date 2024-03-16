'use client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function SearchResultRoute() {
  const searchParams = useSearchParams();
  let routeId = searchParams.get('search');

  const { data } = useQuery({
    queryKey: ['result-search-route', routeId],
    queryFn: async () => {
      // call data from API here  /port-sequence/route/63e962c5-3cba-48de-957a-520bbdad4eef
    },
    enabled: !!routeId
  });

  return (
    <>
      {routeId && (
        <section className="container p-10">
          <div className="mt-10 flex flex-col items-center gap-6 ">
            <h1 className="text-center text-3xl font-bold">
              {/* Please ,  let change name is here (data from api) */}
              {/* Example */}
              Test
            </h1>
            {/* Image */}
            {/* Change image  */}
            <div className="min-h-screen w-full bg-red-500"></div>
            <div className="mt-6">
              <div className="relative flex gap-20">
                {/* Map port is here */}
                <div className="relative">
                  <p className="absolute -top-3/4">Test1</p>
                  <Image
                    src={'/port.png'}
                    alt="shipping line picture"
                    width={31}
                    height={31}
                    className="relative z-10  object-cover object-center"
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-3/4">Test1</p>
                  <Image
                    src={'/port.png'}
                    alt="shipping line picture"
                    width={31}
                    height={31}
                    className="relative z-10  object-cover object-center"
                  />
                </div>
                {/*End Map port is here */}
                <div className="relative">
                  <Image
                    src={'/ship.png'}
                    alt="shipping line picture"
                    width={49}
                    height={31}
                    className="relative z-10  object-cover object-center"
                  />
                </div>
                <div className="absolute left-0 right-1 top-1/2 z-[1] h-1 bg-blue-600  " />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
