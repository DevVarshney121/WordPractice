/* Word Practice shared word storage. Stored in this browser for this deployed site's origin. */
(function () {
  const PREFIX = 'wordPractice.v1.';
  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      if (raw !== null) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (err) { console.warn('Could not read saved word list:', err); }
    return fallback.map(item => ({ h: String(item.h ?? ''), e: String(item.e ?? '') }));
  }
  function save(key, words) {
    localStorage.setItem(PREFIX + key, JSON.stringify(words));
  }
  window.WordStore = { getWords: read, saveWords: save, prefix: PREFIX };
})();
