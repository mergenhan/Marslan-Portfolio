# Images folder

Drop your image files here. They will be accessible at `/images/<filename>` in the browser.

## How to add an image

1. Copy your image file into this folder:
   ```
   public/images/avatar.jpg
   public/images/iac-security.png
   public/images/about-photo.webp
   ```

2. Open `src/data/siteConfig.js` and set the matching path:
   ```js
   avatar: '/images/avatar.jpg',
   ```

3. Save — the image appears on the site immediately.

## Recommended sizes

| Slot            | Size (px)    | Ratio | Notes                        |
|-----------------|-------------|-------|------------------------------|
| Hero avatar     | 400 × 400   | 1:1   | Square, face centred         |
| About photo     | 800 × 600   | 4:3   |                              |
| Project card    | 1200 × 900  | 4:3   | Used in the grid             |
| Project detail  | 1600 × 900  | 16:9  | Full-width banner            |
| OG / social     | 1200 × 630  | ~2:1  | LinkedIn / Twitter preview   |
| Favicon         | any `.svg`  | 1:1   | Place in `public/` directly  |

## Supported formats

`jpg` · `jpeg` · `png` · `webp` · `gif` · `svg` · `avif`

> **webp** gives the best file size / quality ratio for photos.
