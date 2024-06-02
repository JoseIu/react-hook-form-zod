import { z } from 'zod';
const PLANS = ['basic', 'premium', 'gold'] as const;

export type Plans = (typeof PLANS)[number];
export const mappedPlans: { [key in Plans]: string } = {
  basic: 'Basic',
  premium: 'Premium',
  gold: 'Gold',
};

export const userShema = z.object({
  name: z.string().min(1, { message: 'Camp required' }),
  email: z.string().email({ message: 'Invalid email' }).min(1, { message: 'Camp required' }),
  password: z.string().min(1, { message: 'Camp required' }),
  confirmPassword: z.string().min(1, { message: 'Camp required' }),
  weight: z
    .string()
    .min(1, { message: 'Camp required' })
    .refine((weight) => !isNaN(parseFloat(weight)), { message: 'Weight must be a number' }),
  plan: z.enum(PLANS),
});

export type User = z.infer<typeof userShema>;
