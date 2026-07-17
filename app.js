// D V Fitness - Application JavaScript

// Equipment Data
const equipmentData = [
  // Strength Equipment
  {
    id: 'smith-machine',
    name: 'Smith Machine',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
    description: 'A weight machine used for weight training, consisting of a barbell that is fixed within steel rails allowing only vertical or near-vertical movement.',
    muscle: 'Quadriceps, Chest, Shoulders, Glutes',
    difficulty: 'Intermediate'
  },
  {
    id: 'power-rack',
    name: 'Power Rack',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    description: 'Also known as a power cage, it is a key piece of weight training equipment that functions as a mechanical safety device for free weight barbell exercises.',
    muscle: 'Full Body, Quads, Hamstrings, Back',
    difficulty: 'Advanced'
  },
  {
    id: 'bench-press',
    name: 'Bench Press',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400',
    description: 'A classic upper body strength training exercise that consists of pressing a weight upwards while lying on a flat bench.',
    muscle: 'Pectorals (Chest), Triceps, Anterior Deltoids',
    difficulty: 'Beginner'
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1578762560072-46cf12e02209?auto=format&fit=crop&q=80&w=400',
    description: 'A machine weight training exercise in which the individual pushes a weight or resistance away from them using their legs.',
    muscle: 'Quadriceps, Glutes, Hamstrings, Calves',
    difficulty: 'Beginner'
  },
  {
    id: 'cable-crossover',
    name: 'Cable Crossover',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=400',
    description: 'A versatile cable machine that allows you to perform flying motions to build chest definition and inner pectorals.',
    muscle: 'Pectoralis Major, Pectoralis Minor, Deltoids',
    difficulty: 'Intermediate'
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=400',
    description: 'A compound exercise designed to target the back muscles, performed on a machine with adjustable resistance.',
    muscle: 'Latissimus Dorsi (Back), Biceps, Shoulders',
    difficulty: 'Beginner'
  },
  {
    id: 'shoulder-press',
    name: 'Shoulder Press Machine',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400',
    description: 'Designed to target the deltoid muscles of the shoulders in a controlled, guided movement that minimizes injury risk.',
    muscle: 'Deltoids, Triceps, Trapezius',
    difficulty: 'Beginner'
  },
  {
    id: 'chest-press',
    name: 'Chest Press Machine',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    description: 'A guided machine exercise simulating the flat bench press, excellent for building chest strength safely.',
    muscle: 'Pectorals, Triceps, Anterior Deltoids',
    difficulty: 'Beginner'
  },
  {
    id: 'pec-deck',
    name: 'Pec Deck Machine',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=400',
    description: 'Designed to isolate the pectoral muscles, providing a deep stretch and contraction for building a defined chest.',
    muscle: 'Chest (Pectoralis Major), Anterior Deltoids',
    difficulty: 'Beginner'
  },
  {
    id: 'hack-squat',
    name: 'Hack Squat Machine',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
    description: 'A guided squat machine that targets the lower body, emphasizing the quadriceps due to the angle of execution.',
    muscle: 'Quadriceps, Glutes, Hamstrings',
    difficulty: 'Intermediate'
  },
  {
    id: 'leg-curl',
    name: 'Leg Curl Machine',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400',
    description: 'An isolation machine that targets the back of the leg (hamstrings) in a lying or seated position.',
    muscle: 'Hamstrings, Gastrocnemius (Calves)',
    difficulty: 'Beginner'
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension Machine',
    category: 'strength',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=400',
    description: 'A seated machine that isolates the quadriceps muscles by lifting a padded bar using knee extension.',
    muscle: 'Quadriceps',
    difficulty: 'Beginner'
  },

  // Free Weights
  {
    id: 'dumbbells',
    name: 'Premium Dumbbells',
    category: 'weights',
    image: './assets/images/about-gym.jpg',
    description: 'High-quality rubber-coated hexagonal dumbbells ranging from 2.5kg to 50kg, perfect for unilateral and compound strength exercises.',
    muscle: 'Full Body, Arms, Shoulders, Chest',
    difficulty: 'Beginner'
  },
  {
    id: 'barbells',
    name: 'Olympic Barbells',
    category: 'weights',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    description: 'Standard 20kg Olympic bars with high tensile strength, ideal for powerlifting, Olympic lifts, and general bodybuilding.',
    muscle: 'Full Body, Back, Legs, Chest',
    difficulty: 'Intermediate'
  },
  {
    id: 'olympic-plates',
    name: 'Olympic Plates',
    category: 'weights',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400',
    description: 'Heavy-duty rubberized bumper plates designed to withstand drops during Olympic lifting and heavy power deadlifts.',
    muscle: 'Full Body',
    difficulty: 'Beginner'
  },
  {
    id: 'ez-curl-bar',
    name: 'EZ Curl Bar',
    category: 'weights',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=400',
    description: 'An angled barbell designed to reduce joint strain in the wrists and forearms during curls and tricep extensions.',
    muscle: 'Biceps, Triceps, Forearms',
    difficulty: 'Beginner'
  },
  {
    id: 'kettlebells',
    name: 'Cast Iron Kettlebells',
    category: 'weights',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=400',
    description: 'Traditional cast-iron weights ranging from 4kg to 32kg, ideal for explosive functional movements and endurance training.',
    muscle: 'Hamstrings, Glutes, Core, Shoulders',
    difficulty: 'Intermediate'
  },

  // Cardio Equipment
  {
    id: 'treadmills',
    name: 'Commercial Treadmills',
    category: 'cardio',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
    description: 'Premium commercial treadmills equipped with high-speed settings, electronic incline, and heart rate monitoring.',
    muscle: 'Cardiovascular System, Legs, Calves',
    difficulty: 'Beginner'
  },
  {
    id: 'exercise-bikes',
    name: 'Spinning Exercise Bikes',
    category: 'cardio',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
    description: 'Stationary spinning bikes with adjustable resistance, designed for intense cardiovascular workouts and leg conditioning.',
    muscle: 'Cardiovascular System, Quads, Hamstrings',
    difficulty: 'Beginner'
  },
  {
    id: 'cross-trainer',
    name: 'Elliptical Cross Trainer',
    category: 'cardio',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
    description: 'Low-impact cardiovascular machine simulating walking, running, and climbing stairs, reducing pressure on joints.',
    muscle: 'Cardiovascular System, Full Body, Quads',
    difficulty: 'Beginner'
  },
  {
    id: 'rowing-machine',
    name: 'Air Rowing Machine',
    category: 'cardio',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    description: 'Simulates rowing a boat to build full body muscular endurance and high-intensity aerobic capacity.',
    muscle: 'Back, Legs, Core, Cardiorespiratory',
    difficulty: 'Intermediate'
  },
  {
    id: 'stair-climber',
    name: 'Commercial Stair Climber',
    category: 'cardio',
    image: 'https://images.unsplash.com/photo-1578762560072-46cf12e02209?auto=format&fit=crop&q=80&w=400',
    description: 'A revolving staircase simulator providing a highly intensive lower-body workout and rapid caloric burn.',
    muscle: 'Glutes, Quadriceps, Calves, Cardiovascular',
    difficulty: 'Intermediate'
  },

  // Functional Training
  {
    id: 'battle-rope',
    name: 'Heavy Duty Battle Ropes',
    category: 'functional',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    description: 'Thick nylon ropes anchored at one end, used for high-intensity full-body slams, waves, and core strengthening.',
    muscle: 'Shoulders, Arms, Core, Cardiovascular',
    difficulty: 'Intermediate'
  },
  {
    id: 'medicine-balls',
    name: 'Slam & Medicine Balls',
    category: 'functional',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=400',
    description: 'Weighted balls used for explosive power workouts, rotational slams, wall throws, and core stabilization drills.',
    muscle: 'Core, Shoulders, Chest, Hips',
    difficulty: 'Beginner'
  },
  {
    id: 'trx',
    name: 'TRX Suspension Trainer',
    category: 'functional',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    description: 'A portable bodyweight training tool that utilizes suspension straps to develop strength, balance, and core stability.',
    muscle: 'Core, Full Body, Stabilizers',
    difficulty: 'Intermediate'
  },
  {
    id: 'resistance-bands',
    name: 'Heavy Resistance Bands',
    category: 'functional',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=400',
    description: 'Elastomer bands of varying resistance, ideal for muscle activation, mobility work, and stretching routines.',
    muscle: 'Full Body, Glutes, Shoulders',
    difficulty: 'Beginner'
  },
  {
    id: 'plyo-box',
    name: 'Wooden Plyometric Box',
    category: 'functional',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    description: 'A sturdy wooden box featuring 3 height levels (20", 24", 30") used for explosive box jumps and step-ups.',
    muscle: 'Quadriceps, Glutes, Calves, Explosive Power',
    difficulty: 'Intermediate'
  }
];

