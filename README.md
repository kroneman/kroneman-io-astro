# Kroneman.io

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn run dev`             | Starts local dev server at `localhost:3000`      |
| `yarn run build`           | Build your production site to `./dist/`          |
| `yarn run preview`         | Preview your build locally, before deploying     |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro --help`    | Get help using the Astro CLI                     |
| `yarn run storybook`       | Starts Storybook                                 |
| `yarn run build-storybook` | Starts Storybook                                 |

## Ignoring github pages branch in Vercel deployments

After setting up github pages to host storybook.
Vercel's preview build was breaking on trying to spin up a preview branch.

This lead me down the rabbit-hole of learning how to ignore builds in vercel.

1. Log into vercel
2. Go to your project
3. Then Settings > Git
4. Scroll down to "Ignored Build Step"
5. Add the following to ignore gh pages

```
[[ "$VERCEL_GIT_COMMIT_REF" == "gh-pages" ]] && exit 0
```

You can also add a script to get more fine-grained control.
In my case I use

```
[[ "$VERCEL_GIT_COMMIT_REF" == "gh-pages" ]] && exit 0 || bash bin/vercel-ignore-build
```

Where [bin/vercel-ignore-build](bin/vercel-ignore-build) is a script in this repository
