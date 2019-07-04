const ProfileGrid = ({ items }) => (
  <div
    className="display:flex flex:wrap flex:content-center margin-y:20 margin:0-auto"
    style={{
      maxWidth: '550px',
    }}
  >
    {items.map(item => {
      return (
        <Item
          company={item.profile.company}
          firstName={item.profile.firstName}
          key={item._id}
          lastName={item.profile.lastName}
          picture={item.profile.picture}
          position={item.profile.position}
        />
      )
    })}
  </div>
)