

// ==================== CONFIGURATION ====================
const CONFIG = {
  // Hourly pull limit (does NOT stack)
  MAXPULLSPERHOUR: 5,
  PULLWINDOWMS: 60 * 60 * 1000,

  DRAW1COST: 1,
  DRAW5COST: 5,

  STORAGEKEY: "gachaEnergyData",
  HISTORYKEY: "gachaHistory",
  BANNERKEY: "currentBanner",
  MAXHISTORYENTRIES: 20
};

// Pull cards from cards.js (global)
const CARDS = window.CARDS || [];

// Allow permanent timer override (debug)
CONFIG.TIMEROVERRIDEKEY = "gachaPullWindowMs";

const savedMs = Number(localStorage.getItem(CONFIG.TIMEROVERRIDEKEY));
if (Number.isFinite(savedMs) && savedMs > 0) {
  CONFIG.PULLWINDOWMS = savedMs;
}

// ==================== BANNER DATA ====================
const BANNERS = {
    forest: {
        name: "MYSTICAL FOREST BANNER",
        subtitle: "Discover legendary treasures",
        showcaseImage: "Images/banner1.png",
        colors: {
            primary: '#699954',
            secondary: '#2d5a3d',
            accent: '#d4af37',
            gradient1: 'rgba(58, 107, 76, 0.85)',
            gradient2: 'rgba(45, 90, 61, 0.9)'
        },
        background: "Images/Interface_1.jpg",
        items: {
            legendary: [
                { name: 'Dragon Blade', icon: '🗡️', rarity: 'legendary' },
                { name: 'Phoenix Crown', icon: '👑', rarity: 'legendary' },
                { name: 'Celestial Staff', icon: '🔮', rarity: 'legendary' }
            ],
            epic: [
                { name: 'Shadow Cloak', icon: '🧥', rarity: 'epic' },
                { name: 'Arcane Ring', icon: '💍', rarity: 'epic' },
                { name: 'Thunder Bow', icon: '🏹', rarity: 'epic' }
            ],
            rare: [
                { name: 'Steel Sword', icon: '⚔️', rarity: 'rare' },
                { name: 'Magic Pendant', icon: '📿', rarity: 'rare' },
                { name: 'Forest Armor', icon: '🛡️', rarity: 'rare' }
            ],
            common: [
                { name: 'Iron Dagger', icon: '🔪', rarity: 'common' },
                { name: 'Leather Boots', icon: '👢', rarity: 'common' },
                { name: 'Health Potion', icon: '🧪', rarity: 'common' }
            ]
        }
    },
    ocean: {
        name: "DEEP OCEAN BANNER",
        subtitle: "Treasures from the abyss",
        showcaseImage: "Images/banner2.png",
        colors: {
            primary: '#1e3a5f',
            secondary: '#14293f',
            accent: '#4fc3f7',
            gradient1: 'rgba(30, 58, 95, 0.85)',
            gradient2: 'rgba(20, 41, 63, 0.9)'
        },
        background: "Images/Interface_2.jpg",
        items: {
            legendary: [
                { name: 'Trident of Poseidon', icon: '🔱', rarity: 'legendary' },
                { name: 'Pearl Crown', icon: '👑', rarity: 'legendary' },
                { name: 'Abyssal Orb', icon: '🔮', rarity: 'legendary' }
            ],
            epic: [
                { name: 'Coral Shield', icon: '🛡️', rarity: 'epic' },
                { name: "Siren's Ring", icon: '💍', rarity: 'epic' },
                { name: 'Wave Bow', icon: '🏹', rarity: 'epic' }
            ],
            rare: [
                { name: 'Sea Sword', icon: '⚔️', rarity: 'rare' },
                { name: 'Shell Necklace', icon: '📿', rarity: 'rare' },
                { name: 'Tide Armor', icon: '🦺', rarity: 'rare' }
            ],
            common: [
                { name: 'Rusty Anchor', icon: '⚓', rarity: 'common' },
                { name: 'Diving Mask', icon: '🤿', rarity: 'common' },
                { name: 'Mana Potion', icon: '🧪', rarity: 'common' }
            ]
        }
    },
    volcano: {
        name: "VOLCANIC FURY BANNER",
        subtitle: "Forge your destiny in flames",
        showcaseImage: "Images/banner3.png",
        colors: {
            primary: '#8b2500',
            secondary: '#5a1800',
            accent: '#ff6b35',
            gradient1: 'rgba(139, 37, 0, 0.85)',
            gradient2: 'rgba(90, 24, 0, 0.9)'
        },
        background: "Images/Interface_3.jpg",
        items: {
            legendary: [
                { name: 'Inferno Blade', icon: '🔥', rarity: 'legendary' },
                { name: 'Flame Emperor Crown', icon: '👑', rarity: 'legendary' },
                { name: 'Magma Core', icon: '💎', rarity: 'legendary' }
            ],
            epic: [
                { name: 'Lava Armor', icon: '🦺', rarity: 'epic' },
                { name: 'Ember Ring', icon: '💍', rarity: 'epic' },
                { name: 'Phoenix Feather', icon: '🪶', rarity: 'epic' }
            ],
            rare: [
                { name: 'Scorched Sword', icon: '⚔️', rarity: 'rare' },
                { name: 'Ash Pendant', icon: '📿', rarity: 'rare' },
                { name: 'Fire Shield', icon: '🛡️', rarity: 'rare' }
            ],
            common: [
                { name: 'Hot Coal', icon: '🔥', rarity: 'common' },
                { name: 'Soot Boots', icon: '👢', rarity: 'common' },
                { name: 'Burn Salve', icon: '🧪', rarity: 'common' }
            ]
        }
    },
    celestial: {
        name: "CELESTIAL HEIGHTS BANNER",
        subtitle: "Reach for the stars",
        showcaseImage: "Images/banner4.png",
        colors: {
            primary: '#4a148c',
            secondary: '#311b92',
            accent: '#e1bee7',
            gradient1: 'rgba(74, 20, 140, 0.85)',
            gradient2: 'rgba(49, 27, 146, 0.9)'
        },
        background: "Images/Interface_4.jpg",
        items: {
            legendary: [
                { name: 'Starlight Scepter', icon: '⭐', rarity: 'legendary' },
                { name: 'Cosmic Crown', icon: '👑', rarity: 'legendary' },
                { name: 'Galaxy Crystal', icon: '💫', rarity: 'legendary' }
            ],
            epic: [
                { name: 'Nebula Cloak', icon: '🌌', rarity: 'epic' },
                { name: 'Lunar Ring', icon: '💍', rarity: 'epic' },
                { name: 'Comet Bow', icon: '☄️', rarity: 'epic' }
            ],
            rare: [
                { name: 'Astral Blade', icon: '⚔️', rarity: 'rare' },
                { name: 'Moon Pendant', icon: '🌙', rarity: 'rare' },
                { name: 'Star Armor', icon: '✨', rarity: 'rare' }
            ],
            common: [
                { name: 'Space Rock', icon: '🪨', rarity: 'common' },
                { name: 'Meteor Boots', icon: '👢', rarity: 'common' },
                { name: 'Stardust Vial', icon: '🧪', rarity: 'common' }
            ]
        }
    }
};

