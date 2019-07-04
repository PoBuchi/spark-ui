const getFormatedTime = (
  time,
  timeZone,
  showAMPM,
) => {
  const timeFormat = showAMPM ? 'h:mm A' : 'H:mm'
  return (
    moment.tz(time, timeZone).format(timeFormat) || time
  )
}
const getFormatedTimeDay = (time, timeZone) => {
  const timeFormat = 'MMM D'
  return (
    moment.tz(time, timeZone).format(timeFormat) || time
  )
}