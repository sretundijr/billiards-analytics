
import moment from 'moment';

const today = () => {
  return moment(moment().now).format('YYYY-MM-DD');
}

export default {
  today,
}
