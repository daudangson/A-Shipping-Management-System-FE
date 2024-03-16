import Image from 'next/image';
import Shipping from '../../../public/shipping.jpg';
import AboutUs from '../../../public/about-us.jpg';
import AboutUs1 from '../../../public/about-us1.jpg';
import { SearchRoutesForm } from '@/components/forms/form-search-routes';
import ContinentTabs from '@/components/continent-tabs';
import SearchResultRoute from '@/components/search-result-route';

export default function Page() {
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
          {/* <SearchRoutesForm data={routes} onDataFromChild={handleDataFromChild} /> */}
          <ContinentTabs />
        </div>
      </section>
      <SearchResultRoute />
      <section className="container space-y-8 p-10">
        {/* About us */}
        <h1 className="text-center text-3xl font-bold">ABOUT US</h1>
        <div className="flex gap-4">
          <Image
            src={AboutUs.src}
            alt="shipping line picture"
            width={500}
            height={500}
            className="w-[50%] rounded-md object-cover object-center"
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
            className="order-1 w-[50%] rounded-md object-cover object-center"
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
