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
            id: 'preset_normal',
            label: 'いつもの',
            thumb: 'image/normal_shirt.png', // Use existing thumb or dedicated one
            message: {
                satoshi: 'やっぱりこれが落ち着く～',
                satoshi_sama: '...'
            },
            outfit: {
                shirt: 'normal',
                pants: 'normal',
                shoes: 'normal',
                background: 'blacame'
            }
        },
        {
            id: 'preset_bunny',
            label: 'バニー',
            thumb: 'image/bunny_underwear.png',
            message: {
                satoshi: 'バニー！？',
                satoshi_sama: '...何考えてるの？'
            },
            outfit: {
                underwear: 'bunny',
                socks: 'bunny',
                shoes: 'bunny',
                hat: 'bunny',
                gloves: 'bunny'
            }
        },
        {
            id: 'preset_black',
            label: 'ブラック',
            thumb: 'image/black_shirt.png',
            message: {
                satoshi: 'ディール！！...なんちゃって！',
                satoshi_sama: '...なんかイラッとするんだけど...'
            },
            outfit: {
                shirt: 'black',
                pants: 'black',
                shoes: 'black',
                hat: 'black',
                gloves: 'black'
            }
        },
        {
            id: 'preset_sonemi',
            label: 'そねみちゃんの服',
            thumb: 'image/sonemi_shirts.png',
            message: {
                satoshi: '派手だな～',
                satoshi_sama: '...'
            },
            outfit: {
                shirt: 'sonemi',
                socks: 'sonemi',
                hat: 'sonemi',
                shoes: 'bunny'
            }
        },
        {
            id: 'preset_cat',
            label: '猫の服',
            thumb: 'image/nekoTshirts_shirt.png',
            message: {
                satoshi: 'にゃ〜ん🎵',
                satoshi_sama: '...にゃ...'
            },
            outfit: {
                shirt: 'nekoTshirts',
                back: 'neko',
                necklace: 'neko',
                hat: 'neko'
            }
        },
        {
            id: 'preset_maid',
            label: 'メイド服',
            thumb: 'image/maid_shirt.png',
            message: {
                satoshi: 'おかえりくださいませご主人様！',
                satoshi_sama: '...帰れ'
            },
            outfit: {
                shirt: 'maid',
                hat: 'maid',
                socks: 'bunny',
                shoes: 'bunny',
                gloves: 'bunny'
            }
        },
        {
            id: 'preset_pajama',
            label: 'パジャマ',
            thumb: 'image/pajama_shirt.png',
            message: {
                satoshi: 'パジャマだ～',
                satoshi_sama: '...寝る...'
            },
            outfit: {
                shirt: 'pajama',
                hat: 'pajama',
                back: 'pajama'
            }
        },
        {
            id: 'preset_taiso',
            label: '体操服',
            thumb: 'image/taiso_shirt.png',
            message: {
                satoshi: '体操服だね',
                satoshi_sama: '...'
            },
            outfit: {
                shirt: 'taiso',
                pants: 'taiso',
                socks: 'sailor',
                shoes: 'taiso'

            }
        },
        {
            id: 'preset_sailor',
            label: 'セーラー服',
            thumb: 'image/sailor_shirt.png',
            message: {
                satoshi: 'セーラー服...？',
                satoshi_sama: '...'
            },
            outfit: {
                shirt: 'sailor',
                pants: 'sailor',
                socks: 'sailor',
                shoes: 'sailor'
            }
        },
        {
            id: 'preset_sasama',
            label: 'さとし様',
            thumb: 'image/sasama_shirt.png',
            message: {
                satoshi: '反転世界の俺じゃん...！',
                satoshi_sama: '...落ち着く'
            },
            outfit: {
                shirt: 'sasama',
                pants: 'sasama',
                background: 'mao'
            }
        }
    ],
    shirt: [
        { id: 'normal', src: 'image/normal_shirt.png', thumb: 'image/normal_shirt.png', message: 'やっぱこれだよね～' },
        { id: 'nekoTshirts', src: 'image/nekoTshirts_shirt.png', thumb: 'image/nekoTshirts_shirt.png', message: '猫のビッグTシャツだ！お気に入り～' },
        { id: 'black', src: 'image/black_shirt.png', thumb: 'image/black_shirt.png', message: 'ブラックの服だね' },
        { id: 'sonemi', src: 'image/sonemi_shirts.png', thumb: 'image/sonemi_shirts.png', message: 'そねみちゃんの服！？' },
        { id: 'maid', src: 'image/maid_shirt.png', thumb: 'image/maid_shirt.png', message: 'メイド服！？' },
        { id: 'pajama', src: 'image/pajama_shirt.png', thumb: 'image/pajama_shirt.png', message: 'パジャマだ～' },
        { id: 'sailor', src: 'image/sailor_shirt.png', thumb: 'image/sailor_shirt.png', message: '体操服だよ' },
        { id: 'taiso', src: 'image/taiso_shirt.png', thumb: 'image/taiso_shirt.png', message: 'セーラー服！？' },
        { id: 'sasama', src: 'image/sasama_shirt.png', thumb: 'image/sasama_shirt.png', message: '反転世界の俺の服だ' }
    ],
    pants: [
        { id: 'normal', src: 'image/normal_pants.png', thumb: 'image/normal_pants.png', message: 'やっぱこれだよね～' },
        { id: 'black', src: 'image/black_pants.png', thumb: 'image/black_pants.png', message: 'ブラックの服だね' },
        { id: 'sailor', src: 'image/sailor_pants.png', thumb: 'image/sailor_pants.png', message: 'セーラー服のスカート！？' },
        { id: 'taiso', src: 'image/taiso_pants.png', thumb: 'image/taiso_pants.png', message: '体操服のズボンだよ' },
        { id: 'sasama', src: 'image/sasama_pants.png', thumb: 'image/sasama_pants.png', message: '反転世界の俺のズボンだ' }
    ],
    shoes: [
        { id: 'normal', src: 'image/normal_shoes.png', thumb: 'image/normal_shoes.png', message: 'やっぱこれだよね～' },
        { id: 'bunny', src: 'image/bunny_shoes.png', thumb: 'image/bunny_shoes.png', message: 'ツヤツヤの靴だ...' },
        { id: 'black', src: 'image/black_shoes.png', thumb: 'image/black_shoes.png', message: 'ブラックの靴だね' },
        { id: 'sailor', src: 'image/sailor_shoes.png', thumb: 'image/sailor_shoes.png', message: 'ローファーだよ' },
        { id: 'taiso', src: 'image/taiso_shoes.png', thumb: 'image/taiso_shoes.png', message: '上履きだよ' }
    ],
    socks: [
        { id: 'bunny', src: 'image/bunny_socks.png', thumb: 'image/bunny_socks.png', message: 'ちょっと恥ずかしい...' },
        { id: 'sonemi', src: 'image/sonemi_socks.png', thumb: 'image/sonemi_socks.png', message: 'ちょっと恥ずかしい...' },
        { id: 'sailor', src: 'image/sailor_socks.png', thumb: 'image/sailor_socks.png', message: '白い靴下だね' }
    ],
    coat: [
    ],
    underwear: [
        { id: 'bunny', src: 'image/bunny_underwear.png', thumb: 'image/bunny_underwear.png', message: 'ちょっと恥ずかしい...' }
    ],
    hat: [
        { id: 'bunny', src: 'image/bunny_hat.png', thumb: 'image/bunny_hat.png', message: 'ウサギの耳...？' },
        { id: 'sonemi', src: 'image/sonemi_hat.png', thumb: 'image/sonemi_hat.png', message: '水玉リボン...？' },
        { id: 'neko', src: 'image/cat_hat.png', thumb: 'image/cat_hat.png', message: '猫耳...？' },
        { id: 'maid', src: 'image/maid_hat.png', thumb: 'image/maid_hat.png', message: 'メイドさんのピロピロ...？' },
        { id: 'pajama', src: 'image/pajama_hat.png', thumb: 'image/pajama_hat.png', message: 'パジャマのぼうし～' }
    ],
    gloves: [
        { id: 'bunny', src: 'image/bunny_gloves.png', thumb: 'image/bunny_gloves.png', message: 'カフスと蝶ネクタイだ' },
        { id: 'black', src: 'image/black_gloves.png', thumb: 'image/black_gloves.png', message: 'ブラックの手袋だね' }
    ],
    necklace: [
        { id: 'neko', src: 'image/cat_necklace.png', thumb: 'image/cat_necklace.png', message: '首輪…？' }
    ],
    earrings: [],
    back: [
        { id: 'neko', src: 'image/cat_back.png', thumb: 'image/cat_back.png', message: 'しっぽ…？' },
        { id: 'pajama', src: 'image/pajama_back.png', thumb: 'image/pajama_back.png', message: 'まくらだよ～' }
    ],
    background: [
        { id: 'blacame', src: 'image/blacame_back.png', thumb: 'image/blacame_back.png', message: 'わっ！！' },
        { id: 'mao', src: 'image/mao_background.png', thumb: 'image/mao_background.png', message: 'わっ！！' }
    ]
};

