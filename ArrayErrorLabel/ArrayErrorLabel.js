const ArrayErrorLabel = ({ style, text }) => (
  <div
    className="size:14 padding-y:5 padding-x:7 font:roboto color:critical text-color:white border:rounded"
    style={style}
  >
    {typeof text === 'object' ? 'Has errors' : text}
  </div>
)
