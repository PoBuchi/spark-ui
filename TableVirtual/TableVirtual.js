class TableVirtual extends PureComponent {
  getDatum = (list, index) => {
    return list.get(index % list.size)
  }
  handleSearchUpdate = term => {
    this.props.setState({
      searchTerm: term,
    })
  }
  handleRowClick = (index, _id) => {
    if (this.props.onClick) {
      this.props.onClick(_id)
    }
  }
  headerRenderer = ({
    columnData,
    dataKey,
    disableSort,
    label,
    sortBy,
    sortDirection,
  }) => {
    return (
      <div className="display:flex">
        <div className="size:14 text:capitalize">
          {dataKey}
        </div>
        {sortBy === dataKey && (
          <SortIndicator sortDirection={sortDirection} />
        )}
      </div>
    )
  }
  sort = ({ sortBy, sortDirection }) => {
    this.props.setState({
      sortBy,
      sortDirection,
    })
  }
  noRowsRenderer = () => {
    return (
      <div className="position:absolute-0 display:flex flex:items-center flex:content-center ">
        No rows
      </div>
    )
  }

  render() {
    const {
      className: classNameProp,
      columns,
      idField,
      list,
      searchKeys,
    } = this.props
    const { searchTerm } = this.state
    const className = classNames(
      'select:text position:absolute-0 font:roboto-condensed color:white',
      classNameProp,
    )
    const { sortBy, sortDirection } = this.state
    const sortedList = list
      .sortBy(item => item[sortBy])
      .update(
        list =>
          sortDirection === SortDirection.DESC
            ? list.reverse()
            : list,
      )
    let filteredlist = []

    if (searchTerm) {
      filteredlist = sortedList.filter(
        createFilter(this.state.searchTerm, searchKeys),
      )
    } else {
      filteredlist = sortedList
    }

    const rowGetter = ({ index }) =>
      this.getDatum(filteredlist, index)

    return (
      <div className={className}>
        <div className="h:44 color:white display:flex flex:content-center flex:items-center">
          <SearchInput
            className="size:16 margin-x:10 padding:5 outline:none border:bottom border-color:neutral"
            onChange={this.handleSearchUpdate}
            placeholder="Search..."
            throttle={300}
          />
          {searchTerm ? (
            <div className="size:16 text-color:dark margin-r:7">
              Results: {filteredlist.size}
            </div>
          ) : null}
          <div className="size:16 text-color:dark margin-r:7">
            Total: {list.size}
          </div>
        </div>
        <div
          className="position:absolute font:roboto-condensed left:0 right:0 bottom:0 margin-x:10 margin-b:10"
          style={{
            top: '45px',
          }}
        >
          <AutoSizer>
            {({ width, height }) => (
              <Table
                disableHeader={false}
                headerClassName="h:34 display:flex flex:items-center flex:content-center text-color:dark"
                headerHeight={34}
                height={height}
                noRowsRenderer={this.noRowsRenderer}
                onRowClick={index =>
                  this.handleRowClick(
                    index,
                    filteredlist.get(
                      index.index % list.size,
                    )[idField],
                  )
                }
                overscanRowCount={10}
                ref="Table"
                rowClassName="color:white select:text"
                rowCount={filteredlist.size}
                rowGetter={rowGetter}
                rowHeight={40}
                sort={this.sort}
                sortBy={sortBy}
                sortDirection={sortDirection}
                width={width}
              >
                {columns.map((item, index) => (
                  <Column
                    dataKey={item.dataKey}
                    headerRenderer={this.headerRenderer}
                    key={index}
                    label={item.label}
                    width={item.width}
                  />
                ))}
              </Table>
            )}
          </AutoSizer>
        </div>
      </div>
    )
  }
}