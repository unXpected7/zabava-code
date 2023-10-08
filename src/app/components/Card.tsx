import React from 'react';

import { CardProps } from '@/utils/interface';

const Card: React.FC<CardProps> = ({ img, name, identifier, price, link, symbol }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <div className='bg-grayCard rounded-lg transition-all ease-in-out duration-300 hover:bg-grayBg'>
        <img src={img} alt={name} className='rounded-t-lg' />
        <div className='flex flex-col gap-3 p-4 font-bold'>
          <p className="mt-1 text-sm text-gray-500">{symbol}</p>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
