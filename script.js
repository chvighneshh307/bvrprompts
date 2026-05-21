// Sample Database of Prompts
const promptsDataset = [
    {
        id: 21,
        category: "lorg krishna god",
        text: "Create a highly detailed, hyper-realistic devotional image of Lord Krishna in a cosmic background walking side by side with a modern man in a suit Krishna should have blue skin, golden-yellow dhoti adorned with peacock feathers and traditional jewelry, holding a flute with a glowing divine aura. The cosmic background should have nebulae stars, and spiritual light Both figures are walking together in a peaceful spiritual atmosphere, holding hands with soft lighting and an emotional inspirational tone nebulae, and divine light with a mystical glow symbolizing the spiritual journey and divine connection. The scene is highly detailed, hyper-realistic with soft lighting glowing aura around Krishna, and a deep emotional tone.",
        image: "Images/krishna sahasra.jpeg"
    },
    {
        id: 20,
        category: "lorg hunaman god",
        text:  "A hyper-realistic, cinematic portrait of the Hindu deity Lord Hanuman, depicted with divine grace and a gentle expression. He is placing a protective hand on the head of a young Indian girl who has her eyes closed in peaceful devotion. The scene is bathed in a warm, ethereal golden glow with shimmering particles. Hanuman is adorned in intricate golden jewelry, a royal crown, and vibrant flower garlands. The background shows the soft-focus texture of an ancient temple wall. 8k resolution, spiritual atmosphere, masterpiece",
        image: "Images/hunaman sahasra.jpeg"
    },
    {
        id: 19,
        category: "lorg venkateshwara god",
        text: "Merge the two uploaded images - one of the Boy and one of Lord Venkateshwara-into a single artistic composition where it appears that Lord Venkateshwara is lovingly giving blessings to the Boy. The scene should feel divine, peaceful dreamy and blessed. The Boy should look happy calm, and introspective, with a gentle smile, eyes closed, wearing a Pinterest-style brown Shirt with a soft vintage effect Lord Venkateshwara should appear serene and compassionate, smiling softly, radiating warmth and blessings, with his hand placed above him head in a blessing gesture. Use a retro, vintage, slightly grainy yet bright Pinterest aesthetic Lighting should be warm golden tones, like sunset/golden hour glow, with deep shadows and cinematic contrast. The background should be minimal softly textured, and artistic creating a mystical and spiritual atmosphere. Maintain natural facial features, realistic proportions, and smooth blending between both images.",
        image: "Images/venkateshwara sahasra.jpeg"
    },
    {
        id: 18,
        category: "lorg shiva god",
        text: "Transform this pic into a dark, cinematic fantasy scene. Keep the person exactly the same face, natural skin texture, expression, pose, and clothing. Behind the person, add a shadowy, smoke-like Lord Shiva figure. Shiva should appear divine, powerful, masculine, with broad shoulders and a calm, protective presence. His one hand is placed very softly and gently on the model's head, like he is giving a blessing. Atmosphere: Soft mystical lighting, cinematic color grading, sacred and devotional mood.",
        image: "Images/shiva sahasra .jpeg"
    },
    {
        id: 17,
        category: "High-End Studio Fashion Editorial",
        text: "A stylish young man 100% face hair and body match from uploaded image wearing a modern white sweater and black jeans with white trendy sneakers standing confidently with hands in pockets one leg crossed over the others, studio portrait with soft lighting, elegant dark background, cinematic look professional photo editing a large faded background portrait of the same person in black sunglasses behind him luxury fashion style premium magazine photoshoot vibe Same face as the uploaded image And add a metallic text in",
        image: "Images/High-End Studio Fashion Editorial.jfif"
    },
     {
        id: 16,
        category: "Cinematic Editorial",
        text: "Hyper-realistic overhead 9:16 close-up of myself playfully leaning against an ivy-covered stone wall of an old countryside cottage during golden hour. I'm laughing with my head slightly tilted back one hand brushing away a dangling vine wearing a textured Brown color knit sweater layered over a soft white t-shirt The flowering vines are in full bloom with orange magenta, and lavender hues softly blurred in the foreground",
        image: "Images/Cinematic Editorial.jfif"
    },
     {
        id: 15,
        category: "Cinematic Rose Boy",
        text: "A cinematic ultra-realistic portrait of a young man leaning casually against a wall during golden hour He is wearing a sleek black shirt slightly unbuttoned, with a warm smile as he looks to the side. In his hand, he holds a single red rose and a dark coat is draped casually over his arm Soft golden sunlight casts shadows on the wall creating a romantic cinematic atmosphere Ultra HD, sharp details, editorial fashion style Aspect ratio: 9:16 (vertical)",
        image: "Images/Cinematic Rose Boy.jfif"
    },
     {
        id: 14,
        category: "Low-Angle Perspective",
        text: "Boat and given best pose the boat in a river the river full of lotus flowers and he using headset and enjoying music to little closed eyes to seeing the sky he is wearing white colour stylish shoes",
        image: "Images/Low-Angle Perspective.jfif"
    },
     {
        id: 13,
        category: "Cinematic Fine-Art",
        text: " A cinematic portrait of a couple standing close together, the woman in a vibrant flowing red saree with sheer fabric her hair wavy with a flower tucked in wearing elegant earrings looking at the man with intensity. The man wears a sharp black suit with a white shirt and tie gazing back at her Dramatic sunlight falls on them casting soft shadows against a textured stone wall The saree flutters in the wind, adding motionWarm tones, vintage cinematic grading film grain, and romantic atmosphere",
        image: "Images/Cinematic Fine-Art.jfif"
    },
     {
        id: 12,
        category: "Environmental Framing",
        text: "Prompt ultra Creat a 256k hyper-realistic dark Red portrait cinematic image with dramatic smile actions (uploaded photo 100% face match) of a very handsome young man (followed by given picture face) Soft moody cinematic lighting highlights his facial features naturally. He leans casually pose, wearing oversized maroon shirt hair style volume, well-fitted complement the serene earthy setting. The background features deeply blurred lush green foliage with foreground leaves.",
        image: "Images/Environmental Framing.jfif" 
    },
     {
        id: 11,
        category: "Cinematic Environmental Portraiture.",
        text: "8k ultrarealistic high-resolution coastal scene with an overcast sky he has haircut is same style and beardcut is same style and face is same stands on a pebble beach where small waves roll in. He wears a light blue, slightly loose button-down shirt with the sleeves casually rolled up relaxed white trousers, and cream slide sandals He has one hand in his pocket and the other lightly touching his chin, wearing a wristwatch and stylish glasses.",
        image: "Images/Cinematic Environmental Portraiture.jfif"
    },
     {
        id: 10,
        category: "cinematic street photography",
        text: "Ultra-realistic cinematic 8K full-body portrait of the same young man (using the uploaded face reference exactly 100% unchanged) leaning stylishly against a shiny black custom modified Continental GT 650 motorcycle The bike has dual silencer style exhausts chrome detailing, wide tires, and a clearly visible rear number plate. The man wears an grey shirt and black pants: open-collar shirt slim trousers, polished shoes and a thin gold chain on his chest",
        image: "Images/cinematic street photography..jfif"
    },
     {
        id: 9,
        category: "Cinematic Fashion Portrait",
        text: "Create 16k Ultra-realislic DSLR quality portrait picture of a young man(exact face From reference picture)dressed a tailored beige trousers with a suble pleat paired with a short-sleeved navy knit polo shirt with a while collar & hand white low-top sneakers and a dress watch.a black stylish  sunglass & the erispness of artificially around with various colour umbrellas in a Bangladeshi University area, it's also sunny day & giving professional aesthetic pose looking at slightly side with aesthetic expression.",
        image: "Images/Cinematic Fashion Portrait.jfif"
    },
    {
        id: 8,
        category: "cyberpunk",
        text: "A cyberpunk neon-lit street alleyway in Neo-Tokyo, rain puddles reflecting holographic advertisements, flying cars in the upper background, cinematic lighting, Unreal Engine 5 render, 8k resolution.",
        image: "https://picsum.photos/seed/cyberpunk1/600/360"
    },
    {
        id: 7,
        category: "fantasy",
        text: "An ancient mystical library inside a massive tree trunk, thousands of glowing spellbooks floating in mid-air, soft golden sunlight filtering through leaves, ethereal, high-fantasy style, digital painting.",
        image: "https://picsum.photos/seed/fantasy1/600/360"
    },
    {
        id: 6,
        category: "photography",
        text: "Close-up macro photography of a majestic lion's face, golden hour lighting, dust particles captured in the air, captured on 85mm lens, f/1.4, sharp focus on the detailed eyes, photorealistic.",
        image: "https://picsum.photos/seed/photo1/600/360"
    },
    {
        id: 5,
        category: "anime",
        text: "90s retro anime style aesthetic, a girl standing on a train platform during sunset, cherry blossom petals blowing in the wind, lo-fi vibes, Makoto Shinkai inspired color palette.",
        image: "https://picsum.photos/seed/anime1/600/360"
    },
    {
        id: 4,
        category: "cyberpunk",
        text: "Cybernetic android hacker sitting at a multi-monitor desk terminal, wires connected to her head, synthwave aesthetic, dark room illuminated by code, intricate detailing.",
        image: "https://picsum.photos/seed/cyberpunk2/600/360"
    },
    {
        id: 3,
        category: "fantasy",
        text: "A majestic crystal dragon perched on top of a snow-capped mountain peak under a brilliant aurora borealis sky, high fantasy illustration, dramatic scale.",
        image: "https://picsum.photos/seed/fantasy2/600/360"
    },
    {
        id: 2,
        category: "photography",
        text: "Stunning aerial drone shot of a lonely winding road snaking through an autumn forest with vibrant red and orange trees, morning mist, National Geographic style.",
        image: "https://picsum.photos/seed/photo2/600/360"
    },
    {
        id: 1,
        category: "anime",
        text: "Studio Ghibli style cozy cottage tucked away in a lush green valley, smoke curling out of the chimney, vibrant wildflowers everywhere, hand-drawn texture, peaceful vibe.",
        image: "https://picsum.photos/seed/anime2/600/360"
    }
];

