// ============================================================
//  Tromsø social dance calendar: the ONLY file you need to edit.
//  Add the real clubs and socials below.
//  Commit and push; GitLab republishes the site automatically.
// ============================================================
window.CALENDAR = {
  title: 'Tromsø social dance calendar',
  contact: '',   // optional, e.g. 'mailto:you@example.com'. Shows a "Send a correction" link.

  // One entry per club. "id" is a short code you reuse below.
  clubs: [
    { id: 'arctic-westies', name: 'Arctic Westies', color: '#87cefa' },
    { id: 'tromso-salsaklubb', name: 'Tromsø Salsaklubb', color: '#e4572e' }
  ],

  // Repeating socials. weekday: 0=Sunday, 1=Monday ... 6=Saturday.
  // every: 1 = weekly, 2 = every second week (counted from "from", which should fall on that weekday).
  // from / until are optional (YYYY-MM-DD).
  weekly: [],

  // One-off events. date: YYYY-MM-DD. All fields except club, title, date, start, end are optional.
  events: [
    { club: 'arctic-westies', title: 'WCS social dancing with Arctic Westies', date: '2026-10-23', start: '20:30', end: '23:00', venue: 'Habibi Dance Studio', url: 'https://fb.me/e/arCyaIJQJ' },
    { club: 'tromso-salsaklubb', title: 'Halloween Party', date: '2026-10-31', start: '21:00', end: '24:00', venue: 'Tromsø Salsaklubb, Grønnegata 32', url: 'https://www.facebook.com/events/1432396615745702' }
  ]
};
