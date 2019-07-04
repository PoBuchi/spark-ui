const FormLayout = ({
  backgroundColor,
  children,
  contentWidth,
  headerColor,
  onLogout,
}) => (
  <Scroller
    style={{
      backgroundColor,
    }}
  >
    {onLogout && (
      <div
        className="position:absolute top:0 right:0 margin:10
      "
      >
        <button btn="raised" onClick={onLogout}>
          Logout
        </button>
      </div>
    )}
    <div
      className="padding-b:20 h:100p"
      style={{
        backgroundColor,
      }}
    >
      <div
        style={{
          height: '250px',
          backgroundColor: headerColor,
        }}
      />
      <div>
        <div
          className="padding-t:40 padding-b:20 padding-x:20 color:white margin-b:40"
          style={{
            width: contentWidth,
            marginRight: 'auto',
            marginLeft: 'auto',
            boxShadow:
              '0px 0px 32px -16px rgba(0,0,0,0.75)',
            marginTop: '-150px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  </Scroller>
)