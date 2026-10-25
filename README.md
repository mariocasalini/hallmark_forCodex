# Hallmark for Codex

**A Codex-focused adaptation of [Nutlope/hallmark](https://github.com/Nutlope/hallmark), preserving its themes, visual checks and MIT license.**

[usehallmark.com](https://www.usehallmark.com) &nbsp;·&nbsp; forty-eight themes &nbsp;·&nbsp; custom on request &nbsp;·&nbsp; redesign and audit by name

Made by Together AI.

<p align="center">
  <img src="site/OG-hallmark.png" alt="Hallmark, the design skill that ends AI slop" />
</p>

Hallmark holds a hard floor and then gets out of the way. It deals three themes from a catalog of forty-eight materials, builds the page around what the visitor came to do, and lints the result in a real browser against the tells that read as machine-made: the eyebrow above every heading, tracked-capital labels, one coloured word in a headline, a page of empty frames or nothing but photographs, a hero that misses its screen, an email sign-up at the end of every page, a form that says thanks without sending anything. A fresh-context reviewer gets the last word.

The gates come in tiers. The **Floor** never ships (contrast, focus, reduced motion, invented facts, a broken phone layout). **Reflex** gates are the defaults a model falls into; a build with a reason may overrule one on the record. **Finish** checks are craft detail that never blocks a ship.

## New in v2

- **Forty-eight themes.** Each is a material (paper, type, colour, surfaces, its own components and texture) with a picture of a finished page, and the build lays out its own page in it.
- **Built from the job.** A booking page books, a shop sells, a newsletter subscribes: the action sits where the category puts it, and the page ends on it.
- **Custom.** Ask for a custom page and Hallmark designs from your prompt alone, under the same rules and checks.
- **Your real product.** Point it at a URL, a dev server or an app and it captures the screenshots itself.
- **Real photographs.** 755 openly licensed photos, picked per subject and credited on the page.
- **Redesign and audit.** `$hallmark redesign <path>` rebuilds a page and keeps its content and wiring; `$hallmark audit <path>` only reports.

## Themes

<table>
  <tr>
    <td width="20%"><a href="https://www.usehallmark.com/themes/dusk/"><img src="docs/screenshots/dusk.jpg" alt="Dusk theme: Closewise, bank reconciliation" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/cobalt/"><img src="docs/screenshots/cobalt.jpg" alt="Cobalt theme: Relay, a webhook API" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/studio/"><img src="docs/screenshots/studio.jpg" alt="Studio theme: Field Office, an identity studio" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/atelier/"><img src="docs/screenshots/atelier.jpg" alt="Atelier theme: Maison Orla, a fragrance atelier" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/ribbon/"><img src="docs/screenshots/ribbon.jpg" alt="Ribbon theme: Lull, a sleep sounds app" /></a></td>
  </tr>
  <tr>
    <td><b>Dusk</b><br/><sub>Closewise, bank reconciliation</sub></td>
    <td><b>Cobalt</b><br/><sub>Relay, a webhook API</sub></td>
    <td><b>Studio</b><br/><sub>Field Office, an identity studio</sub></td>
    <td><b>Atelier</b><br/><sub>Maison Orla, a fragrance atelier</sub></td>
    <td><b>Ribbon</b><br/><sub>Lull, a sleep sounds app</sub></td>
  </tr>
  <tr>
    <td width="20%"><a href="https://www.usehallmark.com/themes/furrow/"><img src="docs/screenshots/furrow.jpg" alt="Furrow theme: Fieldbook, farm records" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/dose/"><img src="docs/screenshots/dose.jpg" alt="Dose theme: Tandem, a family medication app" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/hum/"><img src="docs/screenshots/hum.jpg" alt="Hum theme: Sprout, a reading game for kids" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/terminal/"><img src="docs/screenshots/terminal.jpg" alt="Terminal theme: burrow, a dotfiles CLI" /></a></td>
    <td width="20%"><a href="https://www.usehallmark.com/themes/hedgerow/"><img src="docs/screenshots/hedgerow.jpg" alt="Hedgerow theme: Five Mile Gin, a distillery" /></a></td>
  </tr>
  <tr>
    <td><b>Furrow</b><br/><sub>Fieldbook, farm records</sub></td>
    <td><b>Dose</b><br/><sub>Tandem, a family medication app</sub></td>
    <td><b>Hum</b><br/><sub>Sprout, a reading game for kids</sub></td>
    <td><b>Terminal</b><br/><sub>burrow, a dotfiles CLI</sub></td>
    <td><b>Hedgerow</b><br/><sub>Five Mile Gin, a distillery</sub></td>
  </tr>
</table>

Ten of the forty-eight. A theme is a material, not a plan: it never says what a page contains or in what order, so two prompts in one theme make two different pages. Each is one file of at most 8 KB in [`references/themes/`](skills/hallmark/references/themes/) with a picture beside it; a build reads exactly one. See them all at [usehallmark.com](https://www.usehallmark.com).

## Custom

Say **custom** and Hallmark drops the themes: no plan, no components, no palette recipe, only the floor, the gates and a short direction in [`direction.md`](skills/hallmark/references/direction.md) to find one idea that only this client has and let it run the page.

## How a build runs

1. Pre-flight reads the project (fonts, palette, framework, a locked `design.md`) and asks once for the material: photos, screenshots, real numbers. Nothing is invented.
2. `scripts/theme.mjs deal` offers three themes that fit the prompt and clear the log; `draw` deals the page's anatomy from its job.
3. The hero is built alone, rendered and reviewed cold before the rest of the page exists.
4. `scripts/sloplint.mjs --render` checks the page at eight widths, then a subagent reviews it with fresh eyes.

Each page is self-contained HTML and CSS, stamped in its first CSS comment with the decisions it took.

## Redesign

Hallmark never starts on a design that already exists unless you name it:

```
$hallmark redesign ./src/app
$hallmark audit ./index.html
```

A full redesign keeps the content and the wiring and changes the system and the layout; say *keep the layout* for a restyle or *polish* for only the tells. `sloplint --before` records every link, field, handler and heading first, `sloplint --kept` fails the redesign if one went missing, and the handoff is a side-by-side before and after.

## Install for Codex

Requires Node.js 18 or later. Install directly from this repository:

```sh
npx skills add mariocasalini/hallmark_forCodex -g --agent codex
```

Or clone the repository and use the included installer:

```sh
git clone https://github.com/mariocasalini/hallmark_forCodex.git
cd hallmark_forCodex
node skills/hallmark/scripts/install.mjs --global
```

For a project-local installation, run the installer by absolute path from the target project's directory with `--project` instead of `--global`. Use `--dry-run` to validate without copying. Existing installations are never overwritten. Global copies go to `~/.agents/skills/hallmark`; local copies go to `.agents/skills/hallmark`. Start a new Codex chat after installation.

Invoke with `$hallmark <prompt>`, `$hallmark redesign <target>` or `$hallmark audit <target>`. Automatic selection remains enabled for new design requests.

Browser checks require `puppeteer-core` and Chrome/Chromium. Without them the static checks still run, and the handoff must disclose that rendering was not verified.

### Codex adaptation

- Codex-compatible skill metadata and `agents/openai.yaml`.
- Tools and browser previews selected from the current session's capabilities.
- Independent reviews when delegation is available and authorized; otherwise an explicitly labeled in-thread review.
- Clarifying questions only for material gaps in the request.
- No Claude Code hooks or agent-setting changes.
- Optional Together image generation requires authorization, even when an API key exists.

The original 48 themes, photo catalog, lint rules and license are retained. The site and legacy Claude plugin metadata remain as upstream reference material; use the Codex installation instructions above for this adaptation.

## Licence

MIT. Use it, fork it, ship it.

The photo library (`skills/hallmark/scripts/photos.json`) lists photographs hosted on Wikimedia Commons and holds no image files. Each keeps its own licence (CC0, public domain, CC BY or CC BY-SA), and Hallmark credits every one it uses on the page. It does not use stock sites (Unsplash, Pexels, Pixabay), whose terms bar AI tools from picking their images.
