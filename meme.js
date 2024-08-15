const imageFolderPath = "./meme/"; // Update this path to your images folder
const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
  "33.png",
  "34.png",
  "35.png",
  "36.png",
  "37.png",
  "38.png",
  "39.png",
  "40.png",
  "41.png",
  "42.png",
  "43.png",
  "44.png",
  "45.png",
  "46.png",
  "47.png",
  "48.png",
  "49.png",
  "50.png",
  "51.png",
  "52.png",
  "53.png",
  "54.png",
  "55.png",
  "56.png",
  "57.png",
  "58.png",
  "59.png",
  "60.png",
  "61.png",
  "62.png",
  "63.png",
  "64.png",
  "65.png",
  "66.png",
  "67.png",
  "68.png",
  "69.png",
  "70.png",
  "71.png",
  "72.png",
  "73.png",
  "74.png",
  "75.png",
  "76.png",
  "77.png",
  "78.png",
  "79.png",
  "80.png",
  "81.png",
  "82.png",
  "83.png",
  "84.png",
  "85.png",
  "86.png",
  "87.png",
  "88.png",
  "89.png",
  "90.png",
  "91.png",
  "92.png",
  "93.png",
  "94.png",
  "95.png",
  "96.jpg",
  "97.jpg",
  "98.png",
  "99.png",
  "100.png",
  "101.png",
  "102.png",
  "103.png",
  "104.png",
  "105.jpeg",
  "106.png",
  "107.png",
  "108.png",
  "109.png",
  "110.png",
  "111.png",
  "112.png",
  "113.png",
  "114.png",
  "115.png",
  "116.png",
  "117.png",
  "118.png",
  "119.png",
  "120.png",
  "121.png",
  "122.png",
  "123.png",
  "124.png",
  "125.png",
  "126.png",
  "127.png",
  "128.png",
  "129.png",
  "130.png",
  "131.png",
  "132.png",
  "133.png",
  "134.png",
  "135.png",
  "136.png",
  "137.png",
  "138.png",
  "139.png",
  "140.png",
  "141.png",
  "142.png",
  "143.png",
  "144.png",
  "145.png",
  "146.png",
  "147.png",
  "148.png",
  "149.png",
  "150.png",
  "151.png",
  "152.png",
  "153.png",
  "154.png",
  "155.png",
  "156.png",
  "157.png",
  "158.png",
  "159.png",
  "160.png",
  "161.png",
  "162.png",
  "163.png",
  "164.png",
  "165.png",
  "166.png",
  "167.png",
  "168.png",
  "169.png",
  "170.png",
  "171.png",
  "172.png",
  "173.png",
  "174.png",
  "175.png",
  "176.png",
  "177.png",
  "178.png",
  "179.png",
  "170.png",
  "171.png",
  "172.png",
  "173.png",
  "174.png",
  "175.png",
  "176.png",
  "177.png",
  "178.png",
  "179.png",
  "180.png",
  "181.png",
  "182.png",
  "183.png",
  "184.png",
  "185.png",
  "186.png",
  "187.png",
  "188.png",
  "189.png",
  "190.png",
  "191.png",
  "192.png",
  "193.png",
  "194.png",
  "195.png",
  "196.png",
  "197.png",
  "198.png",
  "199.png",
  "190.png",
  "191.png",
  "192.png",
  "193.png",
  "194.png",
  "195.png",
  "196.png",
  "197.png",
  "198.png",
  "199.png",
  "200.png",
  "201.png",
  "202.png",
  "203.png",
  "204.png",
  "205.png",
  "206.png",
  "207.png",
  "208.png",
  "209.png",
  "210.png",
  "211.png",
  "212.png",
  "213.png",
  "214.png",
  "215.png",
  "216.jpeg",
  "217.gif",
  "218.jpeg",
  "219.jpeg",
  "220.jpeg",
  "221.png",
  "222.jpeg",
  "223.png",
  "224.jpeg",
  "225.jpeg",
  "226.jpeg",
  "227.png",
  "228.png",
  "229.png",
  "230.png",
  "231.png",
  "232.png",
  "233.png",
  "234.png",
  "235.png",
  "236.png",
  "237.png",
  "238.png",
  "239.png",
  "240.png",
  "241.png",
  "242.png",
  "243.png",
  "244.png",
  "245.png",
  "246.png",
  "247.png",
  "248.jpeg",
  "249.png",
  "250.png",
  "251.png",
  "252.png",
  "253.jpeg",
  "254.png",
  "255.png",
  "256.png",
  "257.png",
  "258.png",
  "259.png",
  "260.png",
  "261.png",
  "262.jpeg",
  "263.png",
  "264.png",
  "265.png",
  "266.png",
  "267.png",
  "268.png",
  "269.png",
  "270.png",
  "271.png",
  "272.png",
  "273.png",
  "274.png",
  "275.png",
  "276.png",
  "277.png",
  "278.png",
  "279.png",
  "270.png",
  "271.png",
  "272.png",
  "273.png",
  "274.png",
  "275.png",
  "276.png",
  "277.png",
  "278.png",
  "279.png",
  "280.jpeg",
  "281.jpeg",
  "282.jpeg",
  "283.png",
  "284.jpeg",
  "285.png",
  "286.png",
  "287.png",
  "288.jpeg",
  "289.png",
  "290.jpeg",
  "291.jpeg",
  "292.jpeg",
  "293.png",
  "294.png",
  "295.png",
  "296.png",
  "297.png",
  "298.gif",
  "299.gif",
  "300.gif",
  "301.jpeg",
  "302.jpeg",
  "303.jpeg",
  "304.jpeg",
  "305.png",
  "306.png",
  "307.png",
  "308.png",
  "309.png",
  // Add more image file names
];
document.addEventListener("DOMContentLoaded", () => {
  selectedFromGallery = false; // Ensure initial state
  loadGallery();
  getRandomImage();
  openTab('galleryTab'); 
});

