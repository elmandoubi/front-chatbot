import { Map } from 'immutable'
import request from 'axios'


const fakeData = [
    {
        id: 1,
        label: 'Voiture'
    },
    {
        id: 2,
        label: 'Camion'
    }
]
export function getItems() {

    //return {type: 'ITEMS_LOADED', items: fakeData}


    
    return (dispatch) => {
        request.get('http://192.168.1.178:8080/data.json')
            .then((response) => {
                dispatch({type: 'ITEMS_LOADED', items: response.data})
            })
    }
    

}


export default function reducer(state = Map(), action) {
    switch (action.type) {
        case 'ITEMS_LOADED':
            return state.merge({
                list: action.items
            })
    }
    return state
}