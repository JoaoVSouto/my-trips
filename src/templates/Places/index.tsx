import Image from 'next/image';
import { CloseOutline } from '@styled-icons/evaicons-outline';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

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

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}-${image.url}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
                objectFit="cover"
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
