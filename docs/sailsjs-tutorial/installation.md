---
sidebar_position: 4
authors: [mwangi_gikonyo]
---

# Installation

The software required before you begin is;

- NodeJS v17.9
- Sails.js Framework


## Installing NodeJS v17.9

### Linux/MacOSx
To install NodeJS v17.9, let's first install NVM (Node Version Manager)

#### Step 1:  Download and install NVM

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```


#### Step 2: Load NVM

After step1  above completes, restart your terminal or run;

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

```


#### Step 3: Verify Installation

```
nvm --version
```

✅ If you see a version number, NVM is installed successfully.


#### Step 4: Install NodeJS using NVM
Install and use node v17.9 by running;

```
nvm install 17.9
nvm use 17.9
```

### Windows

#### Download the NVM for windows installer

Download [NVM For Windows](https://github.com/coreybutler/nvm-windows/releases)
Download the latest `.zip` or `.exe` file under the "Assets" section.

#### Install NVM
If you downloaded the .exe file, double-click it to start the installer.
Follow the installation prompts:
- Choose the directory where you want to install NVM (e.g., C:\Program Files\nvm).
- Set the directory for Node.js installations (e.g., C:\Program Files\nodejs).
- Complete the installation.

Repeat Steps 3 & 4 above to verify & install respectively.


## Installing Sails.js framework - Globally
You need to install Sails.js framework globally since you'll be using it to create projects from any location of your file system.

```
npm install -g sails
```

Verify the installation

```
sails --version
```

At the time of releasing this course, we had the latest version of Sails.js being 1.5.14.

