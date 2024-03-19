'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSearchParams } from 'next/navigation';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { BookingStatus } from './booking-status';
import { formatDate, formatDateTime } from '@/lib/utils';
import { toast, useToast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  bookingNumber: z.string().min(1, 'Please enter booking ID')
});

type FormValues = z.infer<typeof FormSchema>;

export default function TrackBooking() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bookingNumber: ''
    }
  });
  const { toast } = useToast();
  const [bookingInfo, setBookingInfo] = useState<any>(null);
  const onSubmit = async (formData: FormValues) => {
    // fetch
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${formData.bookingNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log('data', data);
      if (data?.data) {
        setBookingInfo(data?.data);
      } else {
        setBookingInfo(null);
        toast({
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-white p-2">
              <code className="font-semibold text-red-500">Can't found your booking</code>
            </pre>
          )
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log('bookingInfo', bookingInfo);
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Track your booking</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <Label htmlFor="booking-number">Booking ID</Label> */}
              {/* <Input id="booking-number" type="text" placeholder="Enter your booking ID" /> */}
              <FormField
                control={form.control}
                name="bookingNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Enter your booking ID" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Track
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <div className="w-full max-w-screen-sm text-lg">
        {bookingInfo?.bookingId && (
          <Card className="mt-4">
            <CardHeader className="text-center">
              <CardTitle>Booking Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-2 flex justify-between">
                <span className="font-semibold">Booking ID:</span>
                <span>{bookingInfo?.bookingId}</span>
              </div>
              {/* Name */}
              <div className="flex justify-between">
                <span className="mt-2 font-semibold">Name:</span>
                <span>{bookingInfo?.user?.name}</span>
              </div>
              {/* email */}
              <div className="flex justify-between">
                <span className="mt-2 font-semibold">Email:</span>
                <span>{bookingInfo?.user?.email}</span>
              </div>
              {/* ContainnerNubmer */}
              <div className="flex justify-between">
                <span className="mt-2 font-semibold">Container Number:</span>
                <span>{bookingInfo?.container?.containerNumber}</span>
              </div>
              {/* Vessel */}
              <div className="flex justify-between">
                <span className="mt-2 font-semibold">Vessel:</span>
                <span>{bookingInfo?.container?.currentVessel?.vesselName}</span>
              </div>
              {/* status */}
              <div className="flex justify-between">
                <span className="mt-2 font-semibold">Status:</span>
                <BookingStatus status={bookingInfo?.status} />
              </div>
              {/* route */}
              <div className="flex justify-between">
                <span className="mt-2 font-semibold">Route:</span>
                <span>{bookingInfo?.route?.routeName}</span>
              </div>
              {/* current location */}
              <div className="mt-2 flex justify-between">
                <span className="font-semibold">Current Location:</span>
                <span>
                  {bookingInfo?.container?.currentLocation?.portName} -
                  {bookingInfo?.container?.currentLocation?.location} -{' '}
                  {bookingInfo?.container?.currentLocation?.country}
                </span>
              </div>
              {/* create_at */}
              <div className="mt-2 flex justify-between">
                <span className="font-semibold">Booking Date:</span>
                <span>{formatDateTime(bookingInfo?.created_at)}</span>
              </div>
              {/* departure Date */}
              <div className="mt-2 flex justify-between">
                <span className="font-semibold">Departure Date:</span>
                <span>{formatDate(bookingInfo?.departureDate)}</span>
              </div>
              {/* arrival Date */}
              <div className="mt-2 flex justify-between">
                <span className="font-semibold">Arrival Date:</span>
                <span>{formatDate(bookingInfo?.arrivalDate)}</span>
              </div>

              {/* Container status */}
              <div className="mt-2 flex justify-between">
                <span className="font-semibold">Container Status:</span>
                <span>{bookingInfo?.container?.currentStatus}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
