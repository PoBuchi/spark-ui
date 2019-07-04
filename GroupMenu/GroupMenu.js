const GroupMenu = ({ items, selectedId, onItemClick }) => (
  <div
    className="position:absolute-0 color:menu-bg"
    style={{
      width: '80px',
    }}
  >
    <Scroller>
      {items.map(item => {
        return (
          <Item
            _id={item._id}
            icon={item.icon}
            key={item._id}
            onItemClick={onItemClick}
            title={item.title}
          />
        )
      })}
    </Scroller>
  </div>
)