let selectedFromGallery = false;

function loadGallery() {
  const gallery = document.getElementById("gallery");
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageFolderPath + image;
    imgElement.alt = image;
    imgElement.addEventListener("click", () => {
      showSelectedImage(image);
      openTab('randomTab', false); // Open random image tab without generating a new random image
    });
    gallery.appendChild(imgElement);
  });
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const randomImageElement = document.getElementById("randomImage");
  randomImageElement.src = imageFolderPath + randomImage;
  randomImageElement.alt = randomImage;
  selectedFromGallery = false; // Reset the flag when generating a random image
}

function showSelectedImage(image) {
  selectedFromGallery = true;
  const randomImageElement = document.getElementById("randomImage");
  randomImageElement.src = imageFolderPath + image;
  randomImageElement.alt = image;
}

function copyImage() {
  const randomImageElement = document.getElementById("randomImage");
  const imgURL = randomImageElement.src;

  fetch(imgURL)
    .then(response => response.blob())
    .then(blob => {
      const img = new Image();
      img.src = URL.createObjectURL(blob);

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(blob => {
          const clipboardItemInput = new ClipboardItem({ [blob.type]: blob });
          navigator.clipboard.write([clipboardItemInput])
            .then(() => {
              alert("Meme copied to clipboard");
            })
            .catch(err => {
              alert("Failed to copy meme: " + err);
            });
        });
      };
    })
    .catch(err => {
      alert("Failed to fetch meme: " + err);
    });
}


function downloadImage() {
  const randomImageElement = document.getElementById("randomImage");
  const imgURL = randomImageElement.src;
  const a = document.createElement("a");
  a.href = imgURL;
  a.download = randomImageElement.alt;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function openTab(tabId, generateRandom = true) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => (tab.style.display = "none"));
  
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    if (tabId === 'randomTab' && generateRandom && !selectedFromGallery) {
      // getRandomImage();
    }
    targetTab.style.display = "block";
  } else {
    console.error(`Tab with id ${tabId} does not exist.`);
  }
}
