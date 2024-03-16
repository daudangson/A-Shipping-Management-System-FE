import { Continent, ContinentType } from '@/enums/route';

export const Continents: ContinentType[] = [
  Continent.Africa,
  Continent.Antarctica,
  Continent.Asia,
  Continent.Europe,
  Continent.NorthAmerica,
  Continent.SouthAmerica,
  Continent.Australia
];

// export const getResponseDummy = async () => {
//   try {
//     const data = fs.readFileSync('./DUMMY_DATA.json', 'utf-8');
//     const jsonData = JSON.parse(data);
//     // Use the data from the JSON file here
//     return jsonData;
//   } catch (error) {
//     console.error('Error reading JSON file:', error);
//   }
// };
