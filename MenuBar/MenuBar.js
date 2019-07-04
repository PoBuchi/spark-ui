const MenuBar = props => {
  const { className: classNameProp, items } = props
  const className = classNames(
    'font:roboto-conddensed tutorial-anim-fade-in display:flex w:100p h:44 flex:44px flex:items-center flex:content-center',
    classNameProp,
  )
  const fade = props.fade ? props.fade : {}
  const isActive = props.isActive ? props.isActive : {}
  return (
    <div className={className}>
      {items.map((item, i) => {
        return (
          <MenuBarItem
            className={item.classNames}
            icon={item.icon}
            isActive={isActive[item.id]}
            isFaded={fade[item.id]}
            key={i}
            title={item.title}
          />
        )
      })}
    </div>
  )
}