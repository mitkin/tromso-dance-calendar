// ============================================================
//  Tromsø social dance calendar: the ONLY file you need to edit.
//  Everything below is sample data. Replace it with the real clubs.
//  Commit and push; GitLab republishes the site automatically.
// ============================================================
window.CALENDAR = {
  title: 'Tromsø social dance calendar',
  contact: '',   // optional, e.g. 'mailto:you@example.com'. Shows a "Send a correction" link.

  // One entry per club. "id" is a short code you reuse below.
  clubs: [
    { id: 'salsa',   name: 'Example Salsa Club',  color: '#e4572e', url: 'https://example.com/salsa',   desc: 'Salsa and bachata socials.' },
    { id: 'swing',   name: 'Example Swing Club',  color: '#1f9d6b', url: 'https://example.com/swing',   desc: 'Lindy hop and swing.' },
    { id: 'tango',   name: 'Example Tango Club',  color: '#8a3ffc', url: 'https://example.com/tango',   desc: 'Argentine tango milongas.' },
    { id: 'folk',    name: 'Example Folk Dance',  color: '#2680c2', url: 'https://example.com/folk',    desc: 'Folk and ceilidh dancing.' }
  ],

  // Repeating socials. weekday: 0=Sunday, 1=Monday ... 6=Saturday.
  // every: 1 = weekly, 2 = every second week (counted from "from", which should fall on that weekday).
  // from / until are optional (YYYY-MM-DD).
  weekly: [
    { club: 'salsa', title: 'Friday salsa social',  weekday: 5, start: '20:00', end: '23:30', venue: 'Venue name', desc: 'Short beginner lesson at 20:00, then open dancing.', url: 'https://example.com/salsa/friday' },
    { club: 'swing', title: 'Wednesday swing social', weekday: 3, start: '19:30', end: '22:30', venue: 'Venue name', desc: 'Lindy hop social with DJ.', url: 'https://example.com/swing/wednesday' },
    { club: 'tango', title: 'Milonga', weekday: 6, start: '20:00', end: '23:59', venue: 'Venue name', desc: 'Every second Saturday.', every: 2, from: '2026-10-24', url: 'https://example.com/tango/milonga' },
    { club: 'folk',  title: 'Sunday folk dance', weekday: 0, start: '17:00', end: '20:00', venue: 'Venue name', desc: 'No partner or experience needed.' }
  ],

  // One-off events. date: YYYY-MM-DD. All fields except club, title, date, start, end are optional.
  events: [
    { club: 'swing', title: 'Halloween ball', date: '2026-10-31', start: '19:00', end: '23:59', venue: 'Venue name', desc: 'Costume ball with a live band.', url: 'https://example.com/swing/halloween' },
    { club: 'salsa', title: 'Salsa all-nighter', date: '2026-11-07', start: '21:00', end: '02:00', venue: 'Venue name', desc: 'Five hours of salsa with guest DJs.', url: 'https://example.com/salsa/allnighter' }
  ]
};
