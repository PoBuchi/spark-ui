class ElevatorPanel extends Component {
  state = {
    activeMapId: this.props.activeMapId,
    activeBuildingId: this.props.activeBuildingId,
  }
  handleBuildingUpdate = value => {
    this.setState({
      activeBuildingId: value,
    })
  }
  handleMapSelect = value => {
    this.setState({
      activeMapId: value,
    })
  }

  render() {
    const {
      buildings,
      maps,
      onChange,
      onDismiss,
    } = this.props
    const { activeMapId, activeBuildingId } = this.state
    const buildingMaps = maps
      ? maps.filter(
          map => map.buildingId === activeBuildingId,
        )
      : []
    return (
      <div>
        <div
          className="h:44 display:flex flex:items-center padding-x:10"
          style={{
            marginTop: '20px',
          }}
        >
          <SelectInput
            className="flex:1"
            clearable={false}
            onUpdate={this.handleBuildingUpdate}
            options={buildings.map(item => {
              return {
                value: item._id,
                label: item.title,
              }
            })}
            placeholder="Filter by building"
            searchable={false}
            value={activeBuildingId}
          />
        </div>
        <Scroller
          className="padding:10 display:flex flex:items-start flex:content-center flex:wrap-reverse"
          style={{
            top: 'auto',
            bottom: '60px',
          }}
        >
          {buildingMaps.map(map => (
            <Button
              className={`border:all text:capitalize border:2 border-color:darker ${
                map._id === activeMapId
                  ? 'text-color:darker'
                  : 'text-color:white'
              }  margin:7`}
              key={map._id}
              onClick={() => this.handleMapSelect(map._id)}
              style={{
                minWidth: '46px',
              }}
              type="button"
            >
              {map.floorName || map.floorNumber}
            </Button>
          ))}
        </Scroller>
        <div
          className="position:absolute bottom:0 left:0 right:0 display:flex flex:items-center flex:content-between padding-x:7 border:top border:2 border-color:brand"
          style={{
            height: '56px',
          }}
        >
          <Button
            className="text:capitalize"
            onClick={onDismiss}
            type="button"
          >
            Cancel
          </Button>
          <Button
            className="text:capitalize"
            disabled={
              activeMapId === this.props.activeMapId
            }
            onClick={() => {
              onChange(activeMapId)
              onDismiss()
            }}
            type="button"
          >
            Go
          </Button>
        </div>
      </div>
    )
  }
}
