import axios from "axios";
import * as type from "./actionTypes";
import { Topic } from "../../types/types";

export const getAllTopicsStart = () => {
    return (dispatch: any) => {
        axios
        .get("https://mels-news-api.herokuapp.com/api/topics")
        .then((response) => {
            dispatch(getAllTopicsSuccess(response.data.topics))
        }).catch((error) => {
            dispatch(getAllTopicsFail(error));
        })
    }
}

export const getAllTopicsSuccess = (topics: Topic[]) => {
    return {
        type: type.GET_TOPICS_SUCCESS,
        topics: topics
    };
}

export const getAllTopicsFail = (error: string) => {
    return {
        type: type.GET_USERS_FAIL,
        error: error
    };
};