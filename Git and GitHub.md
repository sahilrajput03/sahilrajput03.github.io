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

$ git init										#Initialize the current directory as repository root.

$ git add .										# Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'

$ git commit -m "First commit"					# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

$ git remote add origin <remote repository URL>	# Sets the new remote
$ git remote -v									# Verifies the new remote URL

$ git remote rm destination 					#remove the remote named as destination

$ git push origin master						# Pushes the changes in your local repository up to the remote repository you specified as the origin
```

***

[Git Basics - Working with Remotes](https://git-scm.com/book/it/v2/Git-Basics-Working-with-Remotes)	

***

[Resolving a merge conflict on GitHub](https://help.github.com/en/articles/resolving-a-merge-conflict-on-github)	

git branch - show branches locally.

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

###### if pushing say you  are ahead of remote repository:

then first pull and then immediately push..

git pull origin (if configured default repo for the remote, otherwise define the local branch too i.e., git pull origin master)

git push origin(if configured default repo for the remote, otherwise define the local branch too i.e., git push origin master)

***

##### fullstack course building build with gatsby >>

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

##### Create Aliases..-

###### Git commit with no commit message:

And if you add an alias for it then it's even better right?

```sh
git config --global alias.nccommit 'commit -a --allow-empty-message -m ""'
```

Now you just do an nccommit, nc because of no comment, and everything should be commited.

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
git fetch #FETCHES THE COMPLETE .GIT FOLDER THERE..(REMOTE)
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

