const DynamicSelectForm = ({
  components,
  formSchema,
  selectedId,
  onSelect,
  title,
  subtitle,
}) => {
  return (
    <>
      <div>
        <div className="font:roboto-condensed size:25 text-color:darker">
          {title}
        </div>
        <div className="font:roboto-condensed size:20 text-color:neutral">
          {subtitle}
        </div>
      </div>
      {formSchema.map((item, index) => {
        return (
          <div
            className="display:flex margin-b:10"
            key={item._id}
          >
            <div className="flex:1">
              <DynamicFormItem
                components={components}
                index={index}
                item={item}
                validationEnabled={false}
              />
            </div>
            <div
              className="display:flex flex:items-center flex:content-center"
              style={{
                width: '100px',
              }}
            >
              {item._id === selectedId ? (
                <button
                  disabled={true}
                  type="button"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => onSelect(item._id)}
                  type="button"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}