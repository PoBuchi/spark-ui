const ModuleMenuItem = ({
  _id,
  expanded,
  icon,
  isContainer,
  isSubItem,
  layout,
  moduleId,
  onContainerClick,
  onItemClick,
  selected,
  title,
}) => (
  <Wrapper
    className="w:100p display:flex flex:items-center select:none cursor:pointer position:relative"
    expanded={expanded}
    isContainer={isContainer}
    onClick={() => {
      if (isContainer) {
        onContainerClick(_id)
      } else {
        onItemClick({
          moduleId,
          layout,
        })
      }
    }}
    selected={selected}
    style={{
      height: isSubItem ? '34px' : '44px',
    }}
  >
    {!isSubItem && (
      <div
        className="display:flex flex:items-center flex:content-center"
        style={{
          width: '60px',
          textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 1px',
        }}
      >
        <Icon
          color="var(--menu-icons)"
          icon={icon}
          size="24px"
        />
      </div>
    )}
    <div
      className="flex:1 text:antialiased"
      style={{
        transition: 'color 300ms var(--ant-ease-in-out)',
        color: selected ? 'white' : 'hsla(0, 0%, 77%, 0.7)',
        fontSize: isSubItem ? '15px' : '17px',
        marginLeft: isSubItem ? '45px' : '0',
        textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 1px',
      }}
    >
      {title}
    </div>
    {isContainer && <MenuArrow expanded={expanded} />}
    {!isContainer && (
      <div
        style={{
          width: '4px',
          height: '100%',
          backgroundColor: selected
            ? 'var(--menu-accent)'
            : '',
          transform: selected
            ? 'scaleY(1)'
            : 'scaleY(0.0001)',
          transition:
            'transform 300ms var(--ant-ease-out), opacity 300ms var(--ant-ease-out)',
        }}
      />
    )}
  </Wrapper>
)