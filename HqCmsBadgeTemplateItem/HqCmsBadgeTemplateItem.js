const HqCmsBadgeTemplateItem = ({
  itemData,
  onClick,
  onDuplicateClick,
  onPreviewClick,
  style,
}) => {
  const {
    title,
    status,
    _id,
    orientation,
    version,
  } = itemData
  return (
    <ListItem
      _id={_id}
      hidePicture={true}
      onClick={onClick}
      onPreviewClick={onPreviewClick}
      orientation={orientation}
      status={status}
      style={style}
      title={title}
      version={version}
      widget={HqCmsBadgeTemplateItemStatus}
    />
  )
}