// Review Data
const reviewsData = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    comment: 'Excellent trainers and clean equipment! The premium black theme gives a luxury vibe. Highly recommend D V Fitness.',
    role: 'Member since 2024',
    img: './assets/images/trainer-1.jpg'
  },
  {
    name: 'Priya Singh',
    rating: 5,
    comment: 'The best gym in the city. The spacious workout area and standard package offer amazing value. The trainers actually pay attention.',
    role: 'Powerlifter',
    img: './assets/images/trainer-2.jpg'
  },
  {
    name: 'Arjun Kumar',
    rating: 5,
    comment: 'Affordable membership and premium facilities. The strength equipment section has every machine you need for a killer leg day.',
    role: 'Corporate Professional',
    img: './assets/images/trainer-1.jpg'
  },
  {
    name: 'Sneha Patel',
    rating: 5,
    comment: 'Highly recommended for beginners and professionals. The functional training area and personalized diet charts changed my routine entirely.',
    role: 'Yoga & CrossFit enthusiast',
    img: './assets/images/trainer-2.jpg'
  }
];

// FAQs Data
const faqsData = [
  {
    question: 'What are the gym operating timings?',
    answer: 'We are open Monday to Saturday from 5:00 AM to 10:00 PM. On Sundays, our timing is 6:00 AM to 2:00 PM.'
  },
  {
    question: 'Does the gym offer personal training support?',
    answer: 'Yes! Our Premium Plan includes dedicated Personal Trainer support, custom workout programming, and periodic diet/nutrition consultations. You can also add personal trainers to standard plans.'
  },
  {
    question: 'Is parking space available at the gym?',
    answer: 'Yes, we provide secure and spacious complimentary car and two-wheeler parking for all active members.'
  },
  {
    question: 'Can I freeze my membership plan if I am traveling?',
    answer: 'Yes! Members with Standard and Premium packages can freeze their memberships for up to 15 days in a 6-month cycle. Terms and conditions apply.'
  },
  {
    question: 'What facilities are included in lockers?',
    answer: 'We offer secure day-use lockers, changing rooms, and shower facilities. Permanent locker options are available for premium subscribers.'
  }
];

