import { ReactNode } from 'react';
import styles from '@/styles/Tag.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type Props = {
  onClick?: any;
  children?: ReactNode;
};

const Tag = ({ children }: Props) => {
  return <div className={cx('Tag')}>{children}</div>;
};

export default Tag;
