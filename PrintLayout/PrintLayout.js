const PrintLayout = ({
  children,
  className,
  style,
  fonts,
  bodyFont,
}) => {
  const mergedStyles = {
    ...styles.wrapper,
    ...style,
  }
  return (
    <div className={className} style={mergedStyles}>
      <style>
        {
          'html, body, #root, #app, #react-root { height: 100%; margin: 0; padding: 0; }'
        }
      </style>
      <style>
        {'::-webkit-scrollbar { display: none; }'}
      </style>
      {fonts.map((font, index) => (
        <style
          key={index}
        >{`@import 'https://fonts.googleapis.com/css?family=${
          font.importCode
        }';`}</style>
      ))}
      {bodyFont && (
        <style
        >{`body { font-family: ${bodyFont}, sans-serif; }`}</style>
      )}
      {children}
    </div>
  )
}