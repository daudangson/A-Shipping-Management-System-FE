'use client';
import Image from 'next/image';
import Shipping from '../../../public/shipping.jpg';
import AboutUs from '../../../public/about-us.jpg';
import AboutUs1 from '../../../public/about-us1.jpg';
import { RouteDetailTable } from '@/components/table/table-route-detail';

import { SearchRoutesForm } from '@/components/forms/form-search-routes';
import { useState, useEffect } from 'react';
import { metadata } from '../layout';
// getstaticprops fetch data from api

interface Route {
  route: string;
  references: String[];
}

export default function Page() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [routeDetail, setRouteDetail] = useState<any>();
  const [ref, setRef] = useState<string>();
  useEffect(() => {
    const fetchRoutes = async () => {
      const res = await fetch('http://localhost:3001/api/v1/routes/metadata', {
        method: 'GET'
      });
      const data = await res.json();
      setRoutes(data?.metadata);
    };
    fetchRoutes();
  }, []);

  const handleDataFromChild = (value: any) => {
    setRouteDetail(value);
  };

  console.log(routeDetail);
  return (
    <div className="text-sm">
      <div className="relative h-screen w-full">
        <Image
          src={Shipping.src}
          fill
          alt="shipping line picture"
          className="z-10"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 z-[1] bg-slate-300" />
      </div>

      <section className="container p-10">
        <div className="mt-10 flex flex-col items-center gap-6 ">
          <h1 className="text-center text-3xl font-bold">ROUTES</h1>
          <SearchRoutesForm data={routes} onDataFromChild={handleDataFromChild} />
        </div>
      </section>

      {routeDetail?.image && (
        <section className="container space-y-8 rounded-lg bg-slate-100 p-10">
          <h1 className="text-center text-3xl font-bold">ROUTE DETAIL</h1>
          {/* Route Image */}
          <div className="flex justify-center pt-2">
            <Image
              src={routeDetail?.image}
              alt="shipping line picture"
              width={800}
              height={800}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          {/* Route Detail */}
          <div className="flex justify-center pt-2">
            <RouteDetailTable data={routeDetail?.table_data} />
          </div>
        </section>
      )}

      <section className="container space-y-8 p-10">
        {/* About us */}
        <h1 className="text-center text-3xl font-bold">ABOUT US</h1>
        <div className="flex gap-4">
          <Image
            src={AboutUs.src}
            alt="shipping line picture"
            width={500}
            height={500}
            objectFit="cover"
            objectPosition="center"
            className="w-[50%] rounded-md"
          />
          <div className="flex items-center">
            <div>
              <p className="text-xl font-semibold">A world leader company</p>
              <p>
                A world leader company We are a world leader company in global container shipping and dedicated to
                providing efficient transport solutions. We are part of the ABC Group, a world leader in shipping and
                logistics and pioneer in innovation and digitalisation. We are a world leader company in global
                container shipping and dedicated to providing efficient transport solutions. We are part of the ABC
                Group, a world leader in shipping and logistics and pioneer in innovation and digitalisation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={AboutUs1.src}
            alt="shipping line picture"
            width={500}
            height={500}
            objectFit="cover"
            objectPosition="center"
            className="order-1 w-[50%] rounded-md"
          />
          <div className="flex items-center">
            <div>
              <p className="text-xl font-semibold">A world leader company</p>
              <p>
                We are a world leader company in global container shipping and dedicated to providing efficient
                transport solutions. We are part of the ABC Group, a world leader in shipping and logistics and pioneer
                in innovation and digitalisation. We are a world leader company in global container shipping and
                dedicated to providing efficient transport solutions. We are part of the ABC Group, a world leader in
                shipping and logistics and pioneer in innovation and digitalisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
