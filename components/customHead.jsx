import Head from 'next/head';

export default function CustomHead({
  title = 'PR1SM',
  description = 'A gaming community located in Switzerland'
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta name="robots" content="follow, index" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta content={description} name="description" />
    </Head>
  );
}
