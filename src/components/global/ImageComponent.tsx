import React from "react";

import { FC } from "react";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

interface IImageComponentProps {
  className?: string;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

const ImageComponent: FC<IImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} rounded-md`}
    />
  );
};

export default ImageComponent;
