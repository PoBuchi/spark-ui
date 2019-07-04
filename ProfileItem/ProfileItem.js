const ProfileItem = () => (
  <div
    className="margin:20"
    style={{
      width: '130px',
    }}
  >
    <div>
      <img
        className="margin-b:10 border:circle"
        src={picture}
        style={{
          width: '130px',
        }}
      />
    </div>
    <div className="size:20 font:roboto text:bold text:center line-h:120p">
      {firstName}
    </div>
    <div className="size:20 font:roboto text:bold text:center line-h:120p margin-b:5">
      {lastName}
    </div>
    {do {
      if (position && company) {
        ;<div className="size:12 font:roboto text:center line-h:110p">
          {position} at {company}
        </div>
      } else {
        ;<>
          {company && <div>{company}</div>}
          {position && <div>{position}</div>}
        </>
      }
    }}
  </div>
)