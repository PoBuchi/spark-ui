const renderItems = ({
  defaultFont,
  deleteEnabled,
  fields,
  fonts,
}) => (
  <div className="padding-t:10">
    <ControlLabel labelText="Items" popover={true}>
      <div
        className="display:flex flex:content-around flex-items:center flex:wrap padding:10"
        style={{
          width: '200px',
        }}
      >
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultTextItem)}
          type="button"
        >
          Text
        </Button>
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultBannerItem)}
          type="button"
        >
          Banner
        </Button>
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultCodeItem)}
          type="button"
        >
          Code
        </Button>
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultFullNameItem)}
          type="button"
        >
          Full Name
        </Button>
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultFirstNameItem)}
          type="button"
        >
          First Name
        </Button>
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultLastNameItem)}
          type="button"
        >
          Last Name
        </Button>
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultCompanyItem)}
          type="button"
        >
          Company
        </Button>
        <Button
          btn="btn"
          className="margin:17"
          onClick={() => fields.push(defaultPositionItem)}
          type="button"
        >
          Position
        </Button>
      </div>
    </ControlLabel>
    {fields.map((field, index) => (
      <div
        className="
          border-color:lighter
          color:lightest
          border:all
          padding:10
          margin-t:10
        "
        key={index}
      >
        <div className="display:flex flex:items-center">
          {do {
            if (fields.get(index).type === 'text') {
              ;<div className="w:100p">
                <div className="display:flex flex:items-center">
                  <ItemTitle text="Text" />
                  <Section
                    name={`${field}.customStyle`}
                  >
                    <TextStyle
                      currentFont={
                        fields.get(index).customStyle
                          .fontFamily
                          ? fields.get(index).customStyle
                              .fontFamily
                          : defaultFont
                      }
                      fontFamilyOptions={
                        fonts
                          ? fonts.map(item => {
                              return {
                                label: item.family,
                                value: item.family,
                              }
                            })
                          : []
                      }
                      fontWeightOptions={fontWeightOptions}
                    />
                  </Section>
                  {deleteEnabled && (
                    <DeleteButton
                      className="margin-l:auto"
                      onClick={() => fields.remove(index)}
                    />
                  )}
                </div>
                <div className="w:100p margin-r:10">
                  <Field
                    component={TextFieldAdapter}
                    label="Text"
                    name={`${field}.value`}
                    type="text"
                  />
                </div>
              </div>
            } else if (
              fields.get(index).type === 'banner'
            ) {
              ;<div className="w:100p">
                <div className="display:flex flex:items-center">
                  <ItemTitle text="Banner" />
                  <Section
                    name={`${field}.customStyle`}
                  >
                    <BoxSize />
                  </Section>
                  {deleteEnabled && (
                    <DeleteButton
                      className="margin-l:auto"
                      onClick={() => fields.remove(index)}
                    />
                  )}
                </div>
                <div className="w:100p">
                  <Field
                    component={TextFieldAdapter}
                    label="Image URL"
                    name={`${field}.value`}
                    type="text"
                  />
                </div>
              </div>
            } else if (
              fields.get(index).type === 'fullName' ||
              fields.get(index).type === 'firstName' ||
              fields.get(index).type === 'lastName' ||
              fields.get(index).type === 'company' ||
              fields.get(index).type === 'position'
            ) {
              ;<div className="w:100p">
                <div className="display:flex flex:items-center">
                  <ItemTitle
                    text={fields.get(index).type}
                  />
                  <Section
                    name={`${field}.customStyle`}
                  >
                    <TextStyle
                      currentFont={
                        fields.get(index).customStyle
                          .fontFamily
                          ? fields.get(index).customStyle
                              .fontFamily
                          : defaultFont
                      }
                      fontFamilyOptions={
                        fonts
                          ? fonts.map(item => {
                              return {
                                label: item.family,
                                value: item.family,
                              }
                            })
                          : []
                      }
                      fontWeightOptions={fontWeightOptions}
                    />
                  </Section>
                  {deleteEnabled && (
                    <DeleteButton
                      className="margin-l:auto"
                      onClick={() => fields.remove(index)}
                    />
                  )}
                </div>
              </div>
            } else if (fields.get(index).type === 'code') {
              ;<div className="w:100p display:flex flex:items-center">
                <ItemTitle text="Code" />
                {deleteEnabled && (
                  <DeleteButton
                    className="margin-l:auto"
                    onClick={() => fields.remove(index)}
                  />
                )}
              </div>
            }
          }}
        </div>
      </div>
    ))}
  </div>
)

