class BadgeEditor extends Component {
  state = {
    deleteEnabled: false,
    activeCell: -1,
  }
  handleDeleteEnabledToggle = value => {
    this.setState({
      deleteEnabled: value,
    })
  }
  handleActiveCellSet = value => {
    this.setState({
      activeCell: value,
    })
  }

  render() {
    const {
      cells,
      orientation,
      defaultFont,
      userData,
      rows,
    } = this.props
    return (
      <div>
        <Form
          activeCell={this.state.activeCell}
          cells={cells}
          defaultFont={defaultFont}
          deleteEnabled={this.state.deleteEnabled}
          onActiveCellSet={this.handleActiveCellSet}
          onDeleteEnabledToggle={
            this.handleDeleteEnabledToggle
          }
          orientation={orientation}
          rows={rows}
          userData={userData}
        />
      </div>
    )
  }
}

