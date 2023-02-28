export type TDoctor = {
  id: string;
  name: string;
  description: string;
  address: TAddress;
  opening_hours: TOpeningHour[];
};

export type TAddress = {
  line_1: string;
  line_2: string;
  district: string;
};

export type TOpeningHour = {
  start: string;
  end: string;
  isClosed: boolean;
  day: TDay;
};

export enum TDay {
  'MON' = 1,
  'TUE' = 2,
  'WED' = 3,
  'THU' = 4,
  'FRI' = 5,
  'SAT' = 6,
  'SUN' = 7,
}

export type TBooking = {
  doctorId: string;
  date: string;
  start: number;
  status: TBookingStatus;
  name: string;
};

export enum TBookingStatus {
  CANCEL = 'cancel',
  CONFIRM = 'confirmed',
}

export type TFilledSlot = {
  [key: string]: number[];
};
