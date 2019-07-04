const Banner = ({ image, title, regLink }) => (
  <div
    className="display:flex flex:items-center flex:column flex:content-center"
    style={{
      width: '100%',
      height: '370px',
      position: 'relative',
      overflow: 'hidden',
      background: `url(${image}) no-repeat center center fixed`,
      backgroundSize: 'cover',
    }}
  >
    <div
      className="position:absolute-0"
      style={{
        backgroundColor: 'var(--site-banner)',
      }}
    />
    <div
      className="text-color:white font:roboto text:bold text:center z:5"
    >
      {title}
    </div>
    <div
      style={{
        minHeight: '87px',
        zIndex: '5',
      }}
    >
      {regLink && <Button regLink={regLink} />}
    </div>
  </div>
)
