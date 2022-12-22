export const path = '/';

export const handler = () => {
  return {
    message: `Hello from Nubo Edge Function`,
    region: process.env.NUBO_REGION,
  };
};
