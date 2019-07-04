const SessionItemStyle2 = props => {
  return (
    <div
      className={`font:roboto color:white display:flex border:bottom border:left border-color:backdrop border:3 ${expandedClass}`}
      onClick={() => onClick(_id)}
    >
      {/* Header */}
      {do {
        showColoredBar ? (
          <div
            style={{
              width: '3px',
              backgroundColor: catColor,
            }}
          />
        ) : null
      }}
      <div className="w:100p">
        {/* Group tag */}
        {do {
          showGroupTag ? (
            <div className="padding-x:7 padding-t:7 size:16 text-color:neutral font:roboto-condensed">
              {groupTag}
            </div>
          ) : null
        }}
        {/* Title */}
        {do {
          showTitle ? (
            <div className="padding:7 size:17 text-color:dark font:roboto-condensed">
              {title}
            </div>
          ) : null
        }}
        {do {
          if (showTime || showDuration || showCategory) {
            ;<div className="display:flex flex:items-center padding-b:5 padding-x:7 text-color:neutral">
              {/* Time & Location*/}
              <div className="size:16 margin-r:auto">
                {do {
                  if (showTime && showLocation) {
                    ;`${getFormatedTime(
                      startTime,
                      timeZone,
                      showAMPM,
                    )} - ${getFormatedTime(
                      endTime,
                      timeZone,
                      showAMPM,
                    )} • ${locationName}`
                  } else if (showTime) {
                    ;`${getFormatedTime(
                      startTime,
                      timeZone,
                      showAMPM,
                    )} - ${getFormatedTime(
                      endTime,
                      timeZone,
                      showAMPM,
                    )}`
                  } else if (showLocation) {
                    ;`${locationName}`
                  }
                }}
              </div>
              <div className="size:14 margin-l:auto text:uppercase">
                {/* Duration & Category */}
                {do {
                  if (showDuration && showCategory) {
                    ;<span>
                      {`${duration} min • `}
                      <span
                        style={{
                          color: textColor,
                        }}
                      >
                        {catName}
                      </span>
                    </span>
                  } else if (showDuration) {
                    ;<span>{`${duration} min • `}</span>
                  } else if (showCategory) {
                    ;<span
                      style={{
                        color: textColor,
                      }}
                    >
                      {catName}
                    </span>
                  }
                }}
              </div>
            </div>
          }
        }}
      </div>
      {/* Image */}
      {do {
        showImage ? <div>Image :)</div> : null
      }}
    </div>
  )
}