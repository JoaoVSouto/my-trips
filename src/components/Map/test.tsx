import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render the map correctly', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  it('should render markers on correct places', () => {
    const placeOne = {
      id: '1',
      name: 'Natal',
      slug: 'natal',
      location: {
        latitude: -5.8091031,
        longitude: -35.2131046,
      },
    };

    const placeTwo = {
      id: '2',
      name: 'Gramado',
      slug: 'gramado',
      location: {
        latitude: -29.3796468,
        longitude: -50.9014877,
      },
    };

    render(<Map places={[placeOne, placeTwo]} />);

    expect(screen.getByTitle(/natal/i)).toBeInTheDocument();
    expect(screen.getByTitle(/gramado/i)).toBeInTheDocument();
  });
});
