const MainMenuRow = props => {
  const { className: classNameProp, items } = props
  const className = classNames(
    'display:flex flex:items-center flex:content-around padding-y:20',
    classNameProp,
  )
  return (
    <div className={className}>
      {items.map((item, i) => {
        return (
          <MainMenuItem
            icon={item.icon}
            key={i}
            title={item.title}
          />
        )
      })}
    </div>
  )
}