const MenuItemIcon = ({
  className: classNameProp,
  icon,
  title,
  isActive,
  isHighlighted,
}) => {
  const className = classNames(
    'font:roboto-condensed display:flex w:100p h:50 margin-t:5 flex:items-center flex:content-center border-color:white transition:300ms transition:opacity transition:ease-in',
    {
      'color:white text-color:main-menu-items': isActive,
    },
    {
      'color:transparent text-color:white': !isActive,
    },
    {
      'animation:1s animation:tada animation:infinite': isHighlighted,
    },
    classNameProp,
  )
  return (
    <div className={className}>
      {do {
        icon ? (
          <Icon icon={icon} size="35px" />
        ) : (
          <div className="size:15">{title}</div>
        )
      }}
    </div>
  )
}