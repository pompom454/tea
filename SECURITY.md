## Security is key
I take bugs and security issues _**VERY**_ seriously! Seriously, would you want a hacker deleting your files in a snap? As for what vulnerabilities, we accept the following:
- Bugs allowing for ACE or RCE (_except_ when it's embedded in a story via JavaScript...we're not liable for that and it can happen at any point)
- Bugs allowing for deletion of essential files (likely not possible given the constraints of a browser sandbox, unless of course it installs malware)
- Bugs in correlation to something like memory manipulation (_except_ when embedded into a story...we're not liable for that)
- Open directories (vulnerable directories)
- Unpatched/issues with dependencies/Teabags (we are constantly updating dependencies, however)
If the issue isn't that of above, it probably involves XSS, in which I _**CANNOT**_ patch due to getting rid of key functionality.
## Is this a bounty?
No, _this is not a bug bounty_ as I don't accept donations nor do I give out money. However, to compensate for my financial reasons, I can give you a perk ranging from a mention in release notes to being given a taste test of a new beta build!
