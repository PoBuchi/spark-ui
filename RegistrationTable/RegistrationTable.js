function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const getDietaryOption = () => {
  const caseNumber = getRandomInt(8)

  switch (caseNumber) {
    case 0:
      return 'Vegetarian'

    case 1:
      return 'Vegan'

    case 2:
      return 'Halal'

    case 3:
      return 'Kosher'

    case 4:
      return 'Gluten-free'

    case 5:
      return 'None'

    case 6:
      return 'Vegetarian'

    case 7:
      return 'None'

    case 8:
      return 'Halal'
  }
}

function makeData(len = 100) {
  return range(len).map(() => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    }
  })
}

function makeColummns() {
  return [
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Full Name',
          foldable: true,
          accessor: 'fullName',
          // filterMethod: (filter, rows) =>
          //   matchSorter(rows, filter.value, {
          //     keys: ['fullName'],
          //   }),
          filterMethod: (filter, rows) => {
            if (
              rows[0]._pivotID &&
              rows[0]._pivotID.length
            ) {
              return rows.filter(row => {
                return matchSorter(
                  row._subRows,
                  filter.value,
                  {
                    keys: ['fullName'],
                  },
                )
              })
            }

            return matchSorter(rows, filter.value, {
              keys: ['fullName'],
            })
          },
          filterAll: true,
        },
        {
          Header: 'Position',
          foldable: true,
          accessor: 'position',
          filterMethod: (filter, rows) => {
            if (
              rows[0]._pivotID &&
              rows[0]._pivotID.length
            ) {
              return rows.filter(row => {
                return matchSorter(
                  row._subRows,
                  filter.value,
                  {
                    keys: ['position'],
                  },
                )
              })
            }

            return matchSorter(rows, filter.value, {
              keys: ['position'],
            })
          },
          filterAll: true,
        },
      ],
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: row => (
        <span>
          <span
            style={{
              color:
                row.value === 'rejected'
                  ? '#ff2e00'
                  : row.value === 'pending'
                    ? '#ffbf00'
                    : '#57d500',
              transition: 'all .3s ease',
            }}
          >
            &#x25cf;
          </span>{' '}
          {row.value === 'rejected'
            ? 'Rejected'
            : row.value === 'pending'
              ? 'Pending'
              : 'Approved'}
        </span>
      ),
      filterMethod: (filter, row) => {
        if (row._subRows && row._subRows.length) {
          if (filter.value === 'all') {
            return true
          }

          return row._subRows.filter(
            item => item[filter.id] === filter.value,
          )
        }

        if (filter.value === 'all') {
          return true
        }

        return row[filter.id] === filter.value
      },
      Filter: ({ filter, onChange }) => (
        <select
          onChange={event => onChange(event.target.value)}
          style={{
            width: '100%',
          }}
          value={filter ? filter.value : 'all'}
        >
          <option value="all">Show All</option>
          <option value="complete">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="pending">Pending</option>
        </select>
      ),
    },
    {
      Header: 'Custom questions',
      columns: [
        {
          Header: 'Dietary options',
          accessor: 'dietaryOptions',
          filterMethod: (filter, row) => {
            if (filter.value === 'all') {
              return true
            }

            return row[filter.id] === filter.value
          },
          Filter: ({ filter, onChange }) => (
            <select
              onChange={event =>
                onChange(event.target.value)
              }
              style={{
                width: '100%',
              }}
              value={filter ? filter.value : 'all'}
            >
              <option value="all">Show All</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Halal">Halal</option>
              <option value="Kosher">Kosher</option>
              <option value="Gluten-free">
                Gluten-free
              </option>
              <option value="None">None</option>
            </select>
          ),
        },
      ],
    },
  ]
}
/**
 * RegistrationTable Component
 */

