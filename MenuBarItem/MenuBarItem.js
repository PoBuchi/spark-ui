const MenuBarItem = props => {
  const {
    className: classNameProp,
    title,
    icon,
    isActive,
    isFaded,
  } = props
  const className = classNames(
    'font:roboto-condensed display:flex flex:1 h:100p flex:items-center flex:content-center border-color:white transition:300ms transition:opacity transition:ease-in border:right',
    {
      'color:white text-color:main-menu-items': isActive,
    },
    {
      'color:main-menu-items text-color:white': !isActive,
    },
    {
      'opacity:40': isFaded,
    },
    classNameProp,
  )
  return (
    <div className={className}>
      {do {
        icon ? (
          <Icon icon={icon} size="25px" />
        ) : (
          <div className="size:15">{title}</div>
        )
      }}
    </div>
  )
}