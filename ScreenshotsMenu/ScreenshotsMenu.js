const ScreenshotsMenu = ({
  section,
  device,
  platform,
  data,
}) => {
  const { title: eventTitle, logo, rightBanner } = data
  let title
  let menuTitle
  let isActive
  let image

  if (section === 'event') {
    title = 'Explore, engage and connect.'
    menuTitle = eventTitle
    image = logo
  } else if (section === 'my') {
    title = 'Capture and review your favourites.'
    menuTitle = 'Linda Sanders'
    image =
      'https://randomuser.me/api/portraits/women/90.jpg'
    isActive = {
      my: true,
    }
  }

  return (
    <ScreenshotsMenuPage
      bannerImage={rightBanner}
      deviceSize={device}
      image={image}
      isActive={isActive}
      menuTitle={menuTitle}
      platform={platform}
      section={section}
      title={title}
    />
  )
}