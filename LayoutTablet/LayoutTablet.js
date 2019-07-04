const LayoutTablet = props => {
  const {
    className: classNameProp,
    children,
    showMenu,
    items,
    fade,
    isActive,
    isHighlighted,
  } = props
  const className = classNames(
    'display:flex color:primary-header h:100p padding-t:20 box:border-box',
    classNameProp,
  )
  return (
    <div className={className}>
      <div className="display:flex color:primary-header flex:column flex:80px">
        <div className="display:flex flex:1" />
        <div className="display:flex flex:1">
          {showMenu ? (
            <Items
              fade={fade}
              isActive={isActive}
              isHighlighted={isHighlighted}
              items={items.filter(
                x => x.tabletLocation === 'leftBottom',
              )}
            />
          ) : null}
        </div>
      </div>
      <div className="display:flex flex:1 color:white flex:column h:100p position:relative overflow:hidden">
        {children}
      </div>
      <div className="display:flex color:primary-header flex:column flex:80px">
        <div className="display:flex flex:1">
          {showMenu ? (
            <Items
              fade={fade}
              isActive={isActive}
              isHighlighted={isHighlighted}
              items={items.filter(
                x => x.tabletLocation === 'rightTop',
              )}
            />
          ) : null}
        </div>
        <div className="display:flex flex:1">
          {showMenu ? (
            <Items
              fade={fade}
              isActive={isActive}
              isHighlighted={isHighlighted}
              items={items.filter(
                x => x.tabletLocation === 'rightBottom',
              )}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}