// ===============================
// BANNER CARD RULES (RATE UP + LIMITED)
// ===============================

    // 1) Each banner has 1 rate-up Full Art card (higher odds ONLY on that banner).
    // Change these IDs to match your cards.js exactly.
const BANNER_RATE_UP = {
    forest:   "FATAO-001-TAUHAN1",
    ocean:    "FATAO-002-TAUHAN2",
    volcano:  "FATAO-003-TAUHAN3", // example you gave
    celestial:"FATAO-004-TAUHAN4",
};

    // 2) Banner-limited cards (these IDs can ONLY be pulled on that banner).
    // Example you gave: Celestial banner has SCTG-001-TAGPUAN1 as limited.
const BANNER_LIMITED = {
    forest: ["SCTAO-001-TAUHAN1"],
    ocean: ["SCKG-002-KAGAMITAN2","SCKG-001-KAGAMITAN1"],
    volcano: ["SCPT-002-PANGUNAHINGTAUHAN2"],
    celestial: ["SCTG-001-TAGPUAN1"],
};

// Meaning: if FA happens, we pick the rate-up card this % of the time.
// (Example: 50 means 50% chance for the rate-up FA, 40% chance for other FA.)
const RATE_UP_FA_PERCENT = 50; // CHANGE THE NUMBER FOR RATE UP RATES
const FULL_ART_CHANCE = 0.01; // CHANGE THIS FOR FULL ART RATES, 0.01 = 1%

// ==================== BANNER MANAGER ====================
class BannerManager {
    constructor() {
        this.currentBanner = this.detectBanner();
        this.applyTheme();
    }

    detectBanner() {
        const urlParams = new URLSearchParams(window.location.search);
        const bannerParam = urlParams.get('banner');
        
        if (bannerParam && BANNERS[bannerParam]) {
            localStorage.setItem(CONFIG.BANNER_KEY, bannerParam);
            return bannerParam;
        }
        
        const savedBanner = localStorage.getItem(CONFIG.BANNER_KEY);
        return (savedBanner && BANNERS[savedBanner]) ? savedBanner : 'forest';
    }

    getBannerData() {
        return BANNERS[this.currentBanner];
    }

    applyTheme() {
        const banner = this.getBannerData();
        const root = document.documentElement;
        
        // Apply CSS custom properties
        root.style.setProperty('--primary-green', banner.colors.primary);
        root.style.setProperty('--secondary-green', banner.colors.secondary);
        root.style.setProperty('--accent-gold', banner.colors.accent);
        
        // Update background with image
        const bgContainer = document.querySelector('.background-container');
        if (banner.background) {
            bgContainer.style.backgroundImage = `
                linear-gradient(135deg, ${banner.colors.primary}40 0%, ${banner.colors.secondary}40 100%),
                url('${banner.background}')
            `;
        } else {
            bgContainer.style.background = `
                linear-gradient(135deg, ${banner.colors.primary} 0%, ${banner.colors.secondary} 100%)
            `;
        }
        
        const showcaseImage = document.getElementById('showcaseImage');
        if (showcaseImage && banner.showcaseImage) {
            showcaseImage.src = banner.showcaseImage;
        }
        
        document.body.className = `theme-${this.currentBanner}`;
    }

    getItems() {
        return this.getBannerData().items;
    }
}

// ==================== ENERGY SYSTEM ====================
class EnergySystem {
  constructor() {
    this.loadState();
    this.updateUI();
    this.startCountdown();
  }

