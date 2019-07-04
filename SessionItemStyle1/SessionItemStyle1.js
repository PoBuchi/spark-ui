const SessionItemStyle1 = props => {
  return (
    <div
      className={`font:roboto color:white border:bottom border-color:backdrop border:5 ${expandedClass}`}
      onClick={() => onClick(_id)}
    >
      {/* Header */}
      {do {
        if (showColoredBar) {
          ;<div
            className="h:28 display:flex flex:items-center padding-x:7"
            style={{
              backgroundColor: catColor,
              color: textColor,
            }}
          >
            {/* Time */}
            {do {
              showTime ? (
                <div className="size:16">
                  {getFormatedTime(
                    startTime,
                    timeZone,
                    showAMPM,
                  )}{' '}
                  -{' '}
                  {getFormatedTime(
                    endTime,
                    timeZone,
                    showAMPM,
                  )}{' '}
                  {showFullDate &&
                    getFormatedTimeDay(startTime, timeZone)}
                </div>
              ) : null
            }}
            {/* Category */}
            {do {
              showCategory ? (
                <div className="size:14 margin-l:auto text:uppercase">
                  {catName}
                </div>
              ) : null
            }}
          </div>
        }
      }}
      {/* Title */}
      {do {
        showTitle ? (
          <div className="padding:7 size:17 line-h:120p text-color:dark font:roboto-condensed">
            {title}
          </div>
        ) : null
      }}
      {/* Duration */}
      {do {
        if (showDuration || showGroupTag || showLocation) {
          ;<div className="display:flex flex:content-between flex:items-center padding-b:5 padding-x:7 size:14 text-color:neutral">
            {showGroupTag ? (
              <div className="margin-r:auto">
                {groupTag}
              </div>
            ) : null}
            <div className="display:flex margin-l:auto">
              {showDuration ? (
                <div
                  className="text:right padding-l:10"
                  style={{
                    minWidth: '55px',
                  }}
                >
                  {duration} min
                </div>
              ) : null}
              {showDuration && showLocation ? (
                <div className="padding-x:5 text:right">
                  {' '}
                  •{' '}
                </div>
              ) : null}
              {showLocation ? (
                <div className="text:right">
                  {locationName}
                </div>
              ) : null}
            </div>
          </div>
        }
      }}
      {/* Image */}
      {do {
        showImage ? <div>Image :)</div> : null
      }}
    </div>
  )
}