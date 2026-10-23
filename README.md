# Tromsø social dance calendar

A static, read-only calendar that combines the socials of several dance clubs.
Visitors can hide clubs, mark socials as "going" and see clashes.
They cannot add or change entries. **Only people who can push to this repository can.**

## Add or change entries
Edit `data.js` (clubs, weekly socials, one-off events), commit and push.
GitLab Pages republishes within a minute or two.

## Show how many are going (optional)
Counts are anonymous: one vote per browser, stored in a free [Supabase](https://supabase.com) project.
1. Create a Supabase project. In the SQL editor run:
   ```sql
   create table going(event_id text not null check (length(event_id) <= 300), client_id uuid not null, primary key (event_id, client_id));
   alter table going enable row level security;
   create view going_counts as select event_id, count(*)::int as n from going group by event_id;
   grant select on going_counts to anon;
   create function set_going(p_event text, p_client uuid, p_going boolean) returns void
   language plpgsql security definer set search_path = public as $$
   begin
     if length(p_event) > 300 then return; end if;
     if p_going then insert into going values (p_event, p_client) on conflict do nothing;
     else delete from going where event_id = p_event and client_id = p_client; end if;
   end $$;
   revoke all on function set_going(text, uuid, boolean) from public;
   grant execute on function set_going(text, uuid, boolean) to anon;
   ```
2. Under Project Settings > API, copy the project URL and the `anon` public key into `supabase` in `data.js`.
3. Commit and push. Never put the `service_role` key in this repository.

Votes are not verified, so counts can be inflated by someone determined; treat them as a guide.

## Publish on GitLab Pages
1. Create a project on GitLab and push these four files to the default branch.
2. Check the pipeline (Build > Pipelines) turns green.
3. Your address is under Deploy > Pages.
4. To keep editing to yourself, only give people Reporter or lower access on the project.

## Test locally
Open `index.html` in a browser. No build step.