const renderBoxes = ({
  defaultFont,
  deleteEnabled,
  fields,
  fonts,
}) => (
  <div>
    <ControlLabel
      labelText="Boxes"
      onButtonClick={() => fields.push(defaultBox)}
    />
    {fields.map((field, index) => (
      <div
        className="
          border-color:lighter
          border:all
          border:dashed
          padding:10
          margin-t:10
        "
        key={index}
      >
        <div className="display:flex flex:items-center">
          <ItemTitle text={`Box ${index + 1}`} />
          <Section name={`${field}.customStyle`}>
            <BoxSpacing />
          </Section>
          {deleteEnabled && (
            <DeleteButton
              className="margin-l:auto"
              onClick={() => fields.remove(index)}
            />
          )}
        </div>
        <FieldArray
          component={renderItems}
          defaultFont={defaultFont}
          deleteEnabled={deleteEnabled}
          fonts={fonts}
          name={`${field}.items`}
        />
      </div>
    ))}
  </div>
)

const renderCells = ({
  activeCell,
  onCellAddClick,
  fields,
  cells,
  rows,
  orientation,
  defaultFont,
  fonts,
  deleteEnabled,
}) => (
  <div className="margin-t:25">
    <ControlLabel
      labelText="Cells"
      onButtonClick={() => {
        fields.push(defaultCell)

        onCellAddClick(fields.length)
      }}
    />
    <div>
      {do {
        if (fields.length === 0) {
          ;<Header description="Add some cells first." />
        } else {
          ;<div className="display:flex flex:content-center flex:items-center padding-t:20">
            <MiniMap
              activeCell={activeCell}
              cells={cells}
              onCellClick={onCellAddClick}
              orientation={orientation}
              rows={rows}
            />
          </div>
        }
      }}
    </div>
    {cells.length !== 0 && (
      <div
        className="
          display:flex
          flex:content-center
          h:34
          "
      >
        <div
          className="
            border-color:lighter
            border:right
          "
        />
      </div>
    )}
    {fields.map((field, index) => (
      <div>
        {index === activeCell && (
          <div
            className="
              border-color:lighter
              border:all
              padding-y:10
              padding-x:15
            "
          >
            <div className="display:flex h:44 flex:items-center">
              <ItemTitle text={`Cell ${index + 1}`} />
              <Section name={`${field}.customStyle`}>
                <BorderStyle />
              </Section>
              {deleteEnabled && (
                <DeleteButton
                  className="margin-l:auto"
                  onClick={() => fields.remove(index)}
                />
              )}
            </div>
            <div className="display:flex">
              <div className="flex:1 margin-r:7">
                <Field
                  component={TextFieldAdapter}
                  label="In row"
                  name={`${field}.row`}
                  normalize={convertToNumber}
                  type="number"
                />
              </div>
              <div className="flex:1 margin-l:7">
                <Field
                  component={TextFieldAdapter}
                  label="Sort Order"
                  name={`${field}.sortOrder`}
                  normalize={convertToNumber}
                  type="number"
                />
              </div>
            </div>
            <FieldArray
              component={renderBoxes}
              defaultFont={defaultFont}
              deleteEnabled={deleteEnabled}
              fonts={fonts}
              name={`${field}.boxes`}
            />
          </div>
        )}
      </div>
    ))}
  </div>
)

