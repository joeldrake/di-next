import { isIos } from '@/utils/browser';
import sleep from '@/utils/sleep';

import styles from '@/styles/Input.module.css';
import classNames from 'classnames/bind';
import ButtonClose from '@/components/ButtonClose';
const cx = classNames.bind(styles);

type Props = {
  id?: string;
  onChange?: any;
  onClear?: any;
  value?: string;
  placeholder?: string;
};

const Input = ({ id, onChange, onClear, value, placeholder }: Props) => {
  const handleFocus = async (e: any) => {
    if (isIos()) await sleep(100); // wait for iphones auto scroll to happen

    // because of position relative
    const targetParent = e.target.closest('div');

    window.scrollTo({
      top: targetParent.offsetTop - 16,
      behavior: 'smooth',
    });
  };

  const hasValue = value && value.length > 0;

  return (
    <div className={cx('Input')}>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        className={cx('Input__text')}
      />
      {onClear && hasValue && (
        <div className={cx('Input__button-clear')}>
          <ButtonClose onClick={onClear} />
        </div>
      )}
    </div>
  );
};

export default Input;
