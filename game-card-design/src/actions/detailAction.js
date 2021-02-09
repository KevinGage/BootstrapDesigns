import axios from "axios";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenShotData = await axios.get(gameScreenshotUrl(id));

  // Set loading to true until the GET_DETAIL fetch is complete
  dispatch({
    type: "LOADING_DETAIL",
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
