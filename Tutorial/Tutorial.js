class Tutorial extends Component {
  static propTypes = {
    deviceSize: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired,
    onDismiss: PropTypes.func.isRequired,
    slides: PropTypes.array.isRequired,
  }
  state = {
    activeSlide: 0,
    totalSlides: this.props.slides.length,
  }
  handleDismiss = () => {
    this.props.onDismiss()
  }
  handleNextSlide = () => {
    this.refs.reactSwipe.next()
  }
  handlePrevSlide = () => {
    this.refs.reactSwipe.prev()
  }

  render() {
    const { deviceSize, menuItems, slides } = this.props
    const { activeSlide } = this.state
    return (
      <div className="display:flex flex:column h:100p">
        <div className="display:flex flex:1 position:relative">
          <div className="position:absolute-0">
            <Device>
              <Layout
                deviceSize={deviceSize}
                fade={slides[activeSlide].fade}
                isActive={slides[activeSlide].isActive}
                isHighlighted={
                  slides[activeSlide].isHighlighted
                }
                items={menuItems}
                showMenu={slides[activeSlide].menu}
              >
                <div
                  className="
                     position:absolute
                     top:0
                     right:0
                     left:0
                     z:4
                     display:flex
                     flex:content-end"
                >
                  <Button
                    btn="dark small"
                    className="margin-t:7 margin-r:7"
                    onClick={this.handleDismiss}
                  >
                    Dismiss
                  </Button>
                </div>
                <div
                  className="
                     display:flex
                     flex:column
                     h:100p"
                >
                  <ReactSwipe
                    className="carousel"
                    ref="reactSwipe"
                    style={carouselStyle}
                    swipeOptions={{
                      startSlide: 0,
                      auto: 0,
                      speed: 300,
                      continuous: false,
                      callback: index => {
                        this.setState({
                          activeSlide: index,
                        })
                      },
                    }}
                  >
                    {slides.map((item, index) => {
                      return (
                        <div
                          className="
                            display:flex
                            flex:items-center
                            flex:content-center
                            color:white"
                          key={index}
                        >
                          <TutorialSlide
                            description={item.description}
                            fade={item.fade}
                            icon={item.icon}
                            title={item.title}
                          />
                        </div>
                      )
                    })}
                  </ReactSwipe>
                </div>
              </Layout>
            </Device>
          </div>
        </div>
        <div className="display:flex flex:50px h:50">
          {do {
            if (
              this.state.activeSlide + 1 ===
              this.state.totalSlides
            ) {
              ;<Button
                btn="dark block"
                className=""
                onClick={this.handleDismiss}
              >
                DONE
              </Button>
            } else {
              ;<Button
                btn="dark block"
                className=""
                onClick={this.handleNextSlide}
              >
                NEXT
              </Button>
            }
          }}
        </div>
      </div>
    )
  }
}