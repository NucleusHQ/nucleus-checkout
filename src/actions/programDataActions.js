import { UPDATE_PROGRAM_DATA } from "../constants"

export const updateProgramData = (payload) => {
    return {
        type: UPDATE_PROGRAM_DATA, 
        payload
    }
}