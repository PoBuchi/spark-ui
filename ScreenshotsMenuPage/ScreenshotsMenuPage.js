const ScreenshotsMenuPage = props => {
  const {
    bannerImage,
    caption,
    deviceSize,
    image,
    isActive,
    menuTitle,
    platform,
    section,
    title,
  } = props
  return (
    <div className="display:flex flex:column h:100p">
      <div className="flex:80px display:flex flex:content-center flex:items-center">
        <div
          className={`${
            deviceSize === 'tablet' ? 'size:20' : 'size:15'
          } text-color:dark font:roboto-condensed padding-x:20 text:center`}
        >
          {title}
        </div>
      </div>
      <div className="display:flex h:100p position:relative">
        <Device
          android={platform === 'android'}
          style={{
            margin: '0 3rem 1.5rem',
          }}
        >
          <Layout
            className="animation:none"
            deviceSize={deviceSize}
            isActive={isActive}
            items={EVENT_MENU_ITEMS}
            showMenu={true}
          >
            {do {
              if (deviceSize === 'tablet') {
                ;<div className="display:flex h:100p">
                  <div className="flex:1 h:100p">
                    <div className="h:100p display:flex flex:column">
                      <HeaderBar
                        image={image}
                        title={menuTitle}
                      />
                      <MainMenu
                        items={EVENT_MAIN_MENU_ITEMS.filter(
                          x => x.section === section,
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex:1">
                    <img
                      className="w:100p h:100p"
                      role="presentation"
                      src={bannerImage}
                    />
                  </div>
                </div>
              } else if (deviceSize === 'phone') {
                ;<div className="h:100p display:flex flex:column">
                  <HeaderBar
                    image={image}
                    title={menuTitle}
                  />
                  <MainMenu
                    items={EVENT_MAIN_MENU_ITEMS.filter(
                      x => x.section === section,
                    )}
                  />
                </div>
              }
            }}
          </Layout>
        </Device>
      </div>
    </div>
  )
}