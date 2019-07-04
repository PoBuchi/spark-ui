const TutorialSlide = props => {
  const { title, description, icon } = props
  return (
    <div
      className="
         display:flex
         h:100p
         w:100p
         flex:items-center
         flex:column"
    >
      <div
        className="
           flex:1
           h100:p
           display:flex
           flex:content-center"
      >
        <div
          className="
             flex:column
             flex:items-center
             flex:content-center"
        >
          {icon ? (
            <Icon
              className="text-color:main-menu-items"
              icon={icon}
              size="60px"
            />
          ) : null}
          <div
            className="
               font:roboto
               size:20
               text-color:dark
               text:uppercase
               padding-y:7"
          >
            {title}
          </div>
        </div>
        <div
          className="
             font:roboto-condensed
             size:15
             text:center
             text-color:darker
             padding-y:7
             padding-x:10"
        >
          {description}
        </div>
      </div>
    </div>
  )
}