// DOM Elements
const promptGrid = document.getElementById('promptGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const randomBtn = document.getElementById('randomBtn');
const toast = document.getElementById('toast');

let activeCategory = 'all';

// Initialize App
function init() {
    if (promptGrid) {
        displayPrompts(promptsDataset);
        setupEventListeners();
    }
}

// Display prompts dynamically
function displayPrompts(prompts) {
    promptGrid.innerHTML = '';
    
    if (prompts.length === 0) {
        promptGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); margin-top: 2rem;">No prompts found matching your criteria.</p>`;
        return;
    }

    prompts.forEach(prompt => {
        const card = document.createElement('div');
        card.classList.add('prompt-card');
        card.innerHTML = `
            ${prompt.image ? `<img src="${prompt.image}" alt="${escapeHtml(prompt.category)} prompt image" class="prompt-image">` : ''}
            <span class="card-tag">${prompt.category}</span>
            <p class="prompt-text">"${prompt.text}"</p>
            <div class="card-actions">
                <button class="copy-btn" onclick="copyToClipboard('${escapeHtml(prompt.text)}')">
                    <i class="fa-regular fa-copy"></i> Copy Prompt
                </button>
            </div>
        `;
        promptGrid.appendChild(card);
    });
}

// Filter prompts by Search & Category combined
function filterPrompts() {
    const query = searchInput.value.toLowerCase();
    
    const filtered = promptsDataset.filter(prompt => {
        const matchesCategory = (activeCategory === 'all' || prompt.category === activeCategory);
        const matchesSearch = prompt.text.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    displayPrompts(filtered);
}

// Event Listeners setup
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', filterPrompts);

    // Category button clicks
    categoryFilters.addEventListener('click', (e) => {
        if (!e.target.classList.contains('cat-btn')) return;

        // Toggle Active UI
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Set active filter
        activeCategory = e.target.getAttribute('data-category');
        filterPrompts();
    });

    // Surprise Me Button
    randomBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * promptsDataset.length);
        const randomPrompt = promptsDataset[randomIndex];
        
        // Populate search bar just to highlight it, and display just that one
        searchInput.value = '';
        activeCategory = 'all';
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
        
        displayPrompts([randomPrompt]);
    });
}

// Copy functionality with UI Toast Notification
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Helper to escape text for safe HTML attributes
function escapeHtml(text) {
    return text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Setup image click behavior for gallery thumbnails
function initImageClickOpen() {
    const galleryImages = document.querySelectorAll('.images-grid .image-card img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            window.open(img.src, '_blank');
        });
    });
}

// Setup image click behavior for prompt cards via delegation
function initPromptImageClickOpen() {
    if (!promptGrid) return;

    promptGrid.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('prompt-image')) {
            window.open(target.src, '_blank');
        }
    });
}

// Fire on page load
init();
initImageClickOpen();
initPromptImageClickOpen();
