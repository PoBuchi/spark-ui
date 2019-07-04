const SectionStencil = ({ editorMode, fields, items }) => (
  <div>
    {fields.map((field, index) => {
      const item = fields.get(index)
      return (
        <div key={index}>
          {item.type === 'stencil' && (
            <div>
              <BoxItem
                disableRotation={true}
                itemData={item}
                offlineEnabled={false}
                style={{
                  position: 'absolute',
                  height: fields.get(index).surface.height,
                  width: item.surface.width,
                  left: item.surface.x,
                  top: item.surface.y,
                  zIndex: item.surface.z,
                  ...(item.rotatedBy
                    ? {
                        transform: `rotate(${
                          item.rotatedBy
                        }deg)`,
                      }
                    : {}),
                }}
              />
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
                  btn="light small square"
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
                  <div
                    className="padding:20"
                    style={{
                      width: '220px',
                      minHeight: '400px',
                    }}
                  >
                    <Field
                      component={TextFieldAdapter}
                      label="Image link"
                      name={`${field}.image`}
                      type="text"
                    />
                    <Field
                      component={TextFieldAdapter}
                      label="Width"
                      name={`${field}.surface.width`}
                      normalize={convertToNumber}
                      type="number"
                    />
                    <Field
                      component={TextFieldAdapter}
                      label="Height"
                      name={`${field}.surface.height`}
                      normalize={convertToNumber}
                      type="number"
                    />
                  </div>
                </PopoverButton>
              </div>
            </div>
          )}
        </div>
      )
    })}
  </div>
)