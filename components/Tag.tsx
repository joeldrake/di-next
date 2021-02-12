import { ReactNode } from 'react';
import styles from '@/styles/Tag.module.css';
import classNames from 'classnames/bind';
import ButtonClose from '@/components/ButtonClose';
const cx = classNames.bind(styles);

type Props = {
  onClose?: any;
  onClick?: any;
  children?: ReactNode;
};

const Tag = ({ onClose, onClick, children }: Props) => {
  return (
    <div className={cx('Tag', { 'Tag--has-button': onClick })}>
      {onClick ? (
        <button onClick={onClick} className={cx('Tag__button')}>
          {children}
        </button>
      ) : (
        <div className={cx('Tag__inner')}>{children}</div>
      )}
      {onClose && <ButtonClose onClick={onClose} />}
    </div>
  );
};

export default Tag;
