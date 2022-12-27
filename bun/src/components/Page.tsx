const Layout = (props: { children?: string }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="global.css" />
        <title>Bun on Nubo</title>
      </head>

      <body>{props.children}</body>
    </html>
  );
};

const Page = ({ region }: { region: string }) => {
  return (
    <Layout>
      <div class="box">
        <div>
          <img class="bun-logo" src="bun.svg" alt="Bun" />

          <h1>Bun on Nubo</h1>

          <p>Region: {region}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
