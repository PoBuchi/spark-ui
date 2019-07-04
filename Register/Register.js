const Register = ({ regLink }) => (
  <Page>
    <PageTitle>Registration</PageTitle>
    <PageDescription>
      Some information about the event. Syncs with your
      event app. Any changes made in your event app are
      pushed out automatically to your website.Some
      information about the event. Syncs with your event
      app. Any changes made in your event app are pushed out
      automatically to your website.
    </PageDescription>
    <div
      className="display:flex flex:content-center flex:items-center"
      style={{
        height: '100px',
      }}
    >
      {regLink && <RegistrationButton regLink={regLink} />}
    </div>
  </Page>
)