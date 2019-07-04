const ItemWrapper = ({
  children,
  deleteEnabled,
  onButtonClick,
  style,
}) => (
  <div
    className="display:flex flex:items-center"
    style={style}
  >
    <div className="w:100p">{children}</div>
    {deleteEnabled && (
      <DeleteButton
        className="margin-x:5"
        onClick={onButtonClick}
      />
    )}
  </div>
)