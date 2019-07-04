class NavPage extends Component {
  render() {
    const {
      maps,
      mapItems,
      navFrom,
      navTo,
      activeMapId,
      onDismiss,
      onItemClick,
      onMapChange,
      onSearchActionChange,
      onSearchOpen,
      onSearchUpdate,
    } = this.props
    const navFromItem = mapItems.find(
      x => x._id === navFrom,
    )
    const navToItem = mapItems.find(x => x._id === navTo)
    const directions = pathInstructions(
      findPath(navFrom, navTo, maps),
      maps,
    )
    return (
      <div
        style={{
          paddingTop: '20px',
        }}
      >
        <div className="h:44 display:flex flex:items-center flex:content-between border:bottom border:2 border-color:brand font:roboto-condensed">
          <Button
            btn="brand transparent has-icon"
            onClick={onDismiss}
            type="button"
          >
            <Icon icon="ui:arrow-down4" size="25px" />
          </Button>
          <div className="size:15 text-color:darker select:none text:uppercase cursor:default">
            NAVIGATE
          </div>
          <div
            style={{
              width: '50px',
              visibility: 'hidden',
            }}
          />
        </div>
        <div className="padding:7 color:white">
          <div className="display:flex flex:items-center margin-b:10">
            <div
              className="size:15 font:roboto text-color:darker text:bold select:none text:uppercase cursor:default margin-r:7"
              style={{
                minWidth: '46px',
              }}
            >
              From:
            </div>
            <div
              className="size:16 font:roboto-condensed border:all border-color:lighter padding:7 w:100p"
              onClick={() => {
                onSearchUpdate('')
                onSearchActionChange('SET_NAV_FROM')
                onSearchOpen()
              }}
              style={{
                minHeight: '16px',
              }}
            >
              {navFromItem
                ? navFromItem.displayName ||
                  navFromItem.label
                : 'Select..'}
            </div>
          </div>
          <div className="display:flex flex:items-center">
            <div
              className="size:15 font:roboto text-color:darker text:bold select:none text:uppercase text:right cursor:default margin-r:7"
              style={{
                minWidth: '46px',
              }}
            >
              To:
            </div>
            <div
              className="size:16 font:roboto-condensed border:all border-color:lighter padding:7 w:100p"
              onClick={() => {
                onSearchUpdate('')
                onSearchActionChange('SET_NAV_TO')
                onSearchOpen()
              }}
              style={{
                minHeight: '16px',
              }}
            >
              {navToItem
                ? navToItem.displayName || navToItem.label
                : 'Select..'}
            </div>
          </div>
        </div>
        {do {
          if (directions.length > 0) {
            ;<Scroller
              className="padding:10 border:top border-color:lighter"
              style={{
                top: '164px',
              }}
            >
              {directions.map((item, index) => (
                <div key={index}>
                  <div className="display:flex flex:items-center">
                    <div className="size:25 text-color:light font:roboto-condensed">
                      {item.step} - &nbsp;
                    </div>
                    <div className="size:16 text-color:neutral font:roboto-condensed">
                      {item.buildingName} on{' '}
                      {item.floorName} floor:
                    </div>
                  </div>
                  <div className="padding-l:20">
                    {item.possibleSteps.length > 1 && (
                      <div className="size:12 text-color:neutral font:roboto text:uppercase margin-y:7">
                        One of the following:
                      </div>
                    )}
                    {item.possibleSteps.map(
                      (step, index) => (
                        <div
                          className="display:flex flex:items-center margin-y:10"
                          key={index}
                          onClick={() => {
                            onDismiss()
                            onItemClick(step.itemId)
                            const mapId = mapItems.find(
                              x => x._id === step.itemId,
                            ).mapId

                            if (
                              mapId &&
                              mapId !== activeMapId
                            ) {
                              onMapChange(mapId)
                            }
                          }}
                        >
                          <div
                            className="display:flex flex:items-center flex:content-center text-color:white border:circle"
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: '#5291ae',
                            }}
                          >
                            <Icon
                              icon={
                                mapItems.find(
                                  x =>
                                    x._id === step.itemId,
                                ).icon || ''
                              }
                              size="25px"
                            />
                          </div>
                          <div className="margin-l:10 size:16 font:roboto text-color:dark">
                            {step.text}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </Scroller>
          } else {
            {
              navFrom &&
                navTo && (
                  <div className="size:12 font:roboto text:uppercase text-color:dark padding:20 text:center">
                    No additional instruction can be
                    provided
                  </div>
                )
            }
          }
        }}
      </div>
    )
  }
}