  // State:
  // cycleStart: timestamp when the current "hour window" started (only set after first pull)
  // used: pulls used in this window (0..MAXPULLSPERHOUR)
  loadState() {
    const saved = localStorage.getItem(CONFIG.STORAGEKEY);

    const reset = () => {
      this.cycleStart = 0;
      this.used = 0;
      this.saveState();
    };

    if (!saved) return reset();

    try {
      const data = JSON.parse(saved);

      // If old/invalid data exists, reset cleanly (prevents NaN)
      this.cycleStart = Number.isFinite(data.cycleStart) ? data.cycleStart : 0;
      this.used = Number.isFinite(data.used) ? data.used : 0;

      // Clamp
      this.used = Math.max(0, Math.min(CONFIG.MAXPULLSPERHOUR, Math.floor(this.used)));

      this.syncWindow();
      this.saveState();
    } catch {
      reset();
    }
  }

  saveState() {
    localStorage.setItem(
      CONFIG.STORAGEKEY,
      JSON.stringify({ cycleStart: this.cycleStart, used: this.used })
    );
  }

  syncWindow() {
    // Only run a countdown if user has started using pulls (used > 0)
    if (this.used <= 0 || !Number.isFinite(this.cycleStart) || this.cycleStart <= 0) {
      this.used = 0;
      this.cycleStart = 0;
      return;
    }

    const now = Date.now();
    const elapsed = now - this.cycleStart;

    if (elapsed >= CONFIG.PULLWINDOWMS) {
      // Full refill after 1 hour
      this.used = 0;
      this.cycleStart = 0;
      this.saveState();
    }
  }

  getAvailableEnergy() {
    this.syncWindow();
    const avail = CONFIG.MAXPULLSPERHOUR - this.used;
    return Number.isFinite(avail) ? Math.max(0, Math.min(CONFIG.MAXPULLSPERHOUR, avail)) : 0;
  }

  getTimeUntilResetSeconds() {
    this.syncWindow();
    if (this.used === 0 || this.cycleStart === 0) return 0;

    const now = Date.now();
    const remainingMs = (this.cycleStart + CONFIG.PULLWINDOWMS) - now;
    return Math.max(0, Math.ceil(remainingMs / 1000));
  }

    consumeEnergy(amount) {
        amount = Number(amount);
        if (!Number.isFinite(amount) || amount <= 0) return false;

        const available = this.getAvailableEnergy();
        if (!Number.isFinite(available) || available < amount) return false;

        if (this.used === 0) this.cycleStart = Date.now();
        this.used += amount;
        this.used = Math.max(0, Math.min(CONFIG.MAXPULLSPERHOUR, this.used));
        this.saveState();
        return true;
    }


  formatCountdown() {
    const available = this.getAvailableEnergy();
    if (available === CONFIG.MAXPULLSPERHOUR) return "HANDA NA";

    const seconds = this.getTimeUntilResetSeconds();
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  updateUI() {
    const available = this.getAvailableEnergy();
    const percentage = (available / CONFIG.MAXPULLSPERHOUR) * 100;

    document.getElementById("countdownTimer").textContent = this.formatCountdown();
    document.getElementById("energyBarFillTop").style.width = `${percentage}%`;
    document.getElementById("energyTextTop").textContent = `${available}/${CONFIG.MAXPULLSPERHOUR}`;

    document.getElementById("draw1Btn").disabled = available < CONFIG.DRAW1COST;
    document.getElementById("draw5Btn").disabled = available < CONFIG.DRAW5COST;
  }

  startCountdown() {
    setInterval(() => this.updateUI(), 1000);
  }

  resetTimerCheat() {
    this.cycleStart = 0;
    this.used = 0;
    this.saveState();
    this.updateUI();
  }

}



// ==================== GACHA SYSTEM ====================
class GachaSystem {
    constructor(bannerManager) {
        this.bannerManager = bannerManager;
        this.rateThresholds = {
            legendary: 2,
            epic: 10,
            rare: 30,
            common: 100
        };
    }

    draw(count) {
        const results = [];

        // Helpers (defined once per draw call)
        const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

        const rollCardTypeSC = () => {
            const r = Math.random() * 100;
            if (r < 49.5) return "TAO";
            if (r < 66.0) return "PT";
            if (r < 82.5) return "TG";
            if (r < 100) return "KG";
        };

        const getCards = (rarity, type) => {
            const bannerKey = this.bannerManager?.currentBanner || "forest";

            let pool = CARDS.filter(c => c.rarity === rarity && (!type || c.type === type));

            // Banner-limited logic:
            // If a card is listed as limited on ANY banner, it is NOT allowed outside that banner.
            const limitedAll = Object.values(BANNER_LIMITED).flat();
            const limitedSet = new Set(limitedAll);

            pool = pool.filter(card => {
                if (!limitedSet.has(card.id)) return true; // not limited anywhere -> always allowed
                const allowedHere = (BANNER_LIMITED[bannerKey] || []).includes(card.id);
                return allowedHere; // limited -> only allowed on its banner
            });

            return pool;
        };


        for (let i = 0; i < count; i++) {
            const isFA = Math.random() < FULL_ART_CHANCE;

            let card = null;

            if (isFA) {
            // Full Art is 100% Tauhan
            const bannerKey = this.bannerManager?.currentBanner || "forest";
            const rateUpId = BANNER_RATE_UP[bannerKey];

            // Pool of allowed FA cards (respects banner-limited filtering too, if you ever limit FA)
            const faPool = getCards("FA", "TAO");

            if (faPool.length) {
                const rateUpCard = faPool.find(c => c.id === rateUpId);

                // If the banner has a valid rate-up card in the pool, apply boosted odds
                if (rateUpCard && Math.random() * 100 < RATE_UP_FA_PERCENT) {
                card = rateUpCard;
                } else {
                // Pick from all OTHER FA cards (so rate-up doesn't double-dip in the "others" pick)
                const others = faPool.filter(c => c.id !== rateUpId);
                card = others.length ? pickRandom(others) : rateUpCard; // fallback safety
                }
            }
        } else {
        // Standard Card (SC): try rolled type, then fall back to ANY SC that is allowed on this banner
        const type = rollCardTypeSC();

        let pool = getCards("SC", type);
        if (!pool.length) {
            // Fallback: any SC (still respects banner-limited filtering inside getCards)
            pool = getCards("SC");
        }

        if (pool.length) card = pickRandom(pool);
        }

            if (card) {
                results.push({
                    ...card,
                    name: card.name || card.id  // fallback so it never becomes undefined
                });
            }
        }

        if (results.length !== count) {
            console.warn("Draw produced fewer cards than expected.", {
            expected: count,
            got: results.length,
            banner: this.bannerManager?.currentBanner,
        });
        }


        return results;
    }  

