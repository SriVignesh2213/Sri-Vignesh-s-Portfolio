# Sri Vignesh R — Portfolio

Personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.
The site exports static files and deploys to GitHub Pages through GitHub Actions.

## Sections

- `/projects` — AI, data science, and full-stack projects
- `/internships` — internships, achievements, and certifications
- `/skills` — technical skills
- `/resume` — view or download the resume PDF

## Run locally

### Requirements

- [Bun](https://bun.sh/) 1.4 or later
- Git

### Install and start

From the project directory, run:

```powershell
bun install
Copy-Item .env.example .env.local
bun run dev
```

Open <http://localhost:3000>.

The local development server does not need API credentials. Optional analytics
variables in `.env.local` can stay blank.

### Create a production export locally

```powershell
bun run build
```

Next.js writes static site files to `out/`. GitHub Actions builds and publishes
this folder automatically.

## Deploy to GitHub Pages

### 1. Push project to GitHub

Create an empty GitHub repository without a README or license, then run these
commands from the project directory for a new local copy:

```powershell
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/OWNER/REPOSITORY.git
git push -u origin main
```

Replace `OWNER` and `REPOSITORY` with your GitHub account and repository name.
The workflow detects repository name and configures the correct site path.

### 2. Enable GitHub Actions as the Pages source

In the GitHub repository, open **Settings → Pages**. Under **Build and
deployment**, choose **GitHub Actions** as the source.

### 3. Start deployment

Push a commit to `main`, or open the repository’s **Actions** tab and run
**Deploy portfolio to GitHub Pages** manually. The workflow installs Bun
dependencies, creates the static export, and deploys `out/`.

### 4. Open the published site

- A repository named `<owner>.github.io` publishes at
  `https://<owner>.github.io/`.
- Other repositories publish at `https://<owner>.github.io/<repository>/`.

Find the exact URL under **Settings → Pages** or in the completed deployment
workflow.

## Deployment notes

- The workflow sets `SITE_URL` and `NEXT_PUBLIC_BASE_PATH` automatically.
- GitHub Pages serves public files. Never put private credentials in
  `NEXT_PUBLIC_*` variables or commit `.env.local`.
- GitHub Pages supports static output only. The portfolio does not depend on
  server APIs; dynamic API routes and rewrites are not part of this deployment.
- To use a custom domain, configure it under **Settings → Pages**, set
  an Actions repository variable named `SITE_URL` to `https://your-domain`, and
  add a `public/CNAME` file containing your domain. The workflow then deploys
  from the domain root.
