const TutorialWrapper = props => {
  const { type, deviceSize, ...other } = props
  let slides = {}
  let menuItems = {}

  if (type === 'main') {
    if (deviceSize === 'phone') {
      slides = MAIN_SLIDES
    } else if (deviceSize === 'tablet') {
      slides = MAIN_SLIDES_TABLET
    }

    menuItems = MAIN_MENU_ITEMS
  } else if (type === 'event') {
    if (deviceSize === 'phone') {
      slides = EVENT_SLIDES
    } else if (deviceSize === 'tablet') {
      slides = EVENT_SLIDES_TABLET
    }

    menuItems = EVENT_MENU_ITEMS
  }

  return (
    <Tutorial
      deviceSize={deviceSize}
      menuItems={menuItems}
      slides={slides}
      {...other}
    />
  )
}