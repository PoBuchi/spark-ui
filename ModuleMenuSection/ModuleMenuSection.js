const ModuleMenuSection = ({
  _id,
  expandedIds,
  icon,
  isContainer,
  isSubItem,
  items,
  moduleId,
  layout,
  onContainerClick,
  onItemClick,
  parentId,
  selectedId,
  title,
}) => (
  <>
    {do {
      if (isContainer) {
        ;<Menu2
          _id={_id}
          expanded={expandedIds.includes(_id)}
          expandedIds={expandedIds}
          icon={icon}
          isContainer={isContainer}
          items={items}
          moduleId={moduleId}
          onContainerClick={onContainerClick}
          onItemClick={onItemClick}
          parentId={parentId}
          selected={haveSelectedChildren(
            _id,
            selectedId,
            items,
          )}
          selectedId={selectedId}
          title={title}
        />
      } else {
        ;<Menu
          _id={_id}
          expanded={expandedIds.includes(_id)}
          icon={icon}
          isContainer={isContainer}
          isSubItem={isSubItem}
          layout={layout}
          moduleId={moduleId}
          onContainerClick={onContainerClick}
          onItemClick={onItemClick}
          parentId={parentId}
          selected={moduleId === selectedId}
          title={title}
        />
      }
    }}
  </>
)