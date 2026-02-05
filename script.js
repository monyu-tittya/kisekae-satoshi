// Assets configuration
// Categories corresponding to layer IDs: layer-{category}
const categories = [
    { id: 'preset', label: 'セット' }, // Preset tab
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
    preset: [
        {
            id: 'preset_maid',
            label: 'メイドさん',
            thumb: 'image/costume_maid.png', // Use existing thumb or dedicated one
            message: 'お帰りなさいませ、ご主人様♪',
            outfit: {
                shirt: 'shirt2',
            }
        },
        {
            id: 'preset_casual',
            label: 'いつもの',
            thumb: 'image/costume_casual.png',
            message: 'やっぱりこれが落ち着くね',
            outfit: {
                shirt: 'shirt1',
            }
        }
    ],
    shirt: [
        { id: 'shirt1', src: 'image/costume_casual.png', thumb: 'image/costume_casual.png', message: '猫のビッグTシャツだ！お気に入り～' },
        { id: 'shirt2', src: 'image/costume_maid.png', thumb: 'image/costume_maid.png', message: 'ちょっと恥ずかしい/////' },
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
    { name: 'surprise', eyeSrc: 'image/eye_surprise.png', mouthSrc: 'image/mouth_surprise.png', icon: '😮' },
    { name: 'sleepy', eyeSrc: 'image/eye_blink.png', mouthSrc: 'image/mouth_joy.png', icon: '😴' }
];

// State
let currentOutfit = {}; // { shirt: 'shirt1', pants: null, ... }
let currentCategory = 'preset'; // Default tab
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
    'えへへ、似合う？',
    'だいなごんあずき...'
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

// Keep counts separate so they don't interfere
const touchCounts = {
    head: 0,
    body: 0
};

function handleTouch(area) {
    touchCounts[area]++;
    const count = touchCounts[area];

    const savedEmotionIndex = currentEmotionIndex;

    // Reset reaction helper
    const resetFace = () => {
        setTimeout(() => {
            currentEmotionIndex = savedEmotionIndex;
            updateFace();
        }, 2000);
    };

    if (area === 'head') {
        if (count >= 10) {
            // Angry reaction
            const angerIndex = emotions.findIndex(e => e.name === 'anger');
            if (angerIndex !== -1) {
                currentEmotionIndex = angerIndex;
                updateFace();
                showSpeech('もう...撫ですぎじゃない...？');
            }
            touchCounts.head = 0; // Reset after angry
            resetFace();
        } else {
            // Normal joy reaction
            const joyIndex = emotions.findIndex(e => e.name === 'joy');
            if (joyIndex !== -1) {
                currentEmotionIndex = joyIndex;
                updateFace();
                const messages = ['えへへ、くすぐったいよ〜', 'いいこいいこしてくれるの？', 'んふふ、こしょばい...', 'むふ～...'];
                showSpeech(messages[Math.floor(Math.random() * messages.length)]);
            }
            resetFace();
        }
    } else if (area === 'body') {
        if (count >= 5) {
            // Angry/Annoyed reaction
            const angerIndex = emotions.findIndex(e => e.name === 'anger');
            if (angerIndex !== -1) {
                currentEmotionIndex = angerIndex;
                updateFace();
                showSpeech('もう！やめてよ～～～！');
            }
            touchCounts.body = 0;
            resetFace();
        } else {
            // Surprise reaction
            const surpriseIndex = emotions.findIndex(e => e.name === 'surprise');
            if (surpriseIndex !== -1) {
                currentEmotionIndex = surpriseIndex;
                updateFace();
                const messages = ['わっ！そこはダメだよ〜', 'ひゃっ！びっくりした', 'もー、どこ触ってるの？', 'ひゃん！！！'];
                showSpeech(messages[Math.floor(Math.random() * messages.length)]);
            }
            blink();
            setTimeout(blink, 200);
        }
    }
}

hitboxHead.addEventListener('click', () => handleTouch('head'));
hitboxBody.addEventListener('click', () => handleTouch('body'));

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

// Screenshot Mode logic
const cameraBtn = document.getElementById('camera-btn');

cameraBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate close
    document.body.classList.add('screenshot-mode');
    showSpeech('撮影モード！');
    createBokehEffect();
});

