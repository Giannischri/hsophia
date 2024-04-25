#!/bin/bash

# Directory containing your repository
REPO_DIR="https://github.com/Giannischri/hsophia.git"
cd $REPO_DIR

# Check if there are any changes; exit if none
git diff-index --quiet HEAD --
if [ $? -eq 0 ]; then
    echo "No changes to commit."
    exit 0
fi

# Add all changes to git
git add .

# Commit changes
echo "Enter commit message: "
read COMMIT_MESSAGE
git commit -m "$COMMIT_MESSAGE"

# Push changes
git push origin main
echo "Changes pushed successfully."
