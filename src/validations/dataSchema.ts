import { z } from 'zod';
export const AMENITIES = ['Check In', 'Check Out', 'In Progress'] as const;

export const dataSchema = z.object({
  birthday: z
    .string()
    .min(1, { message: 'Camp required' })
    .refine((birthday) => new Date(birthday).toString() !== 'Invalid Date', {
      message: 'Select a valid date formant',
    }),

  checkIn: z
    .string()
    .min(1, { message: 'Camp required' })
    .refine((birthday) => new Date(birthday).toString() !== 'Invalid Date', {
      message: 'Select a valid date formant',
    }),

  amenities: z.array(z.string()).min(1, { message: 'Select at least one amenity' }),
});

export type Data = z.infer<typeof dataSchema>;
