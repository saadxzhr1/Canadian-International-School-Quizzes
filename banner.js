

//private lessons
// 
document.addEventListener('DOMContentLoaded', function () {
  

  const banner = document.createElement('div');
  banner.id = 'promo-banner';
  banner.innerHTML = `
    <div class="banner-inner">
      <div class="banner-content">
        <div class="banner-top">
          <span class="banner-tag">📡 PRIVATE LESSONS</span>
          <p class="banner-headline">Get ahead in Technology with private lessons designed for your exact needs and real computer skills.</p>
          <button class="banner-close" onclick="dismissBanner()">✕</button>
        </div>
        <ul class="banner-list">
          <li>🖥️ Office Tools — Word, Excel, PowerPoint</li>
          <li>📝 Guided exercises &amp; quizzes</li>
          <li>🤖 Scratch, basic robotics &amp; AI prompting to build logic and problem-solving skills</li>
        </ul>
        <div class="banner-footer">
          <span class="banner-tagline">Improve understanding, confidence, and school results!</span>
          <a href="https://wa.me/212663650770" target="_blank" class="banner-cta">📲 +212 663 650 770</a>
        </div>
      </div>
    </div>
  `;

  document.body.insertBefore(banner, document.body.firstChild);
});

function dismissBanner() {
  document.getElementById('promo-banner').remove();
  
}