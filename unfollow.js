/**
 * GitHub Non-Follower Cleaner
 * * INSTRUCTIONS:
 * 1. Go to your GitHub "Following" page.
 * 2. Open the Browser Console (F12).
 * 3. Paste this code and hit Enter.
 */

(async () => {
    // Select all Unfollow buttons on the current page
    const buttons = Array.from(document.querySelectorAll('input[value="Unfollow"]'));
    
    // Safety limit per batch to prevent GitHub rate-limiting
    const batchSize = 50; 
    const targets = buttons.slice(0, batchSize);
    
    if (targets.length === 0) {
        console.log("✅ No non-followers found on this page. Try scrolling down or refreshing!");
        return;
    }

    console.log(`🛡️ Starting Ultra-Safe Batch: Unfollowing ${targets.length} users.`);
    console.log("Processing... please keep this tab active.");

    for (let i = 0; i < targets.length; i++) {
        const btn = targets[i];
        
        // UI Feedback: Highlight the row being processed
        if (btn.closest('.d-table')) {
            btn.closest('.d-table').style.backgroundColor = '#f6ffed'; 
        }
        
        // Execute the unfollow click
        btn.click();
        
        console.log(`[${i + 1}/${targets.length}] Unfollowed safely.`);
        
        // Human-like delay: Random wait between 4 to 6 seconds
        const delay = Math.floor(Math.random() * 2000) + 4000;
        await new Promise(r => setTimeout(r, delay));
    }

    console.log("🏁 Batch complete!");
    alert(`Batch of ${targets.length} finished. Refreshing page...`);
    window.location.reload();
})();
