const MenuItemLabel = ({
  className: classNameProp,
  icon,
  isActive,
  isHighlighted,
  title,
}) => {
  const className = classNames(
    'font:roboto display:flex w:100p h:50 margin-t:5 flex:items-center flex:content-center border-color:white transition:300ms transition:opacity transition:ease-in',
    {
      'color:white text-color:main-menu-items': isActive,
    },
    {
      'color:main-menu-items text-color:white': !isActive,
    },
    {
      'animation:2s animation:fadeInOut animation:infinite animation:ease-in-out': isHighlighted,
    },
    classNameProp,
  )
  return (
    <div className={className}>
      {do {
        icon ? (
          <Icon icon={icon} size="23px" />
        ) : (
          <div className="size:15">{title}</div>
        )
      }}
    </div>
  )
}