const FormWrapper = ({
  error,
  form,
  formContent1,
  formContent2,
  isCancelEnabled,
  isCloseEnabled,
  isDeleteEnabled,
  isResetEnabled,
  onCancel,
  onClose,
  onDelete,
  onSubmit,
  pristine,
  reset,
  submitButtonLabel,
  submitting,
  tabs,
}) => {
  return (
    <div className="position:absolute-0 overflow:hidden">
      <form autoComplete="off" onSubmit={onSubmit}>
        <div
          className="position:absolute left:0 right:0 z:3 border-color:lighter border:bottom border:2"
          style={{
            height: '44px',
          }}
        >
          <div className="h:100p display:flex flex:items-center padding-x:7 flex:content-between">
            <Button
              btn="action small"
              disabled={pristine || submitting}
              onClick={() => true}
              type="submit"
            >
              {submitButtonLabel}
            </Button>
            {isDeleteEnabled && (
              <Button
                btn="critical small"
                className="margin-l:auto margin-r:7"
                disabled={submitting}
                onClick={onDelete}
                type="button"
              >
                Delete
              </Button>
            )}
            <div>
              {isResetEnabled && (
                <Button
                  btn="dark small"
                  disabled={pristine || submitting}
                  onClick={reset}
                  type="button"
                >
                  Reset
                </Button>
              )}
              {isCloseEnabled && (
                <Button
                  btn="dark small"
                  className="margin-l:7"
                  disabled={submitting}
                  onClick={onClose}
                  type="button"
                >
                  Close
                </Button>
              )}
            </div>
            {isCancelEnabled && (
              <Button
                btn="dark small"
                disabled={submitting}
                onClick={onCancel}
                type="button"
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
        {error && (
          <div
            className="position:absolute z:2 left:0 right:0"
            style={{
              top: '44px',
            }}
          >
            <ErrorBar error={error} />
          </div>
        )}
        {do {
          if (tabs && formContent2) {
            ;<div
              className="position:absolute left:0 bottom:0 right:0"
              style={{
                top: error ? '88px' : '44px',
              }}
            >
              <FormTabs
                tab1={
                  <Scroller
                    className="padding-x:20 padding-y:25"
                    style={{
                      top: '44px',
                    }}
                  >
                    <fieldset className="margin:0 padding:0 border:none">
                      {formContent1}
                    </fieldset>
                  </Scroller>
                }
                tab2={
                  <Scroller
                    className="padding-x:20 padding-y:25"
                    style={{
                      top: '44px',
                    }}
                  >
                    <fieldset className="margin:0 padding:0 border:none">
                      {formContent2}
                    </fieldset>
                  </Scroller>
                }
                tabs={tabs}
              />
            </div>
          } else {
            ;<Scroller
              className="padding-x:20 padding-y:25"
              style={{
                top: error ? '88px' : '44px',
              }}
            >
              <fieldset className="margin:0 padding:0 border:none">
                {formContent1}
              </fieldset>
            </Scroller>
          }
        }}
      </form>
    </div>
  )
}