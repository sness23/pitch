pitch deck for doi.bio

absolutely—here’s a crisp, investor-ready “deck-in-prose” you can drop into slides. I tuned this to doi.bio as you’ve described it (AI + a large interlinked markdown corpus of papers on the left; molecular viewer/PDB structures on the right; collaborative intelligence for structural biology).

# doi.bio — Intelligence Augmentation for Molecular Discovery

## 1) One-line

**doi.bio is the copilot + workspace for structural biologists**—a place where AI reads the literature with you, reasons over structures, and runs/visualizes analyses so teams can move from “paper → hypothesis → structure → design” dramatically faster.

## 2) The problem

Drug discovery increasingly hinges on structural reasoning (target biology, on/off-target risks, selectivity, resistance mechanisms). But today’s workflow is fragmented: PDFs scattered across drives, structures in PDB/AlphaFold, annotations in private notes, and ad-hoc tools for docking/MD/visualization. Scientists context-switch across 8–12 tools with brittle handoffs and almost no shared memory. Meanwhile:

* The **PDB keeps growing** (≥229k total entries in 2024; ~243k in 2025 YTD), with ~14–15k new structures annually—signal is buried in a tidal wave of data. ([RCSB PDB][1])
* **AlphaFold DB** now covers **~200M predicted structures**, i.e., nearly all catalogued proteins—amazing availability, but overwhelming at the bench without guided reasoning. ([AlphaFold][2])
* Pharma’s **R&D cost per asset** hovers around **$2.23B** on average; every month saved matters. ([Deloitte][3])

The gap isn’t access—it’s *intelligent synthesis* and *workflow continuity*.

## 3) What doi.bio does (product)

A unified, opinionated workspace that keeps the scientist in the loop:

1. **Left pane (knowledge & reasoning):** an interlinked, Obsidian-style markdown knowledgebase of papers/notes, enriched by AI that extracts entities (targets, ligands, assays), builds causal maps, and proposes next steps.
2. **Right pane (structure & computation):** live molecular context—PDB/AlphaFold retrieval, chain/domain focus, pocket annotation, and one-click “micro-workflows” (e.g., compare binding poses across papers; flag clashes; assess conservation; prep an MD system; generate figures).
3. **Collaborative intelligence:** comments, versioned rationales, and experiment “narratives” so teams share *why* a decision was made (not just the result).
4. **APIs & automations:** integra­tions to UniProt/AlphaFold/PDB, plus hooks for docking/MD and analytics—so doi.bio can serve as the orchestration layer in your R&D stack. ([UniProt][4])

Think **Notion + Semantic Scholar + 3D structural lab**, designed for structural biochemists and medicinal chemists.

## 4) Why now (tailwinds)

* **Data abundance**: 200M+ AF structures; accelerating PDB depositions. ([AlphaFold][2])
* **AI adoption in discovery**: multiple independent analyses project a **multi-billion-dollar AI-drug-discovery market** this decade (see Market below). ([Grand View Research][5])
* **Bench pressure**: post-AlphaFold labs need tooling that *operationalizes* AI predictions—triage, annotations, and experiment design—not just raw coordinates. (Industry narratives reflect this shift.) ([OUP Academic][6])

## 5) Product snapshot (MVP → v1)

* **MVP (today):** AI-augmented reading + structured notes; PDB/AlphaFold lookup; core viewer; curated micro-workflows (e.g., pocket/ligand extraction, simple overlays, figure export); provenance-first collaboration.
* **V1 (next 6–9 months):** enriched entity graph (targets/variants/ligands/assays), “living methods” templates for repeated analyses, plug-and-play compute (docking/MD) with cached results, and a secure enterprise mode (SSO, auditing, private models).

## 6) Differentiation & moat

* **Human-in-the-loop design** (not “push-button discovery”): the system captures *reasoning*, decisions, and reusable patterns.
* **Structure-aware knowledge graph** that ties literature claims directly to coordinates, pockets, and residues.
* **Workflow primitives** (micro-workflows) that compose into lab-specific playbooks—this becomes sticky IP inside each org.
* **Interoperability first**: reads public sources (PDB, UniProt, AlphaFold DB) and your private corpus; exports cleanly to the rest of your stack. ([RCSB PDB][1])

