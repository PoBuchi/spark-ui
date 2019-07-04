const EventBadgeMulti = ({ users, badgeData }) => (
  <div>
    {users.map(item => {
      return (
        <Badge
          badgeData={badgeData}
          key={item.badgeId}
          userData={item}
        />
      )
    })}
  </div>
)