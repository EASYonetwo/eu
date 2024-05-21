import React from 'react';

const CompYouImg = ({num}) => {
  return (
    <figure className={`img img${num}`}>
      <img src={`https://easyonetwo.github.io/eu/img/Yportfolio${num}.PNG`} alt='' />
    </figure>
  );
};

export default CompYouImg;