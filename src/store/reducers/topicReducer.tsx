import * as actionTypes from "../actions/actionTypes";
import { Topic } from "../../types/types";

interface Store {
    topics: Topic[],
    error: string | null,
    loading: boolean
}

interface GetTopicStart {
    type: "GET_TOPICS_START";
}

interface GetTopicSuccess {
    type: "GET_TOPICS_SUCCESS";
    topics: Topic[]
}

interface GetTopicFail {
    type: "GET_TOPICS_FAIL";
    error: string
}

export type Action = GetTopicStart | GetTopicSuccess | GetTopicFail;

const initialState: Store = {
    topics: [],
    error: null,
    loading: false,
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_TOPICS_START:
            return {
                ...state,
                loading: true,
            }
            case actionTypes.GET_TOPICS_SUCCESS:
                return {
                    ...state,
                    topics: action.topics,
                    loading: true,
                }
                case actionTypes.GET_TOPICS_FAIL:
                    return {
                        ...state,
                        loading: true,
                        error: action.error,
                    }
                default:
                    return state;
    }
};

export default reducer;