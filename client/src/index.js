import { saveProgress } from "./saveProgress";

const pathname = window.location.pathname;
const courseName = pathname.split("/course/")[1];
const lessonsTotal = document.querySelectorAll(".lessons-item").length;
let search = null;
let lessonNumber = null;

const watchURL = () => {
  const observer = new MutationObserver(() => {
    if (location.search !== search) {
      const searchParams = new URLSearchParams(location.search);
      lessonNumber = searchParams.get("lesson");
      search = location.search;
    }
  });
  const config = { subtree: true, attributes: true };
  observer.observe(document, config);
};

const setCheckmarks = (watchedLessons) => {
  watchedLessons?.forEach((currentLesson) => {
    document
      .querySelector(
        `.lessons-item[data-index="${currentLesson}"] .lessons-title`
      )
      .classList.add("watched");
  });
};

const setNewWatched = async () => {
  const { watchHistory } = await chrome.storage.local.get("watchHistory");

  if (
    !watchHistory[courseName] ||
    !watchHistory[courseName].includes(lessonNumber)
  ) {
    chrome.storage.local.set({
      watchHistory: {
        ...watchHistory,
        [courseName]: [...(watchHistory[courseName] || []), lessonNumber],
      },
    });
  }
};

const startInterval = () => {
  setInterval(() => {
    const video = document.querySelector("video");
    const currentTime = video?.currentTime;
    const duration = video?.duration;
    if (currentTime && duration) {
      const percentage = Math.round((currentTime / duration) * 100);
      if (percentage > 90) {
        setNewWatched();
      }
    }
  }, 1000);
};

const initApp = async () => {
  watchURL();

  chrome.storage.onChanged.addListener((changes) => {
    console.log(changes);
    if (changes.watchHistory) {
      const progress = Math.round(
        (changes.watchHistory.newValue[courseName].length / lessonsTotal) * 100
      );
      setCheckmarks(changes.watchHistory.newValue[courseName]);
      saveProgress(progress, courseName);
    }
  });

  const { watchHistory } = await chrome.storage.local.get("watchHistory");
  if (!watchHistory) {
    await chrome.storage.local.set({ watchHistory: {} });
  }
  const watchedLessons = watchHistory[courseName];
  setCheckmarks(watchedLessons);
  startInterval();
};

initApp();

// chrome storage
// {
//   "watchHistory": {
//     "courseA": [1, 2, 5]
//     "courseB": [11, 13, 58]
//   }
// }
