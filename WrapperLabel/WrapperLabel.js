const WrapperLabel = ({
  children,
  labelStyle,
  style,
  text,
  error,
}) => (
  <div className="margin-b:25" style={style}>
    <Label error={error} style={labelStyle} text={text} />
    {children}
  </div>
)