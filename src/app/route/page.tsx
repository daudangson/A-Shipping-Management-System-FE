import Image from 'next/image';
import Shipping from '../../../public/shipping.jpg';
import ContinentTabs from '@/components/continent-tabs';
import SearchResultRoute from '@/components/search-result-route';

export default function Page() {
  return (
    <div className="text-sm">
      <div className="relative h-[300px] w-full">
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
    </div>
  );
}
