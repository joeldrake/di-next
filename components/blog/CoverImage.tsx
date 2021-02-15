import styles from '@/styles/CoverImage.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type Props = {
  title: string;
  src: string;
  width: string;
  height: string;
  noPaddingBottom?: boolean;
};

const CoverImage = ({ title, src, width, height, noPaddingBottom }: Props) => {
  const modifiers = { 'CoverImage--noPaddingBottom': noPaddingBottom };
  return (
    <div className={cx('CoverImage', modifiers)}>
      <img src={src} alt={title} width={width} height={height} loading="lazy" />
    </div>
  );
};

export default CoverImage;
