const navigationText = {
  stairs: {
    action: 'Take the',
    title: 'Stairs',
  },
  elavator: {
    action: 'Take the ',
    title: 'Elevator',
  },
  express_elavator: {
    action: 'Take the',
    title: 'Express elevator',
  },
  escalator: {
    action: 'Take the',
    title: 'Escalator',
  },
  skybridge: {
    action: 'Use the',
    title: 'Skybridge',
  },
  way: {
    action: 'Take the',
    title: 'way',
  },
}

const getMapById = (mapId, mapData) =>
  mapData.filter(map => map._id === mapId)

const getStepText = (item, currentMap, nextMap) => {
  let stepText = `${
    navigationText[item.navigationType].action
  } `

  if (item.label) {
    stepText += `${item.label} to `
  } else {
    stepText += `${
      navigationText[item.navigationType].title
    } to `
  }


  stepText += `${nextMap.floorName} floor.`
  return stepText
}

const getNavigationItems = (
  currentMapId,
  nextMapId,
  mapData,
) => {
  const currentMap = getMapById(currentMapId, mapData)[0]
  const navigationItems = currentMap.items.filter(item => {
    if (item.actionType === 'navigateTo' && item.accessTo) {
      if (item.accessTo.includes(nextMapId)) {
        return item
      }
    }
  })
  return navigationItems
}

const pathInstructions = (path, mapData) => {
  const steps = []
  const totalSteps = path.length

  for (let i = 1; i <= totalSteps - 1; i++) {
    const currentMapId = path[i - 1]
    const nextMapId = path[i]
    const currentMap = getMapById(currentMapId, mapData)[0]
    const nextMap = getMapById(nextMapId, mapData)[0]
    const navigationItems = getNavigationItems(
      currentMapId,
      nextMapId,
      mapData,
    )
    const possibleSteps = []
    const stepData = {
      step: `Step ${i}`,
      floorName: currentMap.floorName,
      buildingName: currentMap.buildingName,
      possibleSteps,
    }
    steps.push(stepData)
  }
  return steps
}
