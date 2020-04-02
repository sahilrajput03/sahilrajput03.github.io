Git Guide - [Guide Awesome and recommeded by Github.com](https://gist.github.com/hofmannsven/6814451)

• Use `git status` to check differences.

***

• Add the .gitignore file (optional)

Create a file named `.gitignore` in your project's directory. Ignore directories by entering the directory name into the file (with a slash appended):

`dir_to_ignore/`

more rules @ [gist.github.com/octocat](https://gist.github.com/octocat/9257657#file-gitignore-L5)	

***

• Add the README.md file for the repository (optional)

***

Helper Link - [Adding a repository from your local computer to GitHub Desktop](https://help.github.com/en/desktop/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)	

Helper Link 2 - [Adding an existing project to GitHub using the command line](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)

***

• Creating a new repository > > creates a empty folder with no files, with the name of the folder be the name of the repository.

***

To make some local project a repo and publish on github.
First: perform the `git init` inside the folder to make the contents of a folder a repository. And manage the files via .gitignore file to enable tracing on selected things or folders or both.

Changing the repository name on github does no effect on local repository.

***

Adding existing project to Github

```
Initialize the local directory as a Git repository.

$ git init										#Initialize the current directory as repository.

$ git add .										# Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'

$ git commit -m "First commit"					# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

$ git remote add origin <remote repository URL>	# Sets the new remote
$ git remote -v									# Verifies the new remote URL

$ git remote rm origin 					#remove/delete the remote named as origin

$ git push origin master						# Pushes the changes in your local repository up to the remote repository you specified as the origin
```

***

[Git Basics - Working with Remotes](https://git-scm.com/book/it/v2/Git-Basics-Working-with-Remotes)	

***

[Resolving a merge conflict on GitHub](https://help.github.com/en/articles/resolving-a-merge-conflict-on-github)	

[Github Cheatsheet](https://gist.github.com/hofmannsven/6814451)

[How do I push a local Git branch to master branch in the remote?](https://stackoverflow.com/questions/5423517/how-do-i-push-a-local-git-branch-to-master-branch-in-the-remote)

***

## View logs

Heroku treats logs as streams of time-ordered events aggregated from the output streams of all your app and Heroku components, providing a single channel for all of the events.

View information about your running app using one of the [logging commands*](https://devcenter.heroku.com/articles/logging), `heroku logs --tail`:

```term
$ heroku logs --tail (or -t).
2011-03-10T10:22:30-08:00 heroku[web.1]: State changed from created to starting
2011-03-10T10:22:32-08:00 heroku[web.1]: Running process with command: `node index.js`
2011-03-10T10:22:33-08:00 heroku[web.1]: Listening on 18320
2011-03-10T10:22:34-08:00 heroku[web.1]: State changed from starting to up
```

Visit your application in the browser again, and you’ll see another log message generated.

Press `Control+C` to stop streaming the logs.



```
Real-time tail
Similar to tail -f, real-time tail displays recent logs and leaves the session open for real-time logs to stream in. By viewing a live stream of logs from your app, you can gain insight into the behavior of your live application and debug current problems.

You can tail your logs using --tail (or -t).
```

src: [logging commands,(above one)](https://devcenter.heroku.com/articles/logging)

***

Fastest way to remove hyphens from a string [js]

```js
var str="185-51-671";
var newStr = str.replace(/-/g, "");
```

***

Remove mongo db warning - "use UnifiedTopology"

https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated

```js
mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true})
```

// added in phonebook's url .. see there for easy reference.

***

```bash
npm install mongoose --save
```

***

Sometimes my mind says after getting through enough of bullshit.., yes,.. okay I was really bad at that thing earlier and even now. But, then I think like its really something I'm wasting my time to think about. What matters is how you make use of this time, and that is good, or may be living the moment with essence of truth.

***

git status - track the untracked and tracked files.(tracked = files commited)

***

In my case, I forgot to include the `.gitignore` file. Here are all the steps required :

1. Create an empty git repo on remote,

2. On local create the .gitignore file for your project. Github gives you a list of [**examples** here](https://github.com/github/gitignore)

3. Launch a terminal, and in your project do the following commands :

   `git remote add origin YOUR/ORIGIN.git`

   for e.g.,

   `  git remote add origin "github.com/your_repo.git" `

   `git add .`

   `git commit -m "initial commit or whatever message for first commit"`

   `git push -u origin master`

***

Ultimate Git Guide for local branches and remotes in git :  https://www.jquery-az.com/git-push-command/ 

***

Removing a git could be done as ..

• `rm -rf .git`

***

Clone into current folder:

```bash
git clone <repo-url> <space> .
```

***

Clone into specific folder:

```bash
git clone <git-repo> sahil // sahil must be an empty directory other wise
OR
git clone <git-repo> ./sahil
but 
This will not work >> git clone <git-repo> /sahil 
```

***

```bash
 Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

SOLUTION: **git pull origin master**

***

##### Deal with "refusing to merge unrelated histories" error :

```bash
 git pull --allow-unrelated-histories origin master
```



***

```bash
git init

git  remote  add origin <rep-url>

git pull --allow-unrelated-histories origin master

git push origin master
```



> > > now you can easily do.. regular work, then commit, then then push to origin(remote1)

For e.g., 

```bash

git add .

git commit -m "first commit from the project"

git push origin master

OR you can set the origin(remote1) default for the master branch via adding the switch -u.

Afterward, pushing would be easy like..

git push origin
```

***

Let say you have created a repo online on github and didn't add any files yet.

And locally, you are having a empty directory, and inside that, you 

git init

git add remote origin git@github.com:freakstarrocks/freakstarrocks.github.io.git

git push  origin master

> > now this command will return error: 
> >
> > $ git push origin master
> > error: src refspec master does not match any.
> > error: failed to push some refs to 'git@github.com:freakstarrocks/freakstarrocks.github.io.git'

This error occured cause you don't have any reference file i.e.,  A Git reference (`git ref`) is just a file that contains a Git commit SHA-1 hash. [Post@Github](https://developer.github.com/v3/git/refs/#get-a-single-reference)

***

git fetch: [Post@git-scm.com](https://git-scm.com/docs/git-fetch)

***

If pushing says error :[Pushing to Git returning Error Code 403 fatal: HTTP request failed@StackOverflow](https://stackoverflow.com/questions/7438313/pushing-to-git-returning-error-code-403-fatal-http-request-failed) 

Conclusion, open the **.git/config** file, and set the url as stated with the password and username i.e., you just need to add the **youruser:password@** before the githu.com/blah..blah....

```bash
https://youruser:password@github.com/user/repo.git
```

Do it with notepad like.. 

`notepad ./.git/config`

***

###### Github pages >> Your site is currently being built....

 In order for your site to be published, a Jekyll theme must be chosen, even if you don't use Jekyll *at all*. 

src: [@Github Questions](https://github.community/t5/GitHub-Pages/Github-Pages-are-not-published-after-following-the-documentation/m-p/18676#M1398)	

***

# When Pushing says you  are ahead of remote repository:

Then first PULL and then immediately PUSH..

git pull origin (if configured default repo for the remote, otherwise define the local branch too i.e., git pull origin master)

git push origin(if configured default repo for the remote, otherwise define the local branch too i.e., git push origin master)

***

# Fullstack course building build with gatsby >>

##### Get stuck on "Building static HTML for pages in gatsby build" #10630

Answet: [@meiyouqing](https://github.com/meiyouqing) I just tried to reproduce this using the steps you listed in your issue and everything seems to be working fine.

Try **deleting the `.cache` directory** in root and build again? Please link to a minimal reproduction repo if possible.

src: [question@github.com](https://github.com/gatsbyjs/gatsby/issues/10630)

***

Edit the cname file as it is in the static folder...in the fullstack

***

 enumerate :  mention (a number of things) one by one. 

on cambridge dictionary: 

to name things separately, one by one:
**Sentence:** He enumerated the benefits of the insurance scheme.

***

EEHYYY.. if changing the background color and the prism-dark.css to prism.dark.. doesn't refletct the chages in the github-pages website, then manually search for text in the folder of /public/... for the text .. "prism-dark.css" and rename it to "prism.css". This would solve the issue.

***

# Create Aliases..-

###### Git commit with no commit message:

And if you add an alias for it then it's even better right?

```sh
git config --global alias.nccommit 'commit -a --allow-empty-message -m ""'
```

Now you just do an **nccommit**, nc because of no comment, and everything should be commited.

***

Get commit log on git via - 

```console
git log origin/master
```

***

[Question on StackOverflow(good)](https://stackoverflow.com/questions/21223464/why-does-git-require-me-to-pull-before-i-push)	

***

#### [How do I clone into a non-empty directory?](https://stackoverflow.com/questions/2411031/how-do-i-clone-into-a-non-empty-directory)

git init
git remote add origin PATH/TO/REPO
git fetch #FETCHES THE COMPLETE .GIT FOLDER FROM THE REMOTE
git reset origin/master  # Required when the versioned files existed in path before "git init" of this repo.
git checkout -t origin/master

***

`git branch` with no arguments displays the current branch marked with an asterisk in front of it:

```
user@host:~/gittest$ git branch
* master
  someotherbranch
```

***

This should be understood in the context of **[GitHub forks](https://help.github.com/articles/fork-a-repo/)** (where you fork a GitHub repo on GitHub before cloning that fork locally).

- `upstream` generally refers to the original repo that you have forked
  (see also "[Definition of “`downstream`” and “`upstream`”](https://stackoverflow.com/a/2749166/6309)" for more on `upstream` term)
- `origin` is your fork: your own repo on GitHub, clone of the original repo of GitHub

From the GitHub page:

> When a repo is cloned, it has a default remote called `origin` that points to your fork on GitHub, not the original repo it was forked from.
> To keep track of the original repo, you need to add another remote named `upstream`

```
git remote add upstream git://github.com/<aUser>/<aRepo.git>
```

(with `aUser/aRepo` the reference for the original creator and repository, that you have forked)

You will use `upstream` to **fetch from the original repo** (in order to keep your local copy in sync with the project you want to contribute to).

```
git fetch upstream
```

(`git fetch` alone would fetch from `origin` by default, which is not what is needed here)

You will use `origin` to **pull and push** since you can contribute to your own repository.

```
git pull
git push
```

(again, without parameters, 'origin' is used by default)

You will contribute back to the `upstream` repo by making a **[pull request](https://help.github.com/articles/about-pull-requests/)**.

![fork and upstream](https://i.stack.imgur.com/cEJjT.png)

***

```
git pull and git rebase are not interchangeable, but they are closely connected.

git pull fetches the latest changes of the current branch from a remote and applies those changes to your local copy of the branch. Generally this is done by merging, i.e. the local changes are merged into the remote changes. So git pull is similar to git fetch & git merge.

Rebasing is an alternative to merging. Instead of creating a new commit that combines the two branches, it moves the commits of one of the branches on top of the other.

You can pull using rebase instead of merge (git pull --rebase). The local changes you made will be rebased on top of the remote changes, instead of being merged with the remote changes.

Atlassian has some excellent documentation on merging vs. rebasing.
```

***

###### Awesome article on git merge

[Git: Merge Branch into Master@StackAbuse.com](https://stackabuse.com/git-merge-branch-into-master/)

***

###### About deleting branches locally and on remotes.

```
Executive Summary
$ git push -d <remote_name> <branch_name>
$ git branch -d <branch_name>
Note that in most cases the remote name is origin.

Delete Local Branch
To delete the local branch use one of the following:

$ git branch -d branch_name
$ git branch -D branch_name
Note: The -d option is an alias for --delete, which only deletes the branch if it has already been fully merged in its upstream branch. You could also use -D, which is an alias for --delete --force, which deletes the branch "irrespective of its merged status." [Source: man git-branch]

Delete Remote Branch [Updated on 8-Sep-2017]
As of Git v1.7.0, you can delete a remote branch using

$ git push <remote_name> --delete <branch_name>
which might be easier to remember than

$ git push <remote_name> :<branch_name>
which was added in Git v1.5.0 "to delete a remote branch or a tag."

Starting on Git v2.8.0 you can also use git push with the -d option as an alias for --delete.

Therefore, the version of Git you have installed will dictate whether you need to use the easier or harder syntax.
```

src: [How do I delete a Git branch locally and remotely..?](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely) 

***

[GitDeleteCommands.ps1](https://gist.github.com/cmatskas/454e3369e6963a1c8c89)

***

[Video on youtube about the merge vs. rebase](https://www.youtube.com/watch?v=CRlGDDprdOQ)

[Create a new branch with git and manage branches @Someone's github-repo](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)

***

[How do I resolve git saying “Commit your changes or stash them before you can merge”?](https://stackoverflow.com/questions/15745045/how-do-i-resolve-git-saying-commit-youdiscar-changes-or-stash-them-before-you-can-me)

***

[Official git rebase](https://git-scm.com/docs/git-rebase)

***

##### Go to a particular commit - 

```bash
git reset --hard <commit-hash>
```

get the hashes via git log.

***

##### Reset to the most recent commit and erase all the changes in your working tree and index:

```bash
git reset --hard HEAD
```

***

###### Reverse a particular commit // This is not a commonly used command..so try not to use..(although works great)

```bash
git revert <commit-hash>
```

***

# <u>Create branch from another branch and change to new branch:</u>

```bash
git checkout -b myFeature dev
```

****

# Create branch from current branch and change to new branch:

```bash
git checkout -b myFeature
```



***

###### Print all commits with single commit status in one line-

```bash
git log --oneline
```

***

##### Git with GitHub quick:

•Create online repo Github.

•Now, create a folder with name of your choice.

```bash
cd newFolder
git clone <repo-url> <space> <dot>
READY TO ROCK AND ROLL.
```

***

##### Git with GitHub quick:(Reverse)

•Create local repo(in any project folder, do **git init**, and make some commits as usual)

•Create online repo in Github(**copy** the **repo-url.git**)[DO NOT INITIALIZE IT WITH ANY README FILE..]

```bash
FINALLY DO THE PUSH with switch --all
git push origin --all
```

***

##### Help for git push

```bash
git push -h >> show help for the push command.
```

***

```bash
git push origin --all (push all references)
OR
git push --all (push all references)
##both the commands above will push all the local branches to the remote 'origin'
```

***

```bash
$ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master
######
-u, --set-upstream    set upstream for git pull/status
USED AS:
git push
#{so setting the remote as upstream for the branch specified after the remote/ if branch is not specified after the remote name, then the current branch is considered for the operation }
# for example.
chetan@insidebug MINGW64 ~/Desktop/tttt (master)
$ git push -u origin2
Everything up-to-date
Branch 'master' set up to track remote branch 'master' from 'origin2'.

chetan@insidebug MINGW64 ~/Desktop/tttt (master)
$ git push -u origin
Everything up-to-date
Branch 'master' set up to track remote branch 'master' from 'origin'.

chetan@insidebug MINGW64 ~/Desktop/tttt (master)
$ git push -u origin master2
Everything up-to-date
Branch 'master2' set up to track remote branch 'master2' from 'origin'.

chetan@insidebug MINGW64 ~/Desktop/tttt (master)
$ git push -u origin2 master2
Everything up-to-date
Branch 'master2' set up to track remote branch 'master2' from 'origin2'.
```

***

##### Push single branch

```bash
#After making appropriate branching and commits
#Pushing single branch to remote i.e., master
git push origin master

#Pushing all the local branches to remote i.e. all the branches with their respective commits differently
git push origin --all

```

***

```bash
#remove untracked files
git clean -f
```

***

##### Add multiple push URLs to the repository

```bash
#Before adding any pushurl's to the local repo, you need to have a remote named as origin as indicated in the command. Also on adding the first pushurl to the local repository, the origin's push url will be replaced by the new pushurl specified as the argument. Surely, the original push url for the remote can be added again with the same command but with the url of the origin's original git-reo url. You can add as many push urls to the repository.
git remote set-url --add --push origin git@github.com:muccg/my-project.git
git remote set-url --add --push origin git@bitbucket.org:ccgmurdoch/my-project.git

```

***

##### Delete any repository with bash

```bash
rm -rf .git #inside the repository.
```

***

# Disable automatic conversion/ handling of line conversions:

DISABLE EOL CONVERSIONS - StackOverflow.com

src: [Git replacing LF with CRLF@Ultimate@StackOverflow](https://stackoverflow.com/questions/1967370/git-replacing-lf-with-crlf/20653073)
src2: [Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

 `So, write git config core.autocrlf in the working dir to check the currently used value and` 

 `git config --local core.autocrlf false` to  disable it, and this command will actually add

`autocrlf = false` to the `.git/config` file of the project.

`"C:\Users\chetan\.gitconfig"` - the used specific .gitconfig file.

To alter it : use command

 `git config --global core.autocrlf false` <= Personal choice of coders.[as setting it false won't ever notify you about the changing the line endings ever, as setting it to false git doesn't care about the line endings, files are fetched as it is and pulled as they are modified and vice versa]

***

### General Git Cloning and Dealing with branches

```bash
git branch 
# show all local branches.
git branch -a
# View all branches(local and remote branches)
git clone <repo-url>
# clone a complete repository
git checkout <branch-name>
# Checkout  a particular branch(all branches are present locally already) // Change branch // Move to other branch. THIS IS CALLED CHECKOUT A BRANCH.

***
git clone --branch <branch-name> <repository-url>
# Clone a particular branch.
```

***

# Discard local changes:

```bash
 git reset --hard 
 #OR TRY CHECKOUT THE BRANCH WITH WITH FORCE
 git checkout -f
 
 #this works with any branch too
 git checkout <branch-name> -f
```

***

Good One: You may download: https://egghead.io/courses/practical-git-for-everyday-professional-use 

 https://egghead.io/courses/productive-git-for-developers 

***

# Git STASH:

```bash
//stash meaning: store something safely in a hidden/secret place.

git stash save 'message-about-the-changes-to-be-stashed' // you may make as many stashes with approprite 
												message and clears the recent changes from the local 												branch and save them to secret place 'message....•'
			
git stash list // shows all the stashes you have made

git stash pop  // will pop out the last stash you have made || you may use `git stash apply` <= this also works good.

git stash clear // will clear the list of the stashes.
	awesome-video@https://www.youtube.com/watch?v=KLEDKgMmbBI
```

***

```
$ git commit -a
```

which will automatically notice any modified (but not new) files, add them to the index, and commit, all in one step.

***

Opening git guides, 

```bash
git help // shows all related info about the below ones.
git help -a // all available commands
git help -g // all git related guides >> Opening guides: git help <git-guide>
```

***

So for Git 2 the answer is:

- `git add .` and `git add -A .` and `git add --all` add new/modified/deleted files in the current directory

***

In git help documents, you will find it talking about the index, so index is nothing but the staging state.

***

AWESOMEE - An official visual git cheatsheet @  https://ndpsoftware.com/git-cheatsheet.html#loc=workspace; 

***

Official git documentation -  https://git-scm.com/doc  - Always prefer to read real docs.

***

```bash
git pull
The above command equals to below command. As git fetch just add the history of remote repository to the local copy of the repository.
git fetch ; git fetch
```

***

git cheatsheet from git-scm :  https://github.github.com/training-kit/downloads/github-git-cheat-sheet/ 

***

## Delete line in vi editor, use shortcut: dd

***

