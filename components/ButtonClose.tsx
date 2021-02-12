import styles from '@/styles/ButtonClose.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type Props = {
  onClick: any;
};

const ButtonClose = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={cx('ButtonClose')}>
      <img
        src="/images/close.svg"
        width="20"
        height="20"
        alt="Close"
        aria-label="Close"
        className={cx('ButtonClose__icon')}
      />
    </button>
  );
};

export default ButtonClose;
