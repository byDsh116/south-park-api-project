function getNumberOfRenderEpisode(lastEpisode) {
  return Math.floor(Math.random() * lastEpisode);
}

const randomButton = document.querySelector('.random-button');

const state = {
  episodes: [],
};
async function getRandomEpisode() {
  const response = await fetch('https://spapi.dev/api/episodes', {
    method: 'get',
  });

  const result = await response.json();

  console.log(result);
  const { total } = result.meta;

  const episodeNumber = getNumberOfRenderEpisode(total);

  const rowEpisode = await fetch(
    `https://spapi.dev/api/episodes/${episodeNumber}`,
    {
      method: 'get',
    }
  );
  const episode = await rowEpisode.json();
  state.episodes = [result];
  console.log('succes');
  const episodeImage = document.getElementById('episode-image');
  episodeImage.src = episode.data.thumbnail_url;

  const nameString = document.getElementById('name-string');

  nameString.innerHTML = `Episode name: ${episode.data.name}`;

  const seasonString = document.getElementById('season-string');
  seasonString.innerHTML = `Season: ${episode.data.season}`;

  const episodeString = document.getElementById('episode-string');
  episodeString.innerHTML = `Episode N: ${episode.data.episode}`;

  const descriptionString = document.getElementById('description-string');
  descriptionString.innerHTML = `Description: ${episode.data.description}`;

  const airDateString = document.getElementById('airDate-string');
  airDateString.innerHTML = `Air-date: ${episode.data.air_date}`;
}

randomButton.addEventListener('click', () => {
  getRandomEpisode();
});
