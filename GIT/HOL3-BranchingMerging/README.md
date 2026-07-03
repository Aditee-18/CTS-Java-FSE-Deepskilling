# Git HOL 3: Branching and Merging

## Objective

Learn how to create branches, switch between them, make changes, view differences, merge branches, and delete branches in Git.

---

## Prerequisites

Ensure you have an initialized Git repository with at least one commit on the master branch.

```bash
git status
```

---

## Step 1: Create a New Branch

Create a new branch named `GitNewBranch` from the current branch (master).

```bash
git branch GitNewBranch
```

---

## Step 2: List All Branches

View all local and remote branches. The current branch is indicated with an asterisk (*).

```bash
git branch -a
```

Expected output:

```
  GitNewBranch
* master
```

---

## Step 3: Switch to the New Branch

Switch your working directory to the new branch.

```bash
git checkout GitNewBranch
```

Alternatively, you can create and switch in one command:

```bash
git checkout -b GitNewBranch
```

---

## Step 4: Add Files and Commit on the New Branch

Create a new file on the branch.

```bash
echo "This is a new feature added in GitNewBranch" > feature.txt
```

Stage and commit the file:

```bash
git add feature.txt
```

```bash
git commit -m "Add feature.txt on GitNewBranch"
```

---

## Step 5: Switch Back to Master

Return to the master branch.

```bash
git checkout master
```

Verify that `feature.txt` does not exist on master:

```bash
ls
```

---

## Step 6: View Differences Between Branches

Compare the differences between master and GitNewBranch.

```bash
git diff master GitNewBranch
```

This will show the changes that exist in `GitNewBranch` but not in `master`.

You can also view a summary of changes:

```bash
git diff --stat master GitNewBranch
```

---

## Step 7: Merge the Branch into Master

While on the master branch, merge the changes from GitNewBranch.

```bash
git merge GitNewBranch
```

Expected output:

```
Updating xxxxxxx..xxxxxxx
Fast-forward
 feature.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt
```

---

## Step 8: View the Commit Log

View a graphical representation of the commit history.

```bash
git log --oneline --graph --decorate
```

Expected output:

```
* xxxxxxx (HEAD -> master) Add feature.txt on GitNewBranch
* xxxxxxx Initial commit
```

---

## Step 9: Delete the Merged Branch

Since the branch has been merged, it can be safely deleted.

```bash
git branch -d GitNewBranch
```

Verify the branch has been deleted:

```bash
git branch -a
```

---

## Summary of Commands

| Command | Description |
|---|---|
| `git branch <name>` | Create a new branch |
| `git branch -a` | List all branches (local and remote) |
| `git checkout <name>` | Switch to a branch |
| `git checkout -b <name>` | Create and switch to a new branch |
| `git add <file>` | Stage a file |
| `git commit -m "message"` | Commit staged changes |
| `git diff master GitNewBranch` | View differences between branches |
| `git diff --stat master GitNewBranch` | View summary of differences |
| `git merge <branch>` | Merge a branch into the current branch |
| `git log --oneline --graph --decorate` | View commit history as a graph |
| `git branch -d <name>` | Delete a merged branch |
| `git branch -D <name>` | Force delete a branch (even if unmerged) |
