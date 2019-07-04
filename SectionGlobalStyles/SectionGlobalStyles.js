const SectionGlobalStyles = () => (
  <div
    className="padding-x:20 padding-t:10 padding-b:40"
    style={{
      width: '150px',
    }}
  >
    <Field
      component={TextFieldAdapter}
      label="Text size"
      name="textSize"
      normalize={convertToNumber}
      type="number"
    />
    <Field
      clearable={false}
      component={SelectFieldAdapter}
      label="Border width"
      name="borderWidth"
      options={borderWidthOptions}
    />
    <Field
      clearable={false}
      component={SelectFieldAdapter}
      label="Stroke width"
      name="strokeWidth"
      options={borderWidthOptions}
    />
    <Field
      component={TextFieldAdapter}
      label="Icon size"
      name="iconSize"
      normalize={convertToNumber}
      type="number"
    />
  </div>
)