    updateContinueButton() {
        const btn = document.getElementById("closeResultBtn");
        const cards = Array.from(document.querySelectorAll("#resultCards .result-card"));
        const allFlipped = cards.length > 0 && cards.every(c => c.classList.contains("is-flipped"));

        btn.textContent = allFlipped ? "CONTINUE" : "SKIP";
    }

    revealAllCards() {
        const cards = Array.from(document.querySelectorAll("#resultCards .result-card"));

        cards.forEach(cardEl => {
            if (cardEl.dataset.upgradePending !== "1") return;

            cardEl.dataset.upgradePending = "0";

            const upgradedImage = cardEl.dataset.upgradedImage;
            const upgradedTitle = cardEl.dataset.upgradedTitle;

            cardEl.dataset.cardImage = upgradedImage;
            cardEl.dataset.cardTitle = upgradedTitle;

            const frontImg = cardEl.querySelector(".card-front img");
            if (frontImg) frontImg.src = upgradedImage;

            cardEl.classList.remove("SC");
            cardEl.classList.add("FA");

            cardEl.classList.remove("is-upgrading");
        });

        // 2) Flip them all
        cards.forEach(c => c.classList.add("is-flipped"));

        this.updateContinueButton();
    }


    showResults(results) {
        const resultOverlay = document.getElementById('resultOverlay');
        const resultCards = document.getElementById('resultCards');
        
        resultCards.innerHTML = results
            .map(
                (item, index) => `
                    <div
                        class="result-card ${item.rarity}"
                        style="animation-delay: ${index * 0.1}s"
                        data-card-image="${item.image}"
                        data-card-title="${item.id}"
                        data-rarity="${item.rarity}"
                        aria-label="Card ${index + 1}"
                    >
                    <div class="card-glow"></div>

                    <div class="flip-card">
                        <div class="flip-inner">
                            <div class="card-face card-back">
                                <img src="Cards/card_back.jpg" alt="Card back" draggable="false" />
                            </div>

                                <div class="card-face card-front">
                                    <img src="${item.image}" alt="${item.id}" draggable="false" />
                                </div>
                            </div>
                        </div>
                    </div>
                `
                )
            .join("");

        this.updateContinueButton();

        // CHANGE UPGRADE RATES HERE, 0.01 = 1%
        this.maybeUpgradeCards(results, 0.01);

        // Click-to-zoom event delegation
        resultCards.onclick = (e) => {
            const cardEl = e.target.closest(".result-card");
            if (!cardEl) return;

            // 1) First click: flip
            if (!cardEl.classList.contains("is-flipped")) {
                if (cardEl.dataset.upgradePending === "1") {
                    this.procAndFlip(cardEl);
                } else {
                    cardEl.classList.add("is-flipped");
                    this.updateContinueButton();
                }
            return;
            }


            // 2) Already flipped: open zoom viewer
            const img = document.getElementById("cardViewerImage");
            img.src = cardEl.dataset.cardImage;
            ModalController.openModal("cardViewerModal");
        };

        resultOverlay.classList.add('active');
        resultOverlay.setAttribute('aria-hidden', 'false');
        this.saveToHistory(results);
    }

    saveToHistory(results) {
        const history = JSON.parse(localStorage.getItem(CONFIG.HISTORYKEY) || "[]");

        history.unshift({
            timestamp: Date.now(),
            banner: this.bannerManager.currentBanner,
            // keep the pull order + show names
            items: results.map(c => ({ id: c.id, name: c.name }))
        });

        if (history.length > CONFIG.MAXHISTORYENTRIES) history.pop();

        localStorage.setItem(CONFIG.HISTORYKEY, JSON.stringify(history));
    }


    getOwnedCardIdSet() {
        const history = JSON.parse(localStorage.getItem(CONFIG.HISTORYKEY)) || [];
        const owned = new Set();

        for (const entry of history) {
            const items = Array.isArray(entry?.items) ? entry.items : [];
            for (const item of items) {
            // Supports BOTH formats:
            // - old format: "SCTG-001-TAGPUAN1"
            // - new format: { id: "SCTG-001-TAGPUAN1", name: "Tagpuan 1" }
            const id = (item && typeof item === "object") ? item.id : item;
            if (typeof id === "string" && id.trim()) owned.add(id);
            }
        }
        return owned;
    }


    typeLabelFromCard(card) {
    // SC types use card.type; FA Tauhan uses "FATAO" for the filter dropdown
        if (card.rarity === "FA") return "FATAO";
        return card.type || "UNK";
    }

