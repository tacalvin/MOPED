# MOPED project webpage

Static project page for **Multi-modal Pose Diffuser: A Multimodal Generative Conditional Pose Prior**, accepted to **WACV 2027**.

## Preview

From this directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No package installation or build step is needed.

## Publish on GitHub Pages

1. Commit and push `index.html`, `static/`, `.nojekyll`, and the referenced files in `assets/` to the branch used for GitHub Pages.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**.
3. Select that branch (`webpage` for this change) and **/ (root)**, then save.

For the existing `tacalvin/MOPED` repository, the expected project URL is https://tacalvin.github.io/MOPED/ once Pages deployment completes.

All local links are relative, so the page works under the `/MOPED/` project path and on a custom domain. Styles and icons are served locally. There are no analytics, external font requests, or build dependencies.

## Edit

- `index.html`: paper title, authors, conference, content, results, and BibTeX.
- `static/css/bulma.min.css` and `static/css/index.css`: upstream template styles.
- `static/css/moped.css`: small MOPED-specific additions.
- `static/js/moped.js`: citation copy and scroll-to-top actions.
- `static/js/fontawesome.all.min.js`: icons bundled with the upstream template.
- `static/images/`: paper teaser and project favicon.
- `assets/`: optimized figures derived from the supplied LaTeX assets. The hero uses the original teaser in `static/images/`.
- `MOPED.pdf`: local reference only; excluded from the website commit. The paper button is disabled until a public paper URL is supplied.

The repository button links to this project's repository; it does not claim that implementation code or model weights have been released. The citation uses the accepted conference and year without inventing page numbers or a DOI.

## Checks completed

JavaScript syntax, local file links, section anchors, unique element IDs, and template placeholder removal have been checked. A browser was unavailable in the authoring session, so desktop/mobile rendering and clipboard interaction still need a visual browser check.

## Template attribution

Adapted from Eliahu Horwitz’s [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), itself based on [Nerfies](https://nerfies.github.io/). Template-derived website code retains the [Creative Commons Attribution-ShareAlike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/), as credited in the footer. This attribution does not change the licensing of the paper or research materials.

The original cloned `Academic-project-page-template/` directory is retained for reference; the deployed website is the root `index.html`. The earlier `style.css` and `script.js` files are unused by the template-based page.
