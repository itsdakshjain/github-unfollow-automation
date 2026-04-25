# GitHub Non-Follower Cleaner 

A lightweight, safe, and zero-dependency JavaScript automation tool to identify and unfollow non-reciprocal GitHub accounts directly from your browser.

##  Why I built this
As a developer, keeping a clean "Following" list is important for a relevant activity feed. I noticed my following/follower ratio was becoming unbalanced, and manually unfollowing hundreds of accounts was inefficient. I built this script to automate the process while respecting GitHub's rate limits.

##  Features
- **No Token Required:** Runs in the browser console using your existing session.
- **Batch Processing:** Processes users in groups of 50 to stay under the radar.
- **Human-Like Delay:** Uses a randomized 4-6 second delay between actions to prevent account flagging.
- **Visual Feedback:** Highlights the row currently being processed in the UI.

##  How to Use
1. Go to your GitHub [Following Tab](https://github.com/itsdakshjain?tab=following).
2. Press `F12` (or `Right-Click > Inspect`) and open the **Console** tab.
3. Copy the code from [unfollow.js](./unfollow.js) in this repo.
4. Paste it into the console and hit **Enter**.
5. Wait for the batch to finish; the page will refresh automatically.

##  Safety Disclaimer
This script is for educational purposes. It includes delays to mimic human behavior, but use it responsibly. I recommend taking a short break between large batches.

---
*Created as a utility tool by [Daksh Jain](https://github.com/itsdakshjain)*
