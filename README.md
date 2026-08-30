# ⚡ QuizClass — Interactive Lesson Quiz Site

A gamified quiz platform for school lessons. Built as a static site — runs 100% in the browser, no server needed.

## 📁 File Structure
```
quizsite/
├── index.html       ← Grade selection home page
├── units.html       ← Units for a grade
├── lessons.html     ← Lessons + student leaderboard sidebar
├── qcm.html         ← Interactive quiz page
├── data.js          ← ALL curriculum data + QCM questions
└── style.css        ← Shared styles
```

## 🚀 Hosting on GitHub Pages (Free)

1. Create a free account at https://github.com
2. Click **New Repository** → name it `quizclass` (or anything you like)
3. Upload all files (drag and drop in the browser, or use Git)
4. Go to **Settings → Pages**
5. Under "Source", select **main branch** → **/ (root)**
6. Click **Save** → your site will be live at:
   `https://YOUR_USERNAME.github.io/quizclass/`

## ✏️ Adding Your Own Questions

Open `data.js` and find the lesson you want to edit. Each lesson has a `qcm` array:

```javascript
{
  id: "l1",
  title: "Your Lesson Title",
  description: "Short description",
  qcm: [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2   // ← index of correct answer (0 = A, 1 = B, 2 = C, 3 = D)
    },
    // add more questions...
  ]
}
```

## 🎬 How to Make QCM from Video Lessons

1. **Transcribe the video**: 
   - Use [Whisper](https://openai.com/research/whisper) (free, offline)
   - Or YouTube auto-captions → download as `.txt`
   - Or [Otter.ai](https://otter.ai) (free tier)

2. **Generate questions**: Paste the transcript into Claude or ChatGPT with this prompt:
   ```
   From the following lesson transcript, generate 8 multiple choice questions.
   For each question: provide 4 options (A, B, C, D), mark the correct answer index (0-3).
   Return as a JSON array matching this format:
   [{"question":"...","options":["A","B","C","D"],"correct":0}]
   
   TRANSCRIPT:
   [paste transcript here]
   ```

3. **Review manually** — AI is 85-95% accurate. Always verify definitions and numbers.

4. **Paste into data.js** under the correct lesson's `qcm` array.

## 🎭 Customizing Memes

Open `data.js` and find the `MEMES` object. Replace the Giphy URLs with any `.gif` URLs you prefer:

```javascript
const MEMES = {
  correct: [
    { url: "https://your-gif-url.gif", caption: "Your caption!" },
  ],
  wrong: [
    { url: "https://your-gif-url.gif", caption: "Your caption!" },
  ]
};
```

## 🏫 Adding Grades / Units / Lessons

Follow the same structure in `data.js`. Each grade has `units`, each unit has `lessons`, each lesson has `qcm`.

## 📊 Student Leaderboard

Results are saved in the browser's `localStorage`. This means:
- Each browser/device has its own leaderboard
- Data persists across sessions (until browser data is cleared)
- For a **shared** leaderboard across all students, you would need a backend (e.g., Supabase free tier)