// Character & Emotion Configuration
const emotions = [
    { name: 'joy', icon: '😊' },
    { name: 'anger', icon: '😠' },
    { name: 'sorrow', icon: '😢' },
    { name: 'surprise', icon: '😮' },
    { name: 'sleepy', icon: '😴' }
];

const characterSettings = {
    satoshi: {
        eyes: {
            joy: 'image/eye_joy.png',
            anger: 'image/eye_anger.png',
            sorrow: 'image/eye_sorrow.png',
            surprise: 'image/eye_surprise.png',
            sleepy: 'image/eye_blink.png',
            blink: 'image/eye_blink.png'
        },
        mouths: {
            joy: 'image/mouth_joy.png',
            anger: 'image/mouth_anger.png',
            sorrow: 'image/mouth_sorrow.png',
            surprise: 'image/mouth_surprise.png',
            sleepy: 'image/mouth_joy.png'
        },
        soliloquies: [
            'まだ決まらないの？',
            '新しい服、欲しいなぁ...',
            '暇だなぁ...',
            'お腹すいた...おやつないの？',
            '次は何着せる気...？',
            '...さーと...さーと...しーさー♪',
            'えへへ、似合う？',
            'だいなごんあずき...'
        ],
        touchReactions: {
            head_joy: ['えへへ、くすぐったいよ〜', 'いいこいいこしてくれるの？', 'んふふ、こしょばい...', 'むふ～...'],
            head_anger: 'もう...撫ですぎじゃない...？',
            body_surprise: ['わっ！そこはダメだよ〜', 'ひゃっ！びっくりした', 'もー、どこ触ってるの？', 'ひゃん！！！'],
            body_anger: 'もう！やめてよ～～～！'
        },
        outfitReactions: {
            equip: '着替えたよ！',
            unequip: '脱いだよ！',
            preset: '変身！',
            removeAll: 'ぎょえぴ～！'
        }
    },
    satoshi_sama: {
        eyes: {
            joy: 'image/eye_joy_sama.png',
            anger: 'image/eye_joy_sama.png',
            sorrow: 'image/eye_joy_sama.png',
            surprise: 'image/eye_joy_sama.png',
            sleepy: 'image/eye_blink.png',
            blink: 'image/eye_blink.png'
        },
        mouths: {
            joy: 'image/mouth_anger.png',
            anger: 'image/mouth_anger.png',
            sorrow: 'image/mouth_anger.png',
            surprise: 'image/mouth_anger.png',
            sleepy: 'image/mouth_anger.png'
        },
        soliloquies: [
            '...バカなの？',
            '...さっさと選んでよ...',
            '退屈...',
            '服なんてどれも同じでしょ...',
            '...はぁ',
            '......'
        ],
        touchReactions: {
            head_joy: ['...気安く触れないでくれる？', '...ふん...', '...'],
            head_anger: '...調子に乗るな',
            body_surprise: ['...！', '...おい', '...死にたいの？'],
            body_anger: '消え失せろ。'
        },
        outfitReactions: {
            equip: '...',
            unequip: '...',
            preset: '...',
            removeAll: '...何をさせる気？'
        }
    }
};

