const LocationItem = ({
  activeItemId,
  itemName,
  navigationEnabled,
  onActiveItemChange,
  onNavOpen,
  onNavTo,
}) => (
  <div
    className="display:flex flex:items-center"
    style={{
      height: '54px',
    }}
  >
    <Button
      btn="small circle light"
      className="margin-x:10"
      onClick={() => onActiveItemChange('')}
      type="button"
    >
      <Icon
        className="size:16 vertical-align:text-top text-color:white"
        icon="ui:cross2"
      />
    </Button>
    <div className="size:20 text-color:dark font:roboto-conddensed">
      {itemName}
    </div>
    {navigationEnabled && (
      <Button
        btn="action"
        className="margin-l:auto margin-r:10"
        type="button"
      >
        Navigate To
      </Button>
    )}
  </div>
)