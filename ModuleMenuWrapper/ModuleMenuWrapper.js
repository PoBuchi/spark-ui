const ModuleMenuWrapper = ({
  expandedIds,
  items,
  onContainerClick,
  onItemClick,
  selectedId,
}) => {
  return (
    <ModuleMenu
      expandedIds={expandedIds}
      items={items}
      onContainerClick={onContainerClick}
      onItemClick={onItemClick}
      selectedId={selectedId}
    />
  )
}