import sys
import subprocess

def pre_commit_check():
    print("Running pre-commit checks...")
    result = subprocess.run(["python", "-m", "unittest", "discover"], capture_output=True, text=True)
    if result.returncode != 0:
        print("Tests failed! Aborting commit.")
        print(result.stderr)
        sys.exit(1)
    print("All checks passed!")
    sys.exit(0)

if __name__ == "__main__":
    pre_commit_check()
