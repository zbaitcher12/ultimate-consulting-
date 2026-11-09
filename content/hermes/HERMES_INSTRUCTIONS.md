# Hermes Instructions — Content Distribution

**Purpose:** Feed the SOP-as-Front-Door 52-week content series into two channels on a fixed schedule — LinkedIn (via Buffer) and email (via GoHighLevel). 

**Scope:**
- **156 LinkedIn posts** (3/week × 52 weeks). Every post has an audience-matched image. All rows in `hermes_post_manifest.csv` read `image_status = ready`.
- **52 weekly emails** (one per blog). Every row in `hermes_email_manifest.csv` has an absolute `send_date`, subject, preview text, and pre-written body file.

**Source of truth:**
- LinkedIn: `hermes_post_manifest.csv` — one row per LinkedIn post. Hermes pushes each row to Buffer per the schedule.
- Email: `hermes_email_manifest.csv` — one row per weekly blog-announcement email. Hermes pushes each row to GoHighLevel per the schedule.

---

## Files Hermes needs

Everything lives under `G:\ultimate_consulting_vp_bd\sop_front_door_blog_content\` (or wherever this folder is deployed to the automation runner):

| Purpose | Path (relative to this folder) | Count |
|---|---|---|
| LinkedIn post bodies | `linkedin_pilot/week_NN_TYPE.md` | 156 |
| LinkedIn post images | `linkedin_images/week_NN_TYPE.jpg` | 156 |
| LinkedIn manifest | `hermes_post_manifest.csv` | 1 |
| LinkedIn chain operations SOP | `HERMES_LINKEDIN_BUFFER_INSTRUCTIONS.txt` | 1 |
| Email body files | `email_bodies/week_NN_email.txt` | 52 |
| Email manifest | `hermes_email_manifest.csv` | 1 |
| Email chain operations SOP (Hermes-side) | `HERMES_EMAIL_CHAIN_INSTRUCTIONS.txt` | 1 |
| Email chain brief (GHL-side, pick ONE path) | `GHL_AI_WORKFLOW_BRIEF.txt` | 1 |
| This SOP | `HERMES_INSTRUCTIONS.md` | 1 |
| Buffer payload sample | `_buffer_payload_example.json` | 1 |

`TYPE` is one of: `mon_announce` (Monday Field Observation), `wed_number` (Wednesday Number Post), `fri_question` (Friday Question Post).

---

## Post format — how to build each Buffer update from a `.md` file

Every `.md` file has a **metadata header** followed by the **actual post body**. Hermes must **strip the header** and post only the body.

The separator is the first standalone `---` line. Everything before it = metadata (do NOT post). Everything after it = post body.

**Example — `week_01_mon_announce.md`:**

```
**Week 1 · Monday Field Observation · LinkedIn**
Pairs conceptually with blog post: *Your ERP Went Live. Why Didn't Your Institution?* (no link in body)
Format: ~150 words. First-person field observation from "a public regional university". Standalone editorial — no blog tease, no URL, no question CTA.

---

