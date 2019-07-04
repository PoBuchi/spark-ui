const ElevatorControl = ({
  activeMapId,
  floors,
  onChange,
  onFloorClick,
}) => {
  return (
    <div className="display:flex flex:column">
      <Button
        btn="large square darker raised"
        className="border:all border:2 border-color:darker"
        disabled={
          currentIndex === numberOfFloors - FLOOR_INCREMENT
        }
        onClick={() =>
          onChange(
            floors[currentIndex + FLOOR_INCREMENT].mapId,
          )
        }
        type="button"
      >
        <Icon
          className="size:24 vertical-align:text-top text-color:info"
          icon="ui:circle-up4"
        />
      </Button>
      <Button
        btn="large square darker raised"
        className="margin-y:5 text-color:info"
        onClick={floors.length > 5 ? onFloorClick : null}
        type="button"
      >
        {floors[currentIndex]
          ? floors[currentIndex].floorNumber
          : ''}
      </Button>
      <Button
        btn="large square darker raised"
        disabled={currentIndex === INDEX_START}
        onClick={() =>
          onChange(
            floors[currentIndex - FLOOR_INCREMENT].mapId,
          )
        }
        type="button"
      >
        <Icon
          className="size:24 vertical-align:text-top text-color:info"
          icon="ui:circle-down4"
        />
      </Button>
    </div>
  )
}