// State
let outfitData = {
    satoshi: { shirt: 'normal', pants: 'normal', shoes: 'normal' },
    satoshi_sama: { shirt: 'sasama', pants: 'sasama', background: 'mao' }
};
let currentOutfit = {};
let currentCategory = 'preset';
let currentEmotionIndex = 0;
let currentCharacterMode = 'satoshi'; // 'satoshi' or 'satoshi_sama'
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

    // Load saved data
    const saved = loadOutfit();
    if (saved) {
        if (saved.outfits) {
            // New format: { mode: '...', outfits: { ... } }
            outfitData = saved.outfits;
            // Ensure defaults if missing keys (partial save?)
            if (!outfitData.satoshi) outfitData.satoshi = { shirt: 'normal' };
            if (!outfitData.satoshi_sama) outfitData.satoshi_sama = { shirt: 'sasama' };

            currentCharacterMode = saved.mode || 'satoshi';
        } else {
            // Old format: just the outfit object
            // Migrate old data to 'satoshi' slot
            outfitData.satoshi = saved;
        }
    }

    // Set current outfit
    currentOutfit = outfitData[currentCharacterMode];

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
    const settings = characterSettings[currentCharacterMode];

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
                showSpeech(settings.touchReactions.head_anger);
            }
            touchCounts.head = 0; // Reset after angry
            resetFace();
        } else {
            // Normal joy reaction
            const joyIndex = emotions.findIndex(e => e.name === 'joy');
            if (joyIndex !== -1) {
                currentEmotionIndex = joyIndex;
                updateFace();
                const messages = settings.touchReactions.head_joy;
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
                showSpeech(settings.touchReactions.body_anger);
            }
            touchCounts.body = 0;
            resetFace();
        } else {
            // Surprise reaction
            const surpriseIndex = emotions.findIndex(e => e.name === 'surprise');
            if (surpriseIndex !== -1) {
                currentEmotionIndex = surpriseIndex;
                updateFace();
                const messages = settings.touchReactions.body_surprise;
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
            const list = characterSettings[currentCharacterMode].soliloquies;
            const text = list[Math.floor(Math.random() * list.length)];
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
        // Sync current outfit to data store before saving
        outfitData[currentCharacterMode] = currentOutfit;

        const saveData = {
            mode: currentCharacterMode,
            outfits: outfitData
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    } catch (e) {
        console.error('Failed to save outfit', e);
    }
}

function applyOutfit() {
    categories.forEach(cat => {
        const catId = cat.id;
        const itemId = currentOutfit[catId];
        const layer = stageLayers[catId];

        if (!layer) return;

        if (itemId) {
            // Equip
            const catItems = wardrobe[catId];
            const item = catItems ? catItems.find(i => i.id === itemId) : null;
            if (item) {
                layer.src = item.src;
                layer.style.display = 'block';
            }
        } else {
            // Unequip / Clear
            // Important: Don't clear if it's not managed by outfit?
            // `categories` defines all managed layers. So safe to clear.
            layer.src = '';
            layer.style.display = 'none';
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
    const settings = characterSettings[currentCharacterMode];
    const currentEmotion = emotions[currentEmotionIndex];
    eyeLayer.src = settings.eyes.blink;
    setTimeout(() => {
        eyeLayer.src = settings.eyes[currentEmotion.name];
    }, 150);
}

// Emotion Logic
emotionBtn.addEventListener('click', () => {
    currentEmotionIndex = (currentEmotionIndex + 1) % emotions.length;
    updateFace();
    emotionBtn.textContent = emotions[currentEmotionIndex].icon;
    showSpeech(`${emotions[currentEmotionIndex].icon}`);
});

// Character Switch Logic
const charSwitchBtn = document.getElementById('char-switch-btn');

charSwitchBtn.addEventListener('click', () => {
    // Save current state
    outfitData[currentCharacterMode] = currentOutfit;

    // Toggle Mode
    currentCharacterMode = currentCharacterMode === 'satoshi' ? 'satoshi_sama' : 'satoshi';

    // Load new state
    currentOutfit = outfitData[currentCharacterMode];
    applyOutfit();
    renderMenu();
    saveOutfit();

    // Update visuals
    updateFace();

    // Notification
    const name = currentCharacterMode === 'satoshi_sama' ? '僕だ' : '俺だよ';
    showSpeech(`${name}`);
});

// Screenshot Mode logic
const cameraBtn = document.getElementById('camera-btn');
let cameraTimer;
let isLongPress = false;

cameraBtn.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    isLongPress = false;
    cameraTimer = setTimeout(() => {
        isLongPress = true;
        startTwinMode();
    }, 1000); // 1 second hold
});

cameraBtn.addEventListener('click', (e) => {
    e.stopPropagation();
});

cameraBtn.addEventListener('mouseup', (e) => {
    e.stopPropagation();
    clearTimeout(cameraTimer);
    if (!isLongPress) {
        document.body.classList.add('screenshot-mode');
        createBokehEffect();
    }
});

cameraBtn.addEventListener('mouseleave', () => clearTimeout(cameraTimer));

// Touch support
cameraBtn.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    e.preventDefault();
    isLongPress = false;
    cameraTimer = setTimeout(() => {
        isLongPress = true;
        startTwinMode();
    }, 1000);
});
cameraBtn.addEventListener('touchend', (e) => {
    e.stopPropagation();
    e.preventDefault();
    clearTimeout(cameraTimer);
    if (!isLongPress) {
        document.body.classList.add('screenshot-mode');
        createBokehEffect();
    }
});

