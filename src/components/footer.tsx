import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-slate-950 pb-4 pt-10 text-slate-100">
      <div className="container">
        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/">Free shipping on all orders</Link>
          </li>
          <li>
            <Link href="/">Free returns for 30 days</Link>
          </li>
          <li>
            <Link href="/">International shipping available</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Input placeholder="Email" className="w-50 text-slate-100" />
        <Button variant="secondary">Contact</Button>
      </div>
      {/* Copyright */}
      <div className="flex justify-center gap-4">
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Shipping Policy</Link>
      </div>
      <div className="flex justify-center gap-4">
        <Link href="/">© 2023 Shipping lines DACTT2</Link>
      </div>
    </footer>
  );
}
