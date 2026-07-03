# Git HOL 1: Git Basics (Setup, Config, Add, Commit, Push)

## Objective

Learn the fundamental Git commands including installation verification, configuration, repository initialization, staging, committing, and pushing changes to a remote repository.

---

## Step 1: Check Git Version

Verify that Git is installed on your system.

```bash
git --version
```

Expected output:

```
git version 2.x.x
```

---

## Step 2: Configure User Information

Set your username and email address. These details will be associated with every commit you make.

```bash
git config --global user.name "YourName"
```

```bash
git config --global user.email "your@email.com"
```

---

## Step 3: Verify Configuration

View all Git configuration settings to confirm your changes.

```bash
git config --list
```

---

## Step 4: Set Default Editor

Configure your preferred text editor for Git operations (e.g., commit messages).

```bash
git config --global core.editor "notepad++"
```

---

## Step 5: Initialize a New Repository

Create a new directory and initialize it as a Git repository.

```bash
git init GitDemo
```

Navigate into the repository:

```bash
cd GitDemo
```

---

## Step 6: Create a Sample File

Create a file named `welcome.txt` with the following content:

```
Welcome to Git Demo Repository
```

You can create it using the command line:

```bash
echo "Welcome to Git Demo Repository" > welcome.txt
```

---

## Step 7: Stage the File

Add the file to the staging area.

```bash
git add welcome.txt
```

Verify the staging status:

```bash
git status
```

---

## Step 8: Commit the File

Commit the staged file with a descriptive message.

```bash
git commit -m "Add welcome.txt with initial content"
```

---

## Step 9: Add Remote Repository

Link your local repository to a remote repository.

```bash
git remote add origin <your-remote-repo-url>
```

Pull any existing content from the remote master branch:

```bash
git pull origin master
```

---

## Step 10: Push to Remote

Push your local commits to the remote repository.

```bash
git push origin master
```

---

## Summary of Commands

| Command | Description |
|---|---|
| `git --version` | Check installed Git version |
| `git config --global user.name "YourName"` | Set global username |
| `git config --global user.email "your@email.com"` | Set global email |
| `git config --list` | List all configuration settings |
| `git config --global core.editor "notepad++"` | Set default text editor |
| `git init GitDemo` | Initialize a new Git repository |
| `git add welcome.txt` | Stage a file for commit |
| `git status` | Check the status of the working directory |
| `git commit -m "message"` | Commit staged changes |
| `git remote add origin <url>` | Add a remote repository |
| `git pull origin master` | Pull changes from remote |
| `git push origin master` | Push changes to remote |
