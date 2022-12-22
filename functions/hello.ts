export const path = '/';

export const handler = () => {
  return {
    message: `Hello 1 from Nubo Edge Function in ${process.env.NUBO_REGION}`,
  };
};
