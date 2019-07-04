const SectionHeader = ({ title, description }) => (
  <div
    className="
      padding-t:10
      margin-b:25
      text:center
      font:roboto
    "
  >
    <div
      className={`
        size:20
        text:light
        text-color:dark
        ${description ? 'margin-b:7' : ''}
      `}
    >
      {title}
    </div>
    <div className="size:14 text-color:darker">
      {description}
    </div>
  </div>
)