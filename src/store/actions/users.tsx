import * as type from "./actionTypes";

export const getAllUsers = () => {
    return {
        type: type.GET_USERS,
    };
}