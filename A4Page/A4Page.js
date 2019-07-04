const A4Page = ({
  className,
  style,
  orientation,
  children,
}) => {
  let size = {}

  if (orientation === 'landscape') {
    size = {
      height: '210mm',
      width: '297mm',
    }
  } else if (orientation === 'portrait') {
    size = {
      height: '297mm',
      width: '210mm',
    }
  }

  return (
    <div
      className={className}
      style={{
        ...style.wrapper,
        ...style,
      }}
    >
      <div style={style.label}>
        A4 {orientation} preview:
      </div>
      <div style={style.wrapperInner}>
        <div
          style={{
            ...style.pageWrapper,
            ...size,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
