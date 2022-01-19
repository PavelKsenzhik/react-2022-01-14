import { useState, useMemo } from 'react';
import Tabs from './tabs';
import Restaurant from './restaurant';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Restaurant
      name={activeRestaurant.name} 
      menu={activeRestaurant.menu}
      reviews={activeRestaurant.reviews}
      />
    </div>
  );
}
