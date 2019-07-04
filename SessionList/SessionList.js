const SessionList = ({ items }) => (
  <div
    className="margin-y:20 margin:0-auto"
    style={{
      maxWidth: '550px',
    }}
  >
    {items.map(item => {
      return (
        <SessionItem
          expanded={false}
          itemData={item}
          key={item._id}
          offlineEnabled={false}
          onClick={() => null}
          showAMPM={false}
          timeZone=""
        />
      )
    })}
  </div>
)