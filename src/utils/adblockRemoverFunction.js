export const adblockRemover = (url) => {
  // YouTube
  if (url.includes('youtube.com/watch')) {
    const overlay = document.querySelector('tp-yt-iron-overlay-backdrop');
    overlay?.remove();

    const popup = document.querySelector('ytd-enforcement-message-view-model');
    popup?.remove();
  }
};
