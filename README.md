# Zelda: Ocarina of Time Randomizer - Tool - Is It All Dungeons

Have you like me grown tired of always rolling All dungeon seeds? Do you also sometimes just want a seed without having to worry about whether having to reach pierre at the top of a barren fire temple for a Kokiri emerald to get song of time from Song of Ocarina of Time to go and do toilet for your first magic?

Boy have I got the tool for you!

This tool simply examines the spoiler log to find out if the seed logically requires all dungeons to be completed.
It does this by looking for the presence of the check "Song from Ocarina of Time" within the playthrough.

## Usage

I haven't made this an npm package yet. So you'll need to clone this repo to use it.

Then run
```
node index.js ./path/to/spoilerLog.json
```

The result will then be either 

```
λ node index.js .\spoilerlog.json
Found Spoiler Log
Checking logical playthrough for "Song from Ocarina of Time"...
Found "Song From Ocarina of Time" within the logical playthrough
This is an All Dungeons Seed!
```

Or

```
λ node index.js .\spoilerlog.json
Found Spoiler Log
Checking logical playthrough for "Song from Ocarina of Time"...
This is not an All Dungeons Seed!
```

## Updates

I would like to update this as such:
- Bundle as an NPM package to make distribution and usage simpler.
- Accept the seed id and fetch the spoiler log directly, cutting out the need for the user to download and path to the spoiler log themselves.
- Should probably put some tests in here or something idk.
- It's a pretty simple CLI, but maybe a little UI would increase usability for all users.
