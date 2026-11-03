# XXX business valuation calculator — prototype

Interactive prototype of the slider-based "What is your agency worth?" calculator for the XXX exec team to try. Static HTML, no build step, nothing is stored or sent.

**Status:** prototype for review, published 3 November 2026. Intended to be public for about 48 hours; make the repository private or delete it after the review.

## What it shows

- Five revenue sliders (management, sales, lettings, ancillary, other) with linked number fields, keyboard support (arrows = one step, Page Up/Down = ten steps) and the ability to type above the slider's maximum.
- A live indicative valuation range with low, central and high markers, and the business-size band the total revenue falls in.
- The "Want a more accurate valuation?" conversion block and five-step explanation. The questionnaire and email flow are **not** built.

## Assumptions to confirm

The multiples, stream weights and band edges in `config.js` are placeholders chosen to behave sensibly. They are **not** taken from XXX's acquisition models and must be set by the acquisitions team before anything customer-facing is built.

## Changing the model

Everything tunable is in one file, [`config.js`](config.js). No other file needs editing.

1. Open `config.js` on GitHub and click the pencil (Edit) icon.
2. Change the numbers:
   - `anchors` — the revenue multiples. Each row says "at this total revenue, use these low / central / high multiples". Between rows the multiple is interpolated in a straight line; keep rows in ascending order of `at`.
   - `streams[].weight` — how much £1 of each revenue stream counts (1.00 = full value).
   - `streams[].max` and `step` — slider range and increment; `initial` — the value shown on load.
   - `bands` — the labels and upper limits shown on the size-band track (display only).
3. Commit the change to `main`. GitHub Pages republishes within about a minute; hard-refresh the page to see it.

The calculation is: weighted revenue W = Σ(stream × weight); total revenue T picks the multiples from `anchors`; low / central / high = W × multiple, rounded to the nearest £1,000.

| Band | Total revenue | Low × | Central × | High × |
|---|---|---|---|---|
| 1 | up to £250k | 0.80 | 0.95 | 1.10 |
| 2 | £250k–£750k | 1.00 | 1.15 | 1.30 |
| 3 | £750k–£1.5m | 1.15 | 1.30 | 1.50 |
| 4 | £1.5m–£3m | 1.30 | 1.50 | 1.70 |
| 5 | £3m+ | 1.50 | 1.75 | 2.00 |

Stream weights: management 1.00, ancillary 0.80, lettings 0.70, sales 0.50, other 0.50. Multiples are interpolated linearly between band midpoints so the result never jumps.

## Brand

Navy `#193153` and teal `#91D1B9` from the brand guidelines; greys and button style from the main website; Roboto with Satisfy for the script accent (both open-licence Google Fonts). A plain "XXX" wordmark stands in for the logo. Design tokens are CSS variables at the top of `index.html`.
