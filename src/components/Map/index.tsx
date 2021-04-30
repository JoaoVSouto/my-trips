import { useRouter } from 'next/router';
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet';
import { Icon } from 'leaflet';

import * as S from './styles';

interface Place {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface MapProps {
  places?: Place[];
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

const CustomTileLayer = () =>
  MAPBOX_API_KEY ? (
    <TileLayer
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  );

const LeafIcon = new Icon({
  iconUrl:
    'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|E3B505&chf=a,s,ee00FFFF',

  iconSize: [21, 34],
  iconAnchor: [10, 34],
});

export default function Map({ places }: MapProps) {
  const router = useRouter();

  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        minZoom={3}
        zoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180],
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <MapConsumer>
          {map => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;

            if (width < 768) {
              map.setMinZoom(2);
              map.setZoom(2);
            }

            return null;
          }}
        </MapConsumer>

        <CustomTileLayer />

        {places?.map(({ location: { latitude, longitude }, ...place }) => (
          <Marker
            icon={LeafIcon}
            key={`place-${place.id}`}
            position={[latitude, longitude]}
            title={place.name}
            eventHandlers={{
              click() {
                router.push(`/place/${place.slug}`);
              },
            }}
          />
        ))}
      </MapContainer>
    </S.MapWrapper>
  );
}
