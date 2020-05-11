### When adding files/folder in .gitignore doesn't work, you need to do this...

![image-20200507182811898](image-20200507182811898.png)

***

```bash
$ git commit -m file\ m\ and\ and\ ss\ are\ adeed. # works too.
```



***

## Make a branch at an earlier commit in current branch:

```bash
git checkout HEAD^ or git checkout <commit-hash> or git checkout HEAD~3 (3 commits back from now)
git checkout -b myDesiredBranchYikes
# Hint: when you have checked out at an earlier commit, you can view the commit history via git log, to see what are the earlier commits to this HEAD.
```

Or a simple single command:-

```bash
git checkout -b old-state 0d1d7fc32
```



***

## Edit the last commit:

```bash
git add . # or add individual files
git commit --amend --no-edit
```

Source: [ohshitgit.com](https://ohshitgit.com/#change-last-commit) - amazing must read website..

***

## Change the message of last commit

```bash
git commit --amend
```

***

## Commit simply, live with git simply:

```bash
git commit -am "firstCommit"
git commit -am "secondCommit"
git commit -am "thirdCommit"
```

***

## Detach Head(move to previous commit)

```bash
git checkout HEAD^
```



***

## Git commit help

```bash
git commit -h
git add -h
```

```bash
git add -A (adds all tracked and untracked files)
git add . (does same)
git add * (does same but excludes hidden files)
```



***

## Move branch on a previous commit(commonly needed):

![image-20200505211531257](image-20200505211531257.png)

```bash
git branch -h #shows help pages for git branch. And outputs the infomation for -f switch
-f, --force           force creation, move/rename, deletion
```

![image-20200505211855009](image-20200505211855009.png)

![image-20200505211908626](image-20200505211908626.png)

***

## Delete last commit

```bash
git reset HEAD^ --hard 
# using --hard will remove the changes, files you have added after that commit.
#In git log,the last commit is no longer there.

__
git reset HEAD^
# this command will just remove the last commit from the history, but will keep the files, changes as it is.(Doesn't alter any change in the current state of the repository.)
#In git log,the last commit is no longer there.
```

Also: 

```bash
git reset --hard 0d1d7fc32
# works like above but, this will move your repository to the commit specified.

__
git stash
git reset --hard 0d1d7fc32
git stash pop
# do these if you want to save the current un
```



***

## Checkout at particular commit

```
git checkout 0d1d7fc32 # move to any previous commit temporarily
git checkout 0d1d # would work too, NOTE: atleast 4 characters are needed to work.
```

***

## The tidle operator in github

```bash
git checkout HEAD~3
#so now you have got to 3 levels up in commit history.
```

***

## Moving upward(^ caret symbol) in a git repository

```bash
git checkout HEAD^ 
# move up a single commit (unless you have a single commit in your history.)
```

```bash
git checkout HEAD^
git checkout HEAD^
git checkout HEAD^
#so now you have got to 3 levels up in commit history.
```

***

## What the hell is HEAD?

![image-20200505202921231](image-20200505202921231.png)

***

### https://learngitbranching.js.org/

***

# Making use of collaborations on github

The first techniuque is, make a fork of someone's repo (repo-original)(this will make of copy of the repo in your github account, say repo-copy) and then make changed to your copy of the repo(repo-copy). And push the code to your repo-copy in github(via git push). So, when you are ready with your changes, make a pull request from your repo-copy. Like :

![image-20200504172905367](image-20200504172905367.png) 

and this will ask you the TARGET repo to which you want to make a request. And the actual user of the repo has to merge the pull request to the repository(he/she gets the link for that in the associated email). Or he/she can do it via visiting the repository and clicking the available pull request like belo:w-

![image-20200504174144199](image-20200504174144199.png). And merging it to the repo with a single click.

## Better way:-

> The **second method** is to add the other person as collaborator in the original repository, in which we are supposed to work collaboratively. This can be done, via visiting the settings of the repository and going to **Manage Access** and clicking **Invite a collaborator**. Doing this will send a link to email to the other user for the inviation and once the user accepts that, it gets the direct push access to the entire repository. This is the **best** way to collaborate as the the other uses then gets the direct push access to the repository without any forked copy of other thing.

## Github pages jekyll error build erro:

https://stackoverflow.com/questions/25262183/github-page-build-failure

***



## How contributing works

Nobody can push directly to your repository if you are not already granting them write access.

The process for contributing to a public repository in GitHub starts by forking the repository, then **pushing the change onto the forked**, then creating a **pull request onto the original repository**. After that comes the role of the project owner to review and take action (merge/decline) of the requested code change.

```
If the repository is public others can fork it, commit to their own fork.

They can then ask you to pull some of the changes in their fork into your repository via a pull-request.
```

```
Too, all repositories are read-only for anonymous users. By default only the owner of the repository has write access. If you can push to your own repo, it's because you are using one of the supported authentification methods (HTTPS, SSH, ...).

If you want to grant someone else privileges to push to your repo, you would need to configure that access in the project settings.

To contribute to projects in which you don't have push access, you push to your own copy of the repo, then ask for a pull-request. Linux is not a good example for that, because the kernel developers do not use GitHub pull requests.
```



***

## Create branch name with a slash

```bash
$  git checkout -b hotfix/fixed-readme
```



***

## Install hub with choco(to manage github via command line)

```bash
$ choco install hub
```

To get general info about hub command-line:

```bash
$ hub
```

Create new gist:

```bash
$ hub gist create -c <file> # you could have used --public instead, but it would not copy the url to clipboard but echo the url on terminal.
$ hub gist create -v <file1> <file2> <file3> <as many you want>
```

above command copies the url of the file on web to clipboard.

```bash
$ hub gist create -co <file>
```

above command **c**opies the url, and **o**pens it in default browser.

__

Open the current repo in browser:

```bash
$ hub browse
```

__

### Create new repositoryfrom local repositories:

```bash
$ hub create
```

```bash
$ git push -u origin master #you need to do it manually, and now onwards you can do just git push.
```

Above command will create the repository with the name of the folder in which the local repository is contained. If the folder is name is like, Part 1, then the repository name will be :- Part-1. Hyphen(dash) is added inplace of spaces.

__

### Deleting branch with hub:

You need to enable token for deleting repositories via visiting https://github.com/settings/tokens/ and opening hub for your pc. And then enable token for **delete_repo** and click **Update token** button. That's all.

```bash
$ hub delete <repo-name>
```

View repository: https://github.com/github/hub to learn more about hub commandline.

***

## View all local branches:

The below command shows all local and all remote branches(irrespectively they have been checked out earlier or not).

```bash
git checkout <press-tab><press-tab>
```

**Note**: we have git branch and git branch -a to get the list of branches present in the repository. 
But the former one (**git branch**) can show branches which you have **checkedout earlier atleast once**.
And the latter one (**git branch -a**) shows branches which you have **checkedout earlier atleast once**(or more) and **all remote branches**.

***

## Clone a single branch only:

Below command only clones the the desired branch:

```bash
git clone --single-branch --branch <branchname> <remote-repo>
```

__
But if you want all remote branches, but checkout the one you desired:

```bash
git clone --branch <branchname> url
```

***



## Work with same branch in gitbhub with different local repositories and push them:

### The best of all tools:

**Initialize local repository, and then add a remote, and then set default remote for the checkedout branch and simultaneously push to the same remote.**

```bash
git init
touch readme.md
git add .
git commit -m Readme_file_added
git branch -m <my-project2-branch> #Chang the name of branch to your desired choice.
git remote add origin <ssh-url-of-the-repo>
git push -u origin <my-project2-branch>
# any further push can be done easily with ...
[$ git push]
#..., as the remote for the checkedout branch is set default upstrea.

_
Git push syntax:
$ git push <remote-name> <branch-name>
$ git push <remote-name> #This works when you have set default upstream for the checkedout branch.
Most commonly used one:-
$ git push #This works when you have set default upstream for the checkedout branch.

_
Git push bad syntaxes:
$ git push <branch-name> :- would give error like below
fatal: '<branch-name>' does not appear to be a git repository
fatal: Could not read from remote repository.

```



***



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

```bash
#remove commit, #delete commit FOLLOW THE LINK...
```

Link https://www.git-tower.com/learn/git/faq/undo-last-commit

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

## #About deleting branches locally and on remotes,#delete branch,

*You **CANNOT** delete a **checked out** branch.* 
*You **CANNOT** delete **default branch on github remote** repository.*

```bash
Executive Summary
$ git push -d <remote_name> <branch_name> #doesn't deletes branch on local machine
$ git branch -d <branch_name> #doesn't deletes branch on remote.
# Note that in most cases the remote name is origin.

_
Delete Local Branch
$ git branch -d branch_name
$ git branch -D branch_name
# Note: The -d option is an alias for --delete, which only deletes the branch if it has already been fully merged in its upstream branch. 
# You could also use -D, which is an alias for --delete --force, which deletes the branch "irrespective of its merged status." [Source: man git-branch]

_
Delete Remote Branch
$ git push -d <remote_name> <branch_name> #doesn't deletes branch on local machine
# Defalut branch CANNOT BE DELETED IN GITHUB.
# Use --delete option as an alias for -d.
Also, below command does the same above thing.
$ git push <remote_name> :<branch_name> # Doesn't deletes branch on local machine
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

## Create branch from another branch and change to new branch:

```bash
git checkout -b myFeature dev
```

****

## Create branch from current branch and change to new branch:

```bash
git checkout -b myFeature
```

```bash
git log --oneline
# Print all commits with single commit status in one line syntaxes.
```

```bash
git clone <repo-url> .
# Cone a repo in curren directory
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
BEST WAY TO GET THE LIST OF AVAILBE BRANCHES TO CHECKOUT FROM IS:
git checkout <tab> <tab>
//output=> this will list out all the possible branches from which you can checkout. While git branch -a just shows the available remote branches, not the locally cloned branches.

git branch 
# show all local branches, #show branches, #show all branches
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
# stash meaning: store something safely in a hidden/secret place.
# git stash

__
git stash
# Saves the index changes in a safe place, whenever you want those changes back, you can perform 
# git stash pop

__
git stash save 'message-about-the-changes-to-be-stashed'
# You may make as many stashes with approprite message and clears the recent changes from the local branch and save them to secret place 'message....•'

__
git stash list # Shows all the stashes you have made so far like below.
stash@{0}: On fileAABB: messg2 #fileAABB is the brach name, you have made it on, messg2 is message
stash@{1}: On fileAABB: MESSG #fileAABB is the brach name, you have made it on, MESSG is message

__
git stash apply stash@{0} 
# You may change the index value in the curly braces to point to specific stash.
#Applies the stash what you want.

__
git stash pop
# Will pop out the last stash you have made || you may use `git stash apply` <= this also works good.

__
git stash clear
# Will clear the list of the stashes.
awesome-video@https://www.youtube.com/watch?v=KLEDKgMmbBI
```

***

```bash
$ git commit -a
#from git commit -h
# -a, --all             commit all changed files.
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

### In git help documents, you will find it talking about the index, so index is nothing but the staging state.

***

## AWESOMEE - An official visual git cheatsheet 

@  https://ndpsoftware.com/git-cheatsheet.html#loc=workspace; 

***

### Official git documentation -  

https://git-scm.com/doc  - Always prefer to read real docs.

***



```bash
git pull
# The above command equals to below command as git fetch just add the history of remote repository to the local copy of the repository.
git fetch ; git fetch
```

***

### git cheatsheet from git-scm :  

https://github.github.com/training-kit/downloads/github-git-cheat-sheet/ 

***

## Delete a line in vi editor, use shortcut: dd

***

## .gitignore file pattern,#adding files .gitignore,#folders in .gitignore,#forder .gitignore:

https://linuxize.com/post/gitignore-ignoring-files-in-git/

***

## Stash your changes

```bash
chetan@insidebug MINGW64 /c/FullstackopenProjects/redux-notes/src (part6-1)
$ git checkout part6-2
error: Your local changes to the following files would be overwritten by checkout:
        src/reducers/noteReducer.js
Please commit your changes or stash them before you switch branches.
Aborting

chetan@insidebug MINGW64 /c/FullstackopenProjects/redux-notes/src (part6-1)
$ git stash
Saved working directory and index state WIP on part6-1: 57cbab1 part6-1

chetan@insidebug MINGW64 /c/FullstackopenProjects/redux-notes/src (part6-1)
$ git checkout part6-2
Switched to a new branch 'part6-2'
Branch 'part6-2' set up to track remote branch 'part6-2' from 'origin'.

```

***

https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches

***

## #Rename Branch, #Change the name of  branch , #name of branch, #branch name,  #change branch name, #change name of branch,#786

NOTE: YOU CAN ONLY CHANGE THE NAME OF BRANCH ONCE FIRST COMMIT IS MADE.

```bash
git branch -m desiredBranchName // Changes the name of currently checked out branch
git branch -m branchName desiredBranchName // General syntax for changing name of any branch
```

***

# **Remove Untracked/Uncached/Unstaged Data (files/folder)#786**

```bash
git clean -fd //Cleans the Untracked/Uncached/Unstaged Area
```

***

## Creating new empty branch#786

```bash
git checkout --orphan <branch-name> // checkout to an unborned branch.
git rm -rf . 		//Deletes everything except the .git folder
*(There is forth category too, i.e., ignored)
```

***

## Deletes everything except the .git folder #786

```bash
git rm -rf . // deletes everything of the repository except the .git folder
```

***

## Forcefully checkout current branch(if you messed up anything)

```bash
git checkout -f
```

***

## Everything from staging area/cached area /tracked area  TO UNSTAGED Area/CACHEDArea/UNTRACKED Area-

(In other words you can say UNDO git add .)

```bash
$(All the below commands works in same manner)
git reset
git rm --cached -r .
git rm --cached <fielname> //for individual file
```

***

## #Gitk - a graphical interface of git

```bash
gitk 
# In a git repository.
$(You can easily reverse a git commit and view everything correctly.)
```

***

## Why to use ssh public-private keys in local git-bash ??

When working with a GitHub repository, you'll often need to identify yourself to GitHub using your username and password. An SSH key is an alternate way to identify yourself that doesn't require you to enter you username and password every time. Read more @ [link](https://jdblischak.github.io/2014-09-18-chicago/novice/git/05-sshkeys.html)

## Generate a new ssh key:

Basically this features adds a ssh encrytion on your side(machine), and it bind the passphrase to the repository to the local pc and authenticated changes would be made only who has the encryted private key. Public key is stored on the github settings.

```bash
Step1: $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 
//Use your own email address.
Step2: Copy the content of .pub file(C:\Users\chetan\.ssh\something.pub) and paste it in Github>Settings>Ssh and Cpg keys>New Ssh key.
```

***

```bash
clone from original repo, make changes and make commits, and then do:-
$ hub pull-request
Aborted: the current branch seems not yet pushed to a remote
(use `-p` to push the branch or `-f` to skip this check)
$ hub pull-request -f (this is the needed command)
***
$ hub pull-request -f
error using text editor for pull request message
***
```

```bash
$ hub pull-request -h // shows help about the command:
# while on a topic branch called "feature":
$ hub pull-request
[ opens text editor to edit title & body for the request ]
[ opened pull request on GitHub for "YOUR_USER:feature" ]

# explicit title, pull base & head:
$ hub pull-request -m "Implemented feature X" -b defunkt:master -h mislav:feature
```

### FINAL RESULTANT OF ALL research>>:

favourite command to make pull request,(fork a copy, make a local copy of the forked via git clone <url>), then make pull requests via:-
(you just commit changes and make pull request via this command{no need to push to your forked your copy of the repository, as this command this automatically.})

Example 1.

```bash
$ hub pull-request -m "MessgForPullRequest" -p mylocalbranch -b chetanmishra8660:master -h mylocalbranch -c -f
```

Example 2.

```bash
$ hub pull-request -m "Just added comments in backendBranch" -b nirmal201:backendBranch -h backendBranch -c -f
```

(^^YOU HAVE TO EXECUTE THIS INSIDE GIT REPO >>)

```bash
_
Make a fork of the repo in your github, and clone that forked repo locally and make changes to the appropriate branch. And make a pull-request via:-

$ hub pull-request -m "Some message for pull-request" -b chetanmishra8660:master -h sahilrajput03:master
# -b is the switch for <username-to-request-to>:<branch-to-be-pushed-to>
# -h is the switch for <my-username>:<my-branch-name-to-make pull-request-for>
____________________
Additionally:
-c, --copy
>>Put the URL of the new pull request to clipboard instead of printing it.
making use of this would be like:
-p, --push (this is not working to the way we expect, so better no to use it at all.)
>>Push the current branch to HEAD before creating the pull request.
__
$ hub pull-request -m "Some message for pull-request" -b chetanmishra8660:master -h sahilrajput03:master -c
$ hub pull-request -m "Some message for pull-request" -b chetanmishra8660:master -h master -c
$ hub pull-request -m "Some message for pull-request" -b chetanmishra8660:master -h mylocalbranch -c
$ hub pull-request -m "Some message for pull-request" -p master -b chetanmishra8660:master -h mylocalbranch -c -f
NOTE: -f (this flag is really good, as you can omit the git push command before making the pull-request command, as this command does this inclusively before making the pull-request.
But for THIS TO WORK, you need to specify, -p <branch> to be pushed to you forked-remote-repository, like in the above command we are specifying local master brach to be pushed to its default upstream. 	AWESOME.)
$ hub pull-request -m "Some message for pull-request" -b chetanmishra8660:master -c

ALL ABOVE COMMANDS WORK FINE, i.e., copies the url of the pull-request to clipboard.
You can close a pull-request via visiting the pull-request-url and clicking [Close pull request] button. (The owner of the actual repo, can do this, or you can do this too.)
YOu cannot edit/update the pull-request you have made from the terminal(hub cli). 
If the terminal is saying
"A pull request already exists for sahilrajput03:master." 
(additionalyy you can make more pull-request from a new-branch or making pull-request from the same-branch only by deleting the old pull request yourself.)
Then you should go the github.com and click "Pull requests" at the top of the page.
ALTERNATELY: You can go to the owner\'s repository and view you pull request there.
___

```

Cheatsheet about hub:- [Kapeli.com/cheatsheet####](https://kapeli.com/cheat_sheets/Hub.docset/Contents/Resources/Documents/index)
Help link from official hub page: [Link](https://hub.github.com/hub-pull-request.1.html) [Link2](https://hub.github.com/)



## You can see all your pull-request you have made via:

![image-20200504192007114](image-20200504192007114.png)

***

You can view your pull request at the repository to which you have made the request to like below:-

![image-20200504192315575](image-20200504192315575.png) 

and then opening the desired pull request by clicking in the area:-

![image-20200504192448680](image-20200504192448680.png)

and then clicking the button:-

![image-20200504192523056](image-20200504192523056.png) 

and you don't need to add any comment. That is an optional thing.

***

## Meging pull request

Click **Merge pull request**, and then click **Confirm Merge**.

***

