// ============================================================
//  XXX business valuation calculator — MODEL PARAMETERS
//  Edit this file to change the model. No other file needs touching.
//  All money values are in pounds (no commas, no £ sign).
// ============================================================
window.VALUATION_CONFIG = {

  // The most anyone can type into a single field.
  hardCap: 50000000,

  // One entry per slider.
  //   max     = slider's default maximum (typing above it extends the slider)
  //   step    = slider increment (arrow keys); Page Up/Down move 10 steps
  //   weight  = how much £1 of this stream counts towards the valuation
  //             (1.00 = full value, 0.50 = half). Recurring income should be highest.
  //   initial = value shown when the page loads
  streams: [
    { id: 'mgmt',  label: 'Property-management revenue', hint: 'Recurring management fees on your managed portfolio', max: 5000000, step: 10000, weight: 1.00, initial: 420000 },
    { id: 'sales', label: 'Residential sales revenue',   hint: 'Commission on completed sales',                      max: 5000000, step: 10000, weight: 0.50, initial: 180000 },
    { id: 'lets',  label: 'Lettings revenue',            hint: 'Tenant-find and let-only fees',                      max: 2000000, step: 5000,  weight: 0.70, initial: 95000 },
    { id: 'anc',   label: 'Ancillary-fee revenue',       hint: 'Renewals, inventories, referencing, referrals',      max: 1000000, step: 5000,  weight: 0.80, initial: 60000 },
    { id: 'other', label: 'Other annual revenue',        hint: 'Anything not covered above',                         max: 1000000, step: 5000,  weight: 0.50, initial: 0 }
  ],

  // Revenue multiples by TOTAL annual revenue.
  //   at   = total revenue at which these multiples apply exactly
  //   low / mid / high = multiple applied to the weighted revenue
  // Between two anchors the multiple is interpolated in a straight line,
  // so the result never jumps. Below the first anchor and above the last
  // the multiple is held flat. Keep the list in ascending order of `at`.
  anchors: [
    { at: 125000,  low: 0.80, mid: 0.95, high: 1.10 },
    { at: 500000,  low: 1.00, mid: 1.15, high: 1.30 },
    { at: 1125000, low: 1.15, mid: 1.30, high: 1.50 },
    { at: 2250000, low: 1.30, mid: 1.50, high: 1.70 },
    { at: 4000000, low: 1.50, mid: 1.75, high: 2.00 }
  ],

  // Business-size bands shown under the result (display only; the
  // multiples above drive the numbers). `top` is the band's upper limit.
  bands: [
    { name: 'Band 1 · Up to £250k',   top: 250000 },
    { name: 'Band 2 · £250k–£750k',   top: 750000 },
    { name: 'Band 3 · £750k–£1.5m',   top: 1500000 },
    { name: 'Band 4 · £1.5m–£3m',     top: 3000000 },
    { name: 'Band 5 · £3m and above', top: 6000000 }
  ],
  // Colours of the five band segments (light to dark teal), and the
  // revenue points marked along the band track.
  bandColours: ['#C5E8DA', '#A9DCC9', '#91D1B9', '#5FAE92', '#2F7A63'],
  bandEdges: [0, 250000, 750000, 1500000, 3000000, 5000000]
};