// Document Event Listeners
window.addEventListener('DOMContentLoaded', () => {
  // Preloader
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
    }, 400);
  }

  // Set Theme on Load
  initTheme();

  // Sticky Navbar background toggler
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Scroll Spy active navigation item
    scrollSpy();

    // Back to top show/hide
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }

    // Trigger statistics counter
    triggerCountersOnScroll();
  });

  // Mobile menu hamburger toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on clicking nav link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Initialize all interactive DOM content
  renderEquipment(equipmentData);
  setupEquipmentFilters();
  renderReviews();
  setupReviewsSlider();
  renderFAQs();
  setupFAQAccordion();
  setupBMICalculator();
  setupRegistrationForm();
  setupContactForm();
  setupNewsletterForm();
  setupChatbot();
  setupPostureChecker();
  setupLightbox();

  // Theme Toggle Button
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // Scroll to Top action
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Theme Setup
function initTheme() {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const themeIcons = document.querySelectorAll('.theme-icon');
  const themeTexts = document.querySelectorAll('.theme-text');

  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcons.forEach(icon => {
      icon.className = 'fas fa-moon theme-icon';
    });
    themeTexts.forEach(txt => txt.textContent = 'Dark Mode');
  } else {
    document.body.classList.remove('light-theme');
    themeIcons.forEach(icon => {
      icon.className = 'fas fa-sun theme-icon';
    });
    themeTexts.forEach(txt => txt.textContent = 'Light Mode');
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  initTheme();
}

// Scroll Spy: active navbar item highlighting
function scrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 120; // offset for nav

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('text-stroke', 'font-semibold', 'underline', 'underline-offset-4');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('font-semibold', 'underline', 'underline-offset-8');
        }
      });
    }
  });
}

// Statistics count-up animations
let countersAnimated = false;

function triggerCountersOnScroll() {
  const statsSection = document.getElementById('statistics');
  if (!statsSection || countersAnimated) return;

  const rect = statsSection.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Check if section is visible in window view
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight + 150);

  if (isVisible) {
    countersAnimated = true;
    const counters = document.querySelectorAll('.counter-val');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 1500; // 1.5 seconds
      const increment = target / (duration / 16); // ~60fps
      let current = 0;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target + (counter.getAttribute('data-suffix') || '');
        }
      };
      updateCount();
    });
  }
}

