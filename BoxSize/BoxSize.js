const BoxSize = ({
  heightDisabled,
  maxValuesDisabled,
  widthDisabled,
}) => {
  return (
    <Button
      btn="highlight small clear"
      iconLeft={
        <Icon
          className="size:18 margin-r:5 text-color:highlight vertical-align:baseline"
          icon="ui:ruler"
        />
      }
      label="Size"
    >
      <div style={styles.block}>
        <div className="padding-x:20 padding-b:20 padding-t:10">
          {!widthDisabled && (
            <div className="display:flex">
              <Field
                className="margin-r:10"
                component={TextFieldAdapter}
                label="Width"
                name="width"
                type="text"
              />
              {!maxValuesDisabled && (
                <Field
                  className="margin-l:10"
                  component={TextFieldAdapter}
                  label="Max Width"
                  name="maxWidth"
                  type="text"
                />
              )}
            </div>
          )}
          {!heightDisabled && (
            <div className="display:flex">
              <Field
                className="margin-r:10"
                component={TextFieldAdapter}
                label="Height"
                name="height"
                type="text"
              />
              {!maxValuesDisabled && (
                <Field
                  className="margin-l:10"
                  component={TextFieldAdapter}
                  label="Max Height"
                  name="maxHeight"
                  type="text"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Button>
  )
}
