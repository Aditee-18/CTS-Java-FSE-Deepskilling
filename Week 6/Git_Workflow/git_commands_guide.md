# Git Workflow & CI/CD Best Practices Guide

## Key Git Concepts
- **Branching Strategy**: Use Feature Branching (`feature/feature-name`), Release Branches (`release/v1.0`), and Hotfix Branches.
- **Merge vs Rebase**: Use `git merge --no-ff` for clean history preservation or `git rebase` to keep linear history before merging.
- **Git Hooks**: Pre-commit hooks enable running linting and tests automatically before committing.

## Useful Git Commands

```bash
git checkout -b feature/login-page
git add .
git commit -m "feat: add login page implementation"
git push origin feature/login-page
```

## Creating Pull Requests & Merging
1. Push your feature branch to remote.
2. Open a Pull Request against `main`.
3. Ensure automated CI checks pass before merging.
