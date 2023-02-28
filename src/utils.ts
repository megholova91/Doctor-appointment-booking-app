import moment from 'moment';
import {
  TBooking,
  TBookingStatus,
  TDay,
  TFilledSlot,
  TOpeningHour,
} from './types';

export function getOpeningHourForDay(
  day: TDay,
  openingHours: TOpeningHour[]
): TOpeningHour | undefined {
  const res = openingHours.find((openingHour) => openingHour.day === day);
  return res;
}

export function computeSlots(startTime?: string, endTime?: string): string[] {
  const slots = [];
  if (startTime && endTime) {
    const start = startTime.split('.');
    const end = endTime.split('.');
    const startHour = parseInt(start[0], 10);
    const startMin = start[1];
    const endHour = parseInt(end[0], 10);
    const endMin = end[1];
    const lastSlot = endMin < startMin ? endHour - 1 : endHour;
    for (let counter = startHour; counter < lastSlot; counter += 1) {
      slots.push(`${counter}:${startMin}`);
    }
  }
  return slots;
}

export function getWeekDates(): string[] {
  const dates = [];
  for (let count = 0; count < 7; count += 1) {
    dates.push(moment().add(count, 'days').format('YYYY-MM-DD'));
  }
  return dates;
}

export function formatDate(date: string): string {
  return moment(date).format('DD MMM, ddd');
}

export function getFilledSlots(doctorId: string): TFilledSlot {
  try {
    const bookings = localStorage.getItem('bookings');
    const parsedBookings = JSON.parse(bookings as string);
    return parsedBookings
      ?.filter(
        (b: TBooking) =>
          b.doctorId === doctorId && b.status === TBookingStatus.CONFIRM
      )
      .reduce((acc: any, b: TBooking) => {
        if (acc[b.date]) acc[b.date].push(b.start);
        else acc[b.date] = [b.start];
        return acc;
      }, {});
  } catch {
    return {};
  }
}
