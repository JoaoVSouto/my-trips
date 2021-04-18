import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { InfoOutline } from '@styled-icons/evaicons-outline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple app for marking places that I've already been."
        canonical="https://my-trips-joaovsouto.vercel.app"
        openGraph={{
          title: 'My Trips',
          description:
            "A simple app for marking places that I've already been.",
          images: [
            {
              url: 'https://my-trips-joaovsouto.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
        }}
      />

      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>

      <Map places={places} />
    </>
  );
}
