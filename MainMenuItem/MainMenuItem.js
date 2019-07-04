const MainMenuItem = props => {
  const { className: classNameProp, icon, title } = props
  const className = classNames(
    'text-color:main-menu-items display:flex flex:column flex:items-center',
    classNameProp,
  )
  return (
    <div
      className={className}
      style={{
        width: '60px',
      }}
    >
      <Icon icon={icon} size="35px" />
      <div className="padding-t:7 text-color:neutral size:10 font:roboto-condensed text:uppercase">
        {title}
      </div>
    </div>
  )
}