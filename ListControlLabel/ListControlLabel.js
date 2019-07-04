const ListControlLabel = ({
  buttonText,
  labelText,
  onButtonClick,
  popover,
  children,
}) => (
  <div
    className="
      display:flex
      flex:items-end
      padding-b:5
      border:bottom
      border-color:lighter"
  >
    <Label
      style={{
        width: '100%',
      }}
      text={labelText}
    />
    {do {
      if (popover) {
        ;<Button
          btn="action small raised"
          label={buttonText}
        >
          {children}
        </Button>
      } else {
        ;<Button
          btn="action small raised"
          onClick={onButtonClick}
          type="button"
        >
          {buttonText}
        </Button>
      }
    }}
  </div>
)