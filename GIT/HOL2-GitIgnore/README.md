# Git HOL 2: Git Ignore

## Objective

Learn how to use `.gitignore` to exclude specific files and directories from being tracked by Git.

---

## Step 1: Create a Log File in Working Directory

Create a file named `debug.log` in the root of your repository.

```bash
echo "DEBUG: Application started at 2025-01-01 10:00:00" > debug.log
```

---

## Step 2: Create a Log Directory with Sample Files

Create a `log/` directory and add log files inside it.

```bash
mkdir log
```

```bash
echo "INFO: Application log entry 1" > log/app.log
```

---

## Step 3: Check Status Before Gitignore

Observe that Git detects the log files as untracked.

```bash
git status
```

Expected output shows `debug.log` and `log/` as untracked files.

---

## Step 4: Create the .gitignore File

Create a `.gitignore` file to specify patterns for files and directories that Git should ignore.

```bash
echo "*.log" > .gitignore
echo "log/" >> .gitignore
```

The `.gitignore` file should contain:

```
*.log
log/
```

---

## Step 5: Verify Ignored Files

Run `git status` again to confirm that the log files are no longer shown as untracked.

```bash
git status
```

You should see that `debug.log` and the `log/` directory are no longer listed. Only `.gitignore` and any other tracked files (like `sample.txt`) should appear.

---

## Step 6: Create a Tracked File

Create a regular file that should be tracked by Git.

```bash
echo "This is a sample tracked file" > sample.txt
```

---

## Step 7: Stage and Commit

Add the `.gitignore` and the tracked file, then commit.

```bash
git add .gitignore sample.txt
```

```bash
git commit -m "Add .gitignore to exclude log files and log directory"
```

---

## Step 8: Verify the Ignore Rules

Try adding the ignored files explicitly to confirm they are being ignored.

```bash
git add debug.log
```

Git will display a message indicating the file is ignored. You can force-add if needed:

```bash
git add -f debug.log
```

To see which files are being ignored:

```bash
git status --ignored
```

---

## Summary of Commands

| Command | Description |
|---|---|
| `echo "content" > .gitignore` | Create a .gitignore file |
| `git status` | Check working directory status |
| `git status --ignored` | Show ignored files |
| `git add .gitignore` | Stage the .gitignore file |
| `git add -f <file>` | Force-add an ignored file |
| `git commit -m "message"` | Commit staged changes |

## .gitignore Pattern Reference

| Pattern | Description |
|---|---|
| `*.log` | Ignore all files with .log extension |
| `log/` | Ignore the entire log directory |
| `!important.log` | Exception: do not ignore this specific file |
| `**/temp` | Ignore temp directories at any depth |
