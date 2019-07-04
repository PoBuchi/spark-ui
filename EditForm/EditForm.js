const EditForm = ({
  formContent1,
  formContent2,
  initialValues,
  onClose,
  onSubmit,
  tabs,
}) => (
  <Form
    initialValues={initialValues}
    mutators={arrayMutators}
    onSubmit={onSubmit}
    render={() => (
      <FormWrapper
        error={submitError}
        form={form}
        formContent1={formContent1}
        formContent2={formContent2}
        isCloseEnabled={true}
        isResetEnabled={false}
        onClose={onClose}
        onSubmit={handleSubmit}
        pristine={pristine}
        reset={form.reset}
        submitButtonLabel="Save"
        submitting={submitting}
        tabs={tabs}
      />
    )}
  />
)