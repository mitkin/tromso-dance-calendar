// ============================================================
//  Tromsø social dance calendar: the ONLY file you need to edit.
//  Add the real clubs and socials below.
//  Commit and push; GitLab republishes the site automatically.
// ============================================================
window.CALENDAR = {
  title: 'Tromsø social dance calendar',
  contact: '',   // optional, e.g. 'mailto:you@example.com'. Shows a "Send a correction" link.

  // One entry per club. "id" is a short code you reuse below.
  clubs: [],

  // Repeating socials. weekday: 0=Sunday, 1=Monday ... 6=Saturday.
  // every: 1 = weekly, 2 = every second week (counted from "from", which should fall on that weekday).
  // from / until are optional (YYYY-MM-DD).
  weekly: [],

  // One-off events. date: YYYY-MM-DD. All fields except club, title, date, start, end are optional.
  events: []
};
