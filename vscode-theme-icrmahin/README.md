# icrmahin VS Code Color Theme

The official, eye-comfortable color theme engineered by **A. Mahin (`icrmahin`)**.

This theme brings the peaceful, warm editorial aesthetic of the `icrmahin` brand to your code editor, calibrated for prolonged 8+ hour coding sessions without eye fatigue.

---

## Themes Included

1. **`icrmahin Minimalist Dark`**:
   - Deep espresso background (`#201D19`)
   - Warm parchment text (`#F5EDE2`)
   - Restrained periwinkle blue (`#7790ED`) keywords
   - Warm earth clay (`#E09F67`) functions
   - Forest sage (`#65C189`) strings
   - Subtle contrast line numbers and comments (`#9E978D`)

2. **`icrmahin Warm Light`**:
   - Soft alabaster/parchment canvas (`#F5EDE2`) that eliminates harsh `#FFFFFF` glare
   - Deep espresso typography (`#292621`) with 12.6:1 WCAG AAA contrast
   - Deep periwinkle (`#435DC9`) keywords with 4.6:1 WCAG AA contrast
   - Amber ochre (`#9A5B15`) functions
   - Muted forest (`#2A7347`) strings

---

## Installation Guide

### Method 1: Local Extension Folder (Fastest & Zero Setup)
1. Copy the entire `vscode-theme-icrmahin` folder to your VS Code extensions directory:
   - **macOS / Linux**: `~/.vscode/extensions/theme-icrmahin`
   - **Windows**: `%USERPROFILE%\.vscode\extensions\theme-icrmahin`
2. Restart VS Code or press `Cmd+Shift+P` (or `Ctrl+Shift+P`) and run:
   ```
   Developer: Reload Window
   ```
3. Open the Theme selector:
   - Press `Cmd+K Cmd+T` (or `Ctrl+K Ctrl+T`)
   - Select either **`icrmahin Minimalist Dark`** or **`icrmahin Warm Light`**.

---

### Method 2: Package into `.vsix` with `vsce`
If you have Node.js and npm installed:
```bash
# Install the VS Code extension compiler globally
npm install -g @vscode/vsce

# Inside the vscode-theme-icrmahin directory:
cd vscode-theme-icrmahin
vsce package

# Install the generated .vsix file in VS Code:
code --install-extension theme-icrmahin-1.0.0.vsix
```

---

### Method 3: Direct `settings.json` Import
If you prefer not to install an extension, you can copy the workbench colors and token rules directly into your personal `settings.json` under `workbench.colorCustomizations` and `editor.tokenColorCustomizations`.

---

## Palette Highlights

| Role | Color Token | Hex | Visual Effect |
|---|---|---|---|
| Dark Canvas | Foundation | `#201D19` | Warm, non-dazzling dark background |
| Light Canvas | Foundation | `#F5EDE2` | Soft paper-like warmth, zero glare |
| Primary Text | Typography | `#292621` / `#F5EDE2` | Sharp, readable, WCAG AAA compliant |
| Keywords | Signature Accent | `#7790ED` / `#435DC9` | Calm periwinkle emphasis |
| Functions | Supporting Accent | `#E09F67` / `#9A5B15` | Warm ochre highlight |
| Strings | Semantic Success | `#65C189` / `#2A7347` | Gentle earthy sage |

---

## Feedback & Updates
Created and maintained by **A. Mahin (`icrmahin`)** — [icrmahin@gmail.com](mailto:icrmahin@gmail.com).
Website: [https://icrmahin.com](https://icrmahin.com)
