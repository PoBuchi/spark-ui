const SectionLayout = ({
  editorMode,
  fields,
  globalStyles,
  items,
  random,
  themes,
  mapId,
}) => (
  <div className="position:absolute-0 select:none">
    <div
      style={{
        position: 'fixed',
        left: '7px',
        top: '70px',
        zIndex: 200,
      }}
    >
      <PopoverButton
        btn="action circle large raised"
        iconLeft={<Icon icon="ui:plus3" />}
        label=""
      >
        <div
          className="padding:5 position:relative"
          style={{
            width: '120px',
            maxHeight: '600px',
          }}
        >
          {defaultItems.map((item, index) => (
            <div
              className="display:flex flex:content-center color:lighter margin-b:5 padding:10"
              key={index}
              onClick={() =>
                fields.push({
                  ...item,
                  _id: random.id(),
                  mapId,
                })
              }
            >
              <BoxItem
                disablePositioning={true}
                itemData={item}
                offlineEnabled={false}
              />
            </div>
          ))}
        </div>
      </PopoverButton>
    </div>
    {fields.map((field, index) => {
      const item = fields.get(index)
      return (
        <Field
          component={SurfaceEditorField}
          draggingDisabled={
            item.type === 'bg' || item.type === 'stencil'
          }
          enableHandle={item.type === 'image'}
          hideLabel={item.type === 'doors'}
          index={index}
          key={index}
          name={`${field}.surface`}
          onDuplicate={() => {
            const currentItem = fields.get(index)
            const newItem = {
              ...currentItem,
              _id: random.id(),
              code: '',
              surface: {
                width: currentItem.surface.width,
                height: currentItem.surface.height,
                x: currentItem.surface.x,
                y:
                  currentItem.surface.y +
                  currentItem.surface.height -
                  globalStyles.borderWidth,
                // To accomodate for border overlap
                z: currentItem.surface.z,
              },
            }
            fields.push(newItem)
          }}
          onRemove={() => fields.remove(index)}
          resizingDisabled={
            item.type === 'shape' ||
            item.type === 'bg' ||
            item.type === 'doors' ||
            item.type === 'stencil'
          }
          rotatedBy={item.rotatedBy}
        >
          {item.type !== 'bg' &&
            item.type !== 'doors' &&
            item.type !== 'stencil' && (
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
                  <div
                    className="padding:20"
                    style={{
                      width: '220px',
                    }}
                  >
                    {item.type === 'icon' && (
                      <Field
                        component={SelectFieldAdapter}
                        label="Icon"
                        name={`${field}.icon`}
                        options={iconsOptions}
                        type="icon"
                      />
                    )}
                    {item.type === 'image' && (
                      <Field
                        component={TextFieldAdapter}
                        label="Image"
                        name={`${field}.image`}
                        type="text"
                      />
                    )}
                    <Field
                      component={TextFieldAdapter}
                      label="Label"
                      name={`${field}.label`}
                      type="text"
                    />
                    <Field
                      component={SwitchFieldAdapter}
                      label="Hide from search?"
                      name={`${field}.hideFromSearch`}
                    />
                    <Field
                      component={TextFieldAdapter}
                      label="Display name"
                      name={`${field}.displayName`}
                      type="text"
                    />
                    <Field
                      component={SelectFieldAdapter}
                      label="Theme"
                      name={`${field}.theme`}
                      options={themes.map(item => {
                        return {
                          value: item._id,
                          label: item.themeName,
                        }
                      })}
                    />
                    <Field
                      component={TextFieldAdapter}
                      label="Rotate (deg)"
                      name={`${field}.rotatedBy`}
                      type="text"
                    />
                    {item.type === 'shape' && (
                      <div>
                        <Field
                          component={TextFieldAdapter}
                          label="Shape path"
                          name={`${field}.shapePath`}
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
                    )}
                    <SectionHeader title="Advanced" />
                    <FormSection
                      name={`${field}.borderStyle`}
                    >
                      <BorderStyle />
                    </FormSection>
                  </div>
                </PopoverButton>
              </div>
            )}
          <BoxItem
            disableRotation={true}
            itemData={item}
            offlineEnabled={false}
          />
        </Field>
      )
    })}
  </div>
)