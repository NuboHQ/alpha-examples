export const path = '/';

export const handler = () => {
  return {
    message: `Hello from Nubo Edge Function`,
    test: 'hi there',
    region: process.env.NUBO_REGION,
  };
};
