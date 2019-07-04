class UserBar extends Component {

  render() {
    const { title, image, onLogout } = this.props
    return (
      <div>
        <div
          className="h:100p display:flex flex:content-center flex:items-center cursor:pointer"
          onClick={this.handleTouchTap}
        >
          <Thumb
            color="var(--clear-light)"
            height={34}
            icon="linear:user"
            iconColor="white"
            image={image}
            width={34}
          />
        </div>
        <Popover
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'center',
          }}
          onClose={this.handleClose}
          open={this.state.open}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
        >
        </Popover>
      </div>
    )
  }
}