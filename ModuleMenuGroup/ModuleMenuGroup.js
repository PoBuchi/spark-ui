const ModuleMenuGroup = ({
  _id,
  expanded,
  expandedIds,
  icon,
  items,
  moduleId,
  onContainerClick,
  onItemClick,
  selected,
  selectedId,
  title,
}) => (
  <div>
    <ModuleMenuItem
      _id={_id}
      expanded={expanded}
      icon={icon}
      isContainer={true}
      moduleId={moduleId}
      onContainerClick={onContainerClick}
      onItemClick={onItemClick}
      selected={selected}
      title={title}
    />
    <Items in={expanded} timeout={300}>
      <div // height animation: https://stackoverflow.com/a/43965099
        style={{
          // maxHeight: expanded ? '800px' : 0,
          // transition: expanded
          //   ? 'max-height 0.25s var(--ant-ease-in-out)'
          //   : 'max-height 0.15s var(--ant-ease-out)',
          overflow: 'hidden',
          position: 'relative',
          marginLeft: '15px',
          borderLeft: expanded
            ? '1px solid hsla(0, 0%, 0%, 0.15)'
            : '',
          borderBottom: expanded
            ? '1px solid hsla(0, 0%, 0%, 0.15)'
            : '', // paddingBottom: expanded ? '15px' : '', // messes up animation
        }}
      >
        <SidePanel pose={expanded ? 'open' : 'closed'}>
          {items
            .filter(x => x.parentId === _id)
            .map(item => {
              return (
                <Item key={item._id}>
                  <ModuleMenuSection
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
                </Item>
              )
            })}
        </SidePanel>
      </div>
    </Items>
  </div>
)