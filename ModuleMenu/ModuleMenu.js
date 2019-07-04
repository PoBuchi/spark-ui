const ModuleMenu = ({
  items,
  expandedIds,
  selectedId,
  onItemClick,
  onContainerClick,
}) => {
  return (
    <Scroller
      style={{
        paddingTop: '15px',
      }}
    >
      {items.filter(x => !x.parentId).map(item => {
        return (
          <Item
            _id={item._id}
            expandedIds={expandedIds}
            icon={item.icon}
            isContainer={item.isContainer}
            isSubItem={item.isSubItem}
            items={items}
            key={item._id}
            layout={item.layout}
            moduleId={item.moduleId}
            onContainerClick={onContainerClick}
            onItemClick={onItemClick}
            parentId={item.parentId}
            selectedId={selectedId}
            title={item.title}
          />
        )
      })}
    </Scroller>
  )
}