    getInventoryFilters() {
    return {
            sort: localStorage.getItem("inv_sort") || "az",
            type: localStorage.getItem("inv_type") || "all",
            show: localStorage.getItem("inv_show") || "owned",
            search: (document.getElementById("inventorySearchInput")?.value || "").trim().toLowerCase(),
        };
    }


    loadHistory() {
        const history = JSON.parse(localStorage.getItem(CONFIG.HISTORYKEY) || "[]");
        const historyList = document.getElementById('historyList');
        
        if (history.length === 0) {
                historyList.innerHTML = '<p class="no-history">No draws yet. Start collecting!</p>';
                return;
            }
        
        historyList.innerHTML = history.map(entry => {
            const date = new Date(entry.timestamp).toLocaleString();
            const bannerName = BANNERS[entry.banner]?.name || 'Unknown Banner';
            const itemNames = (entry.items || [])
            .map((item) => {
                const id = item && item.id ? String(item.id) : String(item);
                const name = item && item.name ? item.name : id;

                const isFA = id.startsWith("FA") || id.startsWith("FATAO");
                return isFA ? `<span class="fa-text">${name}</span>` : name;
            })
            .join(", ");

                // NEW: detect Full Art in this history entry
                const hasFA = (entry.items || []).some((item) => {
                    const id = item && item.id ? String(item.id) : String(item);
                    return id.startsWith("FA") || id.startsWith("FATAO");
                });

            return `
                <div class="rate-item">
                    <div>
                        <div style="font-size:0.8rem;opacity:0.7;margin-bottom:0.25rem">${date}</div>
                        <div style="font-size:0.75rem;opacity:0.6;margin-bottom:0.5rem">${bannerName}</div>
                        <div>${itemNames}</div>
                    </div>
                </div>
            `;

                })
        .join("");
        }

    loadInventory() {
        const grid = document.getElementById('inventoryGrid');
        if (!grid) return;

        const ownedSet = this.getOwnedCardIdSet();
        const f = this.getInventoryFilters();
        let list = Array.isArray(CARDS) ? [...CARDS] : [];

        // Search
        if (f.search) {
            list = list.filter(c => (c.name || '').toLowerCase().includes(f.search));
        }

        // Type filter
        if (f.type !== 'all') {
            list = list.filter(c => this.typeLabelFromCard(c) === f.type);
        }

        // Sort (name A-Z / Z-A)
        list.sort((a, b) => {
            const an = (a.name || '').toLowerCase();
            const bn = (b.name || '').toLowerCase();
            // Check for 'za' OR 'z-a'
            const isZA = (f.sort === 'za' || f.sort === 'z-a');
            return isZA ? bn.localeCompare(an) : an.localeCompare(bn);
        });



        // Owned first (stable secondary sort)
        list.sort((a, b) => {
            const ao = ownedSet.has(a.id) ? 1 : 0;
            const bo = ownedSet.has(b.id) ? 1 : 0;
            return bo - ao; // owned (1) before unowned (0)
        });

        if (list.length === 0) {
            grid.innerHTML = `<p class="no-history">No cards found.</p>`;
            return;
        }

        grid.innerHTML = list.map(card => {
            const owned = ownedSet.has(card.id);
            const cls = owned ? 'inv-card owned' : 'inv-card unowned';
            const imgSrc = owned ? card.image : 'Cards/cardback.jpg';
            const title = owned ? (card.name || '???') : '???';

            return `
            <div class="${cls}"
                data-card-id="${card.id}"
                data-card-owned="${owned ? 1 : 0}"
                data-card-image="${card.image}"
                aria-label="${title}">
                <img src="${imgSrc}" alt="${title}" draggable="false">
            <div class="inv-name">${title}</div>
            </div>
            `;
        }).join('');  

        const ownedList = list.filter(c => ownedSet.has(c.id));
        const unownedList = list.filter(c => !ownedSet.has(c.id));

        // Helper to render a single card
        const renderCard = (c, isOwned) => {
            const cls = isOwned ? "inv-card owned" : "inv-card unowned";
            const displayName = isOwned ? c.name : "???";

            return `
            <div class="${cls}"
                    data-card-id="${c.id}"
                    data-card-owned="${isOwned ? 1 : 0}"
                    data-card-image="${c.image}"
                    aria-label="${displayName}">
                <img src="${c.image}" alt="${displayName}" draggable="false">
                <div class="inv-name"><span class="inv-name-text">${displayName}</span></div>
            </div>
            `;
        };


        let html = '';
        // Normalize to lowercase to handle "All", "all", "Owned", "owned"
        const show = (f.show || 'all').toLowerCase();

        // LOGIC: If user picked 'owned' or 'all'
        if (show === 'all' || show === 'owned') {
            if (ownedList.length > 0) {
                if (show === 'all') html += `<h3 class="inv-section-title">OWNED (${ownedList.length})</h3>`;
                html += `<div class="inv-section-grid">`;
                html += ownedList.map(c => renderCard(c, true)).join('');
                html += `</div>`;
            } else if (show === 'owned') {
                html += `<p class="no-history">No owned cards found.</p>`;
            }
        }

        // LOGIC: If user picked 'unowned' or 'all'
        if (show === 'all' || show === 'unowned') {
            if (unownedList.length > 0) {
                if (show === 'all') html += `<h3 class="inv-section-title">UNOWNED (${unownedList.length})</h3>`;
                html += `<div class="inv-section-grid">`;
                html += unownedList.map(c => renderCard(c, false)).join('');
                html += `</div>`;
            } else if (show === 'unowned') {
                html += `<p class="no-history">You have collected all cards!</p>`;
            }
        }

        if (list.length === 0) {
            html = `<p class="no-history">No cards match your filters.</p>`;
        }

        grid.innerHTML = html;

        requestAnimationFrame(() => {
            grid.querySelectorAll(".inv-name").forEach(el => {
                const text = el.querySelector(".inv-name-text");
                if (!text) return;

                const original = text.textContent;

                // reset to single copy first
                text.textContent = original;

                const diff = text.scrollWidth - el.clientWidth;
                if (diff < 2) return;

                text.textContent = original + "\u00A0\u00A0\u00A0" + original;

                const singleWidth = text.scrollWidth / 2;
                text.style.setProperty("--marquee-distance", `${singleWidth}px`);

                const pxPerSecond = 20; // CHANGE THIS IF YOU WANT TO MAKE THE MOVEMENT SLOWER
                const duration = singleWidth / pxPerSecond;

                text.style.animation = `invMarquee ${duration}s linear infinite`;
            });
        });


        // Click to view only if owned (unowned is locked)
        grid.onclick = (e) => {
            const el = e.target.closest(".inv-card");
            if (!el) return;
            if (el.dataset.cardOwned !== "1") return;

            const img = document.getElementById("cardViewerImage");
            img.src = el.dataset.cardImage;
            ModalController.openModal("cardViewerModal");
        };
    }

