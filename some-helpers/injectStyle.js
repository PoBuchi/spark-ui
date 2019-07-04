const injectStyle = (rules = [], id = 'default') => {
  const style = rules.join(' ')
  const head = document.getElementsByTagName('body')[0]
  let tag = document.getElementById(prefixedId)

  if (rules.length > 0)
    if (!tag) {
      tag = document.createElement('style')
      tag.id = prefixedId
      head.appendChild(tag)
    }

    tag.innerHTML = style
  } else if (rules.length === 0 && tag) {
    head.removeChild(tag)
  }
}