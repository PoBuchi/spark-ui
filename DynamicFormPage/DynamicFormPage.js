const DynamicFormPage = ({
  backgroundColor,
  contentWidth,
  formId,
  formSchema,
  headerColor,
  initialValues,
  onLogout,
  submitDisabled,
  subtitle,
  title,
}) => (
  <FormLayout
    backgroundColor={backgroundColor}
    contentWidth={contentWidth}
    headerColor={headerColor}
    onLogout={onLogout}
  >
    <DynamicForm
      formId={formId}
      initialValues={initialValues}
      submitDisabled={submitDisabled}
      subtitle={subtitle}
      title={title}
    >
      <DynamicFormFields formSchema={formSchema} />
    </DynamicForm>
  </FormLayout>
)
