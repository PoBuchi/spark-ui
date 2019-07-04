const HqCmsBadgeTemplateItemStatus = ({
  status,
  version,
}) => {
  return (
    <div className="display:flex flex:items-center">
      <div className="size:14 margin-x:5 text-color:neutral">
        v{version}
      </div>
      <Icon
        className={`margin:7 text-color:${
          STATUS_SCHEMA[status]
        }`}
        icon="hq:circle"
        size="25px"
      />
    </div>
  )
}