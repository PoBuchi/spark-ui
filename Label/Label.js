const StyledLabel =
  /*#__PURE__*/
  styled('label', {
    target: 'ehmu6if0',
  })(
    'font-size:13.5px;font-family:Roboto,sans-serif;color:',
    props =>
      props.error ? 'var(--critical)' : 'var(--dark)',
    ';padding-bottom:5px;display:block;',
  )
const Label = ({ error, forId, style, text }) => (
  <StyledLabel error={error} htmlFor={forId} style={style}>
    {text}
  </StyledLabel>
)
