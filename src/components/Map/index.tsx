import { useRouter } from 'next/router';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

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

export default function Map({ places }: MapProps) {
  const router = useRouter();

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />

      {places?.map(({ location: { latitude, longitude }, ...place }) => (
        <Marker
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
  );
}
