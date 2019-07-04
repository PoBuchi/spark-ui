const MenuBarVertical = props => {
  const { className: classNameProp, items } = props
  const className = classNames(
    'tutorial-anim-fade-in display:flex w:100p h:100p flex:column flex:items-center',
    classNameProp,
  )
  const fade = props.fade ? props.fade : {}
  const isActive = props.isActive ? props.isActive : {}
  const isHighlighted = props.isHighlighted
    ? props.isHighlighted
    : {}
  return (
    <div className={className}>
      {items.map((item, i) => {
        return (
          <Item
            className={`${item.classNames} ${
              fade[item.id] ? 'opacity:40' : ''
            }`}
            icon={item.icon}
            isActive={isActive[item.id]}
            isHighlighted={isHighlighted[item.id]}
            key={i}
            tabletStyle={item.tabletStyle}
            title={item.title}
          />
        )
      })}
    </div>
  )
}