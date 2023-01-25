import React from 'react';
import Image from 'next/image';

interface DetailPageProps {
  imgUrl: string;
}

function DetailPage({ imgUrl }: DetailPageProps) {
  return (
    <div>
      <Image src={imgUrl} alt="bg" />
    </div>
  );
}

export default DetailPage;
