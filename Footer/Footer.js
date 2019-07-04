const Footer = ({ image }) => (
  <div
    className="display:flex flex:items-center padding-x:40"
    style={{
      height: '44px',
      backgroundColor: 'var(--site-footer)',
      '--site-menu': 'hsla(0, 0%, 60%, .8)',
    }}
  >
    <div className="flex:1">
      <Thumb image={image} width={120} />
    </div>
    <div className="flex:1 flex:content-end">
      <Menu
        activeEnabled={false}
        activeItem={store.activePage}
        menuItems={ITEMS}
      />
    </div>
  </div>
)