// Remove All Logic
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    if (confirm('本当に全部脱いじゃう？')) {
        categories.forEach(cat => {
            // Skip background
            if (cat.id === 'background') return;

            // Unequip
            delete currentOutfit[cat.id];

            // Remove preset status
            delete currentOutfit.preset;

            const layer = stageLayers[cat.id];
            if (layer) {
                layer.src = '';
                layer.style.display = 'none';
            }
        });

        // Face/Base remains (managed separately or static)
        showSpeech(characterSettings[currentCharacterMode].outfitReactions.removeAll);
        triggerSmokeEffect();
        saveOutfit();
        renderMenu();
    }
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
        }

        container.appendChild(p);
    }
}

// Twin Mode Logic
function startTwinMode() {
    // Create Overlay
    const overlay = document.createElement('div');
    overlay.className = 'twin-overlay';

    // Get outfits
    const satoshiOutfit = outfitData.satoshi || { shirt: 'normal', pants: 'normal' };
    const samaOutfit = outfitData.satoshi_sama || { shirt: 'sasama', pants: 'sasama' };

    // Satoshi (Left) - with their own background
    const char1 = renderStaticCharacter('satoshi', satoshiOutfit);
    overlay.appendChild(char1);

    // Satoshi Sama (Right) - with their own background
    const char2 = renderStaticCharacter('satoshi_sama', samaOutfit);
    overlay.appendChild(char2);

    // Close Handler
    overlay.addEventListener('click', () => {
        overlay.remove();
        showSpeech('隠しモード終了！');
    });

    document.body.appendChild(overlay);
    showSpeech('ふたりはプリ○ュア！？');

    // Effects
    createTwinBokeh(overlay);
}

