export const path = '/';

export const handler = () => {
  return {
    message: `Hello from Nubo`,
    region: process.env.NUBO_REGION,
  };
};