class RegistrationTable extends Component {
  static propTypes = {
    /**
     * The css class name of the root element.
     */
    // className: PropTypes.string,
  }
  static defaultProps = {
    // className: '',
  }
  state = {
    columns: makeColummns(),
    data: makeData(),
    pivotBy: [],
    selectAll: false,
    selection: [],
    action: 'status',
    statusUpdateTo: 'approved',
  }
  toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selection = [...this.state.selection]
    const keyIndex = selection.indexOf(key) // check to see if the key exists

    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1),
      ]
    } else {
      // it does not exist so add it
      selection.push(key)
    } // update the state

    this.setState({
      selection,
    })
  }
  toggleAll = () => {
    /*
      'toggleAll' is a tricky concept with any filterable table
      do you just select ALL the records that are in your data?
      OR
      do you only select ALL the records that are in the current filtered data?
       The latter makes more sense because 'selection' is a visual thing for the user.
      This is especially true if you are going to implement a set of external functions
      that act on the selected information (you would not want to DELETE the wrong thing!).
       So, to that end, access to the internals of ReactTable are required to get what is
      currently visible in the table (either on the current page or any other page).
       The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
      ReactTable and then get the internal state and the 'sortedData'.
      That can then be iterrated to get all the currently visible records and set
      the selection state.
    */
    const selectAll = !this.state.selectAll
    const selection = []

    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance() // the 'sortedData' property contains the currently accessible records based on the filter and sort

      const currentRecords = wrappedInstance.getResolvedState()
        .sortedData // we just push all the IDs onto the selection array

      currentRecords.forEach(item => {
        selection.push(item._original._id)
      })
    }

    this.setState({
      selectAll,
      selection,
    })
  }
  isSelected = key => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key)
  }
  setToApproved = () => {
    // console.log('🐳', this.state);
    const data = this.state.data.map(item => {
      if (this.state.selection.includes(item._id)) {
        item.status = 'complete'
      }

      return item
    })
    this.setState({
      data,
    })
  }
  setToRejected = () => {
    const data = this.state.data.map(item => {
      if (this.state.selection.includes(item._id)) {
        item.status = 'rejected'
      }

      return item
    })
    this.setState({
      data,
    })
  }
  setToPending = () => {
    const data = this.state.data.map(item => {
      if (this.state.selection.includes(item._id)) {
        item.status = 'pending'
      }

      return item
    })
    this.setState({
      data,
    })
  }
  setToPivotDietary = () => {
    const pivotBy = ['dietaryOptions']
    this.setState({
      pivotBy,
    })
  }
  setToPivotOff = () => {
    const pivotBy = []
    this.setState({
      pivotBy,
    })
  }
  handleActionChange = value => {
    this.setState({
      action: value,
    })
  }
  handleStatusUpdateTo = value => {
    console.log('🍣', value)
    this.setState({
      statusUpdateTo: value,
    })
  }
  handleStatusMultiUpdate = () => {
    const data = this.state.data.map(item => {
      if (this.state.selection.includes(item._id)) {
        item.status = this.state.statusUpdateTo
      }

      return item
    })
    this.setState({
      data,
    })
  }

  render() {
    const {
      isSelected,
      setToApproved,
      setToPending,
      setToPivotDietary,
      setToPivotOff,
      setToRejected,
      toggleAll,
      toggleSelection,
    } = this
    const { columns, data, pivotBy, selectAll } = this.state
    const checkboxProps = {
      isSelected,
      selectAll,
      selectType: 'checkbox',
      toggleAll,
      toggleSelection,
    }
    return (
      <div className="font:roboto-condensed size:14">
        <div
          className="display:flex flex:items-center padding-x:10"
          style={{
            height: '50px',
          }}
        >
          <div className="padding-r:7">Action:</div>
          <div
            style={{
              width: '120px',
            }}
          >
            <Select
              clearable={false}
              onUpdate={this.handleActionChange}
              options={ACTIONS}
              value={this.state.action}
            />
          </div>
          <div className=" padding-l:15 padding-r:7">
            Change to:
          </div>
          <div
            style={{
              width: '140px',
            }}
          >
            <Select
              clearable={false}
              onUpdate={this.handleStatusUpdateTo}
              options={STATUS_OPTIONS}
              renderType="colored"
              value={this.state.statusUpdateTo}
            />
          </div>
          <div
            className=" padding-l:15 "
            style={{
              marginRight: '3px',
            }}
          >
            Selected:
          </div>
          <span className="font:roboto text-color:dark text:bold size:20">
            {this.state.selection.length}
          </span>
          <button
            btn="action small raised"
            className="margin-l:15"
            disabled={this.state.selection.length === 0}
            onClick={this.handleStatusMultiUpdate}
          >
            Update selected
          </button>
        </div>
        <CheckboxTable
          {...checkboxProps}
          className="-striped -highlight"
          columns={columns}
          data={data}
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          defaultPageSize={10}
          filterable={true}
          pivotBy={pivotBy}
          ref={r => (this.checkboxTable = r)}
          resizable={true}
          showPaginationBottom={true}
          showPaginationTop={true}
        />
        <br />
      </div>
    )
  }
}