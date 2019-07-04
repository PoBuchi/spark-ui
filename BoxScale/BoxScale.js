const BoxScale = () => {
  return (
    <Button
      iconLeft={
        <Icon
          className="margin-r:5 text-color:highlight"
          icon="ui:arrow-resize5"
        />
      }
      label="Scale"
    >
      <div style={styles.block}>
        <div className="padding-x:20 padding-b:20 padding-t:10">
          <Field
            component={TextFieldAdapter}
            label="Transform"
            name="WebkitTransform"
            type="text"
          />
        </div>
      </div>
    </Button>
  )
}