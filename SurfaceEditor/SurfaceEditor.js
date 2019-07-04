class SurfaceEditor extends Component {
  state = {
    height: this.props.value.height,
    width: this.props.value.width,
    x: this.props.value.x,
    y: this.props.value.y,
    z: this.props.value.z,
    isDragging: false,
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.value.width !== this.props.value.width ||
      nextProps.value.height !== this.props.value.height ||
      nextProps.value.x !== this.props.value.x ||
      nextProps.value.y !== this.props.value.y ||
      nextProps.value.z !== this.props.value.z
    ) {
      this.setState({
        width: nextProps.value.width,
        height: nextProps.value.height,
        x: nextProps.value.x,
        y: nextProps.value.y,
        z: nextProps.value.z,
      })
    }
  }

  handlers = {
    decreaseSize: event => {
      this.changeBoxSize(event, 'decSize')
      event.preventDefault()
    },
    increaseSize: event => {
      this.changeBoxSize(event, 'incSize')
      event.preventDefault()
    },
    increaseWidth: event => {
      this.changeBoxSize(event, 'incWidth')
      event.preventDefault()
    },
    decreaseWidth: event => {
      this.changeBoxSize(event, 'decWidth')
      event.preventDefault()
    },
    increaseHeight: event => {
      this.changeBoxSize(event, 'incHeight')
      event.preventDefault()
    },
    decreaseHeight: event => {
      this.changeBoxSize(event, 'decHeight')
      event.preventDefault()
    },
    moveUp: event => {
      this.moveBox(event, 'up')
      event.preventDefault()
    },
    moveDown: event => {
      this.moveBox(event, 'down')
      event.preventDefault()
    },
    moveLeft: event => {
      this.moveBox(event, 'left')
      event.preventDefault()
    },
    moveRight: event => {
      this.moveBox(event, 'right')
      event.preventDefault()
    },
    levelUp: event => {
      this.changeBoxLevel('up')
      event.preventDefault()
    },
    levelDown: event => {
      this.changeBoxLevel('down')
      event.preventDefault()
    },
    duplicateObject: () => {
      this.props.onDuplicate()
    },
    removeObject: () => {
      this.props.onRemove()
    },
  }
  moveBox = (event, direction) => {
    if (!this.props.draggingDisabled) {
      let inc = 1

      if (event.shiftKey) {
        inc = 10
      }

      switch (direction) {
        case 'up':
          this.props.onChange({
            width: this.state.width,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y - inc,
            z: this.state.z,
          })
          break

        case 'down':
          this.props.onChange({
            width: this.state.width,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y + inc,
            z: this.state.z,
          })
          break

        case 'left':
          this.props.onChange({
            width: this.state.width,
            height: this.state.height,
            x: this.state.x - inc,
            y: this.state.y,
            z: this.state.z,
          })
          break

        case 'right':
          this.props.onChange({
            width: this.state.width,
            height: this.state.height,
            x: this.state.x + inc,
            y: this.state.y,
            z: this.state.z,
          })
          break

        default:
          this.props.onChange({
            width: this.state.width,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
      }
    }
  }
  changeBoxSize = (event, action) => {
    if (!this.props.resizingDisabled) {
      let inc = 1

      if (event.shiftKey) {
        inc = 10
      }

      switch (action) {
        case 'incSize':
          this.props.onChange({
            width: this.state.width + inc,
            height: this.state.height + inc,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
          break

        case 'decSize':
          this.props.onChange({
            width: this.state.width - inc,
            height: this.state.height - inc,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
          break

        case 'incWidth':
          this.props.onChange({
            width: this.state.width + inc,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
          break

        case 'decWidth':
          this.props.onChange({
            width: this.state.width - inc,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
          break

        case 'incHeight':
          this.props.onChange({
            width: this.state.width,
            height: this.state.height + inc,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
          break

        case 'decHeight':
          this.props.onChange({
            width: this.state.width,
            height: this.state.height - inc,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
          break

        default:
          this.props.onChange({
            width: this.state.width,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
          })
      }
    }
  }
  changeBoxLevel = direction => {
    let inc = 0

    if (direction === 'up') {
      inc = 1
    } else if (direction === 'down') {
      inc = -1
    }

    this.props.onChange({
      width: this.state.width,
      height: this.state.height,
      x: this.state.x,
      y: this.state.y,
      z: this.state.z + inc,
    })
  }
  handleResize = (event, { size: { width, height } }) => {
    this.setState({
      width,
      height,
    })
  }
  handleStart = () => {
    this.setState({
      isDragging: true,
    })
  }
  handleDrag = (event, { x, y }) => {
    this.setState({
      x,
      y,
    })
    this.setState({
      isDragging: true,
    })
  }
  handleChange = () => {
    this.props.onChange({
      width: this.state.width,
      height: this.state.height,
      x: this.state.x,
      y: this.state.y,
      z: this.state.z,
    })
    this.setState({
      isDragging: false,
    })
  }

  render() {
    const {
      children,
      draggingDisabled,
      enableHandle,
      hideLabel,
      index,
      resizingDisabled,
      rotatedBy,
      value: { x, y, z },
    } = this.props
    const { height, width, isDragging } = this.state
    return (
      <Dragger
        bounds="parent"
        cancel=".react-resizable-handle"
        disabled={draggingDisabled}
        grid={[1, 1]}
        handle={enableHandle ? '.handle' : ''}
        onDrag={this.handleDrag}
        onStart={this.handleStart}
        onStop={this.handleChange}
        position={{
          x,
          y,
        }}
      >
        <div
          className="position:absolute"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            zIndex: z,
            willChange: 'width, height, transform',
          }}
        >
          {do {
            if (resizingDisabled) {
              ;<Item
                children={children}
                enableHandle={enableHandle}
                handlers={this.handlers}
                height={height}
                hideLabel={hideLabel}
                index={index}
                isDragging={isDragging}
                rotatedBy={rotatedBy}
                width={width}
              />
            } else {
              ;<Resizable
                DraggerOpts={{
                  grid: [1, 1],
                }}
                height={height}
                minConstraints={[30, 30]}
                onResize={this.handleResize}
                onResizeStop={this.handleChange}
                width={width}
              >
                <Item
                  children={children}
                  enableHandle={enableHandle}
                  handlers={this.handlers}
                  height={height}
                  hideLabel={hideLabel}
                  index={index}
                  isDragging={isDragging}
                  rotatedBy={rotatedBy}
                  width={width}
                />
              </Resizable>
            }
          }}
        </div>
      </Dragger>
    )
  }
}