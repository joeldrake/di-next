import Image from 'next/image';
import styles from '@/styles/CoverImage.module.css';

type Props = {
  title: string;
  src: string;
  width: string;
  height: string;
};

const CoverImage = ({ title, src, width, height }: Props) => {
  return (
    <div className={styles.CoverImage}>
      <Image src={src} alt={title} width={width} height={height} sizes={'50%'} />
    </div>
  );
};

export default CoverImage;
