## Grabbing Data With API Calls

Ah, good ol' data. There's just so many things you can do with data.

```javascript
function LyricInput() {
  const dispatch = useDispatch();

  async function getTrackId(e) {
    e.preventDefault();
    let randomIndex = Math.floor(Math.random() * 10);
    if (e.target[0].value)
      try {
        const res = await axios.get('/track', {
          params: {
            userInput: e.target[0].value,
          },
        });

        const trackId =
          res.data.message.body.track_list[randomIndex].track.track_id;
        const artist =
          res.data.message.body.track_list[randomIndex].track.artist_name;
        const song =
          res.data.message.body.track_list[randomIndex].track.track_name;

        getTrackLyrics();
        async function getTrackLyrics() {
          try {
            const newRes = await axios.get('/lyrics', {
              params: {
                trackId: trackId,
              },
            });

            const snippet = newRes.data.message.body.snippet.snippet_body;
            const fixedSnippet = fixer(snippet);
            dispatch(
              add({
                id: uuidv4(),
                snippet: fixedSnippet,
                song: song,
                artist: artist,
                prompt: e.target[0].value,
              })
            );

            e.target[0].value = '';
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
  }
```
