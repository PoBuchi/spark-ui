const MenuItemIconLabel = ({
  className: classNameProp,
  icon,
  title,
  isActive,
  isHighlighted,
}) => {
  const className = classNames(
    'font:roboto w:100p padding-y:7 margin-t:5 display:flex flex:items-center flex:content-center flex:column border-color:white transition:300ms transition:opacity transition:ease-in',
    {
      'color:white text-color:main-menu-items': isActive,
    },
    {
      'color:light-faded text-color:white': !isActive,
    },
    {
      'animation:1s animation:pulse animation:infinite': isHighlighted,
    },
    classNameProp,
  )
  return (
    <div className={className}>
      <Icon icon={icon} size="23px" />
      <div className="size:12 padding-t:5 text-color:light">
        {title}
      </div>
    </div>
  )
}