    maybeUpgradeCards(results, upgradeChance = 0.01) {
        const scIndexes = results
            .map((r, i) => ({ r, i }))
            .filter(x => x.r.rarity === "SC")
            .map(x => x.i);

        if (scIndexes.length === 0) return;

        const bannerKey = this.bannerManager?.currentBanner || "forest";
        const rateUpId = BANNER_RATE_UP[bannerKey];

        const faPool = CARDS.filter(c => c.rarity === "FA" && c.type === "TAO");
        if (faPool.length === 0) return;

        const rateUpCard = faPool.find(c => c.id === rateUpId);
        const others = faPool.filter(c => c.id !== rateUpId);
        if (faPool.length === 0) return;

        for (const targetIndex of scIndexes) {
            if (Math.random() >= upgradeChance) continue;

            let newCard;
            if (rateUpCard && Math.random() * 100 < RATE_UP_FA_PERCENT) {
                newCard = rateUpCard;
            } else {
                newCard = others.length ? others[Math.floor(Math.random() * others.length)] : rateUpCard;
            }

            // Update result data (history should store FA)
            results[targetIndex] = { ...newCard };

            // Mark the DOM card as "will proc" but DO NOT flip it yet
            const cardEl = document.querySelectorAll("#resultCards .result-card")[targetIndex];
            if (!cardEl) continue;

            cardEl.dataset.upgradePending = "1";
            cardEl.dataset.upgradedImage = newCard.image;
            cardEl.dataset.upgradedTitle = newCard.id;
        }
    }

    async procAndFlip(cardEl) {
        if (!cardEl || cardEl.classList.contains("is-flipped")) return;
        if (cardEl.dataset.upgradePending !== "1") return;

        cardEl.dataset.upgradePending = "0"; // prevent double proc
        cardEl.classList.add("is-upgrading");

        // swap the front image so when it flips, it reveals the upgraded art
        const upgradedImage = cardEl.dataset.upgradedImage;
        const upgradedTitle = cardEl.dataset.upgradedTitle;

        cardEl.dataset.cardImage = upgradedImage;
        cardEl.dataset.cardTitle = upgradedTitle;

        const frontImg = cardEl.querySelector(".card-front img");
        if (frontImg) frontImg.src = upgradedImage;

        // fast proc duration
        await new Promise(r => setTimeout(r, 220));

        // now lock it in as FA (gold forever after proc)
        cardEl.classList.remove("SC");
        cardEl.classList.add("FA");

        cardEl.classList.remove("is-upgrading");
        cardEl.classList.add("is-flipped");
        this.updateContinueButton();
    }

}

// ==================== MODAL CONTROLLER ====================
class ModalController {
    static openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }

    static closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    static initCloseButtons() {
        document.querySelectorAll('.modal-close').forEach(button => {
            button.addEventListener('click', (e) => {
                const modalId = e.target.getAttribute('data-modal');
                this.closeModal(modalId);
            });
        });

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    modal.setAttribute('aria-hidden', 'true');
                }
            });
        });
    }
}

