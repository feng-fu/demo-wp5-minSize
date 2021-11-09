import dayjs from "dayjs"

export const getCurrent = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
}