// Equipment showcase rendering
function renderEquipment(data) {
  const container = document.getElementById('equipment-grid');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fas fa-search text-4xl text-textSecondary mb-4"></i>
        <p class="text-lg font-montserrat text-textSecondary">No equipment matches your search filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = data.map(eq => `
    <div class="gym-card rounded-xl overflow-hidden flex flex-col h-full" data-aos="fade-up">
      <div class="eq-card-img-wrapper h-48 w-full bg-bgSecondary flex justify-center items-center relative">
        <img src="${eq.image}" alt="${eq.name}" class="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" onerror="this.src='https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400';">
        <span class="absolute top-3 right-3 text-xs bg-bgPrimary/75 text-textPrimary font-montserrat font-bold py-1 px-3.5 rounded-full border border-borderPrimary capitalize">${eq.category}</span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold font-montserrat tracking-tight mb-2 text-textPrimary">${eq.name}</h3>
          <p class="text-textSecondary text-sm line-clamp-3 mb-4 font-light">${eq.description}</p>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xs font-bold text-textSecondary uppercase tracking-widest">Muscles:</span>
            <span class="text-xs text-textSecondary capitalize truncate">${eq.muscle}</span>
          </div>
          <button onclick="openEquipmentModal('${eq.id}')" class="btn-premium w-full text-center font-montserrat font-bold text-xs py-3 px-4 uppercase bg-bgSecondary border border-borderPrimary text-textPrimary rounded hover:text-accentInverse transition duration-300">
            Learn More <i class="fas fa-chevron-right ml-1.5 text-[10px]"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Setup Filters & Search
function setupEquipmentFilters() {
  const buttons = document.querySelectorAll('.eq-filter-btn');
  const searchInput = document.getElementById('eq-search');

  if (!searchInput) return;

  let activeCategory = 'all';
  let searchQuery = '';

  const filterAndSearch = () => {
    let filtered = equipmentData;

    // Filter by Category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(eq => eq.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(eq => 
        eq.name.toLowerCase().includes(q) || 
        eq.muscle.toLowerCase().includes(q) || 
        eq.description.toLowerCase().includes(q)
      );
    }

    renderEquipment(filtered);
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('bg-white', 'text-black', 'border-white'));
      buttons.forEach(b => b.classList.add('bg-transparent', 'text-white', 'border-neutral-800'));
      
      btn.classList.remove('bg-transparent', 'text-white', 'border-neutral-800');
      btn.classList.add('bg-white', 'text-black', 'border-white');

      activeCategory = btn.getAttribute('data-filter');
      filterAndSearch();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterAndSearch();
  });
}

// Open Equipment Detail Modal
window.openEquipmentModal = function(id) {
  const eq = equipmentData.find(item => item.id === id);
  if (!eq) return;

  const modal = document.getElementById('equipment-modal');
  if (!modal) return;

  document.getElementById('modal-title').textContent = eq.name;
  document.getElementById('modal-img').src = eq.image;
  document.getElementById('modal-desc').textContent = eq.description;
  document.getElementById('modal-muscles').textContent = eq.muscle;
  document.getElementById('modal-difficulty').textContent = eq.difficulty;

  // Custom visual instructions based on target difficulty
  let tips = '';
  if (eq.difficulty === 'Beginner') {
    tips = 'Focus on controlled form and tempo. Perform 3 sets of 12-15 repetitions. Rest 60 seconds between sets.';
  } else if (eq.difficulty === 'Intermediate') {
    tips = 'Slow concentric contraction, squeeze at the peak, and perform 4 sets of 8-12 repetitions. Rest 90 seconds.';
  } else {
    tips = 'Focus on maximum progressive overload or explosive movements. 4-5 sets of 5-8 heavy reps. Spotter recommended.';
  }
  document.getElementById('modal-tips').textContent = tips;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

// Close Equipment Modal
window.closeEquipmentModal = function() {
  const modal = document.getElementById('equipment-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
};

// Render Reviews Section
function renderReviews() {
  const container = document.getElementById('reviews-slider');
  if (!container) return;

  container.innerHTML = reviewsData.map(rev => `
    <div class="testimonial-slide px-4 py-8">
      <div class="gym-card rounded-xl p-8 relative flex flex-col justify-between h-full min-h-[300px]">
        <div class="absolute -top-4 left-6 text-6xl text-accent/20 font-bebas select-none">“</div>
        <div class="relative z-10">
          <div class="flex gap-1.5 text-yellow-500 mb-4">
            ${Array(rev.rating).fill('<i class="fas fa-star text-sm"></i>').join('')}
          </div>
          <p class="text-textSecondary italic mb-6 font-light leading-relaxed">"${rev.comment}"</p>
        </div>
        <div class="flex items-center gap-4 border-t border-borderPrimary pt-4 mt-auto">
          <img src="${rev.img}" alt="${rev.name}" class="w-12 h-12 rounded-full object-cover border border-borderPrimary">
          <div>
            <h4 class="font-bold text-textPrimary text-base font-montserrat">${rev.name}</h4>
            <span class="text-xs text-textMuted font-montserrat">${rev.role}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Testimonials Slider Controls
function setupReviewsSlider() {
  const wrapper = document.getElementById('reviews-slider');
  const nextBtn = document.getElementById('slider-next');
  const prevBtn = document.getElementById('slider-prev');
  const dotsContainer = document.getElementById('slider-dots');

  if (!wrapper || !nextBtn || !prevBtn || !dotsContainer) return;

  let index = 0;
  let itemsPerScreen = getItemsPerScreen();
  let maxIndex = Math.max(0, reviewsData.length - itemsPerScreen);

  // Resize listener to adjust slider indexes
  window.addEventListener('resize', () => {
    itemsPerScreen = getItemsPerScreen();
    maxIndex = Math.max(0, reviewsData.length - itemsPerScreen);
    if (index > maxIndex) index = maxIndex;
    updateSliderPosition();
    renderDots();
  });

  function getItemsPerScreen() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function renderDots() {
    dotsContainer.innerHTML = '';
    const dotCount = maxIndex + 1;
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('button');
      dot.className = i === index ? 'active' : '';
      dot.setAttribute('aria-label', `Slide dot ${i+1}`);
      dot.addEventListener('click', () => {
        index = i;
        updateSliderPosition();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSliderPosition() {
    const percentage = -(index * (100 / itemsPerScreen));
    wrapper.style.transform = `translateX(${percentage}%)`;
    
    // Update dots active class
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === index) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
      index++;
    } else {
      index = 0; // Wrap around
    }
    updateSliderPosition();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = maxIndex; // Wrap around
    }
    updateSliderPosition();
  });

  // Autoplay Testimonial Slider
  let autoplay = setInterval(() => {
    nextBtn.click();
  }, 5000);

  // Pause autoplay on mouse enter
  const sliderContainer = document.querySelector('.reviews-container-box');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
    sliderContainer.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => {
        nextBtn.click();
      }, 5000);
    });
  }

  renderDots();
}

