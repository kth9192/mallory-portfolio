import React from 'react';
import Image from 'next/image';
import Emoji from '../public/emoji.png';

function Header() {
  return (
    <header className="flex justify-center items-center mb-[154px] bg-[#EAF0F8] h-[560px] ">
      <div className="flex items-center w-[1600px] ">
        <h1 className="flex flex-col font-bold text-[60px] mb-[120px]">
          <span className="flex items-center gap-2">
            안녕하세요
            <Image
              src={Emoji}
              alt="smile"
              className="aspect-square w-[60px] h-[60px]"
            />
          </span>
          <div className="flex gap-[10px] items-center">
            <span>프로덕트 디자이너 안미애입니다</span>
          </div>
        </h1>
      </div>
    </header>
  );
}

export default Header;
