const Wrapper = ({ badgeData, userData }) => {
  const { cells, defaultFont, fonts, rows } = badgeData
  return (
    <Badge
      bodyFont={defaultFont}
      cells={cells}
      fonts={fonts}
      rows={rows}
      userData={userData}
    />
  )
}