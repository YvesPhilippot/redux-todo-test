let nextTodoId = 0

/* On est dans l'espace Actions, qui permet de décrire les actions possibles dans l'application

 * Ajouter un TODO
  * Setter le filtre de visibilité (complété, active, ...)
  * Toggle un TODO pour le rayer (le passer de active à completed)
  * L'énumération des filtres possibles : TOUS, TOUS les complétés, TOUS les actifs
*/
/* AddTodo : Méthode pour créer une action de type ADD_TODO décrite */

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++,  text }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}