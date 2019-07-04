const Menu = ({ menuItems, activeItem, activeEnabled }) => (
  <div className="display:flex flex:content-end">
    {menuItems.map(item => {
      return (
        <MenuItem
          _id={item._id}
          isActive={
            activeEnabled ? activeItem === item._id : false
          }
          key={item._id}
          onClick={store.handlePageChange}
          title={item.title}
        />
      )
    })}
  </div>
)