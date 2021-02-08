import styles from '@/styles/Input.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type Props = {
  onChange?: any;
  value?: string;
  placeholder?: string;
};

const Input = ({ onChange, value, placeholder }: Props) => {
  const handleFocus = (e: any) => {
    window.scrollTo({
      top: e.target.offsetTop - 16,
      behavior: 'smooth',
    });
  };
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={handleFocus}
      className={cx('Input')}
    />
  );
};

export default Input;
