const FilterSubmitButton = ({ isDisabled, label }) => (
  <Button
    className="animation:1s animation:fadeIn"
    disabled={isDisabled}
    style={{
      width: '90px',
      left: 'calc(5% - 45px)',
    }}
    type="submit"
  >
    {label}
  </Button>
)