A public regional university I worked with last quarter finished ERP cutover on schedule…
(rest of the post body — this is what Hermes posts to Buffer)
```

**Extraction rule for Hermes:**
1. Read file as UTF-8.
2. Split on the first line that is exactly `---` (three hyphens, nothing else).
3. Take everything AFTER that line.
4. Trim leading/trailing whitespace.
5. That's the Buffer post text.

---

## Image attachment

For each post, attach the image file `linkedin_images/week_NN_TYPE.jpg` (matching the post file's slug).

- Format: JPEG
- Aspect ratio: 16:9 (2752 × 1536 px)
- Size: ~1 MB each
- Well under LinkedIn's 100 MB / 8000 px caps

**Image coverage:** Every post has an audience-matched image. The manifest CSV's `image_status` column reads `ready` for all 156 rows.

---

## Scheduling

**Cadence per week:**
- Monday — Field Observation (`mon_announce`)
- Wednesday — Number Post (`wed_number`)
- Friday — Question Post (`fri_question`)

**Post time:** 8:00 AM US Eastern (12:00 UTC during EDT; 13:00 UTC during EST — Buffer handles TZ conversion if configured to `America/New_York`).

**Anchor date:** `series_start_monday = 2026-11-09` (Monday). Week 52 Friday = `2027-11-05`. The manifest CSV already has absolute `publish_date` values on every row — no runtime computation needed.

---

## Buffer settings

- **Profile:** LinkedIn — TBD which profile (Darryl's personal account, Ultimate Consulting company page, or both). Set in Hermes config.
- **Media:** attach the JPG per the manifest.
- **Text:** the extracted post body (no header metadata).
- **Hashtags:** NONE. Series voice is plain-talk editorial; hashtags break the register.
- **@mentions:** NONE by default. If a specific post's body already contains an @mention, respect it; do not add.
- **Link previews:** N/A — these posts do not contain URLs (Blog announcement goes via email, not LinkedIn).

---

## Hard content constraints (regression check before posting)

If Hermes has a pre-post lint step, block or flag any post whose text body contains:

| Banned in body | Reason |
|---|---|
| `consultant`, `consulting`, `advisory`, `practice partner`, `engagement`, `deliverable`, `sprint`, `discovery conversation`, `post-modernization` | Services-marketing terms (per client brief) |
| `Ultimate Consulting`, `ICS`, `Institutional Capacity Systems`, `institutional-capacity.com` | Entity naming still gated |
| Phone numbers, dollar amounts as prices (fees) | Not permitted in public copy |
| Specific client/institution names (e.g., "Alcorn," "Jackson State") | Only generic references allowed: "a public regional university," "an HBCU I worked with," etc. |
| Hashtags (`#`) | Voice guideline |

Note: "engagement" and "consultant" may legitimately appear in some post bodies as context (e.g., "the person who runs your most complex cross-functional workflow"). The lint is a heuristic — flag for human review, don't hard-block.

---

## Failure handling

- **Post fails to schedule:** log the error to `hermes_post_log.jsonl` in this folder with `{post_id, error, timestamp}`. Move on to the next post.
- **Image missing at post time:** skip and log — do not post text-only. Hermes should refetch the manifest for the latest `image_status`.
- **Rate limits:** Buffer's per-account rate limit for scheduled updates is roughly 60 per minute. Even a full 156-post initial upload is well under. No throttling needed.

---

## Full 52-week schedule pattern

All 156 posts are ready. Upload them as scheduled drafts pointing at their computed publish dates in one pass.

---

## Sample Buffer payload

See `_buffer_payload_example.json` in this folder for a full example of one post's Buffer API request payload (for Buffer's v1 REST API endpoint `POST /updates/create.json`).

---

# Weekly email via GoHighLevel

**Operational detail lives in a dedicated doc:** `HERMES_EMAIL_CHAIN_INSTRUCTIONS.txt` (same folder). That doc covers (1) one-time setup of all 52 campaigns as GHL drafts, and (2) the trigger-based runtime loop that fires each email only after its paired blog returns 200 OK on `4ucit.com`. The section below is the orientation summary.

**Model:** trigger-based, not time-based. Each email is pre-loaded as a GHL draft during setup. The weekly loop polls the paired blog URL and schedules the campaign for send only after the blog is confirmed live. If a blog is late, the email waits (no dead links).

**Target cadence:** 52 emails, one per blog, Tuesday at 09:00 America/New_York after the Monday blog publish. First target send: 2026-11-10. Last target send: 2027-11-02.

**Sequencing with the LinkedIn drops:**
- Monday 00:00 ET — blog goes live at `4ucit.com/insights/{slug}` (via the GitHub Actions cron on the Ultimate Consulting repo)
- Monday 08:00 ET — LinkedIn Monday Field Observation (standalone editorial — no link, no blog tease)
- **Tuesday 09:00 ET — GHL email ships the recap + link to the new blog** (this is the only channel that distributes the blog URL)
- Wednesday 08:00 ET — LinkedIn Number Post
- Friday 08:00 ET — LinkedIn Question Post

**Source of truth:** `hermes_email_manifest.csv`. One row per email. Hermes reads that file and pushes each row to GHL per the send date.

## Email manifest columns

