# Autocomplete Demo

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview

This is a UI/UX-focused challenge to test how you approach building a new frontend feature.

## Instructions

1. Fork the repository
2. Get the app running locally
3. Do your best on the challenge (see below)
4. Deploy the app somewhere (we recommend Vercel)
5. Send a link to [milo@synonym.bio](milo@synonym.bio) once you're ready for us to review it!

Ideally, you should try to spend no more than 2-3 hours on this challenge. If it's taking way longer than that, or you run into deployment or environment issues, let me know.

## Challenge

This React app has a simple equation editor, which is similar to something we've had to build at Synonym. We want to make it easy for non-software engineers to simple equations.

**Equations**

In this case, an *equation* is a simple mathematical equation, with a left-hand and right-hand side, separated by an equals sign.
- The left-hand side should have one *identifier* (e.g `x` or `my_variable` or `SomeIdentifier`)
- The right hand side can contain expressions with multiple identifiers and operators (e.g `1 + Hello * World` or `Foo / Bar`)

**Adding Autocomplete**

**Your challenge is to add an autocomplete feature to the equation editor.** Just like a software IDE, the autocomplete should suggest completions as the user types.

**Here are the main requirements:**
- The autocomplete should open up when the user starts typing
- The autocomplete should follow the location of the user's cursor
- If the user adds an equation (e.g `MyVariable = 1 + 2`), then `MyVariable` should be added to the autocomplete options!
- Typing `Tab` should select the top suggestion and insert it into the equation at the current cursor location
- The sidebar on the right has the list of identifiers that should be autocompleted. For example, if the sidebar has `MyVariable`, `Hello`, and `World`, then the autocomplete should suggest those three options to the user as they type.

**Things you should not worry about:**
- Syntax highlighting or evaluating the equation expressions

**Other than these requirements, you're free to make any decisions about the UI/UX of the autocomplete.**

## Scoring / Feedback

We don't expect the feature to be perfect, but are looking for the following things:
1. Does the autocomplete work?
2. Does the UI look nice? Is it consistent and something we'd be proud to demo?
3. Is the code easy to understand and improve on in the future?

## Quick Start

First, run the development server:

```bash
yarn dev

# If you need to install dependencies:
yarn add [package-name]
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Optional Improvements

If you're feeling particularly ambitious, you're welcome to improve aspects of the app besides the autocomplete.

- Make the equation panel scrollable
- Add the ability to delete single equations or clear all of them
- Make the app responsive for smaller screens!

## Questions

If you have questions, don't hesitate to reach out to me at [milo@synonym.bio](milo@synonym.bio).