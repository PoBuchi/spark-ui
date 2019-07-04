const BoxItem = ({
  activeItemId,
  disablePositioning,
  disableRotation,
  isVirtualized,
  itemData,
  offlineEnabled,
  onNavigateTo,
  onProfileOpen,
  onFloorOpen,
  onShowInfo,
  style,
}) => {
  const {
    _id,
    actionType,
    borderStyle,
    icon,
    image,
    label,
    localImg,
    rotatedBy,
    shapePath,
    surface,
    textPosition,
    textPositioning,
    textRotatedBy,
    textSize,
    theme,
    type,
  } = itemData
  const { x, y, width, height } = surface

  const clickHandler = () => {
    if (actionType === 'openProfile') {
      onProfileOpen(itemData)
    } else if (actionType === 'showInfo') {
      onShowInfo(_id)
    } else if (actionType === 'navigateTo') {
      onNavigateTo(_id)
    } else if (actionType === 'openFloor') {
      onFloorOpen(itemData)
    }
  }

  const Image = () => {
    if (offlineEnabled && localImg) {
      return (
        <ImageOffline
          localImg={localImg}
          remoteLink={image}
          style={{
            width: '100%',
          }}
        />
      )
    }

    return (
      <img
        src={image}
        style={{
          width: '100%',
        }}
      />
    )
  }

  return (
    <div
      className={`
        map-item:base
        map-item:type-${type}
        map-item:theme-${theme}
        map-item:${
          type !== 'bg'
            ? activeItemId
              ? activeItemId === _id
                ? 'active'
                : 'faded'
              : ''
            : ''
        }
      `}
      onClick={type === 'shape' ? null : clickHandler}
      style={{
        ...style,
        // For virtualized passed style: w, h top, left,
        ...(disableRotation // For editor mode
          ? {}
          : rotatedBy
            ? {
                transform: `rotate(${rotatedBy}deg)`,
              }
            : {}),
        ...(borderStyle ? borderStyle : {}),
        zIndex: surface.z,
        ...(disablePositioning
          ? {
              height,
              position: 'relative',
              width,
            }
          : {}),
        ...(isVirtualized
          ? {
              height,
              left: x,
              position: 'absolute',
              top: y,
              width,
            }
          : {}),
      }}
    >
      {do {
        if (type === 'text') {
          ;<TextElement
            text={label}
            textPosition={textPosition}
            textPositioning={textPositioning}
            textRotatedBy={textRotatedBy}
            textSize={textSize}
          />
        } else if (type === 'icon' || type === 'doors') {
          ;<Icon icon={`map:${icon}`} />
        } else if (type === 'shape') {
          ;<div className="display:flex flex:items-center flex:content-center">
            <svg
              height={surface.height}
              viewBox={`0 0 ${surface.width} ${
                surface.height
              }`}
              width={surface.width}
            >
              <path d={shapePath} onClick={clickHandler} />
            </svg>
            <TextElement
              onClick={clickHandler}
              text={label}
              textPosition={textPosition}
              textPositioning={textPositioning}
              textRotatedBy={textRotatedBy}
              textSize={textSize}
            />
          </div>
        } else if (type === 'image' || type === 'stencil') {
          ;<Image />
        } else if (type === 'bg') {
          if (shapePath) {
            ;<svg
              height={surface.height}
              viewBox={`0 0 ${surface.width} ${
                surface.height
              }`}
              width={surface.width}
            >
              <path d={shapePath} />
            </svg>
          } else if (image) {
            ;<Image />
          }
        }
      }}
    </div>
  )
}