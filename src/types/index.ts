export type Car = {
  id: number;
  type: string;
  driverName: string;
  driverSurname: string;
  carName: string;
  carNumber: string;
  latitude: number;
  longitude: number;
  imgUrl: string;
  description: string;
};

export enum CarTypes {
  f = 'Freight car',
  p = 'Passenger car',
  s = 'Special transport',
}
