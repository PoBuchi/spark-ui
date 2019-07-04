const BoxMargin = () => {
  return (
    <Button
      btn="highlight small clear"
      iconLeft={
        <Icon
          className="margin-r:5 text-color:highlight"
          icon="ui:shrink3"
        />
      }
      label="Margin"
    >
      <div style={styles.block}>
        <div className="display:flex margin-t:20 flex:content-center">
          <Field
            component={Text}
            label="Top"
            name="marginTop"
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
            name="marginLeft"
            type="text"
          />
          <Field
            component={Text}
            label="Right"
            name="marginRight"
            type="text"
          />
        </div>
        <div className="display:flex margin-t:20 flex:content-center">
          <Field
            component={Text}
            label="Bottom"
            name="marginBottom"
            type="text"
          />
        </div>
      </div>
    </Button>
  )
}

export default BoxMargin
