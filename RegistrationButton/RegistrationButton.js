const RegistrationButton = ({ regLink }) => (
  <div
    style={{
      '--custom': 'var(--site-menu-button)',
      '--custom-text': 'white',
    }}
  >
    <a
      href={`http://registration.eventapp.live/${regLink}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <button
        btn="custom large raised"
        className="margin:7 margin-t:40"
      >
        Register
      </button>
    </a>
  </div>
)