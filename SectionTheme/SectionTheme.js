const SectionTheme = ({ fields, random }) => (
  <div className="padding-x:20 padding-t:10 padding-b:40">
    <Label
      labelText="Themes"
      onButtonClick={() =>
        fields.push({
          ...defaultTheme,
          _id: random.id(8),
        })
      }
    />
    {fields.map((field, index) => (
      <Items
        key={index}
        onButtonClick={() => fields.remove(index)}
      >
        <div
          className="
            margin-t:7
            margin-x:5
            margin-b:20
            display:flex
            h:44
            flex:items-center
          "
        >
          <Field
            component={Text}
            label="Name"
            name={`${field}.themeName`}
          />
          <Button
            btn="highlight small transparent"
            iconLeft={
              <Icon
                className="size:18 vertical-align:sub text-color:highlight"
                icon="material:palette"
              />
            }
            label="Colors"
          >
            <div
              className="padding:10"
              style={{
                width: '250px',
                height: '600px',
              }}
            >
              <div className="display:flex padding:10 flex:items-center">
                <Field
                  component={Color}
                  name={`${field}.background`}
                />
                <Field
                  className="margin-l:20"
                  component={Text}
                  label="Background"
                  name={`${field}.background`}
                />
              </div>
              <div className="display:flex padding:10 flex:items-center">
                <Field
                  component={Color}
                  name={`${field}.border`}
                />
                <Field
                  className="margin-l:20"
                  component={Text}
                  label="Border"
                  name={`${field}.border`}
                />
              </div>
              <div className="display:flex padding:10 flex:items-center">
                <Field
                  component={Color}
                  name={`${field}.color`}
                />
                <Field
                  className="margin-l:20"
                  component={Text}
                  label="Text / Icon"
                  name={`${field}.color`}
                />
              </div>
              <div className="display:flex padding:10 flex:items-center">
                <Field
                  component={Color}
                  name={`${field}.fill`}
                />
                <Field
                  className="margin-l:20"
                  component={Text}
                  label="Fill"
                  name={`${field}.fill`}
                />
              </div>
              <div className="display:flex padding:10 flex:items-center">
                <Field
                  component={Color}
                  name={`${field}.stroke`}
                />
                <Field
                  className="margin-l:20"
                  component={Text}
                  label="Stroke"
                  name={`${field}.stroke`}
                />
              </div>
              <div className="padding:10">
                <Field
                  component={Text}
                  label="Icon/Text size"
                  name={`${field}.textSize`}
                />
                <Field
                  component={Text}
                  label="Border radius"
                  name={`${field}.borderRadius`}
                  normalize={convertToNumber}
                  type="number"
                />
              </div>
            </div>
          </Button>
        </div>
      </Items>
    ))}
  </div>
)