const renderRows = ({ fields, deleteEnabled }) => (
  <div>
    <ControlLabel
      labelText="Rows"
      onButtonClick={() => fields.push(defaultRow)}
    />
    {fields.map((field, index) => (
      <Items
        deleteEnabled={deleteEnabled}
        key={index}
        onButtonClick={() => fields.remove(index)}
      >
        <div
          className="
            border-color:lighter
            border:bottom
            margin-t:7
            margin-x:5
            display:flex
            h:44
            flex:items-center
          "
        >
          <ItemTitle text={`Row ${index + 1}`} />
          <Section name={`${field}.customStyle`}>
            <BoxSize
              maxValuesDisabled={true}
              widthDisabled={true}
            />
          </Section>
          <Section name={`${field}.customStyle`}>
            <BorderStyle />
          </Section>
        </div>
      </Items>
    ))}
  </div>
)

const renderFonts = ({ fields, deleteEnabled }) => (
  <div>
    <ControlLabel
      labelText="Added Fonts"
      onButtonClick={() => fields.push(defaultRow)}
    />
    {fields.map((field, index) => (
      <Items
        deleteEnabled={deleteEnabled}
        key={index}
        onButtonClick={() => fields.remove(index)}
      >
        <div
          className="display:flex padding-x:20
          "
        >
          <Field
            className="margin-r:7"
            component={TextFieldAdapter}
            label="Family"
            name={`${field}.family`}
            type="text"
          />
          <Field
            component={TextFieldAdapter}
            label="Import code"
            name={`${field}.importCode`}
            type="text"
          />
        </div>
      </Items>
    ))}
  </div>
)
/**
 * BadgeEditorForm Component
 */

const BadgeEditorForm = ({
  activeCell,
  cells,
  deleteEnabled,
  defaultFont,
  fonts,
  onActiveCellSet,
  onDeleteEnabledToggle,
  orientation,
  rows,
  userData,
}) => (
  <div className="">
    <div
      className="
        font:roboto-condensed
        color:backdrop-alt
        display:flex
        flex:content-between
        flex:items-center
        h:44
        left:0
        padding-x:10
        position:absolute
        right:0
        top:0
        z:1"
    >
      <div
        className="display:flex flex:items-center flex:content-end"
        style={{
          flex: '0 0 400px',
        }}
      >
        <Toggle
          className="padding-r:10"
          color="var(--critical)"
          label="Enable delete?"
          labelStyle={{
            color: 'var(--lighter)',
          }}
          onChange={onDeleteEnabledToggle}
          value={deleteEnabled}
        />
      </div>
    </div>
    <div
      className="
        bottom:0
        display:flex
        left:0
        padding-b:10
        padding-x:10
        position:absolute
        right:0"
      style={{
        top: '44px',
      }}
    >
      <div
        className="position:relative font:roboto-condensed"
        style={{
          flex: '0 0 400px',
        }}
      >
        <Scroller className="padding-l:10 padding-r:20 padding-t:10">
          <Field
            clearable={false}
            component={Select}
            label="Orientation"
            name="orientation"
            options={orientationOptions}
          />
          <div>
            <FieldArray
              component={renderFonts}
              deleteEnabled={deleteEnabled}
              name="fonts"
            />
          </div>
          <Field
            component={Select}
            label="Default Font"
            name="defaultFont"
            options={
              fonts
                ? fonts.map(item => {
                    return {
                      label: item.family,
                      value: item.family,
                    }
                  })
                : []
            }
            styledProperty="fontFamily"
            type="value-styled"
          />
          <div>
            <FieldArray
              component={renderRows}
              deleteEnabled={deleteEnabled}
              name="rows"
            />
          </div>
          {do {
            if (rows.length === 0) {
              ;<Header description="Add some rows first." />
            } else {
              ;<FieldArray
                activeCell={activeCell}
                cells={cells}
                component={renderCells}
                defaultFont={defaultFont}
                deleteEnabled={deleteEnabled}
                fonts={fonts}
                name="cells"
                onCellAddClick={onActiveCellSet}
                orientation={orientation}
                rows={rows}
              />
            }
          }}
        </Scroller>
      </div>
      <div
        className="
          border-color:lighter
          border:2
          border:all
          flex:1
          overflow:scroll
          margin-t:10
        "
      >
        <Page orientation={orientation}>
          <Badge
            bodyFont={defaultFont}
            cells={cells}
            fonts={fonts}
            rows={rows}
            userData={userData}
          />
        </Page>
      </div>
    </div>
  </div>
)
