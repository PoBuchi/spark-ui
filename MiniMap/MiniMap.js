const styles = {
  wrapper: {
    overflow: 'hidden',
    padding: '5px',
    border: '1px dashed var(--lighter)',
  },
  row: {
    outline: '1px solid var(--lighter)',
    float: 'left',
    width: '100%',
    backgroundColor: 'var(--lightest)',
  },
  cell: {
    userSelect: 'none',
    cursor: 'pointer',
    outline: '1px solid var(--light)',
  },
  cellText: {
    color: 'var(--lightest)',
    textAlign: 'center',
  },
  /**
   * MiniMap Component
   */
}

const MiniMap = ({
  activeCell,
  cells,
  rows,
  orientation,
  style,
  onCellClick,
}) => {
  let size = {}

  if (orientation === 'landscape') {
    size = {
      height: '42mm',
      width: '59.4mm',
    }
  } else if (orientation === 'portrait') {
    size = {
      height: '59.4mm',
      width: '42mm',
    }
  }

  return (
    <div
      style={{
        ...styles.wrapper,
        ...size,
        ...style,
      }}
    >
      {rows.map((row, rowIndex) => (
        <Table
          customStyle={{
            height: row.customStyle.height,
          }}
          key={rowIndex}
          style={styles.row}
        >
          {cells
            .map((x, index) => {
              /* Add an ID field based on index in unfiltered array */
              return {
                ...x,
                id: index,
              }
            })
            .sort(cellSorter)
            .filter(item => item.row === rowIndex + 1)
            .map((cell, index) => (
              <Cell
                customStyle={{
                  width: cell.customStyle.width,
                  verticalAlign:
                    cell.customStyle.verticalAlign,
                }}
                key={index}
                onClick={() => onCellClick(cell.id)}
                style={{
                  ...styles.cell,
                  backgroundColor:
                    activeCell === cell.id
                      ? 'var(--info)'
                      : 'var(--neutral)',
                }}
              >
                <div style={styles.cellText}>
                  {cell.id + 1}
                </div>
              </Cell>
            ))}
        </Table>
      ))}
    </div>
  )
}