function renderRatesPanel() {
    const body = document.getElementById("ratesBody");
    if (!body) return;

    const cards = Array.isArray(window.CARDS) ? window.CARDS : [];
    const bannerKey = bannerManager?.currentBanner || "forest";

    // If a card is limited on ANY banner, it can ONLY appear on its allowed banner(s).
    const limitedAll = Object.values(BANNER_LIMITED).flat();
    const limitedSet = new Set(limitedAll);

    const allowedOnBanner = (card) => {
        if (!card?.id) return false;
        if (!limitedSet.has(card.id)) return true; // not limited anywhere
        return (BANNER_LIMITED[bannerKey] || []).includes(card.id);
    };

    const pool = cards.filter(allowedOnBanner);

    const faPool = pool.filter(c => c.rarity === "FA"); // all FA allowed on this banner
    const scPool = pool.filter(c => c.rarity === "SC");

    const scByType = {
        TAO: scPool.filter(c => c.type === "TAO"),
        PT:  scPool.filter(c => c.type === "PT"),
        TG:  scPool.filter(c => c.type === "TG"),
        KG:  scPool.filter(c => c.type === "KG"),
    };

    // Overall rates
    const faRate = (Number(FULL_ART_CHANCE) || 0) * 100;
    const scRate = 100 - faRate;

    // Your SC type proc rates (percent of total pulls)
    const SC_TYPE_PROC = {
        TAO: 49.5,
        PT: 16.5,
        TG: 16.5,
        KG: 16.5,
    };

    // Helper formatting
    const pct = (n, d = 2) => `${Number(n || 0).toFixed(d)}%`;
    const escapeHtml = (s) =>
        String(s ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    // --- Full Art per-card rates (with rate-up) ---
    const rateUpId = BANNER_RATE_UP[bannerKey];
    const rateUpCard = faPool.find(c => c.id === rateUpId) || null;

    const rateUpShare = rateUpCard ? (Number(RATE_UP_FA_PERCENT) || 0) / 100 : 0; // of FA pool
    const others = rateUpCard ? faPool.filter(c => c.id !== rateUpId) : faPool.slice();

    const faRateUpEach = rateUpCard ? faRate * rateUpShare : 0; // absolute %
    const faOthersTotal = rateUpCard ? faRate * (1 - rateUpShare) : faRate;
    const faOtherEach = others.length ? (faOthersTotal / others.length) : 0;

    const renderCardRow = (name, cardPct) =>
        `<li>${escapeHtml(name)} <span class="card-rate">${pct(cardPct, 3)}</span></li>`;

    const faListHtml = (() => {
        if (!faPool.length) return `<li>(No Full Art cards)</li>`;

        // Put rate-up on top (if present), then others
        let html = "";
        if (rateUpCard) html += renderCardRow(rateUpCard.name || rateUpCard.id, faRateUpEach);
        html += others.map(c => renderCardRow(c.name || c.id, faOtherEach)).join("");
        return html;
    })();

    // --- Standard per-card rates (split evenly inside allowed subtype) ---
    const scGroupHtml = (key, label) => {
        const list = scByType[key] || [];
        const groupProc = (SC_TYPE_PROC[key] || 0); // percent of total pulls
        const perCard = list.length ? (groupProc / list.length) : 0;

        return `
        <div class="rate-subgroup">
            <div class="rate-subheader">
            <div class="rate-subtitle">${escapeHtml(label)}</div>
            <div class="rate-subpercent">${pct(groupProc, 1)}</div>
            </div>
            <ul class="rate-sublist">
            ${list.length
                ? list.map(c => renderCardRow(c.name || c.id, perCard)).join("")
                : "<li>(None)</li>"
            }
            </ul>
        </div>
        `;
    };

    body.innerHTML = `
        <div class="rate-block fullart-block">
        <div class="rate-header">
            <div class="rate-title rarity fullart">★★★★★ Full Art</div>
            <div class="rate-percent">${pct(faRate, 2)}</div>
        </div>
        <ul class="rate-list">
            ${faListHtml}
        </ul>
        </div>

        <div class="rate-block standard-block">
        <div class="rate-header">
            <div class="rate-title rarity standard">★★★ Standard Card</div>
            <div class="rate-percent">${pct(scRate, 2)}</div>
        </div>

        ${scGroupHtml("TAO", "Silver Tauhan Cards")}
        ${scGroupHtml("PT",  "Silver Pangunahing Tauhan")}
        ${scGroupHtml("TG",  "Silver Tagpuan")}
        ${scGroupHtml("KG",  "Silver Kagamitan")}
        </div>
    `;
}




// ==================== INITIALIZE ====================
const bannerManager = new BannerManager();
const energySystem = new EnergySystem();
const gachaSystem = new GachaSystem(bannerManager);


// ==================== EVENT LISTENERS ====================
document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'home_page.html';
});

document.getElementById('inventoryBtn').addEventListener('click', () => {
    // Sync settings UI from saved values
    const s = localStorage.getItem("inv_sort") || "az";
    const t = localStorage.getItem("inv_type") || "all";
    const sh = localStorage.getItem("inv_show") || "owned";
    document.querySelectorAll('input[name="invSort"]').forEach(r => {
        r.checked = (r.value === s);
    });
    document.querySelectorAll('input[name="invType"]').forEach(r => (r.checked = (r.value === t)));
    document.querySelectorAll('input[name="invShow"]').forEach(r => (r.checked = (r.value === sh)));


    gachaSystem.loadInventory();
    ModalController.openModal("inventoryModal");
});

// Inventory: open Settings panel
const invSettingsBtn = document.getElementById("inventorySettingsBtn");
    if (invSettingsBtn) {
        invSettingsBtn.addEventListener("click", () => {
        ModalController.openModal("inventorySettingsModal");
        });
    }

// Inventory: live search
const invSearch = document.getElementById("inventorySearchInput");
if (invSearch) {
    invSearch.addEventListener("input", () => gachaSystem.loadInventory());
}

const invSort = document.getElementById("invSort");
const invType = document.getElementById("invType");
const invShow = document.getElementById("invShow");

function saveInvSetting(key, value) {
    localStorage.setItem(key, value);
    gachaSystem.loadInventory();
}

const invSortGroup = document.getElementById('invSortGroup');
if (invSortGroup) {
    invSortGroup.addEventListener('change', (e) => {
        if (e.target && e.target.name === 'invSort') {
        saveInvSetting('inv_sort', e.target.value);
        }
    });
}

const invTypeGroup = document.getElementById("invTypeGroup");
if (invTypeGroup) {
  invTypeGroup.addEventListener("change", (e) => {
    if (e.target && e.target.name === "invType") {
      saveInvSetting("inv_type", e.target.value);
    }
  });
}

