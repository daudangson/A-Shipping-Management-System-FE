import Image from 'next/image';
import Shipping from '../../public/shipping.jpg';
import AboutUs from '../../public/about-us.jpg';
import AboutUs1 from '../../public/about-us1.jpg';
import { SearchRoutesForm } from '@/components/forms/form-search-routes';
export default function Page() {
  return (
    <div className="text-sm">
      <div className="relative h-screen w-full">
        <Image src={Shipping.src} fill alt="shipping line picture" className="z-10 object-cover object-center" />
        <div className="absolute inset-0 z-[1] bg-slate-300" />
      </div>
      <section className="container p-10">
        <div>
          <h1 className="text-center text-3xl font-bold">SHIPPING LINES</h1>
          <p className="text-center text-lg">
            A world leading container fleet, a service network with disruption-free global coverage.
          </p>
        </div>
        <div className="mt-10 flex justify-around">
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

      <section className="container space-y-8 p-10">
        {/* About us */}
        <h1 className="text-center text-3xl font-bold">ABOUT US</h1>
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
