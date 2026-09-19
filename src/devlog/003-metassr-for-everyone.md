---
title: "MetaSSR for everyone!"
description: "The next step for MetaSSR is to make it as accessible as possible. Everyone should build their polyglot applications in minutes."
date: 2026-09-19
tags: ["MetaSSR", "OSS", "MetaCall"]
coverImage: /public/devlog/003-metassr-for-everyone.png
---

After Google Summer of Code, I found that we reached a proof-of-concept level at developing MetaSSR; We now have an example where I'm able to load numpy and javascript code to the same memory context, and on the same web server, serving on SSR'd React client. That's crazy work. There is room for essential improvements and a **huge backlog** of features.

But I want to take the decision, I don't want to spend the next month building features that people don't need in their polyglot web apps quite yet—The next step for MetaSSR is to make it as accessible as possible. Everyone should build their polyglot applications in minutes.

My vision is:

**Dev Experience**: It should be easy to develop with MetaSSR. We got busy lately with the features we added. This needs to change.

We updated the starter templates, and will focus that each feature that is added needs checking the templates and validate if it's outdated or not, as a mandatory step in the Pull Request review.

We improved the CLI too, but the CLI is imperative. So we added a new `metassr.toml` configuration file, you define what you need from your MetaSSR app in a single persistent file. It pretty much does all what the CLI do.

There are plans to improve documentation. With two types **Internal Docs** for people that maintain the project and contribute. And the **User Docs** for people developing apps with our framework.

**Deployment**: Right now the state of deployments for MetaSSR sucks.

You can actually deploy a `-t ssg` application on github pages as build artifacts, enjoying our Static-Site-Generation. But that is *not* what MetaSSR is about. The thing is, our setup now is a bit messy to work out-of-the-box. You'd need to:

- install MetaCall
- install node/python (whatever runtimes you want, supporting Ruby soon)
- link `libmetacall` with our Binary
- We don't ship a pre-built binary for now so you need to build your own version.

So, ideally this all can be inside a docker image. We created two images: **Base Image**: has MetaCall + Rust to compile MetaSSR. And **App Image** which is per project and contains the base image + any runtime your application need (and for python you need `requirements.txt`)

The Docker images is a good starting point, but we target that we -very soon- publish pre-built binaries via GitHub Releases and an npm package.

**Agentic AI**: Since the friction between idea and execution became almost zero; **everyone** should be able to wire up their coding agent to MetaSSR and tell it the idea, and voila they got a working polyglot application.

This could be an `AGENTS.md` that instructs your agent on how to build the app. But ideally I would just like users to

1. Clone MetaSSR
2. Open their agent and tell it what to build with it
3. Create a PR to show the community what they built!

As a MetaCall/MetaSSR maintainer, want to see real use-cases of polyglot, and I believe that there might be one in someone's head and i want to remove that friction. **Just build**.

Related links:

- <https://github.com/metacall/metassr/issues/193>
- <https://github.com/metacall/metassr/issues/69>
- <https://github.com/metacall/metassr/issues/177>
- <https://github.com/metacall/metassr/pull/194>
- <https://github.com/metacall/metassr/pull/195>
- <https://github.com/metacall/metassr/pull/196>
