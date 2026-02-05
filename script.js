// Assets configuration
// Categories corresponding to layer IDs: layer-{category}
const categories = [
    { id: 'shirt', label: 'トップス' },
    { id: 'pants', label: 'ボトムス' },
    { id: 'socks', label: '靴下' },
    { id: 'shoes', label: '靴' },
    { id: 'coat', label: 'アウター' },
    { id: 'underwear', label: 'インナー' },
    { id: 'hat', label: '帽子' },
    { id: 'gloves', label: '腕飾り' },
    { id: 'necklace', label: '首飾り' },
    { id: 'earrings', label: '耳飾り' },
    { id: 'back', label: '背中' },
    { id: 'background', label: '背景' }
];

// wardrobe data
const wardrobe = {
    shirt: [
        { id: 'shirt1', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: '猫のビッグTシャツだ！お気に入り～' },
        { id: 'shirt2', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: 'Tシャツ！' },
        { id: 'shirt3', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: 'Tシャツ！' },
        { id: 'shirt4', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: 'Tシャツ！' },
        { id: 'shirt5', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: 'Tシャツ！' },
        { id: 'shirt6', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: 'Tシャツ！' }
    ],
    pants: [
        { id: 'pants1', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: 'スカート履いたよ' },
    ],
    shoes: [],
    socks: [],
    coat: [],
    underwear: [],
    hat: [],
    gloves: [],
    necklace: [],
    earrings: [],
    back: [],
    background: []
};

// Emotion Config
const emotions = [
    { name: 'joy', eyeSrc: 'image/eye_joy.png', mouthSrc: 'image/mouth_joy.png', icon: '😊' },
    { name: 'anger', eyeSrc: 'image/eye_anger.png', mouthSrc: 'image/mouth_anger.png', icon: '😠' },
    { name: 'sorrow', eyeSrc: 'image/eye_sorrow.png', mouthSrc: 'image/mouth_sorrow.png', icon: '😢' },
    { name: 'sleepy', eyeSrc: 'image/eye_blink.png', mouthSrc: 'image/mouth_joy.png', icon: '😴' }
];

// State
let currentOutfit = {}; // { shirt: 'shirt1', pants: null, ... }
let currentCategory = 'shirt'; // Default tab
let currentEmotionIndex = 0;
let currentPage = 0;
const itemsPerPage = 3;
let blinkInterval;

// DOM Elements
const stageLayers = {}; // Cache for layer elements
const speechBubble = document.getElementById('speech-bubble');
const speechText = document.getElementById('speech-text');
const emotionBtn = document.getElementById('emotion-btn');
const costumeGrid = document.getElementById('costume-grid');
const tabsContainer = document.getElementById('category-tabs');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const mouthLayer = document.getElementById('layer-mouth'); // Specific access for emotion
const eyeLayer = document.getElementById('layer-eyes');   // Specific access for emotion

// Local Storage Key
const STORAGE_KEY = 'kisekae_outfit';

// Soliloquy Config
const soliloquies = [
    'まだ決まらないの？',
    '新しい服、欲しいなぁ...',
    '暇だなぁ...',
    'お腹すいた...おやつないの？',
    '次は何着せる気...？',
    '...さーと...さーと...しーさー♪',
    'えへへ、似合う？'
];

// Initialization
function init() {
    // Cache layer elements
    categories.forEach(cat => {
        stageLayers[cat.id] = document.getElementById(`layer-${cat.id}`);
    });

    // Load saved outfit or set default
    const savedOutfit = loadOutfit();
    if (savedOutfit) {
        currentOutfit = savedOutfit;
    } else {
        // Default Outfit
        currentOutfit = {
            shirt: 'shirt1'
        };
    }

    // Apply Outfit to Layers
    applyOutfit();

    renderTabs();
    renderMenu();
    startBlinking();
    startSoliloquyLoop(); // Start auto-speech
    updatePaginationButtons();

    // Set initial face
    updateFace();
}

// Interaction Logic (Nade-nade)
const hitboxHead = document.getElementById('hitbox-head');
const hitboxBody = document.getElementById('hitbox-body');

hitboxHead.addEventListener('click', () => {
    // Joyful reaction
    const savedEmotionIndex = currentEmotionIndex;

    // Switch to Joy (assuming index 0 is Joy, or find by name)
    const joyIndex = emotions.findIndex(e => e.name === 'joy');
    if (joyIndex !== -1) {
        currentEmotionIndex = joyIndex;
        updateFace();
        showSpeech('えへへ、くすぐったいよ〜');
    }

    // Restore after 2 seconds
    setTimeout(() => {
        currentEmotionIndex = savedEmotionIndex;
        updateFace();
    }, 2000);
});

hitboxBody.addEventListener('click', () => {
    // Shy/Surprised reaction (using Anger or Sorrow as placeholder if no Blush)
    // Or just custom message
    showSpeech('わっ！そこはダメだよ〜');

    // Blink fast
    blink();
    setTimeout(blink, 200);
});

// Soliloquy Logic
function startSoliloquyLoop() {
    // Run every 60 seconds (60000ms)
    setInterval(() => {
        // Only speak if bubble is not currently active (to avoid overwriting user interaction)
        if (!speechBubble.classList.contains('active')) {
            const text = soliloquies[Math.floor(Math.random() * soliloquies.length)];
            showSpeech(text);
        }
    }, 60000);
}


