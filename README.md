# zijianzhang30.github.io

Academic homepage for Zijian Zhang, built with Jekyll and al-folio.

## Local update workflow

1. Edit site content.
   - Homepage: `_pages/about.md`
   - Publications: `_bibliography/papers.bib`
   - Projects: `_projects/*.md`
   - CV data: `_data/cv.yml`
   - Profile photo: `assets/img/profile.png`

2. Preview locally.

```bash
cd /Users/zirry/Desktop/resume/al-folio
PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH" bundle exec jekyll build
```

3. Commit and push to `main`.

```bash
git add .
git commit -m "Update homepage"
git push
```

4. Publish the rendered site to `gh-pages`.

```bash
cd /Users/zirry/Desktop/resume/al-folio
PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH" bundle exec jekyll build
git init _site
git -C _site config user.name "Zijian Zhang"
git -C _site config user.email "zijianzhang821@gmail.com"
git -C _site add .
git -C _site commit -m "Deploy site"
git -C _site branch -M gh-pages
git -C _site remote add origin git@github.com:zijianzhang30/zijianzhang30.github.io.git
git -C _site push -u origin gh-pages --force
```

## Notes

- Keep `baseurl: ""` and `url: https://zijianzhang30.github.io` in `_config.yml`.
- The homepage uses `assets/img/profile.png`.
- If the site content changes but the public page does not, republish `_site` to `gh-pages`.
