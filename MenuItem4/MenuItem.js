const MenuItem = ({ _id, title, onClick, isActive }) => (
  <div
    className="font:roboto text:bold text:uppercase margin-l:20 size:13 cursor:pointer"
    onClick={() => onClick(_id)}
    style={{
      color: isActive
        ? 'var(--site-menu-active)'
        : 'var(--site-menu)',
    }}
  >
    {title}
  </div>
)