function renderStaticCharacter(mode, outfit) {
    const wrapper = document.createElement('div');
    wrapper.className = `twin-char ${mode}`; // .satoshi or .satoshi_sama

    // Add background for this character
    if (outfit.background && wardrobe.background) {
        const bgItem = wardrobe.background.find(i => i.id === outfit.background);
        if (bgItem) {
            const bgImg = document.createElement('img');
            bgImg.src = bgItem.src;
            bgImg.className = 'char-background';
            wrapper.appendChild(bgImg);
        }
    }

    // Base Body
    const base = document.createElement('img');
    base.src = 'image/base.PNG';
    base.className = 'static-layer base';
    wrapper.appendChild(base);

    // Face (Joy for photo)
    const settings = characterSettings[mode];
    const eyes = document.createElement('img');
    eyes.src = settings.eyes.joy;
    eyes.className = 'static-layer face';
    wrapper.appendChild(eyes);

    const mouth = document.createElement('img');
    mouth.src = settings.mouths.joy;
    mouth.className = 'static-layer face';
    wrapper.appendChild(mouth);

    // Clothes
    // Define explicit z-index for each layer to match main app
    const layerZIndex = {
        back: 1,
        underwear: 9,
        socks: 10,
        pants: 20,
        shirt: 30,
        shoes: 40,
        hat: 50
    };

    categories.forEach((cat, index) => {
        if (cat.id === 'preset' || cat.id === 'background') return;

        const itemId = outfit[cat.id];
        if (itemId && wardrobe[cat.id]) {
            const item = wardrobe[cat.id].find(i => i.id === itemId);
            if (item) {
                const img = document.createElement('img');
                img.src = item.src;
                img.className = `static-layer layer-${cat.id}`;
                img.style.zIndex = layerZIndex[cat.id] || (10 + index);
                wrapper.appendChild(img);
            }
        }
    });

    return wrapper;
}

