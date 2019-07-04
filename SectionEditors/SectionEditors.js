const SectionEditors = ({
  companiesOptions,
  editorMode,
  fields,
  items,
  customItemOptions,
  mapsOptions,
  peopleOptions,
  sessionsOptions,
  themes,
}) => (
  <div>
    {fields.map((field, index) => {
      const item = fields.get(index)
      return (
        <div
          key={index}
          style={{
            position: 'absolute',
            height: fields.get(index).surface.height,
            width: item.surface.width,
            left: item.surface.x,
            top: item.surface.y,
            zIndex: item.surface.z,
            ...(item.rotatedBy
              ? {
                  transform: `rotate(${item.rotatedBy}deg)`,
                }
              : {}),
          }}
        >
          <BoxItem
            disableRotation={true}
            itemData={item}
            offlineEnabled={false}
          />
          {item.type !== 'bg' &&
            item.type !== 'stencil' &&
            item.type !== 'doors' && (
              <div
                style={{
                  position: 'absolute',
                  right: 2,
                  top: 2,
                  zIndex: 100,
                }}
              >
                <PopoverButton
                  anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                  }}
                  btn="dark tiny square"
                  className="map-editor:control"
                  iconLeft={
                    <Icon
                      className="size:16 text-color:white"
                      icon={editorIcons[editorMode].icon}
                    />
                  }
                  label=""
                  targetOrigin={{
                    horizontal: 'left',
                    vertical: 'top',
                  }}
                >
                  {do {
                    if (editorMode === 'style') {
                      ;<SectionStyle
                        field={field}
                        item={item}
                        themes={themes}
                      />
                    } else if (editorMode === 'content') {
                      ;<SectionContent
                        field={field}
                        item={item}
                      />
                    } else if (editorMode === 'text') {
                      ;<SectionText
                        field={field}
                        item={item}
                      />
                    } else if (editorMode === 'logic') {
                      ;<SectionLogic
                        companiesOptions={companiesOptions}
                        customItemOptions={
                          customItemOptions
                        }
                        field={field}
                        item={item}
                        mapsOptions={mapsOptions}
                        peopleOptions={peopleOptions}
                        sessionsOptions={sessionsOptions}
                      />
                    }
                  }}
                </PopoverButton>
              </div>
            )}
        </div>
      )
    })}
  </div>
)