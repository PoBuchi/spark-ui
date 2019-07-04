const Layout = ({
  masterSwitchContent,
  children,
  expandedMenus,
  groupItems,
  masterDialogContent,
  masterDialogOpen,
  moduleItems,
  onGroupClick,
  onLogout,
  onMasterClose,
  onModuleClick,
  onModuleContainerClick,
  onSwitchClose,
  selectedGroup,
  selectedModule,
  switchBarContent,
  switchDialogContent,
  switchDialogOpen,
}) => (
  <div className="position:absolute-0 select:none color:menu-bg">
    <div
      className="position:absolute top:0 left:0 bottom:0"
      style={{
        width: '320px',
      }}
    >
      <div
        className="position:absolute top:0 left:0 z:3"
        style={{
          width: '320px',
        }}
      >
        {switchBarContent()}
        <Dialog
          fullScreen={true}
          onClose={onSwitchClose}
          open={switchDialogOpen}
        >
          {switchDialogContent({
            escapeEnabled: true,
          })}
        </Dialog>
      </div>
      <div
        className="position:absolute left:0"
        style={{
          width: '80px',
          top: '90px',
          bottom: masterSwitchContent ? '90px' : '0',
        }}
      >
        <GroupMenu
          items={groupItems}
          onItemClick={onGroupClick}
          selectedId={selectedGroup}
        />
      </div>
      {masterSwitchContent && (
        <div
          className="position:absolute bottom:0 left:0 display:flex flex:content-center flex:items-center z:2" // onClick={onMasterOpen}
          style={{
            width: '80px',
            height: '90px',
            backgroundColor: 'hsla(0, 0%, 0%, 0.1)',
          }}
        >
          {masterSwitchContent()}
        </div>
      )}
      <Dialog
        fullScreen={true}
        onClose={onMasterClose}
        open={masterDialogOpen}
      >
        {masterDialogContent &&
          masterDialogContent({
            escapeEnabled: true,
          })}
      </Dialog>
      <div
        className="position:absolute bottom:0 z:2"
        style={{
          width: '240px',
          left: '80px',
          top: '90px',
          boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.50)',
        }}
      >
        {moduleItems.length !== 0 && (
          <div className="position:absolute-0">
            <div
              className="position:absolute left:0 right:0 bottom:0"
              style={{
                backgroundColor: 'hsla(0, 0%, 0%, 0.1)',
                top: '0px',
              }}
            >
              <ModuleMenu
                expandedIds={expandedMenus}
                items={moduleItems}
                onContainerClick={onModuleContainerClick}
                onItemClick={onModuleClick}
                selectedId={selectedModule}
              />
            </div>
          </div>
        )}
      </div>
    </div>
    <div
      className="position:absolute top:0 right:0 bottom:0 z:3"
      style={{
        left: '320px',
      }}
    >
      <div
        className="position:absolute top:0 left:0 right:0 color:menu-bg display:flex flex:content-end"
        style={{
          height: '11px',
        }}
      />
      <div
        className="position:absolute left:0 right:0 bottom:0 color:bg"
        style={{
          top: '11px',
        }}
      >
        <div
          className="position:absolute top:0 left:0 bottom:0 color:bg"
          style={{
            right: '50px',
          }}
        >
          {children}
        </div>
        <div
          className="position:absolute top:0 right:0 bottom:0 color:menu-bg"
          style={{
            width: '50px',
          }}
        >
        </div>
      </div>
    </div>
  </div>
)