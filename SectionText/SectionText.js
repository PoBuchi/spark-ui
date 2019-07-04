const SectionText = ({ field, item }) => (
  <div
    className="padding:20"
    style={{
      width: '220px',
      minHeight: '260px',
    }}
  >
    {(item.type === 'text' || item.type === 'shape') && (
      <div>
        <Field
          component={TextFieldAdapter}
          label="Override size"
          name={`${field}.textSize`}
          type="text"
        />
        <Field
          component={TextFieldAdapter}
          label="Rotate (deg)"
          name={`${field}.textRotatedBy`}
          type="text"
        />
        <SectionHeader title="Custom position" />
        <Field
          component={SwitchFieldAdapter}
          label="Enable custom position"
          name={`${field}.textPositioning`}
        />
        <Field
          component={TextFieldAdapter}
          label="Top"
          name={`${field}.textPosition.top`}
          normalize={convertToNumber}
          type="number"
        />
        <Field
          component={TextFieldAdapter}
          label="Left"
          name={`${field}.textPosition.left`}
          normalize={convertToNumber}
          type="number"
        />
      </div>
    )}
  </div>
)