const Layout = ({
  image,
  imageBanner,
  onOpenRegister,
  regLink,
  sessionItems,
  speakerItems,
  subtitle,
  useFakeData,
  theming,
  title,
}) => {
  const theme = _mapKeys(theming, (value, key) => {
    return `--${key.replace(/_/gi, '-')}`
  })

  return (
    <div className="color:lightest h:100p" style={theme}>
      <style>{`
          html, body, #root {
            backgroundColor: var(--lightest);
          }
        `}</style>
      <Header image={image} />
      <Banner
        image={imageBanner}
        onOpenRegister={onOpenRegister}
        regLink={
          store.activePage === 'register' ? '' : regLink
        }
        subtitle={subtitle}
        title={title}
      />
      <div>
        {do {
          if (store.activePage === 'home') {
            ;<Home />
          } else if (store.activePage === 'speakers') {
            ;<Speakers items={speakerItems} />
          } else if (store.activePage === 'schedule') {
            ;<Schedule
              items={sessionItems}
              useFakeData={useFakeData}
            />
          } else if (store.activePage === 'register') {
            ;<Register regLink={regLink} />
          } else if (store.activePage === 'venue') {
            ;<Venue />
          } else {
            ;<PageTitle>Page not found</PageTitle>
          }
        }}
      </div>
      <Footer image={image} />
    </div>
  )
}