function createBokehEffect() {
    const container = document.getElementById('shojo-effect');
    container.innerHTML = ''; // Clear existing

    // Create Bokeh Bubbles & Cross Sparkles
    const particleCount = 30; // Increased count

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        const isCross = Math.random() > 0.7; // 30% chance of cross sparkle

        if (isCross) {
            p.className = 'sparkle-cross';
            const size = Math.random() * 20 + 10;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.animationDuration = (Math.random() * 2 + 1) + 's';
        } else {
            p.className = 'bokeh-particle';
            const size = Math.random() * 60 + 20;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.animationDuration = (Math.random() * 5 + 5) + 's';
            p.style.border = '1px solid rgba(255, 255, 255, 0.4)'; // User preference style
        }

        // Random Position
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 5 + 's';

        // Slight color tint for bokeh
        if (!isCross) {
            const tint = Math.random() > 0.7 ? '#ffeef2' : '#ffffff';
            // Keep background transparent mostly as user requested borders, but maybe faint fill?
            // User set background: transparent in CSS, so maybe we stick to that or add very light fill
            // Let's respect CSS class mostly, but maybe add slight variation via style if needed.
            // For now, rely on CSS.
        }

        container.appendChild(p);
    }
}

// Exit mode on click anywhere
document.addEventListener('click', (e) => {
    if (document.body.classList.contains('screenshot-mode')) {
        document.body.classList.remove('screenshot-mode');
        showSpeech('戻ったよ');
    }
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
    if (currentCategory === 'preset') {
        // Preset Logic: Apply all items in the preset
        if (item.outfit) {
            currentOutfit.preset = item.id;

            Object.keys(item.outfit).forEach(catId => {
                const itemId = item.outfit[catId];
                // Check if valid category
                if (wardrobe[catId]) {
                    currentOutfit[catId] = itemId;

                    // Update layer
                    const catItem = wardrobe[catId].find(i => i.id === itemId);
                    if (catItem && stageLayers[catId]) {
                        stageLayers[catId].src = catItem.src;
                        stageLayers[catId].style.display = 'block';

                        // Animation
                        stageLayers[catId].classList.remove('pop-in');
                        void stageLayers[catId].offsetWidth;
                        stageLayers[catId].classList.add('pop-in');
                    }
                }
            });
            showSpeech(item.message || '変身！');
            triggerSmokeEffect();
            saveOutfit();
            renderMenu(); // Update highlight
        }
        return; // Done for preset
    }

    delete currentOutfit.preset;

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

        // Trigger Pop-in Animation
        layer.classList.remove('pop-in');
        void layer.offsetWidth; // Trigger reflow
        layer.classList.add('pop-in');

        showSpeech(item.message || '着替えたよ！');
    }

    renderMenu(); // Re-render to update border selection
    saveOutfit();
    triggerSmokeEffect();
}

function triggerSmokeEffect() {
    const container = document.querySelector('.character-container');
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'smoke-particle';

        // Random position around center
        // Assuming char container is approx 300px wide, center is 150
        // We want smoke around the body center (e.g. 50% left, 60% top)
        const left = 50 + (Math.random() - 0.5) * 40; // 30% to 70%
        const top = 50 + (Math.random() - 0.5) * 60;  // 20% to 80%

        // Random usage for custom prop in animation
        const tx = (Math.random() - 0.5) * 100 + 'px';
        const ty = (Math.random() - 0.5) * 100 + 'px';

        p.style.left = left + '%';
        p.style.top = top + '%';
        p.style.setProperty('--tx', tx);
        p.style.setProperty('--ty', ty);

        // Randomize scale start a bit? CSS handles scale, maybe animation delay
        p.style.animationDelay = (Math.random() * 0.1) + 's';

        container.appendChild(p);

        // Remove after animation
        setTimeout(() => {
            p.remove();
        }, 700);
    }
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
