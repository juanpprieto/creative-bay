import { GetStaticProps } from 'next';

import { HeadProps } from 'seo/Head/Head';
import { sharedValues } from 'utils/sharedValues';

export interface PageProps {
  head: HeadProps;
}

export const getStaticProps: GetStaticProps = () => {
  const head: HeadProps = {
    description: 'Three starter',
    ogImage: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1637971809/ogimage-100_ha9nmg.jpg',
    title: 'Three starter',
  };

  return {
    props: {
      head,
    },
    revalidate: sharedValues.ISR_TIMEOUT,
  };
};
