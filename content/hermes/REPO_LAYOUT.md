# Repo Layout for Hermes Consumption

The SOP docs in this folder were authored assuming all files sat in one flat working
folder on Darryl's Windows machine. In this repo the layout has been normalized.
Map paths from the SOPs to the repo paths as follows.

## Path remapping (SOP reference -> repo path)

| SOP reference                       | Repo path                                   |
|-------------------------------------|---------------------------------------------|
| `linkedin_pilot/week_NN_TYPE.md`    | `content/linkedin/week_NN_TYPE.md`          |
| `linkedin_images/week_NN_TYPE.jpg`  | `public/linkedin-images/week_NN_TYPE.jpg`   |
| `email_bodies/week_NN_email.txt`    | `content/email/bodies/week_NN_email.txt`    |
| `hermes_post_manifest.csv`          | `content/linkedin/hermes_post_manifest.csv` |
| `hermes_email_manifest.csv`         | `content/email/hermes_email_manifest.csv`   |
| `_buffer_payload_example.json`      | `content/hermes/_buffer_payload_example.json` |

The two manifest CSVs have already been rewritten to use the repo-relative paths, so
Hermes should read `content_file`, `image_file`, and `email_body_file` directly from
the CSVs without any string substitution.

## Image hosting - NO CDN UPLOAD REQUIRED

The SOP `HERMES_LINKEDIN_BUFFER_INSTRUCTIONS.txt` describes an image upload step
(S3 / GitHub raw / CDN) to produce public URLs for Buffer. **Skip that step.**

Every image in `public/linkedin-images/` is automatically served at:
  `https://4ucit.com/linkedin-images/<filename>.jpg`

via the Vercel deploy of this repo. Buffer's `media[picture]` field can point at that
URL directly.

The `hermes_post_manifest.csv` has a new `image_url` column populated with the public
URL for each post. Use that column; do not compute URLs from the file path.

## State files Hermes writes

Hermes writes its state files (`hermes_linkedin_chain_state.json`, logs, etc.) to a
location of its choosing on the VPS - NOT inside this repo. The repo is read-only
from Hermes's perspective.

## Clone and pull

```
git clone https://github.com/zbaitcher12/ultimate-consulting-.git
cd ultimate-consulting-
# Pull on demand to pick up any content updates:
git pull
```

Hermes only needs the files under `content/` and `public/linkedin-images/`. The rest
of the repo (website source, scripts, etc.) can be ignored.