| Column | What it is |
|---|---|
| `email_id` | `week_NN_email` |
| `week` | 1–52 |
| `send_date` | Absolute ISO date (Tuesday) |
| `send_time_local` | `09:00` |
| `send_timezone` | `America/New_York` |
| `blog_slug` | The published blog's slug |
| `blog_url` | `https://4ucit.com/insights/{slug}` |
| `blog_title` | Verbatim blog title |
| `blog_excerpt` | Verbatim blog excerpt (one line) |
| `email_subject` | Subject line (same as blog_title by default) |
| `email_preview_text` | Preview text (defaults to blog_excerpt; GHL calls this "preheader") |
| `email_body_file` | Relative path to the plain-text body file |

## Body-file format

Each body file is UTF-8 plain text. Lines, in order: salutation, opening hook (one paragraph lifted from the blog's lede), a two-line call-to-read with the blog URL, em-dash, Darryl Nash signature.

Token to substitute at send time: `{{first_name|there}}` — GHL's merge-field syntax for first name with fallback "there".

Example (week_01_email.txt):

```
Hi {{first_name|there}},

The system goes live on schedule. The cutover is clean. The status report turns green. Three weeks in, your aid specialist is still running the old spreadsheet because the new workflow configures around a process that only lived in her head.

Read the full piece:
https://4ucit.com/insights/why-your-erp-goes-live-but-your-institution-doesnt

—
Darryl Nash
```

## GHL campaign payload (per email)

For each row in `hermes_email_manifest.csv`, Hermes creates a scheduled GHL email campaign with:

- **From name:** `Darryl Nash`
- **From email:** TBD — see "Config TBD" below. Must be an authenticated sending domain in GHL (SPF/DKIM aligned).
- **Reply-to:** same as From email.
- **Subject:** `email_subject` column
- **Preview text / preheader:** `email_preview_text` column
- **Body:** contents of `email_body_file`, with `{{first_name|there}}` left intact for GHL's merge engine to resolve at send time. Hermes may render the body as plain text OR wrap it in a simple HTML template — see "HTML wrap" below.
- **Audience:** GHL list/segment ID — TBD. See "Config TBD" below.
- **Send time:** `send_date` + `send_time_local` in `send_timezone` → convert to UTC and use GHL's scheduled-send field.
- **Tracking:** opens on, clicks on, single pixel.

## HTML wrap (optional)

If the GHL account prefers HTML-formatted campaigns over plain text, wrap each body with a minimal responsive template: Darryl Nash as sender, body paragraphs as `<p>`, blog URL as a `<a>` anchor styled as a text link. No images, no logos, no banners. The plain-text file stays canonical; HTML is a rendering wrapper.

## Content constraints (same lint rules as LinkedIn)

Apply the same pre-send lint from the LinkedIn section before shipping any email. Additionally:
- The email body is the ONE place where the blog URL ships. LinkedIn posts remain link-free.
- No "forward to a colleague" encouragement in the body — any sharing is organic.
- No hashtags, no emoji (voice guideline).
- No ICS, Institutional Capacity Systems, UCIT, or institutional-capacity.com mentions in the body.

## Failure handling (email)

- **Scheduling fails:** append to `hermes_email_log.jsonl` with `{email_id, error, timestamp}`. Move on.
- **Bounce / spam complaint:** GHL handles natively; Hermes does not retry.
- **Blog URL 404 at send time:** block that one email and log; do not ship a dead link. Check the Ultimate Consulting repo's publishing cron.

## GHL config

GHL API key, location ID, from-email, audience list ID, and reply-to behavior are loaded in Hermes config. Not restated here. The runtime operations doc (`HERMES_EMAIL_CHAIN_INSTRUCTIONS.txt`) references them by role, not by value.

---

## Questions / adjustments

- Anchor date: **set — Mon 2026-11-09 (first LinkedIn post) through Fri 2027-11-05 (last LinkedIn post); emails target Tue 2026-11-10 through Tue 2027-11-02**
- Buffer LinkedIn profile ID(s): still TBD in Hermes config
- GHL API key / location ID / list ID / from-email: loaded in Hermes config
- Time zone override (if not `America/New_York`): TBD
