const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          /* Utilisation ... = Copie d'un objet puis après la virgule, ajoute un objet à ce tableau copié. Rappel : React préconise de toujours copier un objet plutôt
          que de le modifier directement. Trop risqué si l'on veut gérer les états antérieurs....
          */
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
            previousState: "Active"
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(
          todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed, previousState : todo.completed ? "Completed" : "Active" } : todo
        )
      default:
        return state
    }
  }
  
  export default todos