import path from 'path';

class Github{
    constructor(repoPath = '.') {
        this.repoPath = path.join(repoPath, ".git");
        this.objectsPAth = path.join(this.repoPath, "objects"); // .git/objects
        this.headPath = path.join(this.repoPath, "HEAD"); // .git/HEAD
    }
}