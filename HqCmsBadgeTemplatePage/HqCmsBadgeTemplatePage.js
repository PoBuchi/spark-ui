const HqCmsBadgeTemplatePage = ({
  items,
  onAddClick,
  onDuplicateClick,
  onItemClick,
  onOrientationFilterUpdate,
  onPreviewClick,
  onSearchUpdate,
  onStatusFilterUpdate,
  orientationFilter,
  searchTerm,
  statusFilter,
}) => {
  const isOfStatus = item =>
    !statusFilter || statusFilter === item.status

  const isOfOriention = item =>
    !orientationFilter ||
    orientationFilter === item.orientation

  const filteredItems = items
    .filter(createFilter(searchTerm, SEARCH_KEYS))
    .filter(isOfStatus)
    .filter(isOfOriention)
  return (
    <div>
      <HeaderBar
        hideBorder={true}
        icon={MODULE_ICON}
        title={`${MODULE_TITLE} • ${filteredItems.size}`}
      >
        <HeaderButton label="Add" onClick={onAddClick} />
      </HeaderBar>
      <HeaderControls>
        <SearchBar
          onChange={onSearchUpdate}
          placeholder={SEARCH_PLACEHOLDER}
          value={searchTerm}
        />
        <div className="display:flex padding-t:7">
          <Select
            className="flex:1 margin-r:7"
            inputProps={{
              injectStyles: false,
            }}
            onUpdate={onOrientationFilterUpdate}
            options={ORIENTATION_OPTIONS}
            placeholder="Filter by orientation"
            renderType="icon"
            value={orientationFilter}
          />
          <Select
            className="flex:1"
            inputProps={{
              injectStyles: false,
            }}
            onUpdate={onStatusFilterUpdate}
            options={STATUS_OPTIONS}
            placeholder="Filter by status"
            renderType="colored"
            value={statusFilter}
          />
        </div>
      </HeaderControls>
      <div
        className="position:absolute left:0 right:0 bottom:0"
        style={{
          top: '128px',
        }}
      >
        <HqCmsBadgeTemplateList
          list={filteredItems}
          onDuplicateClick={onDuplicateClick}
          onItemClick={onItemClick}
          onPreviewClick={onPreviewClick}
        />
      </div>
    </div>
  )
}