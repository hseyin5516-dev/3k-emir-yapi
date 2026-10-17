# Full Audit Report

- URL: `https://3k-modern.vercel.app`
- Generated: `2026-10-17T08:17:43.043959`
- Overall score: `94/100`
- Score confidence: `Medium`
- Scoring version: `1`

## Score Card

| Category | Weight | Score |
| --- | ---: | ---: |
| Security Headers | 8 | 100 |
| Social Meta | 5 | 100 |
| Robots and Crawlers | 8 | 100 |
| Broken Links | 10 | 100 |
| Internal Links | 8 | 100 |
| Redirects | 3 | 100 |
| AI Search | 5 | 100 |
| Performance and Core Web Vitals | 13 | 0 |
| On-Page SEO | 10 | 100 |
| Readability | 8 | 100 |
| Entity SEO | 5 | 35 |
| Link Profile | 7 | 80 |
| Hreflang | 5 | 0 |
| Content Uniqueness | 5 | 100 |

## Findings

| Severity | Area | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- |
| Critical | link_profile | 1 orphan page(s) with zero inbound internal links. |  | Add internal links from relevant content pages to these orphan pages. |
| Warning | readability | ⚠️ 34.1% complex words (3+ syllables) — consider simplifying |  |  |
| Info | Wikidata | No Wikidata entry found for '3K Emir Yapı Group'. |  | If the entity meets Wikidata notability guidelines, create or improve an item with accurate third-party references. Do not create one solely for SEO. |
| Info | Wikipedia | No Wikipedia article found for '3K Emir Yapı Group'. |  | Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals. |
| Info | environment | Performance measurement incomplete | PageSpeed API returned an error, so CWV recommendations are less reliable. | Set `PAGESPEED_API_KEY` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output. |
| info | pagespeed | pagespeed measurement incomplete | Rate limited by Google API. Wait a few minutes or add an API key. | Rerun this check after resolving the environment/API/network limitation. |
| Info | sameAs | Missing sameAs link to Wikipedia (Primary KG signal). |  | Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO. |
| Info | sameAs | Missing sameAs link to Wikidata (Primary KG signal). |  | Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO. |

## Measurement Notes

1 checks returned errors or incomplete measurements; treat affected scores as directional.
