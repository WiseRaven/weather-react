export const SELECT_DEGREE = 'SELECT_DEGREE'
export const GET_API_FN = 'GET_API_FN'

export function setCheck(check) { 
    return {
        type: SELECT_DEGREE,
        payload: check
    }
}

export function getApi(getApiFn) { 
    return {
        type: GET_API_FN,
        payload: getApiFn
    }
}
