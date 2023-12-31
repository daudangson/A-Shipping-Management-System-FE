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
import { useState } from 'react';

const selects1 = [
  { label: 'Asia-U.S. Southwest Coast', value: 'southwest' },
  { label: 'Asia-U.S. Northwest Coast', value: 'northwest' }
] as const;
const selects2 = [
  { label: 'AEM1', value: 'AEM1' },
  { label: 'AEM2', value: 'AEM2' }
] as const;

interface Route {
  route: string;
  references: String[];
}

const FormSchema = z.object({
  route: z.string({
    required_error: 'Please select a route.'
  }),
  type: z.string({
    required_error: 'Please select a type.'
  })
});

export function SearchRoutesForm({ data, onDataFromChild }: { data: Route[]; onDataFromChild: any }) {
  const [type, setType] = useState<String[]>();
  const [route, setRoute] = useState<Route>();
  const [routeDetail, setRouteDetail] = useState<any>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (type) {
      const fetchRouteDetail = async () => {
        const res = await fetch(`http://localhost:3001/api/v1/routes?name=${type}`, {
          method: 'GET'
        });
        const data = await res.json();
        setRouteDetail(data);
        onDataFromChild(data);
      };
      fetchRouteDetail();
    }

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });

    // const fetchRoutes = async () => {
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center justify-center gap-4 ">
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
                      className={cn('w-[300px] justify-between', !field.value && 'text-muted-foreground')}>
                      {/* {field.value
                        ? selects1.find((language) => language.value === field.value)?.label
                        : 'Select route'} */}
                      {field.value
                        ? data.find((country: Route) => country.route === field.value)?.route
                        : 'Select route'}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandEmpty>No route found.</CommandEmpty>
                    <CommandGroup>
                      {/* {selects1.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue('route', language.value);
                          }}>
                          {language.label}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              language.value === field.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))} */}
                      {data.map((country: any) => (
                        <CommandItem
                          value={country.route}
                          key={country.route}
                          onSelect={() => {
                            form.setValue('route', country.route);
                            setRoute(country);
                          }}>
                          {country.route}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              country.route === field.value ? 'opacity-100' : 'opacity-0'
                            )}
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
                      className={cn('w-[300px] justify-between', !field.value && 'text-muted-foreground')}>
                      {/* {field.value ? selects2.find((language) => language.value === field.value)?.label : 'Select type'} */}
                      {field.value ? route?.references.find((ref: any) => ref === field.value) : 'Select type'}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search type..." className="h-9" />
                    <CommandEmpty>No route found.</CommandEmpty>
                    <CommandGroup>
                      {/* {selects2.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue('type', language.value);
                          }}>
                          {language.label}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              language.value === field.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))} */}
                      {route?.references?.map((ref: any) => (
                        <CommandItem
                          value={ref}
                          key={ref}
                          onSelect={() => {
                            form.setValue('type', ref);
                            setType(ref);
                          }}>
                          {ref}
                          <CheckIcon
                            className={cn('ml-auto h-4 w-4', ref === field.value ? 'opacity-100' : 'opacity-0')}
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
        <Button type="submit" className="self-end">
          Search
        </Button>
      </form>
    </Form>
  );
}
