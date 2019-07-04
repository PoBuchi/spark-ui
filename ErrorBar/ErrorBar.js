const ErrorBar = ({ error }) => (
  <div
    className="
      font:roboto-condensed
      display:flex
      color:critical
      h:44
      padding-x:7
    "
  >
    {/* class min-w:0 added to fix Flex child truncate issue */}
    <div className="display:flex flex:items-center min-w:0 margin-r:5">
      <Icon
        className="margin-l:7 margin-r:5"
        color="white"
        icon="ui:shield-notice"
        size="22px"
      />
      <div className="size:16 text-color:white text:truncate">
        Error when saving form!
      </div>
    </div>
    <Button
      btn="white raised small"
      className="text-color:critical"
      label="Details"
    >
      <div
        className="padding:20 font:roboto"
        style={{
          maxWidth: '250px',
        }}
      >
        {error}
      </div>
    </Button>
  </div>
)