'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isNull } from 'util';
const selects1 = [
  { label: 'Asia-U.S. Southwest Coast', value: 'southwest' },
  { label: 'Asia-U.S. Northwest Coast', value: 'northwest' }
] as const;
const selects2 = [
  { label: 'AEM1', value: 'AEM1' },
  { label: 'AEM2', value: 'AEM2' }
] as const;

const FormSchema = z.object({
  route: z.string({
    required_error: 'Please select a route.'
  }),
  type: z.string({
    required_error: 'Please select a type.'
  })
});
export function SearchRoutesForm({ continentName }: { continentName: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });
  const { data: continents } = useQuery({
    queryKey: ['routes', continentName],
    queryFn: async () => {
      // REAL API CALL
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/route/route-mapping/continent/${continentName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      return data.data;
    }
  });

  const [route, setRoute] = useState(null);
  const [routeName, setRouteName] = useState<String>(null);
  //   get name select route and select type
  const transformArrLabelRoute = useMemo(() => {
    if (continents) {
      const arr = continents.map((item) => {
        return {
          label: item.routeName,
          value: item.routeName
        };
      });
      return arr;
    }
  }, [continents]);
  const transformArrLabelType = useMemo(() => {
    if (route !== undefined && route !== null) {
      console.log(route)
      const arr = route.map((item) => {
        if (item.routeCode) {
          return {
            label: item.routeCode,
            value: item.routeId
          };
        }
      });
      const uniqueArr = Array.from(new Set(arr.map((item) => item!.label)));
      return uniqueArr.map((label) => {
        return arr.find((item) => item!.label === label);
      });
    }
    else return []
    // if (codeData) {
    //   const arr = codeData.map((item) => {
    //     if (item.routeCode) {
    //       return {
    //         label: item.routeCode,
    //         value: item.routeName
    //       };
    //     }
    //   });
    //   const uniqueArr = Array.from(new Set(arr.map((item) => item!.label)));
    //   return uniqueArr.map((label) => {
    //     return arr.find((item) => item!.label === label);
    //   });
    // }
  }, [route]);

  useEffect(() => {
    const fetchRouteCodeData = async () => {
      // REAL API CALL
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/route/route-mapping/code-by-name/${routeName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setRoute(data.data)
    };

    fetchRouteCodeData();
  }, [routeName]);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // data.route và data.type là 2 cùng giá trị id , nếu nó cùng thì nghĩa là cái 2 select match với nhau ngược lại thì không match
    console.log('submit: ', data)

    const params = new URLSearchParams();
    params.append('search', data.type);
    return router.push(`${pathname}?${params.toString()}#search-result`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-start w-full gap-20 mt-10 items-left">
        <FormField
          control={form.control}
          name="route"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center ">
              <FormLabel>Route</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn('w-[300px] justify-between', !field.value && 'text-muted-foreground')}
                    >
                      {field.value
                        ? (transformArrLabelRoute! ?? []).find((temp) => temp.value === field.value)?.label
                        : 'Select route'}

                      <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandEmpty>No route found.</CommandEmpty>
                    <CommandGroup>
                      {(transformArrLabelRoute! ?? []).map((temp) => (
                        <CommandItem
                          value={temp.label}
                          key={temp.value}
                          onSelect={() => {
                            form.setValue('route', temp.value);
                            setRouteName(temp.value);
                            console.log('route', temp.value);
                          }}
                        >
                          {temp.label}
                          <CheckIcon
                            className={cn('ml-auto h-4 w-4', temp.value === field.value ? 'opacity-100' : 'opacity-0')}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel>Type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn('w-[300px] justify-between', !field.value && 'text-muted-foreground')}
                    >
                      {field.value
                        ? (transformArrLabelType! ?? []).find((temp) => temp!.value === field.value)?.label
                        : 'Select type'}

                      <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search type..." className="h-9" />
                    <CommandEmpty>No route found.</CommandEmpty>
                    <CommandGroup>
                      {(transformArrLabelType! ?? []).map((temp, index) => (
                        <CommandItem
                          value={temp!.label}
                          key={index}
                          onSelect={() => {
                            form.setValue('type', temp!.value);
                          }}
                        >
                          {temp!.label}
                          <CheckIcon
                            className={cn('ml-auto h-4 w-4', temp!.value === field.value ? 'opacity-100' : 'opacity-0')}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" type="submit" className="self-end">
          Search
        </Button>
      </form>
    </Form>
  );
}
