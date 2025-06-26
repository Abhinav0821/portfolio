// Show popup when any “View Demo Video” button is clicked
document.querySelectorAll('.demo-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.dataset.video;
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    iframe.src = url + '?autoplay=1&rel=0';
    modal.style.display = 'flex';
  });
});

// Close popup on “×” click
document.querySelector('.close-btn').addEventListener('click', () => {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-video');
  iframe.src = '';
  modal.style.display = 'none';
});

// Also close if the user clicks outside the video container
window.addEventListener('click', e => {
  const modal = document.getElementById('video-modal');
  if (e.target === modal) {
    document.querySelector('.close-btn').click();
  }
});