// Render FAQs
function renderFAQs() {
  const container = document.getElementById('faqs-container');
  if (!container) return;

  container.innerHTML = faqsData.map((faq, idx) => `
    <div class="faq-item border-b border-borderPrimary py-5" data-aos="fade-up">
      <div class="faq-header flex justify-between items-center text-left py-2 font-montserrat font-bold text-textPrimary hover:text-accent">
        <span class="text-base sm:text-lg">${faq.question}</span>
        <i class="fas fa-chevron-down faq-icon ml-4 text-xs transition-transform duration-300"></i>
      </div>
      <div class="faq-body mt-2">
        <p class="text-textSecondary font-light leading-relaxed text-sm sm:text-base">${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

// FAQs Accodion toggling
function setupFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQs
      items.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// BMI Calculator
function setupBMICalculator() {
  const calcBtn = document.getElementById('bmi-calc-btn');
  if (!calcBtn) return;

  calcBtn.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('bmi-height').value);
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const resultBox = document.getElementById('bmi-result-box');
    const resultVal = document.getElementById('bmi-value');
    const resultLabel = document.getElementById('bmi-status');
    const resultDesc = document.getElementById('bmi-advice');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
      alert('Please enter valid numeric values for height and weight.');
      return;
    }

    // Metric calculation: height in cm, weight in kg
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const score = bmi.toFixed(1);

    let status = '';
    let advice = '';
    let colorClass = '';

    if (bmi < 18.5) {
      status = 'Underweight';
      advice = 'Consider a caloric surplus diet paired with targeted strength training at D V Fitness to build healthy muscle mass safely.';
      colorClass = 'text-blue-500';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = 'Normal Weight';
      advice = 'Excellent! You are in a healthy weight range. Continue with a balanced strength and cardio plan to maintain your conditioning.';
      colorClass = 'text-green-500';
    } else if (bmi >= 25 && bmi < 29.9) {
      status = 'Overweight';
      advice = 'Pair active cardio with consistent strength training. Check out our Standard/Premium plans for personalized training guidance.';
      colorClass = 'text-yellow-500';
    } else {
      status = 'Obese';
      advice = 'Consult an expert. We recommend our Premium Plan for dedicated trainer support, customizable cardio drills, and nutritionist guidance.';
      colorClass = 'text-red-500';
    }

    resultVal.textContent = score;
    resultLabel.textContent = status;
    resultLabel.className = `text-lg font-bold font-montserrat ${colorClass}`;
    resultDesc.textContent = advice;

    resultBox.classList.remove('hidden');
    resultBox.classList.add('flex', 'animate-float');
  });
}

// Registration Form Validation & Storage
function setupRegistrationForm() {
  const form = document.getElementById('register-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, select, textarea');

  inputs.forEach(input => {
    // Realtime error clearing
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Standard field validations
    inputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        input.classList.add('invalid');
        isValid = false;
      }

      // Specific formats
      if (input.type === 'email' && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          input.classList.add('invalid');
          isValid = false;
        }
      }

      if (input.id === 'reg-phone' && input.value.trim()) {
        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile numbers standard
        if (!phoneRegex.test(input.value.trim())) {
          input.classList.add('invalid');
          isValid = false;
        }
      }

      if (input.id === 'reg-age' && input.value.trim()) {
        const ageVal = parseInt(input.value);
        if (isNaN(ageVal) || ageVal < 14 || ageVal > 100) {
          input.classList.add('invalid');
          isValid = false;
        }
      }
    });

    if (isValid) {
      // Gather Data
      const registrationData = {
        name: document.getElementById('reg-name').value.trim(),
        age: document.getElementById('reg-age').value.trim(),
        gender: document.getElementById('reg-gender').value,
        phone: document.getElementById('reg-phone').value.trim(),
        email: document.getElementById('reg-email').value.trim(),
        address: document.getElementById('reg-address').value.trim(),
        goal: document.getElementById('reg-goal').value,
        package: document.getElementById('reg-package').value,
        time: document.getElementById('reg-time').value,
        medical: document.getElementById('reg-medical').value.trim() || 'None',
        emergency: document.getElementById('reg-emergency').value.trim(),
        date: new Date().toISOString()
      };

      // Save to localStorage simulated database
      const existing = JSON.parse(localStorage.getItem('dv_fitness_registrations')) || [];
      existing.push(registrationData);
      localStorage.setItem('dv_fitness_registrations', JSON.stringify(existing));

      // Show Success Modal
      showSuccessModal(registrationData.name, registrationData.package);

      // Reset form
      form.reset();
    } else {
      // Scroll to the first invalid field
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
    }
  });
}

function showSuccessModal(name, plan) {
  const successModal = document.getElementById('success-modal');
  if (!successModal) return;

  document.getElementById('success-user-name').textContent = name;
  document.getElementById('success-user-plan').textContent = plan.replace('-plan', ' Plan').toUpperCase();

  successModal.classList.remove('hidden');
  successModal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

window.closeSuccessModal = function() {
  const successModal = document.getElementById('success-modal');
  if (!successModal) return;
  successModal.classList.add('hidden');
  successModal.classList.remove('flex');
  document.body.style.overflow = 'auto';
};

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('con-name').value.trim();
    const email = document.getElementById('con-email').value.trim();
    const phone = document.getElementById('con-phone').value.trim();
    const msg = document.getElementById('con-message').value.trim();

    if (!name || !email || !msg) {
      alert('Please fill out the name, email, and message fields.');
      return;
    }

    // Save mock contact message
    const contactMsgs = JSON.parse(localStorage.getItem('dv_fitness_contacts')) || [];
    contactMsgs.push({ name, email, phone, msg, date: new Date().toISOString() });
    localStorage.setItem('dv_fitness_contacts', JSON.stringify(contactMsgs));

    alert(`Thank you, ${name}! Your inquiry has been logged. A representative will contact you shortly.`);
    form.reset();
  });
}

// Newsletter subscription
function setupNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    if (!email) return;

    const newsletters = JSON.parse(localStorage.getItem('dv_fitness_newsletter')) || [];
    if (!newsletters.includes(email)) {
      newsletters.push(email);
      localStorage.setItem('dv_fitness_newsletter', JSON.stringify(newsletters));
    }

    alert('Subscription successful! Welcome to the D V Fitness newsletter squad.');
    form.reset();
  });
}

// Chatbot functionality
// Upgraded Chatbot into Virtual Gym Buddy
function setupChatbot() {
  const trigger = document.getElementById('chat-trigger');
  const windowEl = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const sendBtn = document.getElementById('chat-send');
  const inputEl = document.getElementById('chat-input');
  const msgsContainer = document.getElementById('chat-messages');

  if (!trigger || !windowEl || !closeBtn || !sendBtn || !inputEl || !msgsContainer) return;

  // Toggle chat
  trigger.addEventListener('click', () => {
    windowEl.classList.toggle('active');
  });

  closeBtn.addEventListener('click', () => {
    windowEl.classList.remove('active');
  });

  const appendMessage = (sender, text) => {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = text;
    msgsContainer.appendChild(msg);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
  };

  const handleSend = () => {
    const text = inputEl.value.trim();
    if (!text) return;

    appendMessage('user', text);
    inputEl.value = '';

    // Mock bot response logic
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let reply = "I didn't quite catch that, buddy! Ask me about: 'motivation', 'timings', 'packages', or 'nutrition'. Or try water logging above!";

      if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
        reply = 'Hey gym buddy! Ready to crush your goals today? Ask me any training or nutrition questions, or click "Motivate Me 🔥"!';
      } else if (lowerText.includes('timing') || lowerText.includes('hours') || lowerText.includes('open')) {
        reply = 'Our working hours are Mon-Sat: 5:00 AM to 10:00 PM and Sun: 6:00 AM to 2:00 PM.';
      } else if (lowerText.includes('package') || lowerText.includes('price') || lowerText.includes('plan') || lowerText.includes('cost')) {
        reply = 'We have 3 plans: Basic (₹999/mo), Standard (₹1,799/mo), and Premium (₹2,999/mo). Scroll to Membership Packages to join!';
      } else if (lowerText.includes('address') || lowerText.includes('location') || lowerText.includes('where')) {
        reply = 'D V Fitness is located in the Prime Fitness Avenue, Sector 4, City Center, Landmark: Near Apex Mall.';
      } else if (lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('whatsapp')) {
        reply = 'You can reach us at Phone/WhatsApp: +91 98765 43210 or Email: support@dvfitness.com.';
      } else if (lowerText.includes('trainer') || lowerText.includes('coach')) {
        reply = 'We have certified elite trainers. Trainer support is included in Standard and Premium plans.';
      } else if (lowerText.includes('motivate') || lowerText.includes('motivation') || lowerText.includes('quote')) {
        reply = getRandomMotivation();
      } else if (lowerText.includes('water') || lowerText.includes('hydrate') || lowerText.includes('drink')) {
        reply = "Keep your hydration on point! Use the tracker at the top of our chat window to log your water intake easily.";
      }

      appendMessage('bot', reply);
    }, 800);
  };

  sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // Expose helper to trigger quick replies in chat
  window.triggerQuickReply = function(option) {
    inputEl.value = option;
    handleSend();
  };

  // Hydration Tracker Initialization
  initWaterTracker();
  initWaterReminder(appendMessage);
}

// Lightbox Gallery Setup
function setupLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightbox || !lightboxImg || !lightboxClose) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').getAttribute('src');
      lightboxImg.setAttribute('src', imgSrc);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// Trigger standard link select package inside registration dropdown
window.selectPackageRegister = function(planId) {
  const packageSelect = document.getElementById('reg-package');
  if (packageSelect) {
    packageSelect.value = planId;
  }
  // Scroll to register section
  const regSection = document.getElementById('register');
  if (regSection) {
    regSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Motivational Quotes Database
const motivationQuotes = [
  "Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "The only bad workout is the one that didn't happen.",
  "Don't limit your challenges. Challenge your limits.",
  "Action is the foundational key to all success. Get up, get moving!",
  "Definition of a gym buddy: Someone who pushes you to lift heavier than you think you can. Let's go!",
  "Make sweat your best accessory. Let's crush today's program!"
];

function getRandomMotivation() {
  const rand = Math.floor(Math.random() * motivationQuotes.length);
  return motivationQuotes[rand];
}

// Hydration Tracker Logic
function initWaterTracker() {
  const currentLog = parseInt(localStorage.getItem('dv_fitness_water_log')) || 0;
  updateWaterUI(currentLog);
}

function updateWaterUI(log) {
  const fill = document.getElementById('water-progress-fill');
  const text = document.getElementById('water-progress-text');
  if (fill && text) {
    const percentage = Math.min(100, (log / 3000) * 100);
    fill.style.width = `${percentage}%`;
    text.textContent = `${log} / 3000 ml`;
  }
}

window.logWater = function(amount) {
  let currentLog = parseInt(localStorage.getItem('dv_fitness_water_log')) || 0;
  currentLog += amount;
  localStorage.setItem('dv_fitness_water_log', currentLog);
  updateWaterUI(currentLog);

  // Send bot confirmation in chat
  const msgsContainer = document.getElementById('chat-messages');
  if (msgsContainer) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.innerHTML = `💧 Water Logged! Added <strong>+${amount}ml</strong>. Total today: <strong>${currentLog} / 3000 ml</strong>. Great job, keep hydrating!`;
    msgsContainer.appendChild(msg);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
  }
};

window.resetWater = function() {
  localStorage.setItem('dv_fitness_water_log', 0);
  updateWaterUI(0);

  const msgsContainer = document.getElementById('chat-messages');
  if (msgsContainer) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.textContent = "Hydration progress has been reset. Let's start fresh and hit that 3000ml goal today! 🏋️";
    msgsContainer.appendChild(msg);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
  }
};

// Water Reminder Timer (pops up reminder message in-app)
function initWaterReminder(appendMsgFn) {
  let lastLogTime = Date.now();

  // Reset timer on logging water
  const originalLog = window.logWater;
  window.logWater = function(amount) {
    originalLog(amount);
    lastLogTime = Date.now();
  };

  // Periodically prompt if inactive
  setInterval(() => {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow && chatWindow.classList.contains('active')) {
      const inactiveMs = Date.now() - lastLogTime;
      if (inactiveMs > 75000) { // 75 seconds of hydration inactivity
        appendMsgFn('bot', "⏰ Reminder: Time for a quick sip of water! Stay hydrated to maintain muscle fullness and strength. 💧");
        lastLogTime = Date.now(); // reset timer
      }
    }
  }, 15000); // check every 15s
}

// AI Posture Checker Implementation
const postureDiagnostics = {
  squat: {
    score: 94,
    badge: "Excellent Depth",
    badgeColor: "bg-green-500/10 text-green-500 border-green-500/20",
    summary: "Awesome squat depth. Hips descended below the knee crease perfectly. Your spinal alignment remains upright.",
    metrics: [
      { label: "Hip Hinge Depth", value: "85° (Pass)", status: "text-green-500" },
      { label: "Knee Tracking", value: "Aligned (Pass)", status: "text-green-500" },
      { label: "Spine Angle", value: "Neutral (Pass)", status: "text-green-500" }
    ],
    advice: "Outstanding form. Ensure you keep your heels firmly anchored to maximize quad drive on the ascension phase.",
    joints: (w, h) => [
      { name: "head", x: 0.50 * w, y: 0.20 * h },
      { name: "shoulder", x: 0.48 * w, y: 0.35 * h },
      { name: "hip", x: 0.42 * w, y: 0.58 * h },
      { name: "knee", x: 0.62 * w, y: 0.68 * h },
      { name: "ankle", x: 0.52 * w, y: 0.88 * h }
    ],
    connections: [["head", "shoulder"], ["shoulder", "hip"], ["hip", "knee"], ["knee", "ankle"]]
  },
  pushup: {
    score: 72,
    badge: "Form Warning",
    badgeColor: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    summary: "Hip sag detected. Your core and glutes are relaxed, causing pressure on your lumbar spine.",
    metrics: [
      { label: "Spine Alignment", value: "Sagging (Check)", status: "text-yellow-500" },
      { label: "Elbow Flare Angle", value: "45° (Pass)", status: "text-green-500" },
      { label: "Chest Depth", value: "Full Range (Pass)", status: "text-green-500" }
    ],
    advice: "Brace your core tight. Imagine doing a plank; keep your head, shoulders, hips, and heels in one straight line.",
    joints: (w, h) => [
      { name: "head", x: 0.25 * w, y: 0.45 * h },
      { name: "shoulder", x: 0.36 * w, y: 0.48 * h },
      { name: "hip", x: 0.54 * w, y: 0.62 * h }, // sagged hip
      { name: "knee", x: 0.70 * w, y: 0.69 * h },
      { name: "ankle", x: 0.85 * w, y: 0.76 * h },
      { name: "elbow", x: 0.38 * w, y: 0.35 * h },
      { name: "wrist", x: 0.37 * w, y: 0.54 * h }
    ],
    connections: [["head", "shoulder"], ["shoulder", "hip"], ["hip", "knee"], ["knee", "ankle"], ["shoulder", "elbow"], ["elbow", "wrist"]]
  },
  deadlift: {
    score: 58,
    badge: "Risk Detected",
    badgeColor: "bg-red-500/10 text-red-500 border-red-500/20",
    summary: "Dangerous spine rounding! Back is not neutral. Immediately drop weight to avoid injury.",
    metrics: [
      { label: "Lumbar Curve", value: "Rounded (Danger)", status: "text-red-500" },
      { label: "Bar Path", value: "Aligned (Pass)", status: "text-green-500" },
      { label: "Hip Hinge Timing", value: "Early Extension (Check)", status: "text-yellow-500" }
    ],
    advice: "Pull your shoulder blades together and down. Engage your lats before initiating the lift off the floor.",
    joints: (w, h) => [
      { name: "head", x: 0.35 * w, y: 0.32 * h },
      { name: "shoulder", x: 0.42 * w, y: 0.41 * h },
      { name: "hip", x: 0.56 * w, y: 0.53 * h }, // rounded position
      { name: "knee", x: 0.52 * w, y: 0.70 * h },
      { name: "ankle", x: 0.49 * w, y: 0.86 * h },
      { name: "wrist", x: 0.44 * w, y: 0.66 * h }
    ],
    connections: [["head", "shoulder"], ["shoulder", "hip"], ["hip", "knee"], ["knee", "ankle"], ["shoulder", "wrist"]]
  },
  "bicep-curl": {
    score: 96,
    badge: "Flawless ROM",
    badgeColor: "bg-green-500/10 text-green-500 border-green-500/20",
    summary: "Excellent mechanical isolation. Elbows are completely pinned to your sides, ensuring maximum bicep load.",
    metrics: [
      { label: "Elbow Position", value: "Stationary (Pass)", status: "text-green-500" },
      { label: "Hip Rocking", value: "None (Pass)", status: "text-green-500" },
      { label: "Wrist Stability", value: "Neutral (Pass)", status: "text-green-500" }
    ],
    advice: "Perfect execution. Control the eccentric lowering phase for 3 full seconds to trigger extra hypertrophic growth.",
    joints: (w, h) => [
      { name: "head", x: 0.50 * w, y: 0.16 * h },
      { name: "shoulder", x: 0.50 * w, y: 0.30 * h },
      { name: "elbow", x: 0.48 * w, y: 0.51 * h },
      { name: "wrist", x: 0.39 * w, y: 0.40 * h }, // curled wrist position
      { name: "hip", x: 0.51 * w, y: 0.55 * h },
      { name: "ankle", x: 0.51 * w, y: 0.88 * h }
    ],
    connections: [["head", "shoulder"], ["shoulder", "elbow"], ["elbow", "wrist"], ["shoulder", "hip"], ["hip", "ankle"]]
  }
};

function setupPostureChecker() {
  const dropzone = document.getElementById('posture-dropzone');
  const fileInput = document.getElementById('posture-file-input');
  const previewWrapper = document.getElementById('posture-preview-wrapper');
  const imgPreview = document.getElementById('posture-img-preview');
  const videoPreview = document.getElementById('posture-video-preview');
  const scanBtn = document.getElementById('posture-scan-btn');
  const laser = document.getElementById('scanner-laser');
  const canvas = document.getElementById('posture-canvas');
  const resetBtn = document.getElementById('posture-reset-btn');
  const resetWrapper = document.getElementById('posture-reset-wrapper');

  const placeholder = document.getElementById('posture-results-placeholder');
  const resultsCard = document.getElementById('posture-results-card');

  if (!dropzone || !fileInput || !previewWrapper || !imgPreview || !videoPreview || !scanBtn || !laser || !canvas || !resetBtn || !placeholder || !resultsCard) return;

  // Click dropzone to open file selector
  dropzone.addEventListener('click', () => fileInput.click());

  // Drag and drop events
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dropzone-active');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dropzone-active');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      handlePostureFile(files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handlePostureFile(e.target.files[0]);
    }
  });

  function handlePostureFile(file) {
    const reader = new FileReader();
    
    // Check if video or image
    if (file.type.startsWith('video/')) {
      imgPreview.classList.add('hidden');
      videoPreview.classList.remove('hidden');
      
      const fileURL = URL.createObjectURL(file);
      videoPreview.src = fileURL;
      videoPreview.play();
    } else {
      videoPreview.classList.add('hidden');
      imgPreview.classList.remove('hidden');
      
      reader.onload = function(event) {
        imgPreview.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }

    // Hide dropzone, show preview
    dropzone.classList.add('hidden');
    previewWrapper.classList.remove('hidden');

    // Reset old canvas drawings
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hide diagnostics
    placeholder.classList.remove('hidden');
    resultsCard.classList.add('hidden');
    resetWrapper.classList.add('hidden');
  }

  // Scan trigger
  scanBtn.addEventListener('click', () => {
    laser.style.display = 'block';
    scanBtn.disabled = true;
    scanBtn.textContent = 'Scanning Posture...';

    // Simulated scan
    setTimeout(() => {
      laser.style.display = 'none';
      scanBtn.disabled = false;
      scanBtn.textContent = 'Analyze Posture';

      runFormAnalysis();
    }, 2200);
  });

  function runFormAnalysis() {
    const selectedEx = document.getElementById('posture-exercise').value;
    const diag = postureDiagnostics[selectedEx];
    if (!diag) return;

    // Show result card
    placeholder.classList.add('hidden');
    resultsCard.classList.remove('hidden');
    resetWrapper.classList.remove('hidden');

    // Update textual stats
    document.getElementById('posture-score').textContent = `${diag.score}%`;
    document.getElementById('posture-badge').textContent = diag.badge;
    document.getElementById('posture-badge').className = `${diag.badgeColor} text-[10px] font-bold py-1 px-3.5 rounded-full uppercase`;
    document.getElementById('posture-summary').textContent = diag.summary;
    document.getElementById('posture-advice-text').textContent = diag.advice;

    // Render joint metrics list
    const metricsList = document.getElementById('posture-metrics-list');
    metricsList.innerHTML = diag.metrics.map(met => `
      <div class="flex justify-between border-b border-borderPrimary pb-1.5">
        <span class="text-textSecondary">${met.label}</span>
        <span class="font-bold ${met.status}">${met.value}</span>
      </div>
    `).join('');

    // Draw Skeleton on Overlay Canvas
    drawSkeletonOverlay(diag);
  }

  function drawSkeletonOverlay(diag) {
    // Match canvas display resolution to internal pixels
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const h = canvas.height;

    const jointsList = diag.joints(w, h);
    const score = diag.score;

    // Setup lines glow
    ctx.shadowBlur = 10;
    ctx.shadowColor = score >= 80 ? "#22c55e" : (score >= 65 ? "#eab308" : "#ef4444");
    ctx.strokeStyle = score >= 80 ? "#22c55e" : (score >= 65 ? "#eab308" : "#ef4444");
    ctx.lineWidth = 4;
    ctx.lineCap = "round";

    // Draw joints connections
    diag.connections.forEach(([startName, endName]) => {
      const startJoint = jointsList.find(j => j.name === startName);
      const endJoint = jointsList.find(j => j.name === endName);
      
      if (startJoint && endJoint) {
        ctx.beginPath();
        ctx.moveTo(startJoint.x, startJoint.y);
        ctx.lineTo(endJoint.x, endJoint.y);
        ctx.stroke();
      }
    });

    // Draw joint nodes
    ctx.shadowBlur = 0; // reset glow for circles
    jointsList.forEach(joint => {
      ctx.beginPath();
      ctx.arc(joint.x, joint.y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }

  // Clear / Reset
  resetBtn.addEventListener('click', () => {
    // Reset file input
    fileInput.value = '';
    
    // Stop video if playing
    videoPreview.pause();
    videoPreview.src = '';

    // Show dropzone, hide preview
    dropzone.classList.remove('hidden');
    previewWrapper.classList.add('hidden');
    
    // Hide diagnostics
    placeholder.classList.remove('hidden');
    resultsCard.classList.add('hidden');
    resetWrapper.classList.add('hidden');
  });
}

