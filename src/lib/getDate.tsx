import dayjs from 'dayjs';
const getDate = ()=>{
  const time = new Date().toISOString()
  const year = dayjs(time).format('YYYY');
  const month = dayjs(time).format('MM');
  const day = dayjs(time).format('DD');
  return {year,month,day}
}

export {getDate}