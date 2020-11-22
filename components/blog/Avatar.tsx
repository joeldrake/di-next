import styles from '@/styles/Avatar.module.css';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <span className={styles.Avatar}>
      <img src={picture} className={styles.Avatar__image} alt={name} />
      <span className={styles.Avatar__name}>{name}</span>
    </span>
  );
};

export default Avatar;
