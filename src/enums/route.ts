export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Australia = 'Australia (Oceania)',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  SouthAmerica = 'South America'
}

export type ContinentType = Continent[keyof Continent];
