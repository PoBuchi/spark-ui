const AddForm = ({
  formContent1,
  formContent2,
  initialValues,
  onCancel,
  onSubmit,
  tabs,
}) => (
  <Form
    initialValues={initialValues}
    mutators={arrayMutators}
    onSubmit={onSubmit}
    render={({
      form,
      handleSubmit,
      pristine,
      submitError,
    }) => (
      <Form
        error={submitError}
        form={form}
        formContent1={formContent1}
        formContent2={formContent2}
        isCancelEnabled={true}
        isResetEnabled={false}
        onCancel={onCancel}
        onSubmit={handleSubmit}
        pristine={pristine}
        reset={form.reset}
        submitButtonLabel="Add"
        tabs={tabs}
      />
    )}
  />
)
