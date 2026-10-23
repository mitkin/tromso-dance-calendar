# Tromsø social dance calendar

A static, read-only calendar that combines the socials of several dance clubs.
Visitors can hide clubs, mark socials as "going", see clashes and copy their plan.
They cannot add or change entries. **Only people who can push to this repository can.**

## Add or change entries
Edit `data.js` (clubs, weekly socials, one-off events), commit and push.
GitLab Pages republishes within a minute or two.

## Publish on GitLab Pages
1. Create a project on GitLab and push these four files to the default branch.
2. Check the pipeline (Build > Pipelines) turns green.
3. Your address is under Deploy > Pages.
4. To keep editing to yourself, only give people Reporter or lower access on the project.

## Test locally
Open `index.html` in a browser. No build step.
