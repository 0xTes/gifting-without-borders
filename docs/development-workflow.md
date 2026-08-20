# Development Workflow

## Branch model

```text
main
    production-ready checkpoints

develop
    integrated development baseline

feature/*
    isolated, reviewable milestones
```

`main` is not a workspace for feature development. `develop` receives reviewed milestones; do not implement features directly on it. Each `feature/*` branch should represent one meaningful scope with a clear base and pull request back to `develop`.

## Standard flow

```text
develop
  ↓
feature/*
  ↓
implementation
  ↓
lint / build / diff verification
  ↓
push
  ↓
PR into develop
  ↓
review
  ↓
merge
  ↓
sync develop
  ↓
delete merged branch when appropriate
```

Before work starts, inspect branch ancestry and the working tree. After a PR merges, fast-forward local `develop` from `origin/develop` before creating the next feature branch. Do not force-push or rewrite shared history. Never mix unrelated work in the same commit or PR.

## Verification and review

Every PR description must state the checks actually run. For application or documentation milestones, run:

```bash
npm run lint
npm run build
git diff --check
```

Also inspect the PR diff for unintended files, generated output, secrets, package changes, and factual claims outside the approved source material.

## Commit style

Use concise conventional commits aligned to the existing history, for example:

```text
feat(pages): build trusted public information routes
chore(assets): recover verified legacy media
docs: establish project governance and content readiness
```

One commit should describe one coherent change. Stage explicit paths when the working tree is mixed.