function loadOutfit() {
    try {
        const json = localStorage.getItem(STORAGE_KEY);
        return json ? JSON.parse(json) : null;
    } catch (e) {
        console.error('Failed to load outfit', e);
        return null;
    }
}

function saveOutfit() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentOutfit));
    } catch (e) {
        console.error('Failed to save outfit', e);
    }
}

function applyOutfit() {
    Object.keys(currentOutfit).forEach(catId => {
        const itemId = currentOutfit[catId];
        const categoryItems = wardrobe[catId];
        // Find item in wardrobe to get src
        const item = categoryItems ? categoryItems.find(i => i.id === itemId) : null;

        if (item && stageLayers[catId]) {
            stageLayers[catId].src = item.src;
            stageLayers[catId].style.display = 'block';
        }
    });
}


// Blinking Logic
function startBlinking() {
    const loop = () => {
        const delay = Math.random() * 3000 + 3000;
        setTimeout(() => {
            blink();
            loop();
        }, delay);
    };
    loop();
}

function blink() {
    const currentEmotion = emotions[currentEmotionIndex];
    eyeLayer.src = 'image/eye_blink.png';
    setTimeout(() => {
        eyeLayer.src = currentEmotion.eyeSrc;
    }, 150);
}

// Emotion Logic
emotionBtn.addEventListener('click', () => {
    currentEmotionIndex = (currentEmotionIndex + 1) % emotions.length;
    updateFace();
    emotionBtn.textContent = emotions[currentEmotionIndex].icon;
    showSpeech(`気分は${emotions[currentEmotionIndex].icon}だよ！`);
});

// Background Color Logic
const bgColorBtn = document.getElementById('bg-color-btn');
const bgColorPicker = document.getElementById('bg-color-picker');

bgColorBtn.addEventListener('click', () => {
    bgColorPicker.click();
}, false);

bgColorPicker.addEventListener('input', (e) => {
    document.body.style.background = e.target.value;
});

bgColorPicker.addEventListener('change', (e) => {
    document.body.style.background = e.target.value;
});

function updateFace() {
    const emotion = emotions[currentEmotionIndex];
    eyeLayer.src = emotion.eyeSrc;
    mouthLayer.src = emotion.mouthSrc;
}

// Tab Logic
function renderTabs() {
    tabsContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${currentCategory === cat.id ? 'active' : ''}`;
        btn.textContent = cat.label;
        btn.onclick = () => switchTab(cat.id);
        tabsContainer.appendChild(btn);
    });
}

function switchTab(categoryId) {
    currentCategory = categoryId;
    currentPage = 0;
    renderTabs(); // Update active state
    renderMenu();
    updatePaginationButtons();
}

// Menu & Pagination
function renderMenu() {
    costumeGrid.innerHTML = '';

    // Get items for current category, default to empty array
    const items = wardrobe[currentCategory] || [];

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);

    // If no items, maybe show a placeholder text?
    if (items.length === 0) {
        costumeGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; font-size: 12px; color: #888;">アイテムがありません</div>';
        return;
    }

    pageItems.forEach(item => {
        const div = document.createElement('div');
        const isSelected = currentOutfit[currentCategory] === item.id;
        div.className = `costume-item ${isSelected ? 'selected' : ''}`;
        div.onclick = () => toggleItem(item);

        const img = document.createElement('img');
        img.src = item.thumb;
        div.appendChild(img);

        costumeGrid.appendChild(div);
    });
}

function toggleItem(item) {
    const isAlreadyEquipped = currentOutfit[currentCategory] === item.id;
    const layer = stageLayers[currentCategory];

    if (isAlreadyEquipped) {
        // Unequip
        delete currentOutfit[currentCategory];
        layer.src = '';
        layer.style.display = 'none';
        showSpeech('脱いだよ！');
    } else {
        // Equip
        currentOutfit[currentCategory] = item.id;
        layer.src = item.src;
        layer.style.display = 'block';
        showSpeech(item.message || '着替えたよ！');
    }

    renderMenu(); // Re-render to update border selection
    saveOutfit();
}

// Pagination Controls
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderMenu();
        updatePaginationButtons();
    }
});

nextBtn.addEventListener('click', () => {
    const items = wardrobe[currentCategory] || [];
    if ((currentPage + 1) * itemsPerPage < items.length) {
        currentPage++;
        renderMenu();
        updatePaginationButtons();
    }
});

function updatePaginationButtons() {
    const items = wardrobe[currentCategory] || [];
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = (currentPage + 1) * itemsPerPage >= items.length;
}

// Speech Bubble
let speechTimeout;
function showSpeech(text) {
    // Wrap text every 10 characters
    const wrappedText = text.match(/.{1,10}/g).join("<br>");
    speechText.innerHTML = wrappedText;
    speechBubble.classList.add('active');

    if (speechTimeout) clearTimeout(speechTimeout);

    speechTimeout = setTimeout(() => {
        speechBubble.classList.remove('active');
    }, 2000);
}

// Start
init();
