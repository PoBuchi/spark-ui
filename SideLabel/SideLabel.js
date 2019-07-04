const SideLabel = ({ text }) => (
  <div
    className="margin-y:20 padding:5 color:dark text-color:white font:roboto-condensed"
    style={{
      width: '-webkit-fit-content',
      borderBottomRightRadius: '5px',
      borderTopRightRadius: '5px',
      marginLeft: '-20px',
    }}
  >
    {text}
  </div>
)