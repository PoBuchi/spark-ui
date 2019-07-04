const SectionHeader = ({ text, textColor, color }) => (
  <div
    style={{
      display: 'flex',
      marginLeft: '-20px',
      marginTop: '20px',
      marginBottom: '10px',
    }}
  >
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <div
        style={{
          fontSize: '20px',
          padding: '10px 10px 10px 30px',
          color: textColor,
        }}
      >
        {text}
      </div>
    </div>
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '20px',
      }}
    >
      <svg
        preserveAspectRatio="none"
        style={{
          height: '100%',
          overflow: 'visible',
          position: 'absolute',
          width: '90%',
        }}
        version="1.1"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="0,0 10,0 0,10"
          style={{
            fill: color,
            stroke: color,
            strokeWidth: '1',
          }}
        />
      </svg>
    </div>
  </div>
)