const BoxSpacing = () => {
  return (
    <Button
      btn="highlight small clear"
      iconLeft={
        <Icon
          className="margin-r:5 text-color:highlight"
          icon="ui:shrink6"
        />
      }
      label="Spacing"
    >
      <div style={styles.block}>
        <div className="display:flex margin-t:20 flex:content-center">
          <Field
            component={Text}
            label="Top"
            name="paddingTop"
            style={{
              width: '70px',
            }}
            type="text"
          />
        </div>
        <div className="display:flex margin-t:20 flex:content-around">
          <Field
            component={Text}
            label="Left"
            name="paddingLeft"
            style={{
              width: '70px',
            }}
            type="text"
          />
          <Field
            component={Text}
            label="Right"
            name="paddingRight"
            style={{
              width: '70px',
            }}
            type="text"
          />
        </div>
        <div className="display:flex margin-t:20 flex:content-center">
          <Field
            component={Text}
            label="Bottom"
            name="paddingBottom"
            style={{
              width: '70px',
            }}
            type="text"
          />
        </div>
      </div>
    </Button>
  )
}
