import React from 'react';

interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps): JSX.Element => {
  return <h1 className='font-rick text-3xl font-bold'>{props.text}</h1>;
};
