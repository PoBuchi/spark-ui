let Form = (
  {
    children,
    handleSubmit,
    pristine,
    submitting,
    rows,
    defaultFont,
    fonts,
    cells,
    onClose,
    orientation,
  },
) => (
  <form onSubmit={handleSubmit}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        rows,
        fonts,
        defaultFont,
        cells,
        orientation,
      }),
    )}
    <div>
      <button
        style={{
          position: 'fixed',
          top: '-4px',
          right: '72px',
          zIndex: '1000',
          margin: '10px',
        }}
        type="submit"
      >
        Save
      </button>
      <button
        disabled={submitting}
        onClick={() => {
          if (pristine) {
            onClose()
          } else {
            if (
              confirm(
                'Are you sure you want to close and loose all unsaved changes?',
              )
            ) {
              onClose()
            }
          }
        }}
        style={{
          position: 'fixed',
          top: '-4px',
          right: '0',
          zIndex: '1000',
          margin: '10px',
        }}
        type="button"
      >
        Close
      </button>
    </div>
  </form>
)

Form = reduxForm({
  form: 'EditorForm',
})(Form)
const selector = formValueSelector('EditorForm')

Form = connect(state => {
  const rows = selector(state, 'rows')
  const cells = selector(state, 'cells')
  const defaultFont = selector(state, 'defaultFont')
  const orientation = selector(state, 'orientation')
  const fonts = selector(state, 'fonts')
  return {
    cells,
    defaultFont,
    fonts,
    orientation,
    rows,
  }
})(Form)

const BadgeEditorWrapper = ({
  badgeData,
  onClose,
  onSave,
}) => (
  <Store store={store}>
    <Theme>
      <Form
        initialValues={badgeData}
        onClose={onClose}
        onSubmit={onSave}
      >
        <BadgeEditor userData={basic} />
      </Form>
    </Theme>
  </Store>
)
