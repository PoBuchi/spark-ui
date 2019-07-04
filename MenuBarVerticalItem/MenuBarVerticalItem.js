const MenuBarVerticalItem = ({ tabletStyle, ...other }) => {
  if (tabletStyle === 'label') {
    return <Item {...other} />
  } else if (tabletStyle === 'icon') {
    return <MenuItemIcon {...other} />
  } else if (tabletStyle === 'iconLabel') {
    return <MenuItemIconLabel {...other} />
  }

  return null
}