const Page = ({
  activeItemId,
  activeMapId,
  buildings,
  className,
  isOpenElevatorPanel,
  items,
  isOpenSearch,
  maps,
  navFrom,
  navigationEnabled,
  navTo,
  offlineEnabled,
  onActiveItemChange,
  onActiveMapChange,
  onClose,
  onElevatorPanelClose,
  onElevatorPanelOpen,
  onFloorOpen,
  onNavClose,
  onNavFromChangeChange,
  onNavigateTo,
  onNavOpen,
  onNavToChangeChange,
  onOrientationFilterUpdate,
  onProfileOpen,
  onSearchActionChange,
  onSearchClose,
  onSearchOpen,
  onSearchUpdate,
  onShowInfo,
  onStatusFilterUpdate,
  onZoomChange,
  orientationFilter,
  orientationOptions,
  searchAction,
  searchKeys,
  searchPlaceholder,
  searchTerm,
  splitScreenEnabled,
  statusFilter,
  statusOptions,
  style,
  zoomLevel,
}) => {
  const isOfStatus = item =>
    !statusFilter || statusFilter === item.status

  const isOfOriention = item =>
    !orientationFilter ||
    orientationFilter === item.orientation

  let activeMap = {}

  if (activeMapId) {
    activeMap = maps.find(map => map._id === activeMapId)
  } else {
    activeMap = maps[0] ? maps[0] : {}
  }

  const buildingMaps = maps
    ? maps.filter(
        map => map.buildingId === activeMap.buildingId,
      )
    : []
  const floors = buildingMaps.map(map => {
    return {
      mapId: map._id,
      floorNumber: map.floorNumber,
      floorCode: map.floorCode,
    }
  })
  const mapItems = []
  maps.forEach(map => {
    return mapItems.push(...map.items)
  })
  let filteredItems = []

  if (activeMap.items) {
    filteredItems = activeMap.items
      .filter(isOfStatus)
      .filter(isOfOriention)
  }

  const areaMap = maps.find(x => x.floorCode === 'area')
  const areaMapId = areaMap ? areaMap._id : ''
  return (
    <div
      className="position:absolute-0"
      style={{
        width: splitScreenEnabled
          ? window.innerWidth / 2
          : '',
      }}
    >
      <MapThemeStyles
        globalStyles={activeMap.globalStyles}
        themes={activeMap.themes}
      />
      {activeMap.floorCode !== 'area' && (
        <div
          className="size:16 position:absolute right:0 margin-r:7 text-color:white text:antialiased font:roboto-condensed border:rounded padding:7"
          onClick={
            floors.length > 5 ? onElevatorPanelOpen : null
          }
          style={{
            top: '24px',
            zIndex: 500,
            backgroundColor: 'rgba(70, 66, 66, 0.74)',
          }}
        >
          <div className="margin-b:5">
            <Icon
              className="size:16 vertical-align:text-top text-color:white"
              icon="ui:office"
            />{' '}
            {activeMap.buildingName}
          </div>
          <div className="text:capitalize">
            <Icon
              className="size:16 vertical-align:text-top text-color:white"
              icon="ui:stack2"
            />{' '}
            {activeMap.floorName || activeMap.floorNumber}
          </div>
        </div>
      )}

      <div
        className="position:absolute left:0 margin-l:7 text-color:white text:antialiased font:roboto-condensed border:rounded padding:7"
        style={{
          top: '24px',
          zIndex: 500,
          backgroundColor: 'rgba(70, 66, 66, 0.20)',
        }}
      >
        <Button
          btn="large square darker raised"
          onClick={onClose}
          style={{
            minWidth: '50px',
          }}
          type="button"
        >
          <Icon
            className="size:24 vertical-align:text-top text-color:info"
            icon="ui:cross2"
          />
        </Button>
        {areaMapId &&
          activeMap.floorCode !== 'area' && (
            <Button
              btn="large square darker raised"
              className="margin-l:7"
              onClick={() => onActiveMapChange(areaMapId)}
              style={{
                minWidth: '50px',
              }}
              type="button"
            >
              <Icon
                className="size:24 vertical-align:text-top text-color:info"
                icon="ui:office"
              />
            </Button>
          )}
      </div>
      {floors.length > 1 && (
        <div
          className="position:absolute left:0 margin-l:7 text:antialiased font:roboto-condensed border:rounded padding:7"
          style={{
            bottom: '140px',
            zIndex: 500,
            backgroundColor: 'rgba(70, 66, 66, 0.20)',
            minWidth: '50px',
          }}
        >
          <ElevatorControl
            activeMapId={activeMap._id}
            floors={floors}
            onChange={onActiveMapChange}
            onFloorClick={onElevatorPanelOpen}
          />
        </div>
      )}
      {/* Elevator panel */}
      {isOpenElevatorPanel && (
        <Panel
          className="color:white"
          hideBackdrop={true}
          isOpen={isOpenElevatorPanel}
          onDismiss={onElevatorPanelClose}
          transition="fadeIn"
          zDepth={800}
        >
          <ElevatorPanel
            activeBuildingId={activeMap.buildingId}
            activeMapId={activeMap._id}
            buildings={buildings}
            maps={maps}
            onChange={onActiveMapChange}
          />
        </Panel>
      )}
      {isOpenSearch && (
        <Panel
          className="color:white"
          hideBackdrop={true}
          isOpen={isOpenSearch}
          onDismiss={onSearchClose}
          transition="slideFromBottom"
          zDepth={900}
        >
          <SearchPage
            activeMapId={activeMap._id}
            items={Immutable.List.of(...mapItems)}
            maps={maps}
            onItemClick={value => {
              if (searchAction === 'GO_TO_ITEM') {
                onActiveItemChange(value)
              } else if (searchAction === 'SET_NAV_FROM') {
                onNavFromChangeChange(value)
              } else if (searchAction === 'SET_NAV_TO') {
                onNavToChangeChange(value)
              }
            }}
            onMapChange={value => {
              if (searchAction === 'GO_TO_ITEM') {
                onActiveMapChange(value)
              }
            }}
            onSearchUpdate={onSearchUpdate}
            searchKeys={searchKeys}
            searchPlaceholder={searchPlaceholder}
            searchTerm={searchTerm}
          />
        </Panel>
      )}
      {items && (
        <Panel
          className="color:white"
          hideBackdrop={true}
          isOpen={items}
          onDismiss={onNavClose}
          transition="slideFromBottom"
          zDepth={800}
        >
          <Page
            activeMapId={activeMap._id}
            mapItems={mapItems}
            maps={maps}
            navFrom={navFrom}
            navTo={navTo}
            onItemClick={onActiveItemChange}
            onMapChange={onActiveMapChange}
            onSearchActionChange={onSearchActionChange}
            onSearchOpen={onSearchOpen}
            onSearchUpdate={onSearchUpdate}
          />
        </Panel>
      )}
      <div
        className="position:absolute left:0 margin-l:7 text-color:darker text:antialiased font:roboto-condensed border:rounded padding:7 display:flex flex:column"
        style={{
          bottom: '70px',
          zIndex: 500,
          backgroundColor: 'rgba(70, 66, 66, 0.20)',
          minWidth: '50px',
        }}
      >
        {do {
          if (zoomLevel === 1) {
            ;<Button
              btn="large square darker raised"
              className="text-color:info"
              onClick={() => onZoomChange(0.7)}
              type="button"
            >
              x3
            </Button>
          } else if (zoomLevel === 0.7) {
            ;<Button
              btn="large square darker raised"
              className="text-color:info"
              onClick={() => onZoomChange(0.4)}
              type="button"
            >
              x2
            </Button>
          } else if (zoomLevel === 0.4) {
            ;<Button
              btn="large square darker raised"
              className="text-color:info"
              onClick={() => onZoomChange(1)}
              type="button"
            >
              x1
            </Button>
          }
        }}
      </div>
      <div
        className="position:absolute right:0 margin-r:7 text-color:darker text:antialiased font:roboto-condensed border:rounded padding:7 display:flex flex:column"
        style={{
          bottom: '70px',
          zIndex: 500,
          backgroundColor: 'rgba(70, 66, 66, 0.20)',
          minWidth: '50px',
        }}
      >
        <Button
          btn="large square darker raised"
          onClick={() => {
            onSearchActionChange('GO_TO_ITEM')
            onSearchOpen()
          }}
          type="button"
        >
          <Icon
            className="size:24 vertical-align:text-top text-color:info"
            icon="ui:search3"
          />
        </Button>
      </div>
      {navigationEnabled && (
        <div
          className="position:absolute right:0 margin-r:7 text-color:darker text:antialiased font:roboto-condensed border:rounded padding:7 display:flex flex:column"
          style={{
            bottom: '130px',
            zIndex: 500,
            backgroundColor: 'rgba(70, 66, 66, 0.20)',
            minWidth: '50px',
          }}
        >
          <Button
            btn="large square darker raised"
            className="border:all border:2 border-color:darker"
            onClick={onNavOpen}
            type="button"
          >
            <Icon
              className="size:24 vertical-align:text-top text-color:info"
              icon="ui:compass5"
            />
          </Button>
        </div>
      )}
      <div className="position:absolute-0">
        <Items
          activeItem={mapItems.find(
            x => x._id === activeItemId,
          )}
          activeItemId={activeItemId}
          list={Immutable.List.of(...filteredItems)}
          mapHeight={activeMap.height}
          mapWidth={activeMap.width}
          offlineEnabled={offlineEnabled}
          onFloorOpen={floorData => {
            const openMapId = maps
              .filter(
                x =>
                  x.buildingCode ===
                  floorData.openBuildingCode,
              )
              .find(
                x =>
                  x.floorCode === floorData.openFloorCode,
              )
            onActiveMapChange(
              openMapId ? openMapId._id : '',
            )
          }}
          onNavigateTo={onNavigateTo}
          onProfileOpen={onProfileOpen}
          onShowInfo={onShowInfo}
          scrollLeft={
            activeItemId
              ? mapItems.find(x => x._id === activeItemId)
                  .surface.x
              : 0
          }
          scrollTop={
            activeItemId
              ? mapItems.find(x => x._id === activeItemId)
                  .surface
              : 0
          }
          splitScreenEnabled={splitScreenEnabled}
          zoomLevel={zoomLevel}
        />
      </div>
    </div>
  )
}