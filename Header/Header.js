const Header = ({ image }) => (
  <div
    className="display:flex flex:items-center padding-x:40 color:white"
    style={{
      height: '76px',
      borderBottom: '4px solid var(--site-menu-border)',
    }}
  >
    <div className="flex:1">
      <Thumb image={image} width={200} />
    </div>
    <div className="flex:1 flex:content-end">
      <Menu
        activeItem={store.activePage}
        menuItems={ITEMS}
      />
    </div>
  </div>
)