const BoxAlign = () => {
  return (
    <Button
      btn="highlight small clear"
      iconLeft={
        <Icon
          className="margin-r:5 text-color:highlight"
          icon="ui:align"
        />
      }
    >
      <div style={styles.block}>
        <FormControl component="fieldset">
          <Field
            className="padding-l:10"
            component={RadioGroupAdapter}
            name="verticalAlign"
          >
            <FormControlLabel
              control={
                <Radio
                  checkedIcon={<AlignTop />}
                  icon={<AlignTop />}
                />
              }
              label="Top"
              value="top"
            />
            <FormControlLabel
              control={
                <Radio
                  checkedIcon={<AlignCenter />}
                  icon={<AlignCenter />}
                />
              }
              label="Center"
              value="middle"
            />
            <FormControlLabel
              control={
                <Radio
                  checkedIcon={<AlignBottom />}
                  icon={<AlignBottom />}
                />
              }
              label="Bottom"
              value="bottom"
            />
          </Field>
        </FormControl>
      </div>
    </Button>
  )
}
