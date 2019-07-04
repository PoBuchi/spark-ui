const EventBadgePreview = ({ badgeData, userData }) => (
  <Page orientation={badgeData.orientation}>
    <Badge
      badgeData={badgeData}
      userData={userData}
    />
  </Page>
)