const Layout = props => {
  const { deviceSize, children } = props

  if (deviceSize === 'phone') {
    return <LayoutPhone {...props}>{children}</LayoutPhone>
  } else if (deviceSize === 'tablet') {
    return (
      <LayoutTablet {...props}>{children}</LayoutTablet>
    )
  }

  return null
}