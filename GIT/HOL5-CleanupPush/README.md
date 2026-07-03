# Git HOL 5: Cleanup and Push to Remote

## Objective

Learn how to verify the state of your local repository, clean up branches, pull updates from a remote repository, and push your final changes to the remote.

---

## Prerequisites

- A Git repository with completed work on the master branch.
- A remote repository configured (e.g., GitHub, GitLab, Bitbucket).
- Remote already added via `git remote add origin <url>`.

---

## Step 1: Verify Master Branch Status

Ensure you are on the master branch and the working directory is clean.

```bash
git status
```

Expected output:

```
On branch master
nothing to commit, working tree clean
```

If you are not on master, switch to it:

```bash
git checkout master
```

---

## Step 2: List All Branches

View all local and remote branches to ensure cleanup is complete.

```bash
git branch -a
```

Expected output (after previous HOL cleanups):

```
* master
  remotes/origin/master
```

If there are any leftover branches, delete them:

```bash
git branch -d <branch-name>
```

---

## Step 3: Pull from Remote

Fetch and integrate changes from the remote repository to ensure your local branch is up to date.

```bash
git pull origin master
```

If there are no remote changes:

```
Already up to date.
```

If there are remote changes, Git will merge them automatically (or prompt for conflict resolution if needed).

---

## Step 4: Push to Remote

Push all your local commits on the master branch to the remote repository.

```bash
git push origin master
```

Expected output:

```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XX.XX KiB | XX.XX MiB/s, done.
Total XX (delta X), reused 0 (delta 0)
To <remote-url>
   xxxxxxx..xxxxxxx  master -> master
```

If this is the first push:

```bash
git push -u origin master
```

The `-u` flag sets the upstream tracking reference so future pushes can be done with just `git push`.

---

## Step 5: Verify Changes in Remote Repository

Open your remote repository in a web browser and verify:

1. All committed files are present.
2. The commit history matches your local history.
3. All branches have been properly managed.

You can also verify from the command line:

```bash
git log --oneline --graph --decorate
```

Compare with the remote:

```bash
git log --oneline origin/master
```

Fetch the latest remote state:

```bash
git fetch origin
```

Check if local and remote are in sync:

```bash
git status
```

Expected output:

```
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

---

## Summary of Commands

| Command | Description |
|---|---|
| `git status` | Check working directory and branch status |
| `git checkout master` | Switch to master branch |
| `git branch -a` | List all local and remote branches |
| `git branch -d <name>` | Delete a local branch |
| `git pull origin master` | Pull changes from remote master |
| `git push origin master` | Push local commits to remote master |
| `git push -u origin master` | Push and set upstream tracking |
| `git fetch origin` | Fetch remote changes without merging |
| `git log --oneline --graph --decorate` | View commit history graph |
| `git log --oneline origin/master` | View remote commit history |

## Complete Git Workflow Summary

```
git init → git add → git commit → git remote add → git pull → git push
```

| Phase | Commands |
|---|---|
| Setup | `git init`, `git config` |
| Track Changes | `git add`, `git commit` |
| Branching | `git branch`, `git checkout`, `git merge` |
| Ignore Files | `.gitignore` |
| Resolve Conflicts | Manual edit, `git add`, `git commit` |
| Sync with Remote | `git pull`, `git push` |
