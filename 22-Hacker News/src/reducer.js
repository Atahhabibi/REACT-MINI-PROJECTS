import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state,action) => {

  if(action.type===SET_LOADING){
    return {...state,Loading:action.payload};
  }

  if(action.type===SET_STORIES){
    return {...state,Loading:false,hits:action.payload.hits,nbPages:action.payload.nbPages}
  }

  if(action.type===HANDLE_SEARCH){
    return {...state,searchTerm:action.payload}
  }

  if(action.type===HANDLE_PAGE){

     let newPage=action.payload;

    if(newPage<0){
      newPage=state.nbPages-1;
    }

    if(newPage>state.nbPages-1){
      newPage=0;
    }

    return {...state,page:newPage}
  }

  if(action.type===REMOVE_STORY){

    let newHits=state.hits.filter((item)=>item.objectID!==action.payload)
    return{...state,hits:newHits}
  }



   throw new Error(`no matching ${action.type} action type`)




}


export default reducer