## 7) Market: how big is this?

There are two overlapping wedges we can capture:

### A) Bioinformatics / structural & 3D protein analysis software

* **Bioinformatics software & services**: ~$31.7B in **2025**, growing ~17% CAGR to ~$94.8B by 2032. ([Fortune Business Insights][7])
* **3D protein structure analysis** tools/services: **$3.06B in 2025**, projected to **$6.88B by 2034** (~9.4% CAGR). ([Precedence Research][8])
* **Cryo-EM/X-ray services markets** (adjacent service spend that our software can help *reduce* or *aim better*): e.g., **cryo-EM services ~$1.3B in 2025** growing to **$2.5B by 2032**. ([Coherent Market Insights][9])

### B) AI in drug discovery (our “why-now” budget line)

Independent firms disagree on absolute sizing but agree on steep growth:

* **Grand View Research**: $1.5B (2023) → **$20.3B by 2030** (~29.7% CAGR). ([Grand View Research][5])
* **MarketsandMarkets**: $1.86B (2024) → **$6.89B by 2029** (~29.9% CAGR). ([MarketsandMarkets][10])
* **Precedence/press**: **$6.93B in 2025** → $16.5B by 2034 (~10% CAGR). ([Precedence Research][11])

**Takeaway:** Whether you model this as “bioinformatics SaaS for structure-centric teams” or as “the collaboration/ops layer in AI-enabled discovery,” the spend available to software like doi.bio is **multi-billion today** and growing double-digits.

(For context on urgency: big pharma’s R&D cost per asset and timelines keep pressure on tools that compress cycle time; the “save months” story is tangible.) ([Deloitte][3])

## 8) Who buys—and why they say yes

* **Primary buyers/users:** structural biologists, computational chemists, medicinal chemists; PIs in academia; biotech R&D leads; pharma therapeutic area teams.
* **Compelling events:** new program kickoff; triaging a series; resistance/variant analysis; partner diligence; onboarding new team members.
* **Value prop in numbers:**

  * *Time to triage a target with structural context*: **days → hours**.
  * *Onboarding*: new scientists inherit the graph of rationales, cutting ramp time by **>50%** (internal goal).
  * *Fewer dead-end designs*: early structural alerts (clashes/solvent exposure/conservation flags) reduce wasted cycles; even a **1–2%** improvement can be ROI-material at pharma scale.

## 9) Business model & pricing (initial)

* **SaaS per-seat** for research teams (Starter $79–$149/mo; Pro $249–$399/mo with compute credits & private model fine-tuning).
* **Enterprise** (SSO, audit, private vaults, VPC/on-prem connectors) with annual contracts (mid-five to low-six figures).
* **Add-ons**: secure compute packs (docking/MD), compliance features, and **API** for LIMS/ELN/Notebooks.

## 10) Go-to-market

* **Bottom-up, product-led**: generous free tier for academics; viral loops via shareable narratives/figures.
* **Design-partner program** with 5–10 labs/biotechs to harden micro-workflows.
* **Enterprise land-and-expand**: start with one therapeutic team, expand across TA/platform/DP.
* **Ecosystem**: integrations with PDB/UniProt/AlphaFold DB; demo libraries keyed to high-interest targets (kinases, viral proteins, GPCRs, KRAS). ([RCSB PDB][1])

## 11) Competitive landscape

* **ELNs/LIMS & general note tools**: great for storage, weak at structure-aware reasoning.
* **Point tools** (docking suites, MD, viewers): powerful but isolated; doi.bio orchestrates and captures the narrative between them.
* **AI-in-discovery platforms**: many focus on *generation*; doi.bio focuses on **augmented human reasoning and continuity**—the connective tissue across literature ⇄ structure ⇄ design.

## 12) Team (short)

