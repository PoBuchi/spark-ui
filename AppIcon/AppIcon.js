const AppIcon = ({
  color,
  icon,
  iconColor,
  image,
  onClick,
  size,
  style,
  title,
}) => (
  <div
    className="display:flex flex:items-center flex:column cursor:pointer"
    onClick={onClick}
    style={{
      width: `${size + 10}px`,
      ...style,
    }}
  >
    <Thumb
      color={color}
      height={size}
      icon={icon}
      iconColor={iconColor}
      image={image}
      width={size}
    />
    {title && (
      <div
        className="text-color:white size:12"
        style={{
          marginTop: '5px',
        }}
      >
        {title}
      </div>
    )}
  </div>
)
