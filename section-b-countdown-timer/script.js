let timer;

function startCountdown() {
  clearInterval(timer);
  const target = new Date(document.getElementById("targetDate").value).getTime();

  timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerText = " Launched!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
