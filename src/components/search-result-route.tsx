'use client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { RouteDetailTable } from './table/table-route-detail';

export default function SearchResultRoute() {
  const searchParams = useSearchParams();
  let routeId = searchParams.get('search');
  const [routeData, setRouteData] = useState<Array>(null);
  const [routeName, setRouteName] = useState<string>(null);

  const { data } = useQuery({
    queryKey: ['result-search-route', routeId],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/port-sequence/route/${routeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setRouteData(data.data);
      setRouteName(data.data[0].route.routeName);

      return data.data;
    },
    enabled: !!routeId
  });

  return (
    <>
      {routeId && (
        <div>
          <section className="container p-10">
            <div className="mt-10 flex flex-col items-center gap-6 ">
              <h1 className="text-center text-3xl font-bold">
                {/* Please ,  let change name is here (data from api) */}
                {routeName}
              </h1>
              {/* Image */}
              {/* Change image  */}
              <div className="mt-6">
                <div className="relative flex gap-20">
                  {(routeData! ?? []).map((route, index) => (
                    <div className="relative flex justify-center" key={index}>
                      <p className="absolute -top-3/4">{route.port.location}</p>
                      <Image
                        src={'/port.png'}
                        alt="shipping line picture"
                        width={31}
                        height={31}
                        className="relative z-10  object-cover object-center"
                      />
                    </div>
                  ))}

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
          <section className="container p-10">
            <RouteDetailTable data={routeData}/>
          </section>
        </div>
      )}
    </>
  );
}
