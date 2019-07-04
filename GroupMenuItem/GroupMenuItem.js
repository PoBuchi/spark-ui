const GroupMenuItem = ({
  icon,
  _id,
  title,
  onItemClick,
  selected,
}) => (
  <div
    className="display:flex flex:items-center flex:content-center  select:none cursor:pointer"
    onClick={() => onItemClick(_id)}
    style={{
      width: '80px',
      height: '80px',
      textShadow: selected
        ? '0px 1px 1px rgba(50, 50, 50, 0.35)'
        : '0px 1px 1px rgba(0, 0, 0, 0.50)',
      transition:
        'color 300ms var(--ant-ease-in-out), background-color 300ms var(--ant-ease-in-out)',
      // transitionDuration: selected ? '300ms' : '',
      backgroundColor: selected ? 'var(--menu-accent)' : '',
      color: selected ? 'white' : 'hsla(0, 0%, 77%, 0.7)',
      boxShadow: selected
        ? '0px 0px 3px 0px rgba(50, 50, 50, 0.75)'
        : '',
    }}
  >
    <div className="display:flex flex:column flex:items-center">
      <Icon icon={icon} size="25px" />
      <div className="size:14 text:antialiased margin-t:5">
        {title}
      </div>
    </div>
  </div>
)