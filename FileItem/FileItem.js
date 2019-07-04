const FileItem = ({ title, extension, url, onOpen }) => (
  <div className="display:flex flex:items-center">
    <div
      className="size:14 text:uppercase padding:5 margin-r:10"
      style={{
        border: '1px solid var(--darker)',
      }}
    >
      <div>{title}</div>
    </div>
    <div
      className="h:34 w:100p display:flex flex:items-center"
      style={{
        borderBottom: '1px solid var(--lighter)',
      }}
    >
      {extension}
    </div>
    <button
      className="margin-l:7"
      onClick={() => onOpen(url)}
    >
      Open
    </button>
  </div>
)