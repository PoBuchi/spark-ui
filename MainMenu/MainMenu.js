const MainMenu = props => {
  const { className: classNameProp, items } = props
  const className = classNames(
    'display:flex h:100p flex:column flex:content-end padding-b:7 color:white',
    classNameProp,
  )
  return (
    <div className={className}>
      <MainMenuRow items={items.filter(x => x.row === 3)} />
      <MainMenuRow items={items.filter(x => x.row === 2)} />
      <MainMenuRow items={items.filter(x => x.row === 1)} />
    </div>
  )
}