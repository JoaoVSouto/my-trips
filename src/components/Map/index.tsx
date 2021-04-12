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

export default function Map({ places }: MapProps) {
  const router = useRouter();

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
