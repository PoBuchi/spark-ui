const SectionStyle = ({ field, item, themes }) => (
  <div
    className="padding:20"
    style={{
      width: '220px',
      minHeight: '400px',
    }}
  >
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
    <SectionHeader title="Custom border" />
    <FormSection name={`${field}.borderStyle`}>
      <BorderStyle />
    </FormSection>
  </div>
)