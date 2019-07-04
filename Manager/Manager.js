function makeColummns(groupOptions) {
  return [
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Email',
          accessor: 'email',
          filterAll: true,
        },
        {
          Header: 'Full Name',
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
          Header: 'Company',
          accessor: 'company',
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
                    keys: ['company'],
                  },
                )
              })
            }

            return matchSorter(rows, filter.value, {
              keys: ['company'],
            })
          },
          filterAll: true,
        },
        {
          Header: 'Position',
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
      Header: 'Registration Status',
      accessor: 'regStatus',
      Cell: row => <span>{row.value}</span>,
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
          <option value="new">New</option>
          <option value="invited">Invited</option>
          <option value="opened">Form opened</option>
          <option value="submitted">Form submitted</option>
          <option value="confirmed">Confirmed</option>
          <option value="updated">Form updated</option>
        </select>
      ),
    },
    {
      Header: 'Ticket Status',
      accessor: 'status',
      Cell: row => (
        <span>
          <span
            style={{
              color: getStatusColor(row.value),
              transition: 'all .3s ease',
            }}
          >
            &#x25cf;
          </span>{' '}
          {row.value}
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
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="cancelled">User Cancelled</option>
          <option value="declined">Declined</option>
        </select>
      ),
    },
  ]
}

const generateQuestionFields = fomrSchema => {
  const getValue = (value, formItem) => {
    const question = fomrSchema.find(
      x => x._id === formItem._id,
    )

    if (question.type === 'radio') {
      const answer = question.options.find(
        x => x.value === value,
      )
      return answer ? answer.label : ''
    } else if (question.type === 'checkboxes') {
      if (value.length > 0) {
        const newArray = value.map(y => {
          const answer = question.options.find(
            x => x.value === y,
          )
          return answer ? answer.label : ''
        })
        return newArray.toString()
      }
    }

    return value
  }

  const columns = fomrSchema.map(formItem => {
    return {
      id: formItem._id,
      Header: formItem.title,
      Cell: row => (
        <span>
          {row.value ? getValue(row.value, formItem) : ''}
        </span>
      ),
      accessor: d =>
        d.registrationAnswers
          ? d.registrationAnswers[formItem._id]
          : '',
      filterMethod: (filter, rows) => {
        if (rows[0]._pivotID && rows[0]._pivotID.length) {
          return rows.filter(row => {
            return matchSorter(row._subRows, filter.value, {
              keys: [formItem._id],
            })
          })
        }

        return matchSorter(rows, filter.value, {
          keys: [formItem._id],
        })
      },
      filterAll: true,
    }
  })
  const answers = [
    {
      Header: 'Custom questions',
      columns,
    },
  ]
  return answers
}
/**
 * Manager Component
 */

class Manager extends Component {
  static propTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired, // static defaultProps = {
    //   className: '',
    // }
  }
  state = {
    columns: [
      ...makeColummns(),
      ...generateQuestionFields(this.props.formSchema),
    ],
    selection: [],
    statusUpdateValue: 'approved',
    groupUpdateValue: 'attendees',
    emailType: 'reg-invite',
    action: 'status',
    selectAll: false,
  }
  handleGroupValueChange = value => {
    this.setState({
      groupUpdateValue: value,
    })
  }
  handleEmailValueChange = value => {
    this.setState({
      emailType: value,
    })
  }
  handleStatusValueChange = value => {
    this.setState({
      statusUpdateValue: value,
    })
  }
  handleActionChange = value => {
    this.setState({
      action: value,
    })
  }
  setSelection = value => {
    this.setState({
      selection: value,
    })
  }
  setSelectAll = value => {
    this.setState({
      selectAll: value,
    })
  } // handleChange = value => {
  //   this.setState({ isActive: value })
  // }

  isSelected = key => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key)
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

    this.setSelection(selection)
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

    this.setSelectAll(selectAll)
    this.setSelection(selection)
  }

  render() {
    const { isSelected, toggleAll, toggleSelection } = this
    const {
      action,
      statusUpdateValue,
      groupUpdateValue,
      emailType,
      selectAll,
    } = this.state
    const selection = this.state.selection
    const {
      list,
      groupOptions,
      onMultiUpdate,
      onClose,
    } = this.props
    const items = list.toArray() // const items = list

    const checkboxProps = {
      isSelected,
      selectAll,
      selectType: 'checkbox',
      toggleAll,
      toggleSelection,
    }

    const getActionValue = () => {
      if (action === 'status') {
        return statusUpdateValue
      } else if (action === 'group') {
        return groupUpdateValue
      } else if (action === 'email') {
        return emailType
      }

      return undefined
    }

    function multiUpdate() {
      if (
        selection.length > 0 &&
        action &&
        getActionValue()
      ) {
        onMultiUpdate({
          idArray: selection,
          action,
          value: getActionValue(),
        })
      } else {
        /* eslint-disable no-console */
        console.log(
          '❌',
          'Error creating multi update action',
        )
        /* eslint-enable no-console */
      }
    }

    return (
      <div className="font:roboto-condensed size:14">
        <HeaderBar
          icon={MODULE_ICON}
          title="Ticket manager"
        >
          <button
            btn="small"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </HeaderBar>
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
              options={MANAGER_ACTIONS}
              value={action}
            />
          </div>
          {do {
            if (action === 'status') {
              ;<>
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
                    onUpdate={this.handleStatusValueChange}
                    options={STATUS_OPTIONS}
                    renderType="colored"
                    value={this.state.statusUpdateValue}
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
                  {selection.length}
                </span>
              </>
            } else if (action === 'group') {
              ;<>
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
                    onUpdate={this.handleGroupValueChange}
                    options={groupOptions}
                    renderType="colored"
                    value={this.state.groupUpdateValue}
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
                  {selection.length}
                </span>
                <button
                  btn="action small raised"
                  className="margin-l:15"
                  disabled={selection.length === 0}
                  onClick={multiUpdate}
                >
                  Update selected
                </button>
              </>
            } else if (action === 'email') {
              ;<>
                <div className=" padding-l:15 padding-r:7">
                  Send:
                </div>
                <div
                  style={{
                    width: '200px',
                  }}
                >
                  <Select
                    clearable={false}
                    onUpdate={this.handleEmailValueChange}
                    options={EMAIL_OPTIONS}
                    renderType="colored"
                    value={this.state.emailType}
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
                  {selection.length}
                </span>
                <button
                  btn="action small raised"
                  className="margin-l:15"
                  disabled={selection.length === 0}
                  onClick={multiUpdate}
                >
                  Send emails
                </button>
              </>
            }
          }}
        </div>
        <Table
          {...checkboxProps}
          className="-striped -highlight"
          columns={this.state.columns}
          data={items}
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          defaultPageSize={10}
          resizable={true}
          showPaginationBottom={true} // showPaginationTop={true}
        />
      </div>
    )
  }
}