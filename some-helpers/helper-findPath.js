const findPath = (
  startLocationId,
  endLocationId,
  mapData,
) => {
  // will use it overall
  const visitedMaps = [] // const numberOfMaps = mapData.length;

  let mapFound = false
  let getStartMap
  let getEndMap
  let pathFound
  mapData.map(map => {
    map.items.map(item => {
      if (startLocationId === item._id) {
        getStartMap = map
      }

      if (endLocationId === item._id) {
        getEndMap = map
      }
    })
  }) // if we didn't find start or end map we should return empty array

  if (!getEndMap || !getStartMap) {
    return []
  }

  const startMapId = getStartMap._id || ''

  if (startMapId === endMapId) {
    return [startMapId]
  }

  const initialArray = getStartMap.accessTo // need to check if endMapId is not directly connected

  if (initialArray.includes(endMapId)) {
    return [startMapId, endMapId]
  } // add it's one id so it can be ignored

  initialArray.push(startMapId)

  const getMapById = mapId =>
    mapData.filter(map => map._id === mapId)

  function findPathHelper(
    arrayToExplore,
    mySteps,
    visitedMapsPassed,
  ) {
    // as function is recursing we want it to stop looking
    // if (mapFound) {
    //   return;
    // }
    const arrayToCall = []
    arrayToExplore.map(mapId => {
      if (!visitedMapsPassed.includes(mapId)) {
        const newMap = getMapById(mapId)

        if (!_isEmpty(newMap)) {
          const diff = checkIfHaveNew(
            visitedMapsPassed,
            newMap[0].accessTo,
          )

          if (diff.length === 0) {
            visitedMapsPassed.push(mapId)
          } else {
            if (!diff.includes(endMapId)) {
              if (!mapFound) {
                arrayToCall.push({
                  paths: diff,
                  steps: _union(mySteps, [mapId]),
                })
                visitedMapsPassed.push(mapId)
              }
            } else {
              // mapFound = true;
              if (pathFound && pathFound.length) {
                const newPath = _union(mySteps, [
                  mapId,
                  endMapId,
                ])

                if (newPath.length < pathFound.length) {
                  pathFound = newPath
                }
              } else {
                pathFound = _union(mySteps, [
                  mapId,
                  endMapId,
                ])
              }
            }
          }
        } else {
          visitedMapsPassed.push(mapId)
        }
      }
    }) // check if we have any call left, if not let's check maybe we have visited all places and didn't found spot, so we should reject promise

    arrayToCall.map(callValues => {
      findPathHelper(
        callValues.paths,
        callValues.steps,
        visitedMapsPassed,
      )
    })
  } // first step is from starting point

  const steps = [startMapId]
  const arrayToCall = []
  initialArray.map(mapId => {
    if (!visitedMaps.includes(mapId)) {
      const newMap = getMapById(mapId)

      if (!_isEmpty(newMap)) {
        const diff = checkIfHaveNew(
          initialArray,
          newMap[0].accessTo || [],
        )

      } else {
        visitedMaps.push(mapId)
      }
    }
  })

  if (mapFound) {
    return pathFound
  } // console.log('arrayToCall👽', arrayToCall);

  arrayToCall.map(callValues => {
    findPathHelper(
      callValues.paths,
      callValues.steps,
      visitedMaps,
    )
  })
  return Array.isArray(pathFound) ? pathFound : []
}
