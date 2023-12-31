import Image from 'next/image';
import Shipping from '../../public/shipping.jpg';
import AboutUs from '../../public/about-us.jpg';
import AboutUs1 from '../../public/about-us1.jpg';
import { SearchRoutesForm } from '@/components/forms/form-search-routes';
export default function Page() {
  return (
    <div className="text-sm">
      <div className="relative w-full h-screen">
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
        <div>
          <h1 className="text-3xl font-bold text-center">SHIPPING LINES</h1>
          <p className="text-lg text-center">
            A world leading container fleet, a service network with disruption-free global coverage.
          </p>
        </div>
        <div className="flex justify-around mt-10">
          <div className="text-center">
            <p className="text-2xl font-semibold ">144</p>
            <p className="text-xs text-gray-500">Country/Region</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold ">600</p>
            <p className="text-xs text-gray-500">Ports</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold ">700</p>
            <p className="text-xs text-gray-500">Routes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold ">200</p>
            <p className="text-xs text-gray-500">VESSELS</p>
          </div>
        </div>
      </section>
      <section className="container p-10">
        <div className="flex flex-col items-center gap-6 mt-10 ">
          <h1 className="text-3xl font-bold text-center">ROUTES</h1>
          {/* <SearchRoutesForm /> */}
        </div>
      </section>
      <section className="container p-10 space-y-8">
        {/* About us */}
        <h1 className="text-3xl font-bold text-center">ABOUT US</h1>
        <div className="flex gap-4">
          <Image
            src={AboutUs.src}
            alt="shipping line picture"
            width={1000}
            height={1000}
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
