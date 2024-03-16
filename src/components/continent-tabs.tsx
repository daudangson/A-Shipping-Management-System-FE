'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SearchRoutesForm } from './forms/form-search-routes';
import { Continents } from '@/data/continents';

export default function ContinentTabs() {
  return (
    <Tabs defaultValue={Continents[0].toString()} className="w-10/12 " id="search-result">
      <TabsList className="grid w-full grid-cols-7 ">
        {Continents.map((continent) => {
          return (
            <TabsTrigger key={continent.toString()} value={continent.toString()}>
              {continent.toString()}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {Continents.map((continent) => {
        return (
          <TabsContent value={continent.toString()} key={continent.toString()}>
            <SearchRoutesForm continentName={continent.toString()} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
