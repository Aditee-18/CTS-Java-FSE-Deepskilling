# Git HOL 4: Conflict Resolution

## Objective

Learn how to handle merge conflicts in Git by creating conflicting changes on two branches, attempting a merge, manually resolving the conflict, and completing the merge.

---

## Prerequisites

Ensure you have an initialized Git repository with a clean working directory on the master branch.

---

## Step 1: Verify Master is Clean

Confirm that the master branch has no uncommitted changes.

```bash
git status
```

Expected output:

```
On branch master
nothing to commit, working tree clean
```

---

## Step 2: Create a New Branch

Create a branch named `GitWork` from master.

```bash
git branch GitWork
```

---

## Step 3: Switch to GitWork Branch

```bash
git checkout GitWork
```

---

## Step 4: Create hello.xml on GitWork Branch

Create a file named `hello.xml` with the following content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<page>
    <title>Hello World</title>
    <content>This content is from GitWork branch</content>
</page>
```

Stage and commit the file:

```bash
git add hello.xml
```

```bash
git commit -m "Add hello.xml on GitWork branch"
```

---

## Step 5: Switch to Master Branch

```bash
git checkout master
```

---

## Step 6: Create hello.xml on Master Branch with Different Content

Create the same file `hello.xml` but with different content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<page>
    <title>Hello World</title>
    <content>This content is from master branch</content>
</page>
```

Stage and commit the file:

```bash
git add hello.xml
```

```bash
git commit -m "Add hello.xml on master branch"
```

---

## Step 7: View the Commit Log

View the diverged commit history of both branches.

```bash
git log --oneline --graph --decorate --all
```

Expected output:

```
* xxxxxxx (HEAD -> master) Add hello.xml on master branch
| * xxxxxxx (GitWork) Add hello.xml on GitWork branch
|/
* xxxxxxx Previous commit
```

---

## Step 8: View Differences Between Branches

```bash
git diff master GitWork
```

This will show the content differences in `hello.xml` between the two branches.

---

## Step 9: Attempt to Merge (Conflict Occurs)

While on the master branch, attempt to merge GitWork.

```bash
git merge GitWork
```

Expected output:

```
Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.
```

---

## Step 10: Resolve the Conflict

Open `hello.xml` in your editor. You will see conflict markers:

```
<?xml version="1.0" encoding="UTF-8"?>
<page>
    <title>Hello World</title>
<<<<<<< HEAD
    <content>This content is from master branch</content>
=======
    <content>This content is from GitWork branch</content>
>>>>>>> GitWork
</page>
```

Resolve the conflict by choosing the desired content or combining both. For example, the resolved file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<page>
    <title>Hello World</title>
    <content>This content is merged from master and GitWork branches</content>
</page>
```

---

## Step 11: Stage and Commit the Resolved File

```bash
git add hello.xml
```

```bash
git commit -m "Resolve merge conflict in hello.xml"
```

---

## Step 12: Add Backup Files to .gitignore

Some merge tools create `.orig` backup files. Add a rule to ignore them.

Create or update `.gitignore`:

```bash
echo "*.orig" > .gitignore
```

Stage and commit:

```bash
git add .gitignore
```

```bash
git commit -m "Add .gitignore to exclude .orig backup files"
```

---

## Step 13: Delete the Merged Branch

```bash
git branch -d GitWork
```

---

## Step 14: View the Final Commit Log

```bash
git log --oneline --graph --decorate
```

Expected output:

```
* xxxxxxx (HEAD -> master) Add .gitignore to exclude .orig backup files
*   xxxxxxx Resolve merge conflict in hello.xml
|\
| * xxxxxxx Add hello.xml on GitWork branch
* | xxxxxxx Add hello.xml on master branch
|/
* xxxxxxx Previous commit
```

---

## Summary of Commands

| Command | Description |
|---|---|
| `git status` | Check working directory status |
| `git branch GitWork` | Create a new branch |
| `git checkout GitWork` | Switch to the branch |
| `git add hello.xml` | Stage the file |
| `git commit -m "message"` | Commit changes |
| `git checkout master` | Switch back to master |
| `git log --oneline --graph --decorate --all` | View full commit graph |
| `git diff master GitWork` | Compare branches |
| `git merge GitWork` | Merge branch into current |
| `git branch -d GitWork` | Delete the merged branch |

## Conflict Markers Reference

| Marker | Description |
|---|---|
| `<<<<<<< HEAD` | Start of current branch content |
| `=======` | Separator between conflicting changes |
| `>>>>>>> GitWork` | End of incoming branch content |
