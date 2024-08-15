document.addEventListener('DOMContentLoaded', () => {
  const baseContent = [
    { tags: ["FAK YOR OPINIONS", "FAK DAK", "FAK YOR DEVELOPERS", "FAK YOR COOKING", "FAK YOR MENTAL ISSUES", "FAK YR TX SPEED", "FAK YOR TOEKNEE", "FAK YOR CTO"] },
    { tags: ["FAK YOR GOVERNANCE", "FAK YOR STAKE POOL", "FAK YOR COLOR", "FAKDAK 4 GUDLAK", "FAK YOR CFO TOO", "FAK YOR OPINIONS", "FAK YOR COMMUNITY", "FAK YOR DEV"] },
    { tags: ["FAK YR BLOCKCHAIN", "FAK YOR STAKING", "FAK YOR APR", "FAK YOR MARKET CYCLE", "FAKDAK 4 GUDLAK", "FAK YOR STOCK IMAGES", "UFAT FAKS", "FAK YOR STAKE POOL"] },
    { tags: ["FAK YOR WAY AIM GUCCI", "FAK YOR INFLUENCER", "FAK YOR WALLET", "FAK YOR COLOR", "FAK YOR LIFE", "FAK YOR TA", "FAK YOR MARKET CYCLE", "FAK YOR TICKER"] },
    { tags: ["FAK YOR ALPHA", "FAK YOR BAGS", "FAK YOR PORTFOLIO", "FAK YOR META", "FAK YOR PRESIDENT", "FAK YOR GOVERNMENT TOO","FAK YOR CFO TOO","FAK YOR APR"] },
    { tags: ["FAK YOR OPINIONS", "FAK DAK", "FAK YOR DEVELOPERS", "FAK YOR COOKING", "FAK YOR MENTAL ISSUES", "FAK YR TX SPEED", "FAK YOR TOEKNEE", "FAK YOR CTO"] },
    { tags: ["FAK YOR GOVERNANCE", "FAK YOR STAKE POOL", "FAK YOR COLOR", "FAKDAK 4 GUDLAK", "FAK YOR CFO TOO", "FAK YOR OPINIONS", "FAK YOR COMMUNITY", "FAK YOR DEV"] },
    { tags: ["FAK YR BLOCKCHAIN", "FAK YOR STAKING", "FAK YOR APR", "FAK YOR MARKET CYCLE", "FAKDAK 4 GUDLAK", "FAK YOR STOCK IMAGES", "UFAT FAKS", "FAK YOR STAKE POOL"] },
    { tags: ["FAK YOR WAY AIM GUCCI", "FAK YOR INFLUENCER", "FAK YOR WALLET", "FAK YOR COLOR", "FAK YOR LIFE", "FAK YOR TA", "FAK YOR MARKET CYCLE", "FAK YOR TICKER"] },
    { tags: ["FAK YOR ALPHA", "FAK YOR BAGS", "FAK YOR PORTFOLIO", "FAK YOR META", "FAK YOR PRESIDENT", "FAK YOR GOVERNMENT TOO","FAK YOR CFO TOO","FAK YOR APR"] },
    { tags: ["FAK YOR OPINIONS", "FAK DAK", "FAK YOR DEVELOPERS", "FAK YOR COOKING", "FAK YOR MENTAL ISSUES", "FAK YR TX SPEED", "FAK YOR TOEKNEE", "FAK YOR CTO"] },
    { tags: ["FAK YOR GOVERNANCE", "FAK YOR STAKE POOL", "FAK YOR COLOR", "FAKDAK 4 GUDLAK", "FAK YOR CFO TOO", "FAK YOR OPINIONS", "FAK YOR COMMUNITY", "FAK YOR DEV"] },
    { tags: ["FAK YR BLOCKCHAIN", "FAK YOR STAKING", "FAK YOR APR", "FAK YOR MARKET CYCLE", "FAKDAK 4 GUDLAK", "FAK YOR STOCK IMAGES", "UFAT FAKS", "FAK YOR STAKE POOL"] },
    { tags: ["FAK YOR WAY AIM GUCCI", "FAK YOR INFLUENCER", "FAK YOR WALLET", "FAK YOR COLOR", "FAK YOR LIFE", "FAK YOR TA", "FAK YOR MARKET CYCLE", "FAK YOR TICKER"] },
    { tags: ["FAK YOR ALPHA", "FAK YOR BAGS", "FAK YOR PORTFOLIO", "FAK YOR META", "FAK YOR PRESIDENT", "FAK YOR GOVERNMENT TOO","FAK YOR CFO TOO","FAK YOR APR"] }
 ,
 { tags: ["FAK YOR OPINIONS", "FAK DAK", "FAK YOR DEVELOPERS", "FAK YOR COOKING", "FAK YOR MENTAL ISSUES", "FAK YR TX SPEED", "FAK YOR TOEKNEE", "FAK YOR CTO"] },
 { tags: ["FAK YOR GOVERNANCE", "FAK YOR STAKE POOL", "FAK YOR COLOR", "FAKDAK 4 GUDLAK 4 GUDLAK", "FAK YOR CFO TOO", "FAK YOR OPINIONS", "FAK YOR COMMUNITY", "FAK YOR DEV"] },
 { tags: ["FAK YR BLOCKCHAIN", "FAK YOR STAKING", "FAK YOR APR", "FAK YOR MARKET CYCLE", "FAKDAK 4 GUDLAK", "FAK YOR STOCK IMAGES", "UFAT FAKS", "FAK YOR STAKE POOL"] },
 { tags: ["FAK YOR WAY AIM GUCCI", "FAK YOR INFLUENCER", "FAK YOR WALLET", "FAK YOR COLOR", "FAK YOR LIFE", "FAK YOR TA", "FAK YOR MARKET CYCLE", "FAK YOR TICKER"] },
 { tags: ["FAK YOR ALPHA", "FAK YOR BAGS", "FAK YOR PORTFOLIO", "FAK YOR META", "FAK YOR PRESIDENT", "FAK YOR GOVERNMENT TOO","FAK YOR CFO TOO","FAK YOR APR"] },
 { tags: ["FAK YOR OPINIONS", "FAK DAK", "FAK YOR DEVELOPERS", "FAK YOR COOKING", "FAK YOR MENTAL ISSUES", "FAK YR TX SPEED", "FAK YOR TOEKNEE", "FAK YOR CTO"] },
 { tags: ["FAK YOR GOVERNANCE", "FAK YOR STAKE POOL", "FAK YOR COLOR", "FAKDAK 4 GUDLAK", "FAK YOR CFO TOO", "FAK YOR OPINIONS", "FAK YOR COMMUNITY", "FAK YOR DEV"] },
 { tags: ["FAK YR BLOCKCHAIN", "FAK YOR STAKING", "FAK YOR APR", "FAK YOR MARKET CYCLE", "FAKDAK 4 GUDLAK", "FAK YOR STOCK IMAGES", "UFAT FAKS", "FAK YOR STAKE POOL"] },
 { tags: ["FAK YOR WAY AIM GUCCI", "FAK YOR INFLUENCER", "FAK YOR WALLET", "FAK YOR COLOR", "FAK YOR LIFE", "FAK YOR TA", "FAK YOR MARKET CYCLE", "FAK YOR TICKER"] },
 { tags: ["FAK YOR ALPHA", "FAK YOR BAGS", "FAK YOR PORTFOLIO", "FAK YOR META", "FAK YOR PRESIDENT", "FAK YOR GOVERNMENT TOO","FAK YOR CFO TOO","FAK YOR APR"] },
 { tags: ["FAK YOR OPINIONS", "FAK DAK", "FAK YOR DEVELOPERS", "FAK YOR COOKING", "FAK YOR MENTAL ISSUES", "FAK YR TX SPEED", "FAK YOR TOEKNEE", "FAK YOR CTO"] },
 { tags: ["FAK YOR GOVERNANCE", "FAK YOR STAKE POOL", "FAK YOR COLOR", "FAKDAK 4 GUDLAK", "FAK YOR CFO TOO", "FAK YOR OPINIONS", "FAK YOR COMMUNITY", "FAK YOR DEV"] },
 { tags: ["FAK YR BLOCKCHAIN", "FAK YOR STAKING", "FAK YOR APR", "FAK YOR MARKET CYCLE", "FAKDAK 4 GUDLAK", "FAK YOR STOCK IMAGES", "UFAT FAKS", "FAK YOR STAKE POOL"] },
 { tags: ["FAK YOR WAY AIM GUCCI", "FAK YOR INFLUENCER", "FAK YOR WALLET", "FAK YOR COLOR", "FAK YOR LIFE", "FAK YOR TA", "FAK YOR MARKET CYCLE", "FAK YOR TICKER"] },
 { tags: ["FAK YOR ALPHA", "FAK YOR BAGS", "FAK YOR PORTFOLIO", "FAK YOR META", "FAK YOR PRESIDENT", "FAK YOR GOVERNMENT TOO","FAK YOR CFO TOO","FAK YOR APR"] }
];

  function createSection(content, reverse = false) {
    const section = document.createElement('section');
    section.className = 'enable-animation';
    
    const marquee = document.createElement('div');
    marquee.className = `marquee ${reverse ? 'marquee--reverse' : ''}`;
    
    const ul1 = document.createElement('ul');
    ul1.className = 'marquee__content';
    
    const ul2 = document.createElement('ul');
    ul2.className = 'marquee__content';
    ul2.setAttribute('aria-hidden', 'true');

    content.forEach(tag => {
      const li = document.createElement('li');
      li.textContent = tag;
      ul1.appendChild(li);
      ul2.appendChild(li.cloneNode(true));
    });

    const randomIndex1 = Math.floor(Math.random() * content.length);
    const randomIndex2 = Math.floor(Math.random() * content.length);
    ul1.children[randomIndex1].style.backgroundColor = 'red';
    ul2.children[randomIndex2].style.backgroundColor = 'red';

    marquee.appendChild(ul1);
    marquee.appendChild(ul2);
    section.appendChild(marquee);
    
    return section;
  }

  const contentContainer = document.getElementById('content');
  if (contentContainer) {
    baseContent.forEach((item, index) => {
      const section = createSection(item.tags, index % 2 !== 0);
      contentContainer.appendChild(section);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const copyImage = document.getElementById('copyImage');
    const contentToCopy = '7fd79892567b12b8a4fe3befc41786322d40a9680a0509b158e8e1b9'; 

    const copyImage1 = document.getElementById('copyImage1');
    const contentToCopy1 = '459gJGaNF5YgWDJTiBgUggTBk6pi7M9bPZz2FfiDpump'; 

    if (copyImage) {
      copyImage.addEventListener('click', function() {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = contentToCopy;
        document.body.appendChild(tempTextArea);
    
        tempTextArea.select();
        document.execCommand('copy');
    
        document.body.removeChild(tempTextArea);
    
      });
    }

    if (copyImage1) {
      copyImage1.addEventListener('click', function() {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = contentToCopy1;
        document.body.appendChild(tempTextArea);
    
        tempTextArea.select();
        document.execCommand('copy');
    
        document.body.removeChild(tempTextArea);
    
      });
    }
  });
