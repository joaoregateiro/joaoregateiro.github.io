# João Regateiro — personal website

Static academic portfolio for [joaoregateiro.github.io](https://joaoregateiro.github.io/).
The site uses semantic HTML, responsive CSS and a small vanilla JavaScript enhancement.
No package installation or build step is required for GitHub Pages.

## Files

- `index.html`: biography, research interests, publications, CV and contact details.
- `css/style.css`: responsive layouts, typography, focus styles, reduced-motion and print styles.
- `js/site.js`: publication search, year filtering, result counts and active navigation.
- `images/`: existing portrait, publication thumbnails and institutional logos.

All publication entries are in the HTML and remain readable without JavaScript.
The filter controls appear only when JavaScript initializes successfully.
To add a publication, insert an `article.publication` in the matching year section,
set its `data-year`, and update the year selector, total badge and year range as needed.

## Review and corrections — 17 November 2026

The original page contained invalid table/link nesting, repeated IDs, unclosed
paragraphs, an extra iframe closing tag, missing accessible link names, empty
publication links, malformed YouTube URLs and invalid CSS declarations/comments.
It also depended on Bootstrap 3, jQuery 1 and icon-font CDNs for a static page.
The refresh removes those dependencies and replaces the layout with native HTML/CSS.

Content corrections include the 2022 date for Temporal Shape Transfer, the omitted
MORGAN coauthor François Le Clerc, “Master of Science”, the MSc start year 2013,
“December”, InterDigital capitalization and the completed PhD status.
The original uncommitted BMVC entry and IBC PDF link are retained.
InterDigital is described with the general title “Researcher”; a current formal job
title was not independently confirmed. The supplied 2023 CV subsequently confirmed
the PhD dates as 2016–2020, MimeTic as 2022–2023, and Morpheo as 2020–2022; the
website and downloadable CV now use those dates.

## Literature update and sources

Seven previously missing records were added, for a total of 16 entries. Conference
papers, journal articles, preprints and the thesis are identified separately.
The 2021 shape-transfer preprint is listed as its own titled record without claiming
it is separate peer-reviewed work from the later temporal shape-transfer paper.

| Year | Added record | Verification |
| --- | --- | --- |
| 2026 | The MPEG Avatar Representation Format (ARF): An Interoperable Container and Animation Framework for Avatars | [Publication record](https://pubmed.ncbi.nlm.nih.gov/42647699/), [DOI](https://doi.org/10.1109/MCG.2026.3727817) |
| 2026 | DiT-Garment: Garment Dynamics with Diffusion Transformers | [arXiv record](https://arxiv.org/abs/2609.18510), [author project](https://dumoulina.github.io/dit-garment/) |
| 2025 | Neural Implicit Avatar Conditioned on Human Pose, Identity and Gender | [InterDigital](https://www.interdigital.com/research_papers/neural-implicit-avatar-conditioned-on-human-pose-identity-and-gender), [Inria report](https://rex-radar.inria.fr/report/2025/combo/index.html), [DOI](https://doi.org/10.1145/3756863.3769702) |
| 2025 | Geometry-aware 3D Gaussian Splatting for View-Dependent Rendering of 3D Head Models | [DBLP author bibliography](https://dblp.org/pid/228/3207.html), [DOI](https://doi.org/10.1145/3746237.3746288) |
| 2025 | Implicit Shape Avatar Generalization across Pose and Identity | [Eurographics record](https://diglib.cgv.tugraz.at/items/0df9bde0-92c4-4973-ab55-f88e05615bc9), [DOI](https://doi.org/10.2312/egs.20251049) |
| 2024 | MPEG-I Scene Description: A Scene Description Framework for Interactive and Immersive Media Experiences | [SMPTE publisher record](https://journal.smpte.org/periodicals/SMPTE%20Motion%20Imaging%20Journal/133/3/15/), [DOI](https://doi.org/10.5594/JMI.2024/NQQJ1648) |
| 2021 | 3D Human Shape Style Transfer | [arXiv record](https://arxiv.org/abs/2109.01587) |

Other corrected records: [BMVC paper](https://papers.bmvc2023.org/0417.pdf),
[MORGAN metadata](https://dblp.uni-trier.de/rec/conf/vrml/AvrilRGCG23.html),
[Temporal Shape Transfer at Inria](https://radar.inria.fr/report/2022/morpheo/index.html),
[2019 CVMP project](https://cvssp.org/projects/4d/deep-4d-shape-representation/),
[2018 3DV project](https://cvssp.org/projects/4d/HSDSR/).

Some publisher pages reject automated access. DOI links are retained as canonical
record links; their inclusion does not imply that every publisher page was fetched
successfully. The legacy IBC PDF URL could not be independently retrieved during
the review and is retained from the original working copy.

## Workshops and CV

The Workshops and talks section includes the coauthored NGA 2025 contribution
[Generative Articulated Neural Fields to multiple identities and poses](https://hal.science/hal-04978097),
verified against the [coauthor bibliography](https://morpheo.inrialpes.fr/people/boukhayma/index.php?id=elements)
and [Inria annual report](https://rex-radar.inria.fr/report/2025/combo/index.html).
The existing Web3D 2023 and 3DV 2018 oral-paper designations are retained as
coauthorship records, without asserting who delivered those presentations.
ICME is excluded following the owner's correction.

The public PDF is `files/Joao-Regateiro-CV.pdf`, linked from the CV section.
It preserves the supplied 2023 CV's fonts, blue headings, ruled tables and date
columns, with updated content and a location in place of a home street address.
The old Pose2Shape entry marked “under review” in 2021 is excluded because its
subsequent publication status has not been verified.

The portrait uses the replacement photo supplied by the owner and is displayed
at a smaller size on desktop and mobile.
