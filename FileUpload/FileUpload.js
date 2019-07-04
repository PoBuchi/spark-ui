class FileUpload extends Component {
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

      const fileName = file.name.slice(
        0,
        file.name.lastIndexOf('.'),
      )

      if (fileSize > maxSize) {
        this.setState({
          error: `Error: maximum file size is:${
            maxSize
          } KB your file:${fileSize} KB`,
        })
      } else {
        // Get buffer
        const bufferReader = new FileReader()

        bufferReader.onload = () => {
          this.setState({
            uploading: true,
          })
          Handler.uploadFile({
              data: new Uint8Array(bufferReader.result),
              fileExtension,
              fileName,
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

      event.target.value = null
    }
  }

  render() {
    const { error, uploading } = this.state
    return (
      <div>
        <FileUploadControl
          id={inputId}
          inProgress={uploading}
          labelText={label}
          onFileSelect={this.handleSelectFile}
          type={type}
        />
        {error && (
          <div className="padding:7 color:critical text-color:white">
            {error}
          </div>
        )}
      </div>
    )
  }
}