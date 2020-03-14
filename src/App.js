import React from 'react';
import './App.css';

import Events from './app/components/Events/Events';

function App() {
  const eventItems = [
    {
      id: 0,
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      longitude: '66.656566',
      latitude: '38.112544',
      pathToPhoto: 'https://c8.alamy.com/comp/AWTJNP/recycling-bins-and-a-gabage-can-in-hong-kong-AWTJNP.jpg',
    },
    {
      id: 1,
      comment: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      longitude: '66.656566',
      latitude: '38.112544',
      pathToPhoto: 'https://marketplace.canva.com/MADat-cj3_Q/1/thumbnail_large-1/canva-a-wooden-gabage-bin-full%2C-outdoors.-MADat-cj3_Q.jpg',
    },
    {
      id: 2,
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      longitude: '66.656566',
      latitude: '38.112544',
      pathToPhoto: 'https://previews.123rf.com/images/joey333/joey3331804/joey333180400018/99911689-gabage-in-thailand-river-after-loy-kratong-night-festival.jpg',
    },
  ];

  return (
    <div className="App">
      <Events eventItems={eventItems} />
    </div>
  );
}

export default App;
