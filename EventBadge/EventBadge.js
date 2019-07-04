const EventBadge = ({
  bodyFont,
  cells,
  fonts,
  onCellClick,
  rows,
  userData,
}) => {
  return (
    <Layout>
      {rows.map((row, index) => (
        <Row customStyle={row.customStyle} key={index}>
          {cells
            .map((x, index) => {
              /* Add an ID field based on index in unfiltered array */
              return {
                ...x,
                id: index,
              }
            })
            .filter(item => item.row === index + 1)
            .sort(cellSorter)
            .map((cell, index) => (
              <BadgeCell
                boxes={cell.boxes}
                customStyle={cell.customStyle}
                key={index}
                onClick={() => onCellClick(cell.id)}
                userData={userData}
              />
            ))}
        </Row>
      ))}
    </Layout>
  )
}