* **Founder**: Steven Ness—structural biochemist + ML PhD; decades of Linux/software experience; deep context on PDB/AlphaFold ecosystems; prior work on molecular visualization and AI-assisted research tools. (Advisory bench: recruiting structural biology, med-chem, and platform veterans.)

## 13) Roadmap (select)

* **Q1–Q2:** enterprise-grade security, SSO; graph querying; figure pipelines; first compute providers.
* **Q3:** assay-aware templates; medicinal chemistry overlays (SAR heat-maps); sequence/variant intelligence (UniProt-linked). ([UniProt][4])
* **Q4:** private model adapters; compliant audit trails; CRO handoff packages.

## 14) Traction (early)

* Prototype in hands of N design partners; early users producing sharable “experiment narratives”; inbound interest from X labs (update with your real counts as available). (Optional: add any letters of intent or pilot MOUs here.)

## 15) The ask

* **$1.5–$2.5M pre-seed** to hire core engineering (graph + viewer + integrations), security/compliance, and GTM; **18–24-month runway** to $500k–$1M ARR with 8–12 enterprise pilots.

## 16) Why we win

We make scientists **faster and surer** by unifying the two places their minds live: papers and proteins. The market is large and accelerating, the pain is immediate, and our architecture captures not just results but *reasoning*—the compounding asset most R&D tools ignore.

---

### Appendix: Market sizing references (for your “sources” slide)

* PDB growth & totals (RCSB stats). ([RCSB PDB][1])
* AlphaFold DB coverage (~200M structures). ([AlphaFold][2])
* AI in Drug Discovery market (range of estimates): Grand View Research; MarketsandMarkets; Precedence/press. ([Grand View Research][5])
* Bioinformatics market size and growth (Fortune Business Insights). ([Fortune Business Insights][7])
* Cryo-EM/X-ray services (adjacent spend). ([Coherent Market Insights][9])
* Pharma R&D cost per asset (Deloitte). ([Deloitte][3])

If you want, I can convert this directly into a 10–12-slide deck (title, problem, solution, demo, market, product, GTM, competition, team, roadmap, traction, ask) and tailor numbers to any specific targets/indications you’re pitching.

[1]: https://www.rcsb.org/stats/growth/growth-released-structures?utm_source=chatgpt.com "Overall Growth of Released Structures Per Year"
[2]: https://alphafold.ebi.ac.uk/?utm_source=chatgpt.com "AlphaFold Protein Structure Database"
[3]: https://www.deloitte.com/us/en/Industries/life-sciences-health-care/articles/measuring-return-from-pharmaceutical-innovation.html?utm_source=chatgpt.com "Measuring the return from pharmaceutical innovation 2024"
[4]: https://www.uniprot.org/uniprotkb?utm_source=chatgpt.com "UniProt Knowledgebase (UniProtKB)"
[5]: https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-drug-discovery-market?utm_source=chatgpt.com "Artificial Intelligence In Drug Discovery Market Report, 2030"
[6]: https://academic.oup.com/nar/article/52/D1/D368/7337620?utm_source=chatgpt.com "AlphaFold Protein Structure Database in 2024: providing ..."
[7]: https://www.fortunebusinessinsights.com/bioinformatics-market-109493 "Bioinformatics Market Size, Share | Research Report [2032]
    "
[8]: https://www.precedenceresearch.com/3d-protein-structures-analysis-market?utm_source=chatgpt.com "3D Protein Structures Analysis Market Size to Hit USD 6.88 ..."
[9]: https://www.coherentmarketinsights.com/industry-reports/cryo-em-structure-analysis-services-market?utm_source=chatgpt.com "Cryo-EM Structure Analysis Services Market Share, 2025- ..."
[10]: https://www.marketsandmarkets.com/Market-Reports/ai-in-drug-discovery-market-151193446.html?utm_source=chatgpt.com "AI in Drug Discovery Market Growth, Drivers, and Opportunities"
[11]: https://www.precedenceresearch.com/artificial-intelligence-in-drug-discovery-market?utm_source=chatgpt.com "Artificial Intelligence In Drug Discovery Market Size to Surpass USD ..."


