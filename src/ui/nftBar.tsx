import React from 'react';
import ActionAreaCard from './card';

const cardsData = [
  {
    title: '#001 UNFAILED',
    description: 'OG first collection',
    image: 'https://i.ibb.co/Jdqgcdr/1.jpg',
    altText: 'Hernan Cattaneo Event',
  },
  {
    title: '#002 EIVORMOTA',
    description: 'OG first collection',
    image: 'https://i.ibb.co/jk3mGv3/2.jpg',
    altText: 'Beautiful Beach',
  },
  {
    title: '#001 UNFAILED',
    description: 'OG first collection',
    image: 'https://i.ibb.co/Jdqgcdr/1.jpg',
    altText: 'Hernan Cattaneo Event',
  },
  {
    title: '#002 EIVORMOTA',
    description: 'OG first collection',
    image: 'https://i.ibb.co/jk3mGv3/2.jpg',
    altText: 'Beautiful Beach',
  },
];

const NftList = () => {
  return (
    <div
      style={{
        paddingTop: 4,
        paddingBottom: 55,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
      }}
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          style={{
            flex: '1 1 calc(25% - 16px)', // 4 columns on desktop (25% each), minus gap space
            maxWidth: 'calc(25% - 16px)', // Ensures consistent column width
            boxSizing: 'border-box',
          }}
        >
          <ActionAreaCard
            title={card.title}
            description={card.description}
            image={card.image}
            altText={card.altText}
          />
        </div>
      ))}
    </div>
  );
};

export default NftList;
