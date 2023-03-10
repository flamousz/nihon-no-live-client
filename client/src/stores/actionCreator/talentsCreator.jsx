import {
  FETCH_DATA_BRANCHES,
  FETCH_DATA_FAVORITES_USER,
  FETCH_DATA_TALENTS,
  FETCH_DETAIL_TELENS,
} from "../actionType";

export const actionSetTalents = (payload) => {
  return {
    type: FETCH_DATA_TALENTS,
    payload,
  };
};

export const fetchDataTalents = () => {
  return (dispatch, getState) => {
    fetch("https://nihon-no-live.foxhub.space/idols", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(actionSetTalents(data));
      });
  };
};

export const actionSetBranches = (payload) => {
  return {
    type: FETCH_DATA_BRANCHES,
    payload,
  };
};

export const fetchDataBranches = () => {
  return (dispatch, getState) => {
    fetch("https://nihon-no-live.foxhub.space/idols/branches", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(actionSetBranches(data));
      });
  };
};

export const addFavorite = (IdolId) => {
  return (dispatch, getState) => {
    fetch(`https://nihon-no-live.foxhub.space/favorites/${IdolId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchFavorites());
        // console.log(data);
      });
  };
};

export const actionSetFavorites = (payload) => {
  return {
    type: FETCH_DATA_FAVORITES_USER,
    payload,
  };
};

export const fetchFavorites = () => {
  return (dispatch, getState) => {
    fetch("https://nihon-no-live.foxhub.space/favorites", {
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(actionSetFavorites(data));
      });
  };
};

export const deleteFavorite = (id) => {
  return (dispatch, getState) => {
    fetch(`https://nihon-no-live.foxhub.space/favorites/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchFavorites());
      });
  };
};
export const actionSetDetailIdol = (payload) => {
  return {
    type: FETCH_DETAIL_TELENS,
    payload,
  };
};

export const fetchDataDetailIdol = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://nihon-no-live.foxhub.space/idols/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("notOk");
      }

      const idolData = await response.json();
      console.log(idolData, "ini idollllllllllllllllllllllllllllll");

      const videoLiveResponse = await fetch(
        `https://nihon-no-live.foxhub.space/idols/video/live/${idolData.youtubeId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!videoLiveResponse.ok) {
        throw new Error("notOk");
      }

      const videoLive = await videoLiveResponse.json();
      idolData.videoLive = videoLive;

      const videoResponse = await fetch(
        `https://nihon-no-live.foxhub.space/idols/video/${idolData.youtubeId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!videoResponse.ok) {
        throw new Error("notOk");
      }

      const video = await videoResponse.json();
      idolData.video = video;

      if (idolData.spotifyId !== "") {
        const songsResponse = await fetch(
          `https://nihon-no-live.foxhub.space/idols/songs/${idolData.spotifyId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!songsResponse.ok) {
          throw new Error("notOk");
        }

        const songs = await songsResponse.json();
        // console.log(songs,'ini dari creatorrrrrrrrrrrrrrrr')
        idolData.songs = songs;
      }

      dispatch(actionSetDetailIdol(idolData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fectMembersVideo = () => {
  return async (dispatch, getState) => {
    try {
      const videoResponse = await fetch(
        `https://nihon-no-live.foxhub.space/idols/video/UCJFZiqLMntJufDCHc6bQixg`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!videoResponse.ok) {
        throw new Error("notOk");
      }

      const video = await videoResponse.json();
      console.log(video, "|||||||||||||||");
      dispatch(actionSetDetailIdol(video));
    } catch (error) {
      console.error(error);
    }
  };
};
