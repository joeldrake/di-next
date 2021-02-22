import { parseISO, format } from 'date-fns';
import sv from 'date-fns/locale/sv';

type Props = {
  dateString: string;
  lang?: string;
};

const DateFormatter = ({ dateString, lang }: Props) => {
  const date = parseISO(dateString);
  const dateFormated =
    lang === 'sv' ? format(date, 'LLLL yyyy', { locale: sv }) : format(date, 'LLLL yyyy');

  return <time dateTime={dateString}>{dateFormated}</time>;
};

export default DateFormatter;