const invShowGroup = document.getElementById("invShowGroup");
if (invShowGroup) {
  invShowGroup.addEventListener("change", (e) => {
    if (e.target && e.target.name === "invShow") {
      saveInvSetting("inv_show", e.target.value);
    }
  });
}

const detalyeBtn = document.getElementById("detalyeBtn");
if (detalyeBtn) {
  detalyeBtn.addEventListener("click", () => {
    renderRatesPanel();
    ModalController.openModal("detalyeModal");
  });
}



const historyaBtn = document.getElementById("historyaBtn");
if (historyaBtn) {
  historyaBtn.addEventListener("click", () => {
    gachaSystem.loadHistory();
    ModalController.openModal("historyaModal");
  });
}


document.getElementById("draw1Btn").addEventListener("click", () => {
    if (!energySystem.consumeEnergy(CONFIG.DRAW1COST)) return;
    energySystem.updateUI();
    const results = gachaSystem.draw(1);
    gachaSystem.showResults(results);
});

document.getElementById("draw5Btn").addEventListener("click", () => {
    if (!energySystem.consumeEnergy(CONFIG.DRAW5COST)) return;
    energySystem.updateUI();
    const results = gachaSystem.draw(5);
    gachaSystem.showResults(results);
});


document.getElementById("closeResultBtn").addEventListener("click", () => {
    const btn = document.getElementById("closeResultBtn");

    // If not all flipped yet, SKIP = reveal all
    if (btn.textContent.trim().toUpperCase() === "SKIP") {
        gachaSystem.revealAllCards();
        return;
    }

    // CONTINUE = close overlay
    const resultOverlay = document.getElementById("resultOverlay");
    resultOverlay.classList.remove("active");
    resultOverlay.setAttribute("aria-hidden", true);
});


ModalController.initCloseButtons();

// Prevent click on the image from bubbling and closing the modal
const cardViewerImage = document.getElementById("cardViewerImage");
if (cardViewerImage) {
    cardViewerImage.addEventListener("click", (e) => e.stopPropagation());
}


function openCheatInput() {
    const input = prompt("Cheat code:");
    if (!input) return;

    const parts = input.trim().toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts[1]; // optional

    const cheats = {
        // existing
        cheatresetimer: () => energySystem.resetTimerCheat(),
        cheatresettimer: () => energySystem.resetTimerCheat(),

        // NEW 1: reset whole account
        cheatresetaccount: () => {
        const ok = confirm("Reset account? This deletes all saved progress.");
        if (!ok) return;

        localStorage.removeItem(CONFIG.STORAGEKEY);
        localStorage.removeItem(CONFIG.HISTORYKEY);
        localStorage.removeItem(CONFIG.BANNERKEY);
        localStorage.removeItem(CONFIG.TIMEROVERRIDEKEY);
        location.reload();
        },

        // NEW 2: change timer permanently (expects 6 digits HHMMSS)
        cheatchangetimertime: () => {
        if (!arg || !/^\d{6}$/.test(arg)) {
            alert("nothing happened...");
            return;
        }

        const hh = Number(arg.slice(0, 2));
        const mm = Number(arg.slice(2, 4));
        const ss = Number(arg.slice(4, 6));
        const totalSeconds = (hh * 3600) + (mm * 60) + ss;

        if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
            alert("nothing happened...");
            return;
        }

        const ms = totalSeconds * 1000;
        CONFIG.PULLWINDOWMS = ms; // affects the running timer logic
        localStorage.setItem(CONFIG.TIMEROVERRIDEKEY, String(ms)); // makes it permanent

        // Optional: restart the cycle so the new window applies cleanly
        energySystem.resetTimerCheat();
        },

        cheatgiveuser: () => {
        const cardId = (arg || "").trim();
        if (!cardId) {
            alert("Usage: cheatgiveuser [card ID]");
            return;
        }

        const cards = Array.isArray(window.CARDS) ? window.CARDS : [];
        const card = cards.find(c => String(c.id).toLowerCase() === cardId.toLowerCase());

        if (!card) {
            alert("Card not found: " + cardId);
            return;
        }

        // Add it to history as a 1-item entry so it becomes "owned"
        const raw = localStorage.getItem(CONFIG.HISTORYKEY);
        const history = raw ? JSON.parse(raw) : [];

        history.unshift({
            timestamp: Date.now(),
            banner: bannerManager?.currentBanner || "forest",
            items: [{ id: card.id, name: card.name }]
        });

        if (history.length > CONFIG.MAXHISTORYENTRIES) history.pop();
        localStorage.setItem(CONFIG.HISTORYKEY, JSON.stringify(history));

        // Refresh inventory UI if it's open
        gachaSystem.loadInventory();

        alert(`Granted: ${card.name} (${card.id})`);
        },
    };

    if (!cheats[cmd]) {
        alert("nothing happened...");
        return;
    }

    alert(`${cmd} inputted`);
    cheats[cmd]();
}

const cheatBtn = document.getElementById("cheatBtn");
if (cheatBtn) {
    cheatBtn.addEventListener("click", openCheatInput);
    cheatBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCheatInput();
        }
    });
}



// ==================== RIPPLE EFFECT ====================
// Add ripple effect to all action buttons
document.querySelectorAll('.action-button, .nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ==================== CONSOLE INFO ====================
console.log('🎮 Gacha system initialized');
console.log('📍 Current banner:', bannerManager.currentBanner);
console.log('⚡ Available energy:', energySystem.getAvailableEnergy(), 'hours');



