const DynamicFormSelectFields = ({
  selectedId,
  formSchema,
  onSelect,
}) => (
  <>
    {formSchema.map((item, index) => {
      return (
        <div
          className="display:flex margin-b:10"
          key={item._id}
          style={{
            borderRight:
              item._id === selectedId
                ? '4px dotted var(--action)'
                : '',
            borderBottom:
              item._id === selectedId
                ? '4px dotted var(--action)'
                : '',
          }}
        >
        </div>
      )
    })}
  </>
)