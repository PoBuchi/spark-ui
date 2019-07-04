const LayoutPhone = props => {
  const {
    children,
    className: classNameProp,
    fade,
    isActive,
    items,
    showMenu,
  } = props
  const className = classNames(
    'display:flex flex:column h:100p',
    classNameProp,
  )
  return (
    <div className={className}>
      {children}
      {do {
        if (showMenu) {
          ;<MenuBar
            fade={fade}
            isActive={isActive}
            items={items.filter(
              x => x.phoneLocation === 'bottom',
            )}
          />
        } else {
          ;<div className="display:flex color:white w:100p h:44 flex:44px flex:items-center flex:content-center" />
        }
      }}
    </div>
  )
}