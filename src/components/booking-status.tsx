import { Button } from '@/components/ui/button';
import * as Enum from '@/constants';

export interface BookingStatusProps {
  status: string;
}

export const BookingStatus: React.FC<BookingStatusProps> = ({ status }) => {
  let color = '';
  let text = '';
  switch (status) {
    case Enum.BookingStatus.DRAFT:
      color = 'bg-gray-200';
      text = 'Draft';
      break;
    case Enum.BookingStatus.PENDING_APPROVAL:
      color = 'bg-[#FFFF00]';
      text = 'Pending Approval';
      break;
    case Enum.BookingStatus.APPROVED:
      //color = "bg-[#00FF00]";
      color = 'bg-gradient-to-r from-[#00FF00] to-emerald-400';
      text = 'Approved';
      break;
    case Enum.BookingStatus.REJECTED:
      //color = "bg-[#FF0000] !text-teal-50";
      color = 'bg-gradient-to-r from-[#FF0002]  to-[#FF6005] !text-teal-50';
      text = 'Rejected';
      break;
    case Enum.BookingStatus.CONFIRMED:
      //color = "bg-sky-500 ";
      color = 'bg-gradient-to-r from-[#00BFFF] to-[#00FFFF]';
      text = 'Confirmed';
      break;
    case Enum.BookingStatus.CANCELLED:
      //color = "bg-[#333333] !text-white";
      color = 'bg-gradient-to-r from-[#333333] to-[#666666]  !text-white';
      text = 'Cancelled';
      break;
    case Enum.BookingStatus.IN_TRANSIT:
      //color = "bg-blue-200";
      color = 'bg-gradient-to-r from-[#0000FF] to-[#004FFF] !text-white';
      text = 'In Transit';
      break;
    case Enum.BookingStatus.ARRIVED:
      //color = "bg-[#800080] !text-white";
      color = 'bg-gradient-to-r from-[#800080] to-[#BF40BF] !text-white';
      text = 'Arrived';
      break;
    case Enum.BookingStatus.DELIVERED:
      color = 'bg-gradient-to-r from-cyan-500 to-blue-500  !text-white';
      text = 'Delivered';
      break;
    case Enum.BookingStatus.DELAYED:
      //color = "bg-red-200";
      color = 'bg-gradient-to-r from-[#FF0000] to-[#FF4000]  !text-white';
      text = 'Delayed';
      break;
    default:
      color = 'bg-gray-200';
      text = 'Draft';
      break;
  }

  return <Button className={`min-w-24 px-[6px] py-[5px] text-sm ${color} text-gray-700`}>{text}</Button>;
};
