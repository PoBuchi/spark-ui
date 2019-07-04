class ImageUpload extends Component {
  state = {
    error: '',
    uploading: false,
  }
  handleSelectFile = event => {
    if (
      event.target.files &&
      event.target.files.length > 0
    ) {
      this.setState({
        error: '',
      })
      const file = event.target.files[0]
      const fileSize = Math.round(file.size / 1000)
      /* eslint-disable no-bitwise */

      const fileExtension = file.name.substr(
        (~-file.name.lastIndexOf('.') >>> 0) + 2,
      )
      /* eslint-enable no-bitwise */

      if (fileSize > maxSize) {
        this.setState({
          error: `Error: maximum image size is:${
            maxSize
          } KB your file:${fileSize} KB`,
        })
      } else {
        // Get data uri
        const dataReader = new FileReader()

        dataReader.onload = () => {
          const img = new Image()

          img.onload = () => {
            if (
              (typeof height === 'undefined'
                ? false
                : height !== img.height) ||
              (typeof width === 'undefined'
                ? false
                : width !== img.width)
            ) {
              this.setState({
                error: `Error: required image dimensions are: ${
                  width
                }x${height}, your file: ${
                  img.width
                }x${img.height}`,
              })
            } else {
              // Get buffer
              const bufferReader = new FileReader()

              bufferReader.onload = () => {
                this.setState({
                  uploading: true,
                })
                this.props
                  .uploadImage({
                    data: new Uint8Array(
                      bufferReader.result,
                    ),
                    fileExtension,
                  })
                  .then(
                    result => {
                      onChange(result)
                      this.setState({
                        uploading: false,
                      })
                    },
                    error => {
                      this.setState({
                        error,
                        uploading: false,
                      })
                    },
                  )
              }

              bufferReader.readAsArrayBuffer(file)
            }
          }
        }

        dataReader.readAsDataURL(file)
      }

      event.target.value = null
    }
  }

  render() {
    const { error, uploading } = this.state
    const {
      height,
      inputId,
      label,
      onChange,
      onDelete,
      value,
      width,
    } = this.props
    return (
      <div>
        <FileUploadControl
          id={inputId}
          inProgress={uploading}
          labelText={label}
          onFileSelect={this.handleSelectFile}
          type="image"
        />
        {error && (
          <div className="padding:7 color:critical text-color:white">
            {error}
          </div>
        )}
        <div
          style={{
            padding: '1px',
            borderLeft: '1px solid var(--lighter)',
            borderRight: '1px solid var(--lighter)',
            borderBottom: '1px solid var(--lighter)',
            minHeight: '40px',
          }}
        >
          {value ? (
            <>
              <img
                src={value}
                style={{
                  maxHeight: '100px',
                  maxWidth: '100%',
                }}
              />
              <DeleteButton
                onClick={() => {
                  onDelete(value)
                  onChange('')
                }}
                style={{
                  position: 'absolute',
                  bottom: '7px',
                  right: '7px',
                }}
              />
            </>
          ) : (
            <div
              style={{
                minHeight: '45px',
              }}
            >
              {width &&
                height && (
                  <div className="maxSize:16 text-color:light text:center padding:15"></div>
                )}
            </div>
          )}
        </div>
      </div>
    )
  }
}