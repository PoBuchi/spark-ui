const UserMenu = ({ onLogout }) => (
  <div
    className="padding:10 display:flex flex:content-center"
    style={{
      width: '100px',
    }}
  >
    <button btn="raised critical tiny" onClick={onLogout}>
      Log out
    </button>
  </div>
)