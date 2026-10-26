// ============================================================
//  Tromsø social dance calendar: the ONLY file you need to edit.
//  Add the real organizers and socials below.
//  Commit and push; GitLab republishes the site automatically.
// ============================================================
window.CALENDAR = {
  title: 'Tromsø social dance calendar',
  contact: '',   // optional, e.g. 'mailto:you@example.com'. Shows a "Send a correction" link.
  coffee: 'https://buymeacoffee.com/lmypfc3',   // optional. Shows a "Buy me a coffee" link; leave empty to hide.

  // Optional: shows "N going" per social. See README ("Show how many are going").
  // The anon key is public by design; leave both empty to hide counts.
  supabase: { url: 'https://omchirosvaavxmdmxear.supabase.co', anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tY2hpcm9zdmFhdnhtZG14ZWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NjQ0NTMsImV4cCI6MjEwODM0MDQ1M30.r5jfDYLjt4TyEemL7SnqUFJlQsS-k8eA-3uAd1N6nC0' },

  // One entry per organizer (the `clubs` list). "id" is a short code you reuse as `club:` below.
  clubs: [
    { id: 'arctic-westies', name: 'Arctic Westies', color: '#87cefa', url: 'https://arcticwesties.no/' },
    { id: 'tromso-salsaklubb', name: 'Tromsø Salsaklubb', color: '#e4572e', url: 'https://tromsosalsaklubb.com/timeplan-var-2025/' },
    { id: 'winterworld-westies', name: 'WinterWorld Westies', color: '#7b5ea7', url: 'https://winterworldwesties.com/schedule/' },
    { id: 'mambo-bachata', name: 'Mambo Bachata Trondheim', color: '#1f9d6b', url: 'https://www.mambobachatatrondheim.no/' }
  ],

  // Repeating socials. weekday: 0=Sunday, 1=Monday ... 6=Saturday.
  // every: 1 = weekly, 2 = every second week (counted from "from", which should fall on that weekday).
  // from / until are optional (YYYY-MM-DD). Recurring socials are set to end 2026-12-31 (one semester); extend `until` when the next semester is confirmed.
  weekly: [
    { club: 'arctic-westies', title: 'Monday social', dances: ['WCS'], weekday: 1, start: '21:00', end: '23:00', venue: 'LHL', until: '2026-12-31' },
    { club: 'winterworld-westies', title: 'Wednesday social', dances: ['WCS'], weekday: 3, start: '19:00', end: '20:15', venue: 'Hagen Tromsø, Storgata 132', until: '2026-12-31', url: 'https://winterworldwesties.com/schedule/' }
  ],

  // dances: optional list of tags, e.g. dances: ['Salsa', 'Bachata']. Works on weekly and one-off entries.
  // Allowed: Bachata, Salsa, Zouk, Kizomba, WCS (change with `dances: [...]` at the top of this object).
  // One-off events. date: YYYY-MM-DD. All fields except club (organizer id), title, date, start, end are optional.
  // type: optional, one of 'Social' (default), 'Event'. Each gets a filter in the sidebar.
  // To change the list, set `types: [...]` at the top of this object.
  // endDate: optional YYYY-MM-DD for multi-day events. start is on date, end is on endDate.
  events: [
    { club: 'tromso-salsaklubb', title: 'Salsa level 2 & 3 weekend', type: 'Event', dances: ['Salsa'], date: '2026-10-31', endDate: '2026-11-01', desc: 'Technique - Flow to Wow! For level 2 & 3 dancers: frame, timing, connection, flow and musicality. Better lead, better follow.', url: 'https://fb.me/e/57AelCOd6' },
    { club: 'arctic-westies', title: 'West Coast Swing Weekend', type: 'Event', dances: ['WCS'], date: '2027-02-05', endDate: '2027-02-07', venue: 'Tromsø', desc: 'All-Star instructors Tom-Elbin Bendheim and My Hanh Tu. 7 hours of open-level instruction (at least one semester of beginner WCS required). Parties Friday and Saturday night. Schedule, prices and registration coming soon.', url: 'https://fb.me/e/55kv0noDv' },
    { club: 'mambo-bachata', title: 'Tromsø Salsa & Bachata Weekend', type: 'Event', dances: ['Salsa', 'Bachata', 'Kizomba'], date: '2026-11-27', endDate: '2026-11-29', start: '20:00', end: '17:00', venue: 'Habibi Oriental Dance Club, Søndre Tollbodgate 7', desc: 'Fri 20:00 Bachata class + welcome social. Sat 12:00-17:00 workshops, 20:30-01:30 Latin social. Sun 12:00-17:00 workshops. Taught by César Acevedo. Full weekend pass 990 NOK early bird / 1,190 NOK.', url: 'https://fb.me/e/kH20KNtAt' },
    { club: 'tromso-salsaklubb', title: 'Zouk social', dances: ['Zouk'], date: '2026-10-29', start: '20:00', end: '21:00', venue: 'Tromsø Salsaklubb, Grønnegata 32' },
    { club: 'arctic-westies', title: 'WCS social dancing with Arctic Westies', dances: ['WCS'], date: '2026-10-23', start: '20:30', end: '23:00', venue: 'Habibi Dance Studio', url: 'https://fb.me/e/arCyaIJQJ' },
    { club: 'tromso-salsaklubb', title: 'Halloween Party', date: '2026-10-31', start: '21:00', end: '24:00', venue: 'Tromsø Salsaklubb, Grønnegata 32', url: 'https://www.facebook.com/events/1432396615745702',  dances: ['Salsa', 'Bachata', 'Kizomba'] }
  ]
};
