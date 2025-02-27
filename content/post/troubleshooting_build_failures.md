---
title: Troubleshooting build failures
date: 2025-01-28T23:00:00.000Z
---

It's the 457th day of January. Everything is grey and brown and muddy, the rain is pouring down and I'm tired, and when I opened my emails there were a handful of emails from dependabot and Vercel informing me that two new pull requests aimed at updating @tinacms/cli from 1.8.0 to 1.8.2 and tinacms from 2.6.0 to 2.6.2 had failed the preview build. \
\
I have to admit, my first feeling was "uuugghh I really don't want to deal with this right now". Then I reminded myself of what usually happens when I postpone these kinds of tasks - they grow into insurmountable problems that lies in the back of my head, as small stressors clamoring for attention and draining energy, instead of a mildly annoying chore that will probably take less than half-an-hour to fix.

Vercel gave me the following error: \
Error: The local Tina schema doesn't match the remote Tina schema. Please push up your changes to GitHub to update your remote tina schema.\
\
A quick google search took me to a closed issue on github from November 2024, which was marked as resolved. The error message was the same, but the description did not really fit my case, and anyway it was marked as resolved by version 2.6.0, which I already had installed. \
\
I tried checking out the branches locally, installed the updates, built and ran it locally. Worked flawlessly. No changes to commit, working tree clean, the local schema matched the remote schema. I asked ClaudeAI for help, and tried the following steps: \
\
**Check if:**\
\- there's a difference in Vercel environment/configuration and my local configurations\
\- that clientId in the Tina config matches between environments\
\- branchname is correctly set in the Vercel environment\
\- tina cloud token is properly set in the environment variables\
\- the Vercel build uses a cached version of the schema by clearing the build cache and redeploying\
\- Make sure "Automatically expose preview deployments" is enabled

After following these steps, I tried updating the build command in the Build & deployment settings with some flags: \
\
`npx tinacms build --preview-base-branch main --preview-name preview && next build`\
\
The `--preview-base-branch` main tells Tina which branch to use as the base for schema comparison, and `--preview-name preview `helps identify this as a preview build. The `next build` at the end preserves the Next.js build step while adding the necessary Tina preview configuration.\
\
Then I tried to redeploy. It did not work, but at least I got a different error: Error: Server responded with status code 400, Bad Request.\
Yay, progress! \
\
I tried adding the `--skip-cloud-checks` flag to see if there might be an authentication issue: \
\
`npx tinacms build --preview-base-branch main --preview-name preview --skip-cloud-checks && next build`\
\
And this time it worked - deployment to preview was a success! So I'll have to investigate the authentication further, but that will have to wait because of work.\
\
\
Edit: I added separate configurations for preview and production builds in my package.json instead. \
Cheers!
