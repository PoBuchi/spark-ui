const DynamicFormItem = ({
  components,
  validationEnabled,
  item,
}) => {
  const {
    _id,
    description,
    options,
    title,
    type,
    isQuestion,
  } = item
  const DynamicField = components[type]
  return (
    <>
      {isQuestion && (
        <QuestionLabel
          id={_id}
          title={title}
        />
      )}
      {isQuestion &&
        description && (
          <div
            className="margin-b:10"
            style={{
              wordBreak: 'break-all',
            }}
          >
            {description}
          </div>
        )}
      {do {
        if (type === 'text') {
          ;<DynamicField
            id={_id}
            key={_id}
            name={_id}
            placeholder="Your answer"
            required={
              validationEnabled ? required : undefined
            }
          />
        } else if (type === 'email') {
          ;<DynamicField
            id={_id}
            key={_id}
            name={_id}
            required={
              validationEnabled ? required : undefined
            }
          />
        } else if (type === 'longText') {
          ;<DynamicField
            id={_id}
            key={_id}
            multiline={true}
            name={_id}
            required={
              validationEnabled ? required : undefined
            }
            rows="2"
            rowsMax="6"
          />
        } else if (type === 'select') {
          ;<DynamicField
            id={_id}
            key={_id}
            name={_id}
            options={options}
            required={
              validationEnabled ? required : undefined
            }
          />
        } else if (type === 'radio') {
          ;<DynamicField
            id={_id}
            key={_id}
            name={_id}
            options={options}
            required={
              validationEnabled ? required : undefined
            }
          />
        } else if (type === 'checkboxes') {
          ;<DynamicField
            id={_id}
            key={_id}
            name={_id}
            options={options}
            required={
              validationEnabled ? required : undefined
            }
          />
        } else if (type === 'fullName') {
          ;<DynamicField
            description={description}
            key={_id}
            title={title}
          />
        } else if (type === 'company') {
          ;<DynamicField
            key={_id}
            label={title}
            name="company"
          />
        } else if (type === 'position') {
          ;<DynamicField
            key={_id}
            label={title}
            name="position"
          />
        } else if (type === 'header') {
          ;<DynamicField key={_id} text={title} />
        } else {
          ;<div className="text-color:critical">
            Error: Component not found
          </div>
        }
      }}
    </>
  )
}