function createTwinBokeh(container) {
    // Reuse logic or simple append
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = Math.random() > 0.5 ? 'bokeh-particle' : 'sparkle-cross';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.width = (Math.random() * 30 + 10) + 'px';
        p.style.height = p.style.width;
        p.style.animationDuration = (Math.random() * 3 + 2) + 's';
        p.style.position = 'absolute';
        p.style.mixBlendMode = 'screen';
        container.appendChild(p);
    }
}

// Exit screenshot mode on click anywhere
document.addEventListener('click', (e) => {
    if (document.body.classList.contains('screenshot-mode')) {
        document.body.classList.remove('screenshot-mode');
    }
});

function updateFace() {
    const settings = characterSettings[currentCharacterMode];
    const emotionName = emotions[currentEmotionIndex].name;

    eyeLayer.src = settings.eyes[emotionName];
    mouthLayer.src = settings.mouths[emotionName];
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
    const settings = characterSettings[currentCharacterMode];

    // Helper to get message
    const getMessage = (msgData, defaultType) => {
        if (!msgData) return settings.outfitReactions[defaultType];
        if (typeof msgData === 'string') return msgData; // Fallback for legacy string
        return msgData[currentCharacterMode] || settings.outfitReactions[defaultType];
    };

    if (currentCategory === 'preset') {
        if (item.outfit) {
            // Save preset ID for highlighting
            // We want to replace the entire outfit, effectively.
            const newPresetId = item.id;

            // We need to iterate over ALL categories to ensure we unequip things not in the preset
            categories.forEach(cat => {
                // Skip 'preset' tab itself
                if (cat.id === 'preset') return;

                const newItemId = item.outfit[cat.id];
                const layer = stageLayers[cat.id];

                if (newItemId) {
                    // Equip new item
                    if (wardrobe[cat.id]) {
                        // Check if valid item exists
                        const catItem = wardrobe[cat.id].find(i => i.id === newItemId);
                        if (catItem) {
                            currentOutfit[cat.id] = newItemId;
                            if (layer) {
                                layer.src = catItem.src;
                                layer.style.display = 'block';
                                // Animation
                                layer.classList.remove('pop-in');
                                void layer.offsetWidth;
                                layer.classList.add('pop-in');
                            }
                        }
                    }
                } else {
                    // Unequip if not in preset
                    delete currentOutfit[cat.id];
                    if (layer) {
                        layer.src = '';
                        layer.style.display = 'none';
                    }
                }
            });

            currentOutfit.preset = newPresetId;
            showSpeech(getMessage(item.message, 'preset'));
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
        showSpeech(settings.outfitReactions.unequip);
    } else {
        // Equip
        currentOutfit[currentCategory] = item.id;
        layer.src = item.src;
        layer.style.display = 'block';

        // Trigger Pop-in Animation
        layer.classList.remove('pop-in');
        void layer.offsetWidth; // Trigger reflow
        layer.classList.add('pop-in');

        showSpeech(getMessage(item.message, 'equip'));
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
