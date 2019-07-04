class MapViewer extends Component {
  static propTypes = {
    buildings: PropTypes.array.isRequired,
    maps: PropTypes.array.isRequired,
    moduleState: PropTypes.object.isRequired,
    offlineEnabled: PropTypes.bool.isRequired,
    onActiveItemChange: PropTypes.func.isRequired,
    onActiveMapChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onElevatorPanelClose: PropTypes.func.isRequired,
    onElevatorPanelOpen: PropTypes.func.isRequired,
    onNavigateTo: PropTypes.func,
    onOrientationFilterUpdate: PropTypes.func.isRequired,
    onProfileOpen: PropTypes.func.isRequired,
    onSearchClose: PropTypes.func.isRequired,
    onSearchOpen: PropTypes.func.isRequired,
    onSearchUpdate: PropTypes.func.isRequired,
    onShowInfo: PropTypes.func,
    onStatusFilterUpdate: PropTypes.func.isRequired,
    onZoomChange: PropTypes.func.isRequired,
    orientationOptions: PropTypes.array.isRequired,
    splitScreenEnabled: PropTypes.bool.isRequired,
    statusOptions: PropTypes.array.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.activeItemId !== nextProps.activeItemId
    ) {
      if (
        this.props.moduleState.activeItem !==
        nextProps.activeItemId
      ) {
        this.props.onActiveItemChange(
          nextProps.activeItemId,
        )
        const mapItems = []
        this.props.maps.forEach(map => {
          return mapItems.push(...map.items)
        })
        const mapId = mapItems.find(
          item => item._id === nextProps.activeItemId,
        ).mapId

        if (mapId !== this.props.moduleState.activeMapId) {
          this.props.onActiveMapChange(mapId)
        }
      }
    }
  }

  render() {
    const {
      buildings,
      maps,
      moduleState,
      navigationEnabled,
      offlineEnabled,
      onActiveItemChange,
      onActiveMapChange,
      onClose,
      onElevatorPanelClose,
      onElevatorPanelOpen,
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
      orientationOptions,
      splitScreenEnabled,
      statusOptions,
    } = this.props
    const {
      statusFilter,
      orientationFilter,
      searchTerm,
      zoomLevel,
      activeMap,
      activeItem,
      isOpenElevatorPanel,
      isOpenSearch,
      isOpenNav,
      navFrom,
      navTo,
      searchAction,
    } = moduleState
    return (
      <Page
        activeItemId={activeItem}
        activeMapId={activeMap}
        buildings={buildings}
        isOpenElevatorPanel={isOpenElevatorPanel}
        isOpenNav={isOpenNav}
        isOpenSearch={isOpenSearch}
        maps={maps}
        navFrom={navFrom}
        navTo={navTo}
        navigationEnabled={navigationEnabled}
        offlineEnabled={offlineEnabled}
        onActiveItemChange={onActiveItemChange}
        onActiveMapChange={onActiveMapChange}
        onClose={onClose}
        onElevatorPanelClose={onElevatorPanelClose}
        onElevatorPanelOpen={onElevatorPanelOpen}
        onNavClose={onNavClose}
        onNavFromChangeChange={onNavFromChangeChange}
        onNavOpen={onNavOpen}
        onNavToChangeChange={onNavToChangeChange}
        onNavigateTo={onNavigateTo}
        onOrientationFilterUpdate={
          onOrientationFilterUpdate
        }
        onProfileOpen={onProfileOpen}
        onSearchActionChange={onSearchActionChange}
        onSearchClose={onSearchClose}
        onSearchOpen={onSearchOpen}
        onSearchUpdate={onSearchUpdate}
        onShowInfo={onShowInfo}
        onStatusFilterUpdate={onStatusFilterUpdate}
        onZoomChange={onZoomChange}
        orientationFilter={orientationFilter}
        orientationOptions={orientationOptions}
        searchAction={searchAction}
        searchKeys={['label', 'displayName']}
        searchPlaceholder="Search locations"
        searchTerm={searchTerm}
        splitScreenEnabled={splitScreenEnabled}
        statusFilter={statusFilter}
        statusOptions={statusOptions}
        zoomLevel={zoomLevel}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    moduleState: state.mapViewer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrientationFilterUpdate: value =>
      dispatch(orientationFilterUpdate(value)),
    onSearchUpdate: searchTerm =>
      dispatch(searchUpdate(searchTerm)),
    onStatusFilterUpdate: value =>
      dispatch(statusFilterUpdate(value)),
    onZoomChange: value => dispatch(zoomLevelChange(value)),
    onActiveMapChange: value =>
      dispatch(activeMapChange(value)),
    onActiveItemChange: value =>
      dispatch(activeItemChange(value)),
    onElevatorPanelOpen: () =>
      dispatch(openElevatorPanel()),
    onElevatorPanelClose: () => {
      window.setTimeout(() => {
        dispatch(closeElevatorPanel())
      }, 350)
    },
    onSearchOpen: () => dispatch(openSearch()),
    onSearchClose: () => {
      window.setTimeout(() => {
        dispatch(closeSearch())
      }, 350)
    },
    onNavOpen: () => dispatch(openNav()),
    onNavClose: () => {
      window.setTimeout(() => {
        dispatch(closeNav())
      }, 350)
    },
    onNavFromChangeChange: value =>
      dispatch(navFromChange(value)),
    onNavToChangeChange: value =>
      dispatch(navToChange(value)),
    onSearchActionChange: value =>
      dispatch(searchActionChange(value)),
  }
}