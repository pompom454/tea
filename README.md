<p align="center"> <img src="https://raw.githubusercontent.com/pompom454/pompom454.github.io/refs/heads/main/costume1.png" width=381 height=309> </p>

<div align="center">
  
  ![Static Badge](https://img.shields.io/badge/Snyk_security-monitored-%233a148c?style=flat&logo=snyk)
  ![Static Badge](https://img.shields.io/badge/Running_on-JavaScript-%23914f14?style=flat&logo=javascript)
  ![Static Badge](https://img.shields.io/badge/Additionally,-HTML5-%23cc6c43?style=flat&logo=html5)

</div>

# Tea

Tea is a free (gratis and libre) robust story format for [Twine/Twee](http://twinery.org/).

If you believe that you've found a bug in your Tea or simply wish to make a flavor request, you may do so by [creating a new issue](https://github.com/pompom454/tea/issues).

## INSTALLATION

You may either grab an already-made brew from [the catalog](https://github.com/pompom454/tea/releases) or brew your own Tea from some instructions—see **BREWING FROM SOURCE** below.

## BREWING FROM SOURCE

If you want to brew your own Tea from scratch, rather than grabbing one of the already-made brews, then these instructions are for you.

Tea uses Node.js (currently ≥v16) as the core of its build system, so you'll need to nab it if you don't already have it.  Additionally, to retrieve Tea's source code from this repository, you'll need to install Git.

1. [Download and install the Node.js JavaScript runtime (`https://nodejs.org/`)](https://nodejs.org/)
2. [Download and install the Git source control management tool (`https://git-scm.com/`)](https://git-scm.com/)

Once all the tooling has been installed and set up, the next step is to fetch the Tea source code.  Open a shell to wherever you wish to store the code and run the following command to clone the repository:

```
git clone https://github.com/pompom454/tea.git
```

Next, change to the directory that the previous command created, which is your local clone of the repository:

```
cd tea
```

There are two major branches within the repository:

* `develop`: The main development branch
* `master`: The stable release branch

Be sure to switch to the branch you wish to work on by issuing the appropriate `git checkout` command.

Once you're on the correct branch, fetch Tea's development Teabags:

```
npm install
```

You should now have Tea and all Teabags nabbed, so you may build it by running the following command:

```
node build.js
```

Assuming that completed with no errors, the story format, in both Twine 1 and Twine 2 versions, should be output to the `build` directory.  Congratulations!

**NOTE:** Tea's development dependencies are occasionally updated.  If you receive errors when attempting to build, then you probably need to update your cached dependencies.  You may do this via the `npm update --save -D` command or, in extreme cases, by first running `npm uninstall` and then `npm install`.

**TIP:** If you'd like additional options when building—e.g., debug builds, limiting the build to a particular version of Twine, etc.—then you may request help from `build.js` by specifying the help (`-h`, `--help`) option.  For example:

```
node build.js -h
```
