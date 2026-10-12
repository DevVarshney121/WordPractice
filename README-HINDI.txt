WORD PRACTICE PROJECT — UPDATED

Files:
- index.html: home page (open this first)
- about.html: Hindi Mean practice
- contact.html: Synonym practice
- user-select-word.html: User Define practice
- extra.html: existing Dhappa page (left as-is)
- manage-words.html: add/edit/delete word lists
- words-store.js: shared browser storage
- word-defaults.js: original word lists used as initial defaults

HOW TO USE
1. Upload all files in this folder to the same Vercel project/root.
2. Open index.html on your deployed domain.
3. Click “MANAGE WORD LISTS”.
4. Choose Hindi Mean, Synonym, or User Define. Add, edit, or delete words.
5. Changes are saved in localStorage for that browser and domain; they remain after refresh/reopening and normal redeploys.
6. Export JSON regularly as a backup. Import JSON can replace the selected list.

IMPORTANT PERSISTENCE LIMITATION
This version keeps changes in the browser that made them. Vercel static hosting cannot write edited words back into deployed HTML files. Other users/devices will not automatically see your edits. For shared global updates across all users/devices, connect a database/backend (for example Supabase) and secure the admin page with authentication. Do not put database secret keys in frontend files.

RESPONSIVE
The existing dark/neon cyan visual theme is retained. Mobile styles make the practice pages single-column and touch-friendly.
