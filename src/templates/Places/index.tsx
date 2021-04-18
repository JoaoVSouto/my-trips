import { CloseOutline } from '@styled-icons/evaicons-outline';

import LinkWrapper from 'components/LinkWrapper';

interface ImageProps {
  url: string;
  height: number;
  width: number;
}

export interface PlacesTemplateProps {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image, index) => (
        <img
          key={`photo-${index}-${image.url}`}
          src={image.url}
          alt={place.name}
        />
      ))}
    </>
  );
}
