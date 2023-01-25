import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface LinkItemProps {
  imgUrl: string;
  name: string;
  description: string;
}

const variants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 },
};

function LinkItem({ imgUrl, name, description }: LinkItemProps) {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleDismiss = () => {
    setIsHover(false);
  };

  const moveToNaver = () => {};

  return (
    <div
      className="flex w-[507px] aspect-square justify-center items-center  relative cursor-pointer"
      onMouseEnter={handleHover}
      onClick={moveToNaver}
    >
      <Image src={imgUrl} alt={'bg'} />

      <motion.div
        animate={isHover ? 'vidible' : 'hidden'}
        className={classNames(
          `flex justify-center w-full h-full absolute`,
          // isHover ? `flex` : `hidden`,
        )}
        variants={variants}
        layout
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
        onMouseLeave={handleDismiss}
      >
        <div className="flex flex-col justify-center items-center w-full h-full absolute opacity-50 bg-black text-white z-49"></div>

        <div className="flex flex-col justify-center items-center text-white z-50 ">
          <h4 className="font-bold text-4xl mb-6">{name}</h4>

          <span className="mb-6">{description}</span>

          <div className="border-2 border-white rounded-lg px-4 py-2">
            바로가기
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LinkItem;
