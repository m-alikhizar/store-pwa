import * as actions from '../../actions'

xdescribe('actions', () => {
  it('should create an action to add a movie', () => {
    const props = {
      title: 'Inception',
      genre: 'SiFi'
    }

    const expectedAction = {
      type: 'ADD_MOVIE',
      props
    }
    expect(actions.addMovie(props)).toEqual(expectedAction)
  })

  it('should create an action to toggle a property', () => {

    const id = 0
    const prop = 'test'

    const expectedAction = {
      type: 'TOGGLE_PROPERTY',
      id, prop
    }
    expect(actions.toggleProperty(id, prop)).toEqual(expectedAction)
  })

  it('should create an action to update a movie', () => {

    const id = 0
    const props = {
      title: 'title',
      genre: 'genre'
    }

    const expectedAction = {
      type: 'UPDATE_MOVIE',
      id, props
    }
    expect(actions.updateMovie(id, props)).toEqual(expectedAction)
  })

  it('should create an action to delete a movie', () => {

    const id = 0

    const expectedAction = {
      type: 'DELETE_MOVIE',
      id
    }
    expect(actions.deleteMovie(id)).toEqual(expectedAction)
  })
})
