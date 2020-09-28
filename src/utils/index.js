import moment from 'moment'

export const timeAgo = (date) => {
  if(date === '' || date === undefined) {
    return ''
  }
  return moment(date).startOf('day').fromNow();
}