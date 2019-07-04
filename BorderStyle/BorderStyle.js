const BorderStyle = () => (
  <Button
    btn="highlight small clear"
    iconLeft={
      <Icon
        className="size:18 margin-r:5 vertical-align:sub text-color:highlight"
        icon="ui:border_style"
      />
    }
    label="Border"
  >
    <div style={styles.block}>
      {directions.map(direction => (
        <ExpansionPanel key={direction}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>{styles.direction}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="display:flex flex:column">
              <Field
                component={SelectFieldAdapter}
                label="Style"
                name={`border${styles.direction}Style`}
                options={borderStyleOptions}
                styledProperty="borderBottomStyle"
                type="value-styled"
              />
              <Field
                component={TextFieldAdapter}
                label="Width"
                name={`border${styles.direction}Width`}
              />
              <Field
                component={ColorFieldAdapter}
                label="Color"
                name={`border${styles.direction}Color`}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  </Button>
)