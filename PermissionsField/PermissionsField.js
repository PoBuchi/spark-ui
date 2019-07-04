
const NAME_SCHEMA = {
  HQ: {
    title: 'Reseller HQ',
    masterLabel: 'Reseller',
  },
  MANAGER: {
    title: 'App Manager',
    masterLabel: 'Access to client',
    fullLabel: 'Grant access to all client apps?',
    scopeLabel: 'Access to specific apps',
  },
  CMS: {
    title: 'Event CMS',
    masterLabel: 'Access to app',
    fullLabel: 'Grant access to all app events?',
    scopeLabel: 'Access to specific events',
  },
}

const onlyUniqueMasters = values => {
  if (values) {
    const matches = _uniqBy(values, 'masterScope')

    return matches.length === values.length
      ? undefined
      : 'Error: Duplicate scopes detected'
  }

  return undefined
}

const Error = ({ name }) => (
  <Field
    name={name}
    render={({ meta: { touched, error } }) =>
      touched && error ? (
        <>
          <ArrayErrorLabel text={error} />
        </>
      ) : null
    }
    subscription={{
      touched: true,
      error: true,
    }}
  />
)

const PermissionsField = ({
  masterKey,
  masterScopeOptions,
  name,
  platformId,
  scopeOptions,
}) => {
  const transformedMasterOptions = masterScopeOptions.map(
    value => {
      return {
        label: value.title,
        value: value._id,
      }
    },
  )
  let transformedScopeOptions = []

  if (platformId !== 'HQ') {
    transformedScopeOptions = scopeOptions.map(value => {
      return {
        label: value.title,
        value: value._id,
        masterId: value[masterKey],
      }
    })
  }

  return (
    <ExpansionPanel
      subtitle={NAME_SCHEMA[platformId].title}
      title="Permissions"
    >
      <div className="w:100p">
        <Error name={name} />
        <FieldArray
          name={name}
          validate={onlyUniqueMasters}
        >
          {({ fields, meta }) => (
            <div className="w:100p">
              <div className="margin-b:20">
                <button
                  btn="action small raised"
                  type="button"
                >
                  Create new access card
                </button>
              </div>
              <div>
                {!fields.length ? (
                  <div>No access cards found</div>
                ) : (
                  <div>
                    {fields.map((field, index) => (
                      <div
                        className="padding:20 margin-b:20"
                        key={field}
                        style={{
                          boxShadow:
                            '0px 0px 45px -13px rgba(0,0,0,0.75)',
                        }}
                      >
                        <div className="display:flex flex:content-between margin-b:10">
                          <div className="size:14 text-color:light">{`${
                            NAME_SCHEMA[platformId].title
                          } access card #${index +
                            1}`}</div>
                        </div>
                        <SelectField
                          clearable={false}
                          label={
                            NAME_SCHEMA[platformId]
                              .masterLabel
                          }
                          name={`${field}.masterScope`}
                          options={transformedMasterOptions}
                          required={true}
                        />
                        {fields.value[index]
                          .masterScope && (
                          <>
                            {platformId !== 'HQ' && (
                              <div>
                                <SwitchField
                                  label={
                                    NAME_SCHEMA[platformId]
                                      .fullLabel
                                  }
                                  name={`${field}.full`}
                                />
                                {!fields.value[index]
                                  .full && (
                                  <SelectField
                                    label={
                                      NAME_SCHEMA[
                                        platformId
                                      ].scopeLabel
                                    }
                                    multi={true}
                                    name={`${field}.scope`}
                                    options={transformedScopeOptions.filter(
                                      x =>
                                        x.masterId ===
                                        fields.value[index]
                                          .masterScope,
                                    )}
                                    simpleValue={true}
                                  />
                                )}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </FieldArray>
      </div>
    </ExpansionPanel>
  )
}