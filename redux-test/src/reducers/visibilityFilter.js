import { VisibilityFilters } from '../actions'

/* Par défaut on montre tous les éléments de la liste TODO mais si l'action passée est de type SET_VISIBILITY_FILTER on applique le filtre lié */
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter